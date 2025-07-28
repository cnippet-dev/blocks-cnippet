"use client";

import {
    Card,
    CardContent,
    CardHeader,
    CardDescription,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
} from "@/components/ui/dialog-cn";
import { Badge } from "@/components/ui/badge";
import { Loader2, Calendar, CheckCircle2 } from "lucide-react";
import {
    getActiveSubscription,
    cancelSubscription,
} from "@/lib/actions/subscription.actions";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link"; // Import Link
import { PRICING_PLANS } from "@/config/pricing-plan";

interface SubscriptionData {
    id: string;
    plan: string;
    status: string;
    startDate: string;
    endDate: string;
}

export default function SubscriptionsPage() {
    const { data: session, status } = useSession();
    const router = useRouter();
    const [currentSubscription, setCurrentSubscription] =
        useState<SubscriptionData | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isCancelling, setIsCancelling] = useState(false);
    const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
    const [currentPlanFeatures, setCurrentPlanFeatures] = useState<string[]>(
        [],
    );
    const [hasLoadedSubscription, setHasLoadedSubscription] = useState(false);

    useEffect(() => {
        const fetchSubscription = async () => {
            if (status === "loading" || hasLoadedSubscription) return;
            if (!session?.user?.id) {
                setIsLoading(false);
                return;
            }

            setIsLoading(true);
            const result = await getActiveSubscription();
            if (result && "error" in result) {
                toast.error(
                    result.error.general || "Failed to fetch subscription.",
                );
                setCurrentSubscription(null);
                setCurrentPlanFeatures([]);
            } else if (result && result.data) {
                setCurrentSubscription({
                    ...result.data,
                    startDate: new Date(
                        result.data.startDate,
                    ).toLocaleDateString(),
                    endDate: new Date(result.data.endDate).toLocaleDateString(),
                });

                const matchingPlan = PRICING_PLANS.find(
                    (p) => p.name === result.data.plan,
                );
                if (matchingPlan) {
                    setCurrentPlanFeatures(matchingPlan.features);
                } else {
                    setCurrentPlanFeatures([]);
                }
            } else {
                setCurrentSubscription(null);
                setCurrentPlanFeatures([]);
            }
            setIsLoading(false);
            setHasLoadedSubscription(true);
        };

        fetchSubscription();
    }, [session, status, hasLoadedSubscription]);

    const handleCancelSubscription = async () => {
        if (!currentSubscription) return;

        setIsCancelling(true);
        const result = await cancelSubscription({
            subscriptionId: currentSubscription.id,
        });
        setIsCancelling(false);
        setIsCancelModalOpen(false);

        if (result && "error" in result) {
            toast.error("Failed to cancel subscription.");
        } else {
            toast.success(
                result?.message || "Subscription cancelled successfully!",
            );
            setCurrentSubscription((prev) =>
                prev
                    ? {
                          ...prev,
                          status: "CANCELLED",
                          endDate: new Date().toLocaleDateString(),
                      }
                    : null,
            );
            setHasLoadedSubscription(false);
        }
    };

    const handleViewPaymentHistory = () => {
        router.push("/profile/billing");
    };

    if (status === "loading" || isLoading) {
        return (
            <div className="flex min-h-[200px] items-center justify-center">
                <Loader2 className="mr-2 h-6 w-6 animate-spin" /> Loading
                subscription...
            </div>
        );
    }

    if (!session?.user) {
        return (
            <div className="py-10 text-center text-red-500">
                Please sign in to view your subscriptions.
            </div>
        );
    }

    return (
        <div>
            <h1 className="mb-4 text-2xl font-bold">Subscriptions</h1>
            <p className="mb-6 text-gray-600">
                View and manage your active subscriptions.
            </p>

            {currentSubscription ? (
                <Card className="shadow-none">
                    <CardHeader>
                        <CardTitle>
                            Your Current Plan
                            <Badge
                                variant={
                                    currentSubscription.status === "ACTIVE"
                                        ? "default"
                                        : "secondary"
                                }
                                className="ml-2 capitalize"
                            >
                                {currentSubscription.status.toLowerCase()}{" "}
                            </Badge>
                        </CardTitle>
                        <CardDescription>
                            Details about your current subscription plan.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <div>
                                <p className="text-lg font-semibold">
                                    {currentSubscription.plan}
                                </p>{" "}
                                <p className="mt-1 flex items-center text-sm text-gray-600">
                                    <Calendar className="mr-1 h-4 w-4" /> Start
                                    Date: {currentSubscription.startDate}
                                </p>
                                <p className="mt-1 flex items-center text-sm text-gray-600">
                                    <Calendar className="mr-1 h-4 w-4" /> End
                                    Date: {currentSubscription.endDate}
                                </p>
                            </div>
                            <div>
                                <h3 className="text-md mb-2 font-semibold">
                                    Features:
                                </h3>
                                {currentPlanFeatures.length > 0 ? (
                                    <ul className="list-none space-y-1 text-gray-700 dark:text-gray-300">
                                        {currentPlanFeatures.map(
                                            (feature, index) => (
                                                <li
                                                    key={index}
                                                    className="flex items-center"
                                                >
                                                    <CheckCircle2 className="mr-2 h-4 w-4 flex-shrink-0 text-green-500" />
                                                    {feature}
                                                </li>
                                            ),
                                        )}
                                    </ul>
                                ) : (
                                    <p className="text-sm text-gray-500">
                                        No features found for this plan.
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 pt-4 md:flex-row">
                            {currentSubscription.status === "ACTIVE" && (
                                <Dialog
                                    open={isCancelModalOpen}
                                    onOpenChange={setIsCancelModalOpen}
                                >
                                    <DialogTrigger asChild>
                                        <Button
                                            variant="destructive"
                                            disabled={isCancelling}
                                        >
                                            {isCancelling ? (
                                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            ) : null}{" "}
                                            Cancel Subscription
                                        </Button>
                                    </DialogTrigger>
                                    <DialogContent>
                                        <DialogHeader>
                                            <DialogTitle>
                                                Are you sure you want to cancel?
                                            </DialogTitle>
                                            <DialogDescription>
                                                Your subscription for the{" "}
                                                {currentSubscription.plan} will
                                                be cancelled. Your access will
                                                continue until{" "}
                                                {currentSubscription.endDate}.
                                                No further charges will be made.
                                            </DialogDescription>
                                        </DialogHeader>
                                        <DialogFooter>
                                            <Button
                                                variant="outline"
                                                onClick={() =>
                                                    setIsCancelModalOpen(false)
                                                }
                                                disabled={isCancelling}
                                            >
                                                Keep Subscription
                                            </Button>
                                            <Button
                                                variant="destructive"
                                                onClick={
                                                    handleCancelSubscription
                                                }
                                                disabled={isCancelling}
                                            >
                                                {isCancelling ? (
                                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                ) : null}{" "}
                                                Confirm Cancellation
                                            </Button>
                                        </DialogFooter>
                                    </DialogContent>
                                </Dialog>
                            )}
                            <Button
                                variant="secondary"
                                onClick={handleViewPaymentHistory}
                            >
                                View Payment History
                            </Button>
                            {currentSubscription.status !== "ACTIVE" && (
                                <Link href="/pricing">
                                    <Button>Explore Plans</Button>
                                </Link>
                            )}
                        </div>
                    </CardContent>
                </Card>
            ) : (
                <Card className="border-2 border-dashed border-gray-300 shadow-none dark:border-gray-700">
                    <CardHeader className="text-center">
                        <CardTitle>No Active Subscription</CardTitle>
                        <CardDescription>
                            It looks like you don&apos;t have an active
                            subscription with us.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                        <p className="mb-4 text-gray-500">
                            Explore our plans to unlock premium features.
                        </p>
                        <Button onClick={() => router.push("/pricing")}>
                            Explore Pricing
                        </Button>
                    </CardContent>
                </Card>
            )}
        </div>
    );
}
