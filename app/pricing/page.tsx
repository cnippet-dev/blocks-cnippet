// app/pricing/page.tsx
"use client";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Loader2, HelpCircle, Check } from "lucide-react"; // Added HelpCircle and Check icons
import { PRICING_PLANS, PricingPlan } from "@/config/pricing-plan";
// import useRazorpay from "@/hooks/use-razorpay";
import { createPayment } from "@/lib/actions/payment.actions"; // Import the refined createPayment
import { toast } from "sonner";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Script from "next/script"; // Keep Script tag for Razorpay checkout.js
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"; // For tooltips

export default function PricingPage() {
    // const { scriptLoaded, scriptError } = useRazorpay();
    const { data: session, status } = useSession();
    const router = useRouter();
    const [loadingPaymentId, setLoadingPaymentId] = useState<string | null>(
        null,
    );
    const [isAnnual, setIsAnnual] = useState(false); // For pricing toggle


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
            const { orderId, amount, currency } = orderResponse; // Access properties directly from orderResponse

            // 2. Open Razorpay Checkout
            const options = {
                key: process.env.RAZORPAY_KEY_ID, // Your Razorpay Key ID from .env
                amount: amount! * 100, // Use the amount returned by the server action (original amount) and convert to paisa
                currency: currency,
                name: "Your App Name", // Your application name
                description: `Subscription for ${plan.name} Plan`,
                order_id: orderId,
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                handler: async function (response: any) {
                    // This function is called on successful payment by Razorpay
                    setLoadingPaymentId(plan.id); // Re-activate loading state for server-side verification

                    try {
                        const verificationResult = await fetch(
                            "/api/payment/verify", // Call your new API route for server-side verification
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
                                    userId: session.user?.id, // Pass userId for verification
                                    planId: plan.id, // Pass planId for subscription creation
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
                    // contact: "9999999999", // User's phone number if available
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

    // if (scriptError) {
    //     return (
    //         <div className="py-10 text-center text-red-500">
    //             Failed to load Razorpay SDK. Please check your internet
    //             connection.
    //         </div>
    //     );
    // }
    // if (!scriptLoaded || status === "loading") {
    //     return (
    //         <div className="flex items-center justify-center py-10 text-center">
    //             <Loader2 className="mr-2 h-6 w-6 animate-spin" /> Loading
    //             pricing plans...
    //         </div>
    //     );
    // }

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
                            plan={plan} // Pass the entire plan object
                            onSubscribe={() => handleSubscribe(plan)} // Pass the entire plan object
                            loadingPaymentId={loadingPaymentId}
                        />
                    ))}
                </div>
                <PricingTable /> {/* Kept as is from previous code */}
            </div>
        </>
    );
}

// Re-defined PricingToggle based on your existing code
interface PricingToggleProps {
    isAnnual: boolean;
    setIsAnnual: (value: boolean) => void;
}

function PricingToggle({ isAnnual, setIsAnnual }: PricingToggleProps) {
    return (
        <div className="bg-background inline-flex items-center rounded-full border p-1">
            <Button
                variant={isAnnual ? "ghost" : "default"}
                size="sm"
                className={`rounded-full px-4 ${!isAnnual ? "bg-primary text-primary-foreground" : ""}`}
                onClick={() => setIsAnnual(false)}
            >
                Monthly billing
            </Button>
            <Button
                variant={!isAnnual ? "ghost" : "default"}
                size="sm"
                className={`rounded-full px-4 ${isAnnual ? "bg-primary text-primary-foreground" : ""}`}
                onClick={() => setIsAnnual(true)}
            >
                Annual billing
            </Button>
        </div>
    );
}

// Modified PricingCard to accept PricingPlan object
interface PricingCardProps {
    plan: PricingPlan; // Changed to accept full plan object
    onSubscribe: (plan: PricingPlan) => void; // Changed to pass plan object
    loadingPaymentId: string | null;
}

function PricingCard({
    plan,
    onSubscribe,
    loadingPaymentId,
}: PricingCardProps) {
    const isPopular = plan.popular;
    const isLoading = loadingPaymentId === plan.id;

    return (
        <Card
            className={`flex h-full flex-col border-2 ${isPopular ? "border-blue-500 shadow-lg" : "border-gray-200 dark:border-gray-700"}`}
        >
            <CardHeader className="pb-0 text-center">
                {" "}
                {/* Centered text */}
                {isPopular && (
                    <Badge className="mx-auto mb-2 bg-purple-100 text-purple-700 hover:bg-purple-100">
                        Popular
                    </Badge>
                )}
                <CardTitle className="text-3xl font-bold">
                    {plan.name}
                </CardTitle>
                <CardDescription className="mt-4 text-5xl font-extrabold">
                    ₹{plan.price / 100} {/* Display in Rupees */}
                    <span className="text-base font-normal text-gray-500">
                        /{plan.duration.toLowerCase().replace("ly", "")}
                    </span>{" "}
                    {/* Adjust duration text */}
                </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-grow flex-col justify-between">
                <ul className="mb-6 space-y-2">
                    {plan.features.map((feature, index) => (
                        <li
                            key={index}
                            className="flex items-center text-gray-700 dark:text-gray-300"
                        >
                            <CheckCircle2 className="mr-2 h-5 w-5 flex-shrink-0 text-green-500" />{" "}
                            {feature}
                        </li>
                    ))}
                </ul>
            </CardContent>
            <CardFooter className="flex flex-col gap-2">
                <Button
                    className="w-full bg-purple-600 hover:bg-purple-700"
                    onClick={() => onSubscribe(plan)} // Pass the plan object
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <>
                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                            Processing...
                        </>
                    ) : (
                        "Get started"
                    )}
                </Button>
                <Button variant="outline" className="w-full">
                    Chat to sales
                </Button>
            </CardFooter>
        </Card>
    );
}

