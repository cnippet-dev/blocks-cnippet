// lib/actions/auth.actions.ts
"use server";

import {
    signUpSchemaStep1,
    signUpSchemaStep2,
    loginSchema,
    aboutYouSchema,
    forgotPasswordSchema,
    resetPasswordSchema,
} from "@/lib/validations/auth";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { signIn, signOut } from "next-auth/react";
import { redirect } from "next/navigation";
import { sendVerificationEmail, sendPasswordResetEmail } from "@/lib/email";
import {
    generateOTP,
    storeOTP,
    verifyOTP,
    deleteOTP,
} from "@/lib/actions/otp.actions";
import { z } from "zod";

const prisma = new PrismaClient();

// --- Email + Password Sign-Up Flow ---

export async function signUpStep1(values: z.infer<typeof signUpSchemaStep1>) {
    const validatedFields = signUpSchemaStep1.safeParse(values);
    if (!validatedFields.success) {
        return { error: validatedFields.error.flatten().fieldErrors };
    }

    const { username, name, email, acceptTerms } = validatedFields.data;

    const existingUserByEmail = await prisma.user.findUnique({
        where: { email },
    });
    if (existingUserByEmail) {
        return { error: { email: ["Email already registered."] } };
    }

    const existingUserByUsername = await prisma.user.findUnique({
        where: { username },
    });
    if (existingUserByUsername) {
        return { error: { username: ["Username already taken."] } };
    }

    // Store data temporarily or in a session to pass to step 2
    // For simplicity, we'll store in a global state or a session in a real app,
    // for now, let's just indicate success.
    // In a real app, you might use a temporary token or session to link steps.
    return { success: true, message: "Step 1 complete. Proceed to password." };
}

export async function signUpStep2(
    email: string,
    values: z.infer<typeof signUpSchemaStep2>,
) {
    const validatedFields = signUpSchemaStep2.safeParse(values);
    if (!validatedFields.success) {
        return { error: validatedFields.error.flatten().fieldErrors };
    }

    const { password } = validatedFields.data;

    // Retrieve temporary data for username, name, email from step 1
    // (In a real app, you'd fetch from session or temp storage using `email` as key)
    // For this example, let's assume we have it or pass it.
    // const tempUser = await prisma.user.findUnique({ where: { email } }); // This is simplified, assumes user is temporarily stored
    // if (!tempUser) {
    //     return { error: { general: "Previous step data missing or expired." } };
    // }

    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        const newUser = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                termsAccepted: false,
                emailVerified: null,
            },
        });

        // Send email verification
        const otp = await generateOTP();
        await storeOTP(email, otp);
        await sendVerificationEmail(email, otp);

        return {
            success: true,
            message:
                "Account created! Please check your email for verification.",
        };
    } catch (error) {
        console.error("Error during sign up step 2:", error);
        return {
            error: { general: "Failed to create account. Please try again." },
        };
    }
}

export async function verifyEmail(email: string, otpCode: string) {
    try {
        const isValid = await verifyOTP(email, otpCode);
        if (!isValid) {
            return { error: "Invalid or expired verification code." };
        }

        await prisma.user.update({
            where: { email },
            data: { emailVerified: new Date() },
        });

        await deleteOTP(email); // Delete the OTP after successful verification

        return {
            success: true,
            message: "Email verified successfully! You can now sign in.",
        };
    } catch (error) {
        console.error("Error verifying email:", error);
        return { error: "Failed to verify email. Please try again." };
    }
}

// --- Email + Password Sign-In Flow ---

export async function signInEmailPassword(values: z.infer<typeof loginSchema>) {
    const validatedFields = loginSchema.safeParse(values);
    if (!validatedFields.success) {
        return { error: validatedFields.error.flatten().fieldErrors };
    }

    const { email, password } = validatedFields.data;

    try {
        await signIn("credentials", {
            email,
            password,
            redirect: false, // Prevent NextAuth.js from redirecting directly
        });

        return { success: true, message: "Signed in successfully." };
    } catch (error: any) {
        console.error("Sign-in error:", error);
        if (error.message.includes("CredentialsSignin")) {
            return {
                error: "Invalid credentials or email not verified. Please check your details or sign up.",
            };
        }
        return { error: "An unexpected error occurred during sign-in." };
    }
}

// --- OAuth Sign-In/Sign-Up ---

export async function signInOAuth(provider: "google" | "github") {
    await signIn(provider);
}

// --- /about_you Route for Missing Info (OAuth and potentially Email/Password) ---
export async function completeProfile(
    userId: string,
    values: z.infer<typeof aboutYouSchema>,
) {
    const validatedFields = aboutYouSchema.safeParse(values);
    if (!validatedFields.success) {
        return { error: validatedFields.error.flatten().fieldErrors };
    }

    const { username, acceptTerms } = validatedFields.data;

    try {
        // Check if username is already taken by another user
        const existingUserWithUsername = await prisma.user.findUnique({
            where: { username },
        });
        if (
            existingUserWithUsername &&
            existingUserWithUsername.id !== userId
        ) {
            return { error: { username: ["Username already taken."] } };
        }

        const updatedUser = await prisma.user.update({
            where: { id: userId },
            data: {
                username,
                termsAccepted: acceptTerms,
            },
        });

        // Manually update the session after profile completion
        // This will trigger the `jwt` and `session` callbacks in `auth.ts`
        await signIn("credentials", {
            redirect: false,
            email: updatedUser.email, // Use the user's email for session update
            password: "", // Password is not relevant for session update but required by credentials provider
            callbackUrl: "/", // Redirect to home after update
        });

        return { success: true, message: "Profile updated successfully." };
    } catch (error) {
        console.error("Error completing profile:", error);
        return {
            error: { general: "Failed to update profile. Please try again." },
        };
    }
}

// --- Forgot Password & Reset Password ---

export async function forgotPassword(
    values: z.infer<typeof forgotPasswordSchema>,
) {
    const validatedFields = forgotPasswordSchema.safeParse(values);
    if (!validatedFields.success) {
        return { error: validatedFields.error.flatten().fieldErrors };
    }

    const { email } = validatedFields.data;

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
        // For security, don't reveal if email exists or not
        return {
            success: true,
            message:
                "If an account with that email exists, a password reset link has been sent.",
        };
    }

    const otp = await generateOTP();
    await storeOTP(email, otp);
    await sendPasswordResetEmail(email, otp);

    return {
        success: true,
        message:
            "If an account with that email exists, a password reset code has been sent.",
    };
}

export async function resetPassword(
    email: string,
    otpCode: string,
    values: z.infer<typeof resetPasswordSchema>,
) {
    const validatedFields = resetPasswordSchema.safeParse(values);
    if (!validatedFields.success) {
        return { error: validatedFields.error.flatten().fieldErrors };
    }

    const { password } = validatedFields.data;

    try {
        const isValid = await verifyOTP(email, otpCode);
        if (!isValid) {
            return { error: { general: "Invalid or expired reset code." } };
        }

        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) {
            return { error: { general: "User not found." } };
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await prisma.user.update({
            where: { email },
            data: { password: hashedPassword },
        });

        await deleteOTP(email); // Delete the OTP after successful reset

        return {
            success: true,
            message:
                "Your password has been reset successfully. You can now sign in.",
        };
    } catch (error) {
        console.error("Error resetting password:", error);
        return {
            error: { general: "Failed to reset password. Please try again." },
        };
    }
}

// --- Sign Out ---
export async function signOutUser() {
    await signOut();
}
