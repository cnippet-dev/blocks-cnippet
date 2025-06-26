// lib/validations/profile.ts
import { z } from "zod";

export const updateGeneralInfoSchema = z.object({
    name: z.string().min(2, "Name is required").optional(),
    username: z
        .string()
        .min(3, "Username must be at least 3 characters long")
        .max(20, "Username must be at most 20 characters long")
        .regex(
            /^[a-zA-Z0-9_]+$/,
            "Username can only contain letters, numbers, and underscores",
        )
        .optional(),
    // Add other general profile fields here if needed
});

export const changePasswordSchema = z
    .object({
        currentPassword: z.string().min(1, "Current password is required."),
        newPassword: z
            .string()
            .min(8, "New password must be at least 8 characters long."),
        confirmNewPassword: z.string(),
    })
    .refine((data) => data.newPassword === data.confirmNewPassword, {
        message: "New passwords do not match.",
        path: ["confirmNewPassword"],
    });
