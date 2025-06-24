// lib/email.ts
"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL || "onboarding@resend.dev";

export async function sendVerificationEmail(to: string, otp: string) {
    try {
        await resend.emails.send({
            from: fromEmail,
            to: to,
            subject: "Verify your email for your account",
            html: `
        <h1>Verify your email</h1>
        <p>Your verification code is: <strong>${otp}</strong></p>
        <p>This code is valid for 10 minutes.</p>
        <p>If you did not request this, please ignore this email.</p>
      `,
        });
        console.log(`Verification email sent to ${to}`);
        return { success: true };
    } catch (error) {
        console.error("Error sending verification email:", error);
        return { error: "Failed to send verification email." };
    }
}

export async function sendPasswordResetEmail(to: string, otp: string) {
    try {
        await resend.emails.send({
            from: fromEmail,
            to: to,
            subject: "Password Reset Request",
            html: `
        <h1>Reset your password</h1>
        <p>Your password reset code is: <strong>${otp}</strong></p>
        <p>This code is valid for 10 minutes.</p>
        <p>If you did not request a password reset, please ignore this email.</p>
      `,
        });
        console.log(`Password reset email sent to ${to}`);
        return { success: true };
    } catch (error) {
        console.error("Error sending password reset email:", error);
        return { error: "Failed to send password reset email." };
    }
}
