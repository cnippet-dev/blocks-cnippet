"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useTheme } from "next-themes";
import { RiErrorWarningFill } from "@remixicon/react";

import { Eye, EyeOff, Loader2 } from "lucide-react";

import {
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog-cn";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { toast } from "sonner";

const userSignInValidation = z.object({
    email: z.string().email(),
    password: z.string().min(6),
});

const AuthDialog = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [loading, setLoading] = useState(false);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [loading1, setLoading1] = useState(false);
    const [loading2, setLoading2] = useState(false);
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const router = useRouter();
    const pathname = usePathname();
    const { theme } = useTheme();
    const form = useForm<z.infer<typeof userSignInValidation>>({
        resolver: zodResolver(userSignInValidation),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const loginWithGoogle = async () => {
        const result = await signIn("google", {
            callbackUrl: "/about_you",
            redirect: false,
        });

        if (result?.error) {
            setError(result.error);
        } else if (result?.url) {
            router.push(result.url);
        }
    };

    const loginWithGit = async () => {
        const result = await signIn("github", {
            callbackUrl: "/about_you",
            redirect: false,
        });

        if (result?.error) {
            setError(result.error);
        } else if (result?.url) {
            router.push(result.url);
        }
    };

    async function onSubmit(values: z.infer<typeof userSignInValidation>) {
        setLoading2(true);

        try {
            const result = await signIn("credentials", {
                email: values.email,
                password: values.password,
                redirect: false,
                callbackUrl: pathname,
            });

            if (result?.error) {
                toast.error(result.error);
                return;
            }

            toast.success("Successfully signed in!");
            router.push("/");
        } catch (error) {
            toast.error(
                `An unexpected error occurred. Please try again. ${error}`,
            );
        } finally {
            setLoading2(false);
        }
    }

    return (
        <DialogContent className="py-10 font-sans sm:max-w-md">
            <div className="mb-2 flex flex-col items-center gap-2">
                <div
                    className="border-border flex size-11 shrink-0 items-center justify-center rounded-full border"
                    aria-hidden="true"
                >
                    {theme === "dark" ? (
                        <Image
                            src="/images/logo-light.png"
                            alt=""
                            width={3840}
                            height={2160}
                            className="w-[2.75rem] rounded-full bg-black dark:bg-white"
                        />
                    ) : (
                        <Image
                            src="/images/logo-dark.png"
                            alt=""
                            width={3840}
                            height={2160}
                            className="w-[2.75rem] rounded-full bg-black dark:bg-white"
                        />
                    )}
                </div>
                <DialogHeader>
                    <DialogTitle className="text-2xl leading-tight font-semibold tracking-tight text-gray-900 sm:text-center md:text-3xl dark:text-white">
                        Log in to your account
                    </DialogTitle>
                    <DialogDescription className="text-sm leading-normal text-gray-600 sm:text-center md:text-base dark:text-gray-300">
                        Welcome back! Please enter your details.
                    </DialogDescription>
                </DialogHeader>
            </div>

            <div className="space-y-4">
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="w-full"
                    >
                        <div className="space-y-4">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="font-medium text-black dark:text-white">
                                            Email
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Enter your email"
                                                className="rounded-lg border-gray-300 transition-all focus:border-blue-500 focus:ring focus:ring-blue-200 dark:border-neutral-700"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {/* <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="font-medium text-black dark:text-white">
                                            Password
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                type="password"
                                                placeholder="Enter your password"
                                                className="rounded-lg border-gray-300 transition-all focus:border-blue-500 focus:ring focus:ring-blue-200 dark:border-neutral-700"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            /> */}
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="font-medium text-black dark:text-white">
                                            Password
                                        </FormLabel>
                                        <div className="relative">
                                            <FormControl>
                                                <Input
                                                    type={
                                                        showPassword
                                                            ? "text"
                                                            : "password"
                                                    }
                                                    placeholder="Enter your password"
                                                    className="rounded-lg border-gray-300 pr-10 transition-all focus:border-blue-500 focus:ring focus:ring-blue-200 dark:border-neutral-700"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <button
                                                type="button"
                                                className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500 transition-colors hover:text-gray-700"
                                                onClick={() =>
                                                    setShowPassword(
                                                        !showPassword,
                                                    )
                                                }
                                            >
                                                {showPassword ? (
                                                    <EyeOff size={18} />
                                                ) : (
                                                    <Eye size={18} />
                                                )}
                                            </button>
                                        </div>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="mt-2 text-right">
                            <Link
                                href="/forgot_password"
                                className="text-sm text-indigo-600 hover:underline dark:text-indigo-500"
                            >
                                Forgot your password?
                            </Link>
                        </div>

                        <Button
                            type="submit"
                            className="mt-3 flex w-full cursor-pointer items-center rounded-lg bg-indigo-600 py-2.5 text-white transition-all hover:bg-indigo-700"
                            disabled={loading2}
                        >
                            {loading2 ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Signing in...
                                </>
                            ) : (
                                "Sign In"
                            )}
                        </Button>
                    </form>
                </Form>

                {error && (
                    <div className="mt-4 rounded-lg bg-red-50 p-2 text-sm text-red-500">
                        <div className="flex items-center justify-center">
                            <RiErrorWarningFill className="mr-2 h-5 w-5 text-red-500" />
                            {error}
                        </div>
                    </div>
                )}

                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t border-gray-300 dark:border-neutral-700" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-background text-muted-foreground px-2">
                            Or continue with
                        </span>
                    </div>
                </div>

                <div className="flex flex-col space-y-2">
                    <Button
                        variant="outline"
                        type="button"
                        className="flex items-center justify-center gap-2"
                        onClick={loginWithGoogle}
                        disabled={loading}
                    >
                        {/* {loading ? (
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        ) : (
                            <Image
                                src={GoogleLogo}
                                alt="Google"
                                className="size-5"
                                width={16}
                                height={16}
                            />
                        )} */}
                        <span>Sign in with Google</span>
                    </Button>
                    <Button
                        variant="outline"
                        type="button"
                        className="flex items-center justify-center gap-2"
                        onClick={loginWithGit}
                        disabled={loading1}
                    >
                        {/* {loading1 ? (
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        ) : (
                            <Image
                                src={Github}
                                alt="GitHub"
                                className="size-5"
                                width={16}
                                height={16}b
                            />
                        )} */}
                        <span>Sign in with GitHub</span>
                    </Button>
                </div>

                <div className="mt-6 text-center text-sm tracking-tight">
                    <span className="text-gray-600">
                        Don&apos;t have an account?{" "}
                    </span>
                    <Link
                        href="/sign_up"
                        className="font-medium text-indigo-600 transition-colors hover:text-indigo-500"
                    >
                        Sign up
                    </Link>
                </div>
            </div>
        </DialogContent>
    );
};

export default AuthDialog;
