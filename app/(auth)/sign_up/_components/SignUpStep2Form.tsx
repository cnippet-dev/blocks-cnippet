// app/sign-up/_components/SignUpStep2Form.tsx
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { signUpSchemaStep2 } from "@/lib/validations/auth";
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
import { signUpStep2 as signUpStep2Action } from "@/lib/actions/auth.actions";
import { useState } from "react";
import { toast } from "sonner";

interface SignUpStep2FormProps {
    email: string;
    onSubmit: (success: boolean, message: string) => void;
}

export default function SignUpStep2Form({
    email,
    onSubmit,
}: SignUpStep2FormProps) {
    const [isPending, setIsPending] = useState(false);
    const form = useForm<z.infer<typeof signUpSchemaStep2>>({
        resolver: zodResolver(signUpSchemaStep2),
        defaultValues: {
            password: "",
            confirmPassword: "",
        },
    });

    async function handleSubmit(values: z.infer<typeof signUpSchemaStep2>) {
        setIsPending(true);
        const result = await signUpStep2Action(email, values);
        setIsPending(false);

        if (result?.error) {
            Object.keys(result.error).forEach((key) => {
                form.setError(key as keyof z.infer<typeof signUpSchemaStep2>, {
                    type: "manual",
                    message: "Failed to set password.",
                });
            });
            toast.error("Please correct the errors in the form.");
            onSubmit(false, "Failed to set password.");
        } else {
            toast.success(result?.message || "Success!");
            onSubmit(
                true,
                result?.message || "Password set and verification email sent!",
            );
        }
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(handleSubmit)}
                className="space-y-4"
            >
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input type="password" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Confirm Password</FormLabel>
                            <FormControl>
                                <Input type="password" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" className="w-full" disabled={isPending}>
                    {isPending
                        ? "Setting Password..."
                        : "Set Password & Verify Email"}
                </Button>
            </form>
        </Form>
    );
}
