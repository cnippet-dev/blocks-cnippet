// lib/validations/auth.ts
import { z } from "zod";

export const signUpSchemaStep1 = z.object({
    username: z
        .string()
        .min(3, "Username must be at least 3 characters long")
        .max(20, "Username must be at most 20 characters long")
        .regex(
            /^[a-zA-Z0-9_]+$/,
            "Username can only contain letters, numbers, and underscores",
        ),
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Invalid email address"),
    acceptTerms: z.boolean().refine((val) => val === true, {
        message: "You must accept the terms and conditions",
    }),
});

export const signUpSchemaStep2 = z
    .object({
        password: z
            .string()
            .min(8, "Password must be at least 8 characters long"),
        confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"],
    });

export const loginSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(1, "Password is required"),
});

export const forgotPasswordSchema = z.object({
    email: z.string().email("Invalid email address"),
});

export const resetPasswordSchema = z
    .object({
        password: z
            .string()
            .min(8, "Password must be at least 8 characters long"),
        confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"],
    });

export const aboutYouSchema = z.object({
    username: z
        .string()
        .min(3, "Username must be at least 3 characters long")
        .max(20, "Username must be at most 20 characters long")
        .regex(
            /^[a-zA-Z0-9_]+$/,
            "Username can only contain letters, numbers, and underscores",
        ),
    acceptTerms: z.boolean().refine((val) => val === true, {
        message: "You must accept the terms and conditions",
    }),
});