// PricingTable and FeatureRow components from your previous code
interface FeatureRowProps {
    title: string;
    basic: React.ReactNode;
    business: React.ReactNode;
    tooltip?: string;
}

function FeatureRow({ title, basic, business, tooltip }: FeatureRowProps) {
    return (
        <div className="grid grid-cols-3 border-b py-4 last:border-b-0">
            <div className="flex items-center gap-1">
                <span className="text-sm font-medium">{title}</span>
                {tooltip && (
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <HelpCircle className="text-muted-foreground h-4 w-4" />
                            </TooltipTrigger>
                            <TooltipContent>
                                <p className="max-w-xs text-sm">{tooltip}</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                )}
            </div>
            <div>{basic}</div>
            <div>{business}</div>
        </div>
    );
}

function SectionTitle({ title }: { title: string }) {
    return (
        <div className="border-b py-4">
            <h3 className="text-sm font-medium text-purple-600">{title}</h3>
        </div>
    );
}

function PricingTable() {
    return (
        <div className="mt-8 overflow-hidden rounded-lg border bg-white">
            <div className="grid grid-cols-3 border-b">
                <div className="p-4 font-medium">Overview</div>
                <div className="p-4 text-center font-medium">Free</div>
                <div className="p-4 text-center font-medium">Pro</div>
            </div>

            <div className="px-4">
                <FeatureRow
                    title="Basic features"
                    tooltip="Core features available in all plans"
                    basic={<FeatureCheck />}
                    business={<FeatureCheck />}
                />

                <FeatureRow
                    title="Users"
                    tooltip="Number of user accounts"
                    basic={<div className="text-center">5</div>}
                    business={<div className="text-center">Unlimited</div>}
                />

                <FeatureRow
                    title="Storage"
                    tooltip="Storage allocation per account"
                    basic={<div className="text-center">5 GB</div>}
                    business={<div className="text-center">Unlimited</div>}
                />

                <FeatureRow
                    title="Support"
                    tooltip="Customer support options"
                    basic={<div className="text-center">Community</div>}
                    business={<div className="text-center">Priority</div>}
                />

                <FeatureRow
                    title="Automated workflows"
                    tooltip="Create custom automation rules"
                    basic={<FeatureUnavailable />}
                    business={<FeatureCheck />}
                />

                <FeatureRow
                    title="200+ integrations"
                    tooltip="Connect with other tools and services"
                    basic={<FeatureUnavailable />}
                    business={<FeatureCheck />}
                />

                <SectionTitle title="Reporting and analytics" />

                <FeatureRow
                    title="Analytics"
                    tooltip="Data insights and reporting capabilities"
                    basic={<div className="text-center">Basic</div>}
                    business={<div className="text-center">Advanced</div>}
                />

                <FeatureRow
                    title="Export reports"
                    tooltip="Download reports in various formats"
                    basic={<FeatureUnavailable />}
                    business={<FeatureCheck />}
                />

                <FeatureRow
                    title="Scheduled reports"
                    tooltip="Set up automated report delivery"
                    basic={<FeatureUnavailable />}
                    business={<FeatureCheck />}
                />

                <FeatureRow
                    title="API Access"
                    tooltip="Programmatic access to your data"
                    basic={<FeatureUnavailable />}
                    business={<FeatureCheck />}
                />

                <FeatureRow
                    title="Advanced reports"
                    tooltip="Custom reporting with advanced filters"
                    basic={<FeatureUnavailable />}
                    business={<FeatureCheck />}
                />
            </div>
        </div>
    );
}

function FeatureCheck() {
    return (
        <div className="flex justify-center">
            <div className="rounded-full bg-green-100 p-1">
                <Check className="h-4 w-4 text-green-600" />
            </div>
        </div>
    );
}

function FeatureUnavailable() {
    return (
        <div className="flex justify-center">
            <div className="text-muted-foreground">—</div>
        </div>
    );
}
