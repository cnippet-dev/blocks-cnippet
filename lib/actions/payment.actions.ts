// lib/actions/payment.actions.ts
"use server";

import prisma from "@/lib/prisma";
import Razorpay from "razorpay";
import crypto from "crypto";
import { Resend } from "resend"; // Assuming Resend is used for emails
import { getUserSession } from "./auth.actions";

// --- Interfaces from previous working code ---
interface PaymentData {
    amount: number;
    plan: string; // The name of the plan (e.g., "PRO")
    userId: string;
}

interface PaymentResult {
    success?: boolean;
    orderId?: string;
    amount?: number; // Original amount in rupees/currency units
    currency?: string;
    paymentId?: string; // Internal DB payment record ID
    error?: string;
}

interface VerificationResult {
    success?: boolean;
    error?: string;
}
// --- End Interfaces from previous working code ---

const resend: Resend = new Resend(process.env.RESEND_API_KEY as string); // Initialize Resend

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID!,
    key_secret: process.env.RAZORPAY_SECRET_ID!, // Use RAZORPAY_SECRET_ID as in previous working code
});

/**
 * Creates a Razorpay order on the server and records a pending payment in the database.
 * This is based on your previously working createPayment.
 */
export async function createPayment(
    paymentData: PaymentData,
): Promise<PaymentResult> {
    try {
        const { amount, plan, userId } = paymentData;

        // Validate user exists (important for security and data integrity)
        // const user = await prisma.user.findUnique({
        //     where: { id: userId },
        // });

        // if (!user) {
        //     return { error: "User not found" };
        // }

        const amountInPaise = Math.round(amount * 100); // Razorpay expects amount in paisa
        const currency = "INR"; // Assuming INR as currency for Razorpay

        if (!amountInPaise || amountInPaise <= 0) {
            return { error: "Invalid payment amount" };
        }

        const options = {
            // Explicitly type for correctness
            amount: amountInPaise, // Amount in paisa, as a number
            currency: currency,
            receipt: `rcpt_${Date.now().toString().slice(-8)}_${userId.slice(-6)}`, // Unique receipt ID
            payment_capture: 1, // Auto capture payment on success
            notes: {
                description: `Subscription payment for ${plan} plan`.toString(), // Explicitly cast to string
                planName: plan.toString(), // Explicitly cast to string
                userId: userId.toString(), // Explicitly cast to string
                originalAmount: amount.toString(), // Store original amount as string in notes
            },
        };

        try {
            const order = await razorpay.orders.create(options);

            if (!order?.id) {
                console.error(
                    "[RAZORPAY_ORDER_CREATE] Order ID not returned by Razorpay.",
                );
                return {
                    error: "Failed to create payment order from Razorpay.",
                };
            }

            // Create payment record in your database with PENDING status
            const payment = await prisma.payment.create({
                data: {
                    userId: userId,
                    amount: amount, // Store original amount (e.g., in rupees)
                    currency: currency,
                    receiptId: options.receipt,
                    status: "PENDING", // Initial status
                    razorpayOrderId: order.id,
                    description: `Subscription payment for ${plan} plan`,
                },
            });

            const result: PaymentResult = {
                success: true,
                orderId: order.id,
                amount: amount, // Return original amount for client-side Razorpay checkout options
                currency: currency,
                paymentId: payment.id, // Return internal DB payment ID
            };

            return result;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            console.error(
                "[RAZORPAY_ORDER_CREATE] Error creating Razorpay order:",
                error,
            );
            const errorMessage =
                error.error?.description ||
                error.message ||
                "Failed to create payment order. Please try again.";
            return { error: errorMessage };
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        console.error("[PAYMENT_CREATE] General error:", error);
        return { error: "Something went wrong while initiating payment." };
    }
}

/**
 * Verifies a Razorpay payment signature and updates payment/subscription status in the database.
 * This is based on your previously working verifyPayment.
 */
export async function verifyPayment(
    razorpay_order_id: string,
    razorpay_payment_id: string,
    razorpay_signature: string,
    userId: string,
    planId: string, // This 'plan' parameter will be used to create the subscription if not retrieved from notes
): Promise<VerificationResult> {
    try {
        if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
            return { error: "Missing payment verification details" };
        }

        // Verify payment signature
        const body = razorpay_order_id + "|" + razorpay_payment_id;
        const expectedSignature = crypto
            .createHmac("sha256", process.env.RAZORPAY_SECRET_ID!) // Use RAZORPAY_SECRET_ID for signature verification
            .update(body.toString())
            .digest("hex");

        if (expectedSignature !== razorpay_signature) {
            console.error("[PAYMENT_VERIFuY] Invalid signature.");
            // Update payment to FAILED in DB if signature doesn't match
            await prisma.payment.updateMany({
                where: { razorpayOrderId: razorpay_order_id, userId: userId },
                data: {
                    status: "FAILED",
                    razorpayPaymentId: razorpay_payment_id,
                    description: "Invalid signature",
                },
            });
            return { error: "Invalid payment signature." };
        }

        // Find the payment record in your DB
        const payment = await prisma.payment.findUnique({
            where: { razorpayOrderId: razorpay_order_id, userId: userId }, // Add userId to where clause for security
        });

        if (!payment) {
            console.error("[PAYMENT_VERIFY] Payment record not found in DB.");
            return { error: "Payment record not found." };
        }

        // Fetch payment details from Razorpay to confirm capture status
        const razorpayPaymentDetails =
            await razorpay.payments.fetch(razorpay_payment_id);
        if (razorpayPaymentDetails.status !== "captured") {
            console.error(
                `[PAYMENT_VERIFY] Razorpay payment status not captured: ${razorpayPaymentDetails.status}`,
            );
            await prisma.payment.update({
                where: { id: payment.id },
                data: {
                    status: razorpayPaymentDetails.status.toUpperCase(),
                    razorpayPaymentId: razorpay_payment_id,
                    description: `Razorpay status: ${razorpayPaymentDetails.status}`,
                },
            });
            return {
                error: `Payment not captured by Razorpay. Current status: ${razorpayPaymentDetails.status}.`,
            };
        }

        // Update payment status to SUCCESS
        await prisma.payment.update({
            where: { id: payment.id }, // Use internal payment ID for update
            data: {
                status: "SUCCESS",
                razorpayPaymentId: razorpay_payment_id,
                method: razorpayPaymentDetails.method || "unknown",
            },
        });

        // Create subscription
        const startDate = new Date();
        const endDate = new Date();
        endDate.setFullYear(endDate.getFullYear() + 1); // Example: 1 year subscription (as in your old code)

        // Check for existing active subscription and expire it if necessary
        const existingActiveSubscription = await prisma.subscription.findFirst({
            where: { userId: userId, status: "ACTIVE" },
            orderBy: { createdAt: "desc" },
        });

        if (existingActiveSubscription) {
            console.warn(
                `User ${userId} already has an active subscription. Expiring old one.`,
            );
            await prisma.subscription.update({
                where: { id: existingActiveSubscription.id },
                data: {
                    status: "EXPIRED",
                    endDate: new Date(), // Set end date to now for immediate expiration
                },
            });
        }

        await prisma.subscription.create({
            data: {
                userId: userId,
                plan: planId, // Use the plan name passed from client
                status: "ACTIVE",
                startDate: startDate,
                endDate: endDate,
                paymentId: payment.id, // Link to the Payment record
                razorpayOrderId: razorpay_order_id,
                razorpayPaymentId: razorpay_payment_id,
            },
        });

        // Update user's pro status
        await prisma.user.update({
            where: { id: userId },
            data: { pro: true },
        });

        // Send confirmation email (optional, using Resend)
        const user = await prisma.user.findUnique({
            where: { id: userId },
        });

        if (user?.email) {
            await resend.emails.send({
                from: "subscription@yourapp.com", // Replace with your verified Resend domain
                to: user.email,
                subject: "Subscription Confirmation",
                html: `<p>Thank you for subscribing to the ${planId} plan! Your subscription is now active.</p>`,
            });
        }

        return { success: true };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        console.error("[PAYMENT_VERIFY] Error:", error);
        const errorMessage =
            error.message ||
            "Something went wrong during payment verification.";
        return { error: errorMessage };
    }
}

/**
 * Fetches all payments for the current authenticated user.
 */
export async function getUserPayments(): Promise<{
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    payments?: any[];
    error?: string;
}> {
    const session = await getUserSession();
    if (!session?.user?.id) {
        return { error: "Unauthorized. Please sign in to view payments." };
    }

    try {
        const payments = await prisma.payment.findMany({
            where: {
                userId: session.user.id,
                // Optionally filter by status, e.g., 'SUCCESS'
                // status: "SUCCESS"
            },
            orderBy: {
                createdAt: "desc", // Order by most recent payments first
            },
            include: {
                // Include related subscription if you need details from it
                subscription: true,
            },
        });
        return { payments: payments };
    } catch (error) {
        console.error("Error fetching user payments:", error);
        return { error: "Failed to fetch billing history. Please try again." };
    }
}
