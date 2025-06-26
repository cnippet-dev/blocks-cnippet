// app/profile/subscriptions/page.tsx
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

export default function SubscriptionsPage() {
    const handleManageSubscription = () => {
        toast.info("Managing subscription... (Placeholder)");
        // Implement actual subscription management logic here
    };

    return (
        <div>
            <h1 className="mb-4 text-2xl font-bold">Subscriptions</h1>
            <p className="mb-6 text-gray-600">
                View and manage your active subscriptions.
            </p>

            <Card className="border-2 border-dashed border-gray-300 shadow-none dark:border-gray-700">
                <CardHeader>
                    <CardTitle>Your Current Plan</CardTitle>
                    <CardDescription>
                        Details about your current subscription plan.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <p className="text-gray-500">
                        This section is under development. Here you could
                        display:
                    </p>
                    <ul className="ml-4 list-inside list-disc text-gray-500">
                        <li>Your current plan name and features</li>
                        <li>Next billing date</li>
                        <li>Option to upgrade/downgrade plan</li>
                        <li>Cancellation option</li>
                        <li>Payment history (might link to billing)</li>
                    </ul>
                    <Button onClick={handleManageSubscription}>
                        Manage Subscription
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}
