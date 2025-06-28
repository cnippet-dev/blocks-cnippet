// lib/validations/subscription.ts
import { z } from "zod";

export const subscriptionPlanSchema = z.object({
    id: z.string(),
    name: z.string(),
    price: z.number(), // Price in original currency (e.g., INR)
    features: z.array(z.string()),
    duration: z.string(), // e.g., "Monthly", "Annually", "Lifetime"
    popular: z.boolean().optional(),
});

export const updateSubscriptionStatusSchema = z.object({
    userId: z.string(),
    planName: z.string(),
    planPrice: z.number(),
    status: z.string(),
    startDate: z.date().optional(),
    endDate: z.date().optional(),
    razorpayOrderId: z.string().optional(),
    razorpayPaymentId: z.string().optional(),
});

export const cancelSubscriptionSchema = z.object({
    subscriptionId: z.string().min(1, "Subscription ID is required."),
});
