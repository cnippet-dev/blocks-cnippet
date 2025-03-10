"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { signIn } from "next-auth/react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

const userSignInValidation = z.object({
    email: z.string().email(),
    password: z.string().min(6),
});

interface SignInFormProps {
    callbackUrl: string;
}

const SignInForm = ({ callbackUrl }: SignInFormProps) => {
    const form = useForm<z.infer<typeof userSignInValidation>>({
        resolver: zodResolver(userSignInValidation),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const router = useRouter();

    async function onSubmit(values: z.infer<typeof userSignInValidation>) {
        // console.log(values)
        const res = await signIn("credentials", {
            email: values.email,
            password: values.password,
            callbackUrl,
        });

        console.log("RES", res);

        if (res?.ok) {
            router.push("/onboarding");
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
                <div className="space-y-2">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="mail@example.com"
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
                                    <Input
                                        type="password"
                                        placeholder="your password"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <Button className="mt-6 w-full" type="submit">
                    Sign In
                </Button>
            </form>
            <div className="my-4 flex items-center justify-center">
                <div className="w-full border-b border-gray-400"></div>
                <span className="px-2 text-gray-400">or</span>
                <div className="w-full border-b border-gray-400"></div>
            </div>

            <p className="mt-2 text-center text-sm text-gray-600">
                Don&apos;t have an account?&nbsp;
                <Link className="text-blue-600 hover:underline" href="/signup">
                    Sign Up
                </Link>
            </p>
        </Form>
    );
};

export default SignInForm;
