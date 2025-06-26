// app/profile/billing/page.tsx
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

export default function BillingPage() {
    const handleViewInvoices = () => {
        toast.info("Viewing invoices... (Placeholder)");
        // Implement actual invoice viewing/downloading logic here
    };

    const handleUpdatePayment = () => {
        toast.info("Updating payment method... (Placeholder)");
        // Implement actual payment method update logic here
    };

    return (
        <div>
            <h1 className="mb-4 text-2xl font-bold">Billing</h1>
            <p className="mb-6 text-gray-600">
                Manage your payment methods and view billing history.
            </p>

            <Card className="border-2 border-dashed border-gray-300 shadow-none dark:border-gray-700">
                <CardHeader>
                    <CardTitle>Billing Information</CardTitle>
                    <CardDescription>
                        Manage your payment methods and review your transaction
                        history.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <p className="text-gray-500">
                        This section is under development. Here you could
                        include:
                    </p>
                    <ul className="ml-4 list-inside list-disc text-gray-500">
                        <li>Your stored payment methods</li>
                        <li>Add/Remove payment methods</li>
                        <li>A list of past invoices/receipts</li>
                        <li>Download invoice functionality</li>
                    </ul>
                    <div className="flex gap-4">
                        <Button onClick={handleViewInvoices}>
                            View Invoices
                        </Button>
                        <Button variant="outline" onClick={handleUpdatePayment}>
                            Update Payment Method
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
