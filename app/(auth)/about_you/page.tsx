// app/about_you/page.tsx
"use client";

import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { aboutYouSchema } from "@/lib/validations/auth";
import { completeProfile } from "@/lib/actions/auth.actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { toast } from "sonner";

export default function AboutYouPage() {
    const { data: session, status, update } = useSession();
    const router = useRouter();
    const searchParams = useSearchParams();
    const isNewOAuthUser = searchParams.get("new_oauth_user") === "true";

    const [isLoading, setIsLoading] = useState(true);
    const [isPending, setIsPending] = useState(false);

    const form = useForm<z.infer<typeof aboutYouSchema>>({
        resolver: zodResolver(aboutYouSchema),
        defaultValues: {
            username: "",
            acceptTerms: false,
        },
    });

    useEffect(() => {
        if (status === "loading") return; // Still fetching session
        if (!session || !session.user || !session.user.id) {
            // Not authenticated or session incomplete, redirect to sign-in
            router.push("/sign-in");
            return;
        }

        // If user already has username and accepted terms, redirect away
        if (session.user.username && session.user.termsAccepted) {
            toast.info("Your profile is already complete.");
            router.push("/");
            return;
        }

        // Pre-fill username if available from session
        if (session.user.username) {
            form.setValue("username", session.user.username);
        }
        // Pre-fill termsAccepted if available
        if (session.user.termsAccepted) {
            form.setValue("acceptTerms", session.user.termsAccepted);
        }

        setIsLoading(false);
    }, [session, status, router, form]);

    async function handleSubmit(values: z.infer<typeof aboutYouSchema>) {
        if (!session?.user?.id) {
            toast.error("User session not found. Please try logging in again.");
            return;
        }
        setIsPending(true);
        const result = await completeProfile(session.user.id, values);
        setIsPending(false);

        if (result?.error) {
            // If error is field errors (not just general)
            if (!("general" in result.error)) {
                Object.keys(result.error).forEach((key) => {
                    form.setError(key as keyof z.infer<typeof aboutYouSchema>, {
                        type: "manual",
                        message: "Failed to update profile.",
                    });
                });
            }
            toast.error(
                "general" in result.error
                    ? result.error.general
                    : "Failed to update profile.",
            );
        } else {
            toast.success(result?.message || "Profile updated successfully!");
            // Update the session in the client-side as well
            await update({
                user: {
                    username: values.username,
                    termsAccepted: values.acceptTerms,
                },
            });
            router.push("/"); // Redirect to home or dashboard
        }
    }

    if (isLoading) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                Loading...
            </div>
        );
    }

    return (
        <div className="flex min-h-screen items-center justify-center">
            <Card className="w-[400px]">
                <CardHeader>
                    <CardTitle>Complete Your Profile</CardTitle>
                    <CardDescription>
                        {isNewOAuthUser
                            ? "Welcome! Please add a username and accept our terms."
                            : "Please complete your profile details."}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(handleSubmit)}
                            className="space-y-4"
                        >
                            <FormField
                                control={form.control}
                                name="username"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Username</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="johndoe"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="acceptTerms"
                                render={({ field }) => (
                                    <FormItem className="flex flex-row items-start space-y-0 space-x-3 rounded-md border p-4">
                                        <FormControl>
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                            />
                                        </FormControl>
                                        <div className="space-y-1 leading-none">
                                            <FormLabel>
                                                I accept the{" "}
                                                <a
                                                    href="/terms"
                                                    className="underline"
                                                >
                                                    Terms and Conditions
                                                </a>
                                            </FormLabel>
                                        </div>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button
                                type="submit"
                                className="w-full"
                                disabled={isPending}
                            >
                                {isPending ? "Saving..." : "Complete Profile"}
                            </Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    );
}
