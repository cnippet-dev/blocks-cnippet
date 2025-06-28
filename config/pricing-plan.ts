// lib/data/pricing-plans.ts
import { z } from "zod";
import { subscriptionPlanSchema } from "@/lib/validations/subscription";

// Define the type for a pricing plan based on your Zod schema
export type PricingPlan = z.infer<typeof subscriptionPlanSchema>;

export const PRICING_PLANS: PricingPlan[] = [
    {
        id: "basic-monthly",
        name: "Basic",
        price: 1, // In INR (e.g., 499 means 4.99 INR or as per your currency logic)
        features: ["5 Projects", "Basic Analytics", "Community Support"],
        duration: "Monthly",
        popular: false,
    },
    {
        id: "pro-monthly",
        name: "Pro",
        price: 999,
        features: [
            "Unlimited Projects",
            "Advanced Analytics",
            "Priority Support",
            "Custom Branding",
        ],
        duration: "Monthly",
        popular: true,
    },
    {
        id: "enterprise-annually",
        name: "Enterprise",
        price: 9999, // Annual price
        features: [
            "All Pro features",
            "Dedicated Account Manager",
            "24/7 Premium Support",
            "Custom Integrations",
        ],
        duration: "Annually",
        popular: false,
    },
];
