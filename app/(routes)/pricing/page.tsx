"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Script from "next/script";
import { toast } from "sonner";

import { plans } from "@/config/pricing-plan";
import { createPayment } from "@/lib/actions/payment.actions";
import { Check, Info, Plus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

export default function PricingPage() {
    const { data: session, status } = useSession();
    const router = useRouter();
    //eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [loadingPaymentId, setLoadingPaymentId] = useState<string | null>(
        null,
    );

    const [billingCycle, setBillingCycle] = useState("monthly");

    const featureRows = [
        {
            name: "Basic Blocks",
            key: "basicBlocks",
            tooltip: "All basics sections.",
        },
        {
            name: "Advanced Blocks",
            key: "advanceBlocks",
            tooltip: "Number of team members that can use the platform",
        },
        {
            name: "Pages",
            key: "pages",
            tooltip: "Customer support availability",
        },
        {
            name: "Templates",
            key: "templates",
            tooltip: "Storage space allocated per user",
        },
        {
            name: "Usage License",
            key: "usage",
            tooltip: "Automation tools and workflow builders",
        },
        {
            name: "Priority Support",
            key: "support",
            tooltip: "Connect with popular third-party tools",
        },
    ];

    const getPrice = (plan: (typeof plans)[0]) => {
        return billingCycle === "monthly"
            ? plan.monthlyPrice
            : plan.annualPrice;
    };

    const handleChatToSales = (planName: string) => {
        console.log(`Chat to sales for ${planName} plan`);
        // Add your logic here
    };

    //eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleSubscribe = async (plan: any) => {
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
                amount: getPrice(plan),
                plan: plan.name, // Pass the plan name
                userId: session?.user?.id,
                duration: billingCycle, // Pass the selected duration
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
                    setLoadingPaymentId(plan.name);

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
                                    planId: plan.name,
                                    duration: billingCycle, // Pass the selected duration
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
                    color: "#6d28d9", // Customize theme color
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

            <TooltipProvider>
                <div className="mx-auto w-full max-w-7xl px-4 py-16">
                    {/* Header */}
                    <div className="mb-16 text-center">
                        <div className="mb-4 font-medium text-purple-600">
                            Pricing
                        </div>
                        <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
                            Compare our plans and find yours
                        </h1>
                        <p className="mb-8 text-lg text-gray-600">
                            Simple, transparent pricing that grows with you. Try
                            any plan free for 30 days.
                        </p>

                        {/* Billing Toggle */}
                        <Tabs
                            value={billingCycle}
                            onValueChange={setBillingCycle}
                            className="mx-auto w-fit"
                        >
                            <TabsList className="grid w-full grid-cols-2">
                                <TabsTrigger value="monthly">
                                    Monthly billing
                                </TabsTrigger>
                                <TabsTrigger value="annual">
                                    Annual billing
                                </TabsTrigger>
                            </TabsList>
                        </Tabs>
                    </div>

                    {/* Pricing Cards */}
                    <div className="grid w-full grid-cols-4 border-b pb-3">
                        <div />
                        {plans.map((plan) => (
                            <div
                                key={plan.name}
                                className="flex items-center justify-center gap-2"
                            >
                                <CardTitle className="text-xl font-semibold">
                                    {plan.name}
                                </CardTitle>
                                {plan.popular && (
                                    <Badge className="bg-purple-600 hover:bg-purple-700">
                                        Popular
                                    </Badge>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="mb-16 grid gap-8 md:grid-cols-4">
                        <div />

                        {plans.map((plan) => (
                            <Card
                                key={plan.name}
                                className="relative border-none shadow-none"
                            >
                                <CardHeader className="pb-8 text-left">
                                    <CardTitle className="sr-only text-xl font-semibold">
                                        {plan.name}
                                    </CardTitle>
                                    <div className="mt-2">
                                        <span className="text-4xl font-bold">
                                            ₹{getPrice(plan)}
                                        </span>
                                        {plan.lifetime ? (
                                            <span className="ml-1 text-gray-600">
                                                Onetime
                                            </span>
                                        ) : (
                                            <span className="ml-1 text-gray-600">
                                                per{" "}
                                                {billingCycle == "monthly"
                                                    ? "month"
                                                    : "year"}
                                            </span>
                                        )}
                                    </div>
                                    <div className="absolute top-3 right-5">
                                        {plan.discount &&
                                        billingCycle != "monthly" ? (
                                            <div>
                                                <p className="rounded-full border border-purple-500 px-2 text-xs tracking-tight">
                                                    {plan.discount}
                                                </p>
                                            </div>
                                        ) : (
                                            ""
                                        )}
                                    </div>
                                    <CardDescription className="mt-auto text-gray-600">
                                        {plan.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <Button
                                        className="w-full cursor-pointer bg-purple-600 hover:bg-purple-700"
                                        onClick={() => handleSubscribe(plan)}
                                    >
                                        Get started
                                    </Button>
                                    <Button
                                        variant="outline"
                                        className="w-full cursor-pointer bg-transparent"
                                        onClick={() =>
                                            handleChatToSales(plan.name)
                                        }
                                    >
                                        Chat to sales
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <div>
                        <div className="mb-6 px-4 font-medium text-purple-600">
                            Overview
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="sr-only grid grid-cols-4 rounded-md bg-gray-100">
                                        <th className="text-left"></th>
                                        {plans.map((plan) => (
                                            <th
                                                key={plan.name}
                                                className="px-4 py-4 text-center font-medium"
                                            >
                                                {plan.name}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {featureRows.map((feature, i) => (
                                        <tr
                                            key={feature.key}
                                            className={`grid grid-cols-4 ${i % 2 === 0 ? "rounded-md bg-gray-100" : ""}`}
                                        >
                                            <td className="py-4 pr-8">
                                                <div className="flex items-center gap-2">
                                                    <span className="px-4 font-medium">
                                                        {feature.name}
                                                    </span>
                                                    <Tooltip>
                                                        <TooltipTrigger>
                                                            <Info className="h-4 w-4 text-gray-400" />
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p>
                                                                {
                                                                    feature.tooltip
                                                                }
                                                            </p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </div>
                                            </td>
                                            {plans.map((plan) => (
                                                <td
                                                    key={`${plan.name}-${feature.key}`}
                                                    className="px-4 py-4 text-center"
                                                >
                                                    {(() => {
                                                        const value =
                                                            plan.features[
                                                                feature.key as keyof typeof plan.features
                                                            ];
                                                        if (
                                                            typeof value ===
                                                            "boolean"
                                                        ) {
                                                            return value ? (
                                                                <Check className="mx-auto h-5 w-5 text-green-600" />
                                                            ) : (
                                                                <Plus className="mx-auto h-5 w-5 rotate-45 text-red-500" />
                                                            );
                                                        } else if (
                                                            Array.isArray(
                                                                value,
                                                            ) &&
                                                            value.length ===
                                                                2 &&
                                                            typeof value[0] ===
                                                                "boolean" &&
                                                            typeof value[1] ===
                                                                "string"
                                                        ) {
                                                            return value[0] ? (
                                                                <span className="flex items-center justify-center gap-1 text-sm font-medium">
                                                                    <Check className="h-5 w-5 text-green-600" />
                                                                    {value[1]}
                                                                </span>
                                                            ) : (
                                                                <span className="flex items-center justify-center gap-1 text-sm font-medium">
                                                                    <Plus className="h-5 w-5 rotate-45 text-red-400" />
                                                                    {value[1]}
                                                                </span>
                                                            );
                                                        } else {
                                                            return (
                                                                <span className="text-sm font-medium">
                                                                    {value}
                                                                </span>
                                                            );
                                                        }
                                                    })()}
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </TooltipProvider>

            {/* <div className="container mx-auto px-4 py-12 md:py-16">
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
            </div> */}
        </>
    );
}
