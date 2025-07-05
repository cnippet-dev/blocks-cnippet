"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Script from "next/script";
import { toast } from "sonner";
import dynamic from "next/dynamic";

import { PRICING_PLANS, PricingPlan } from "@/config/pricing-plan";
import { createPayment } from "@/lib/actions/payment.actions";

// Dynamic imports for components
const PricingToggle = dynamic(() => import("./_components/pricing-toggle"));
const PricingCard = dynamic(() => import("./_components/pricing-card"));
const PricingTable = dynamic(() => import("./_components/pricing-table"));

export default function PricingPage() {
    const { data: session, status } = useSession();
    const router = useRouter();
    const [loadingPaymentId, setLoadingPaymentId] = useState<string | null>(
        null,
    );
    const [isAnnual, setIsAnnual] = useState(false);

    const handleSubscribe = async (plan: PricingPlan) => {
        if (status === "unauthenticated") {
            toast.info("Please sign in to subscribe.");
            router.push("/sign-in");
            return;
        }

        if (!session?.user?.id) {
            toast.info("Please sign in to subscribe.");
            router.push("/sign-in");
            return;
        }

        setLoadingPaymentId(plan.id);

        try {
            // 1. Create Razorpay Order
            const orderResponse = await createPayment({
                amount: plan.price,
                plan: plan.name, // Pass the plan name
                userId: session?.user?.id,
            });

            if (orderResponse && "error" in orderResponse) {
                toast.error(orderResponse.error || "Failed to create order.");
                setLoadingPaymentId(null);
                return;
            }
            const { orderId, amount, currency } = orderResponse;

            // 2. Open Razorpay Checkout
            const options = {
                key: process.env.RAZORPAY_KEY_ID,
                amount: amount! * 100,
                currency: currency,
                name: "Your App Name", // Your application name
                description: `Subscription for ${plan.name} Plan`,
                order_id: orderId,
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                handler: async function (response: any) {
                    setLoadingPaymentId(plan.id);

                    try {
                        const verificationResult = await fetch(
                            "/api/payment/verify",
                            {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                },
                                body: JSON.stringify({
                                    razorpay_order_id:
                                        response.razorpay_order_id,
                                    razorpay_payment_id:
                                        response.razorpay_payment_id,
                                    razorpay_signature:
                                        response.razorpay_signature,
                                    userId: session.user?.id,
                                    planId: plan.id,
                                }),
                            },
                        );

                        const data = await verificationResult.json();
                        if (data.success) {
                            toast.success(
                                data.message ||
                                    "Subscription activated successfully!",
                            );
                            router.push("/profile/subscriptions"); // Redirect to subscriptions page
                        } else {
                            toast.error(
                                data.error ||
                                    "Payment verification failed. Please contact support.",
                            );
                        }
                    } catch (fetchError) {
                        console.error(
                            "Error during verification fetch:",
                            fetchError,
                        );
                        toast.error(
                            "An error occurred during payment verification. Please contact support.",
                        );
                    } finally {
                        setLoadingPaymentId(null);
                    }
                },
                prefill: {
                    name: session?.user?.name || "",
                    email: session?.user?.email || "",
                },
                theme: {
                    color: "#3399FF", // Customize theme color
                },
            };

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const rzp = new (window as any).Razorpay(options);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            rzp.on("payment.failed", function (response: any) {
                toast.error(
                    `Payment Failed: ${response.error.description || "Unknown error"}. Please try again.`,
                );
                console.error("Razorpay Payment Failed:", response.error);
                setLoadingPaymentId(null);
            });
            rzp.open();
        } catch (error) {
            console.error("Error initiating payment:", error);
            toast.error("Failed to initiate payment. Please try again.");
            setLoadingPaymentId(null);
        }
    };

    return (
        <>
            <Script
                id="razorpay-checkout-js"
                src="https://checkout.razorpay.com/v1/checkout.js"
                strategy="lazyOnload"
            />
            <div className="container mx-auto px-4 py-12 md:py-16">
                <div className="mb-10 text-center">
                    <div className="mb-2 text-sm font-medium text-purple-600">
                        Pricing
                    </div>
                    <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                        Simple, Transparent Pricing
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400">
                        Choose the plan that&apos;s right for you.
                    </p>

                    <div className="mb-12 flex justify-center">
                        <PricingToggle
                            isAnnual={isAnnual}
                            setIsAnnual={setIsAnnual}
                        />
                    </div>
                </div>
                <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
                    {PRICING_PLANS.filter(
                        (plan) =>
                            plan.duration ===
                            (isAnnual ? "Annually" : "Monthly"),
                    ).map((plan) => (
                        <PricingCard
                            key={plan.id}
                            plan={plan}
                            onSubscribe={() => handleSubscribe(plan)}
                            loadingPaymentId={loadingPaymentId}
                        />
                    ))}
                </div>
                <PricingTable />
            </div>
        </>
    );
}
