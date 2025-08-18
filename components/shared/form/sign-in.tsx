"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { useSessionCache } from "@/hooks/use-session-cache";
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
import { toast } from "sonner";

const formSchema = z.object({
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    password: z.string().min(6, {
        message: "Password must be at least 6 characters.",
    }),
});

type FormData = z.infer<typeof formSchema>;

export default function SignInForm() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState<
        "signin" | "google" | "github" | null
    >(null);
    //eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [error, setError] = useState<string | null>(null);
    const [showPassword, setShowPassword] = useState(false);

    const { data: session, status, isAuthenticated } = useSessionCache();

    const form = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    useEffect(() => {
        if (isAuthenticated) {
            if (session?.needsCompletion) {
                router.push("/about_you");
            } else {
                router.push("/");
            }
        }
    }, [isAuthenticated, session, router]);

    async function onSubmit(values: FormData) {
        setIsLoading("signin");
        try {
            const result = await signIn("credentials", {
                email: values.email,
                password: values.password,
                redirect: false,
            });

            console.log(result);

            if (result?.error) {
                toast.error("Invalid Credentials");
                return;
            }

            toast.success("Successfully signed in!");
            router.push("/");
        } catch (error) {
            toast.error(
                `An unexpected error occurred. Please try again. ${error}`,
            );
        } finally {
            setIsLoading(null);
        }
    }

    const loginWithGoogle = async () => {
        setIsLoading("google");
        await signIn("google", { redirect: false });
        setIsLoading(null);
    };

    const loginWithGit = async () => {
        setIsLoading("github");
        await signIn("github", { redirect: false });
        setIsLoading(null);
    };

    return (
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
                <h1 className="text-2xl font-semibold tracking-tight">
                    Welcome back
                </h1>
                <p className="text-sm text-muted-foreground">
                    Enter your email below to create your account
                </p>
            </div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="m@example.com"
                                        {...field}
                                        type="email"
                                        autoComplete="email"
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
                                    <Input
                                        placeholder="Enter your password"
                                        {...field}
                                        type={showPassword ? "text" : "password"}
                                        autoComplete="current-password"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button
                        type="submit"
                        className="w-full"
                        disabled={isLoading === "signin"}
                    >
                        {isLoading === "signin" ? "Signing in..." : "Sign in"}
                    </Button>
                </form>
            </Form>
            <div className="px-8 text-center text-sm">
                <a
                    href="#"
                    className="underline underline-offset-4 hover:text-primary"
                >
                    Forgot your password?
                </a>
            </div>
            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">
                        Or continue with
                    </span>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <Button
                    variant="outline"
                    onClick={loginWithGoogle}
                    disabled={isLoading === "google"}
                >
                    {isLoading === "google" ? "Loading..." : "Google"}
                </Button>
                <Button
                    variant="outline"
                    onClick={loginWithGit}
                    disabled={isLoading === "github"}
                >
                    {isLoading === "github" ? "Loading..." : "GitHub"}
                </Button>
            </div>
        </div>
    );
}
