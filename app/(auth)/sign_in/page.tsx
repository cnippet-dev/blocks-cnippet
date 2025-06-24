// app/sign-in/page.tsx
"use client";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { signInOAuth, signInEmailPassword } from "@/lib/actions/auth.actions";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { loginSchema } from "@/lib/validations/auth";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function SignInPage() {
    const router = useRouter();
    const [isPending, setIsPending] = useState(false);
    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    async function handleEmailPasswordSignIn(
        values: z.infer<typeof loginSchema>,
    ) {
        setIsPending(true);
        const result = await signInEmailPassword(values);
        setIsPending(false);

        if (result?.error) {
            toast.error("Invalid credentials or email not verified. Please check your details or sign up.");
        } else {
            toast.success(result?.message || "Signed in successfully!");
            router.push("/"); // Redirect to home or dashboard after successful login
        }
    }

    return (
        <div className="flex min-h-screen items-center justify-center">
            <Card className="w-[400px]">
                <CardHeader>
                    <CardTitle>Sign In</CardTitle>
                    <CardDescription>Welcome back!</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(
                                handleEmailPasswordSignIn,
                            )}
                            className="space-y-4"
                        >
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="john@example.com"
                                                type="email"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
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
                            <Button
                                type="submit"
                                className="w-full"
                                disabled={isPending}
                            >
                                {isPending
                                    ? "Signing In..."
                                    : "Sign In with Email"}
                            </Button>
                        </form>
                    </Form>

                    <div className="text-center text-sm">
                        <Link
                            href="/forgot-password"
                            className="text-blue-600 hover:underline"
                        >
                            Forgot Password?
                        </Link>
                    </div>

                    <Separator className="my-4" />

                    <div className="flex flex-col gap-2">
                        <Button
                            variant="outline"
                            className="w-full"
                            onClick={() => signInOAuth("google")}
                        >
                            Sign In with Google
                        </Button>
                        <Button
                            variant="outline"
                            className="w-full"
                            onClick={() => signInOAuth("github")}
                        >
                            Sign In with GitHub
                        </Button>
                    </div>

                    <div className="mt-4 text-center text-sm">
                        Don't have an account?{" "}
                        <Link
                            href="/sign-up"
                            className="text-blue-600 hover:underline"
                        >
                            Sign Up
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
