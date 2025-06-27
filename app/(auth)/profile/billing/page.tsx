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
import { useState, useEffect } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
} from "@/components/ui/dialog-cn";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    PlusCircle,
    CreditCard,
    FileText,
    Download,
    Loader2,
} from "lucide-react"; // Add Loader2 icon
import { Badge } from "@/components/ui/badge";
import { useSession } from "next-auth/react"; // Import useSession
import { getUserPayments } from "@/lib/actions/payment.actions"; // Import the new server action

// Define types for your data
interface PaymentMethod {
    id: string;
    type: string;
    last4: string;
    expiry: string;
    default: boolean;
}

interface InvoiceData {
    id: string;
    date: string;
    amount: string; // Store as string for display if currency symbol is included
    status: string;
    downloadLink: string;
}

export default function BillingPage() {
    const { data: session, status } = useSession(); // Get session data
    const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([
        {
            id: "1",
            type: "Visa",
            last4: "4242",
            expiry: "12/26",
            default: true,
        },
        {
            id: "2",
            type: "Mastercard",
            last4: "5555",
            expiry: "08/25",
            default: false,
        },
    ]);
    const [invoices, setInvoices] = useState<InvoiceData[]>([]); // Initialize as empty array
    const [isLoadingInvoices, setIsLoadingInvoices] = useState(true); // Loading state for invoices

    const [isAddPaymentModalOpen, setIsAddPaymentModalOpen] = useState(false);
    const [newCardNumber, setNewCardNumber] = useState("");
    const [newCardExpiry, setNewCardExpiry] = useState(""); // Format MM/YY
    const [newCardCVC, setNewCardCVC] = useState("");

    // Fetch invoices from the database on component mount
    useEffect(() => {
        const fetchInvoices = async () => {
            if (status === "loading") return; // Wait for session to load
            if (!session?.user?.id) {
                setIsLoadingInvoices(false);
                toast.info("Please sign in to view your billing history.");
                return;
            }

            setIsLoadingInvoices(true);
            const result = await getUserPayments();
            if (result.error) {
                toast.error(result.error);
                setInvoices([]);
            } else if (result.payments) {
                // Map fetched payment data to InvoiceData format
                const fetchedInvoices: InvoiceData[] = result.payments.map(
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    (payment: any) => ({
                        id: payment.razorpayOrderId || payment.id, // Use Razorpay Order ID or internal ID
                        date: new Date(payment.createdAt).toLocaleDateString(),
                        amount: `₹${(payment.amount || 0).toFixed(2)}`, // Format amount
                        status: payment.status,
                        downloadLink: `#`, // Placeholder for actual invoice download link
                    }),
                );
                setInvoices(fetchedInvoices);
            }
            setIsLoadingInvoices(false);
        };

        fetchInvoices();
    }, [session, status]); // Re-run when session or status changes

    const handleAddPaymentMethod = () => {
        if (!newCardNumber || !newCardExpiry || !newCardCVC) {
            toast.error("Please fill all card details.");
            return;
        }
        // Basic validation for expiry format (MM/YY)
        const expiryRegex = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;
        if (!expiryRegex.test(newCardExpiry)) {
            toast.error("Invalid expiry date format. Use MM/YY.");
            return;
        }

        // In a real app, this would securely send card details to a payment gateway (e.g., Stripe, PayPal)
        // and store a token. NEVER store raw card details in your database.
        toast.info("Adding payment method... (Placeholder)");
        const newMethod = {
            id: String(Date.now()), // Use a more unique ID in production, e.g., UUID
            type: newCardNumber.startsWith("4")
                ? "Visa"
                : newCardNumber.startsWith("5")
                  ? "Mastercard"
                  : "Card", // Simple guess
            last4: newCardNumber.slice(-4),
            expiry: newCardExpiry,
            default: paymentMethods.length === 0, // First added card becomes default
        };

        // If adding a new default, ensure old default is set to false
        setPaymentMethods((prevMethods) => {
            const updatedMethods = prevMethods.map((method) => ({
                ...method,
                default: false,
            }));
            return [...updatedMethods, newMethod];
        });

        setNewCardNumber("");
        setNewCardExpiry("");
        setNewCardCVC("");
        setIsAddPaymentModalOpen(false);
        toast.success("Payment method added! (Placeholder)");
    };

    const handleRemovePaymentMethod = (id: string) => {
        // In a real app, this would call a server action to remove the payment method
        setPaymentMethods((prevMethods) => {
            const updatedMethods = prevMethods.filter(
                (method) => method.id !== id,
            );
            // If the removed card was default, set the first remaining card as default
            if (
                paymentMethods.find((m) => m.id === id)?.default &&
                updatedMethods.length > 0
            ) {
                updatedMethods[0].default = true;
            }
            return updatedMethods;
        });
        toast.success("Payment method removed! (Placeholder)");
    };

    const handleSetDefaultPaymentMethod = (id: string) => {
        setPaymentMethods((prevMethods) =>
            prevMethods.map((method) => ({
                ...method,
                default: method.id === id,
            })),
        );
        toast.success("Default payment method updated! (Placeholder)");
    };

    const handleDownloadInvoice = (invoiceId: string) => {
        toast.info(`Downloading invoice ${invoiceId}... (Placeholder)`);
        // In a real app, this would trigger a server action to generate and provide a download link for the invoice
    };

    if (status === "loading") {
        return (
            <div className="flex h-full items-center justify-center">
                <Loader2 className="mr-2 h-6 w-6 animate-spin" /> Loading
                billing page...
            </div>
        );
    }

    if (!session?.user) {
        return (
            <div className="py-10 text-center text-red-500">
                Please sign in to view your billing history.
            </div>
        );
    }

    return (
        <div>
            <h1 className="mb-4 text-2xl font-bold">Billing</h1>
            <p className="mb-6 text-gray-600">
                Manage your payment methods and view billing history.
            </p>

            {/* Payment Methods Section */}
            <Card className="mb-8 shadow-none">
                <CardHeader>
                    <CardTitle className="flex items-center">
                        <CreditCard className="mr-2 h-6 w-6" /> Payment Methods
                    </CardTitle>
                    <CardDescription>
                        Manage your stored payment methods.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    {paymentMethods.length === 0 ? (
                        <p className="py-4 text-center text-gray-500">
                            No payment methods added yet.
                        </p>
                    ) : (
                        <div className="space-y-2">
                            {paymentMethods.map((method) => (
                                <div
                                    key={method.id}
                                    className="flex items-center justify-between rounded-md border p-3"
                                >
                                    <div className="flex items-center">
                                        {/* Placeholder for card icon based on type */}
                                        {method.type === "Visa" && "💳"}
                                        {method.type === "Mastercard" && "🏦"}
                                        {method.type === "Card" && "💰"}
                                        <span className="ml-2">
                                            {method.type} ending in{" "}
                                            {method.last4} (Exp: {method.expiry}
                                            )
                                        </span>
                                        {method.default && (
                                            <Badge
                                                variant="outline"
                                                className="ml-2"
                                            >
                                                Default
                                            </Badge>
                                        )}
                                    </div>
                                    <div className="flex gap-2">
                                        {!method.default && (
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                onClick={() =>
                                                    handleSetDefaultPaymentMethod(
                                                        method.id,
                                                    )
                                                }
                                            >
                                                Set Default
                                            </Button>
                                        )}
                                        <Button
                                            variant="destructive"
                                            size="sm"
                                            onClick={() =>
                                                handleRemovePaymentMethod(
                                                    method.id,
                                                )
                                            }
                                        >
                                            Remove
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    <Dialog
                        open={isAddPaymentModalOpen}
                        onOpenChange={setIsAddPaymentModalOpen}
                    >
                        <DialogTrigger asChild>
                            <Button variant="outline">
                                <PlusCircle className="mr-2 h-4 w-4" /> Add
                                Payment Method
                            </Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>
                                    Add New Payment Method
                                </DialogTitle>
                                <DialogDescription>
                                    Enter your card details to add a new payment
                                    method.
                                </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                                <div className="space-y-2">
                                    <Label htmlFor="cardNumber">
                                        Card Number
                                    </Label>
                                    <Input
                                        id="cardNumber"
                                        placeholder="**** **** **** 1234"
                                        value={newCardNumber}
                                        onChange={(e) =>
                                            setNewCardNumber(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="expiryDate">
                                            Expiry Date (MM/YY)
                                        </Label>
                                        <Input
                                            id="expiryDate"
                                            placeholder="MM/YY"
                                            value={newCardExpiry}
                                            onChange={(e) =>
                                                setNewCardExpiry(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="cvc">CVC</Label>
                                        <Input
                                            id="cvc"
                                            placeholder="XXX"
                                            value={newCardCVC}
                                            onChange={(e) =>
                                                setNewCardCVC(e.target.value)
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                            <DialogFooter>
                                <Button
                                    variant="outline"
                                    onClick={() =>
                                        setIsAddPaymentModalOpen(false)
                                    }
                                >
                                    Cancel
                                </Button>
                                <Button onClick={handleAddPaymentMethod}>
                                    Add Method
                                </Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </CardContent>
            </Card>

            {/* Billing History Section */}
            <Card className="shadow-none">
                <CardHeader>
                    <CardTitle className="flex items-center">
                        <FileText className="mr-2 h-6 w-6" /> Billing History
                    </CardTitle>
                    <CardDescription>
                        View your past invoices and transactions.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    {isLoadingInvoices ? (
                        <div className="flex items-center justify-center py-4">
                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />{" "}
                            Loading invoices...
                        </div>
                    ) : invoices.length === 0 ? (
                        <p className="py-4 text-center text-gray-500">
                            No invoices found yet.
                        </p>
                    ) : (
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Invoice ID</TableHead>
                                    <TableHead>Date</TableHead>
                                    <TableHead>Amount</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead className="text-right">
                                        Actions
                                    </TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {invoices.map((invoice) => (
                                    <TableRow key={invoice.id}>
                                        <TableCell className="font-medium">
                                            {invoice.id}
                                        </TableCell>
                                        <TableCell>{invoice.date}</TableCell>
                                        <TableCell>{invoice.amount}</TableCell>
                                        <TableCell>
                                            <Badge
                                                variant={
                                                    invoice.status === "SUCCESS"
                                                        ? "default"
                                                        : "secondary"
                                                }
                                            >
                                                {invoice.status}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                onClick={() =>
                                                    handleDownloadInvoice(
                                                        invoice.id,
                                                    )
                                                }
                                            >
                                                <Download className="mr-2 h-4 w-4" />{" "}
                                                Download
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
