// app/sign-up/_components/EmailVerificationForm.tsx
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { verifyEmail } from "@/lib/actions/auth.actions";
import { useState } from "react";
import { toast } from "sonner";

const emailVerificationSchema = z.object({
    otpCode: z.string().length(6, "OTP must be 6 digits long"),
});

interface EmailVerificationFormProps {
    email: string;
    onSubmit: (success: boolean, message: string) => void;
}

export default function EmailVerificationForm({
    email,
    onSubmit,
}: EmailVerificationFormProps) {
    const [isPending, setIsPending] = useState(false);
    const form = useForm<z.infer<typeof emailVerificationSchema>>({
        resolver: zodResolver(emailVerificationSchema),
        defaultValues: {
            otpCode: "",
        },
    });

    async function handleSubmit(
        values: z.infer<typeof emailVerificationSchema>,
    ) {
        setIsPending(true);
        const result = await verifyEmail(email, values.otpCode);
        setIsPending(false);

        if (result?.error) {
            toast.error(result.error);
            onSubmit(false, result.error);
        } else {
            toast.success(result?.message || "Email verified!");
            onSubmit(true, result?.message || "Email verified successfully!");
        }
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(handleSubmit)}
                className="space-y-4"
            >
                <p className="text-sm text-gray-600">
                    A verification code has been sent to **{email}**.
                </p>
                <FormField
                    control={form.control}
                    name="otpCode"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Verification Code</FormLabel>
                            <FormControl>
                                <Input placeholder="123456" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" className="w-full" disabled={isPending}>
                    {isPending ? "Verifying..." : "Verify Email"}
                </Button>
            </form>
        </Form>
    );
}
