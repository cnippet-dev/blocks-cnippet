"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Card,
    CardContent,
    CardHeader,
    CardFooter,
} from "@/components/ui/card";
import Image from "next/image";

export default function LoginVariant3() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle login logic
        console.log({ email, password });
    };

    return (
        <div className="flex min-h-[600px] items-center justify-center bg-gray-100 p-4">
            <Card className="mx-auto w-full max-w-md shadow-xl">
                <CardHeader className="space-y-1 text-center">
                    <div className="mx-auto mb-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#7C3AED]">
                            <div className="h-6 w-6 rounded-full bg-white/30"></div>
                        </div>
                    </div>
                    <h1 className="text-2xl font-bold">Welcome back</h1>
                    <p className="text-gray-500">
                        Enter your details to sign in
                    </p>
                </CardHeader>
                <CardContent>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="space-y-2">
                            <label
                                htmlFor="email-v3"
                                className="text-sm font-medium"
                            >
                                Email
                            </label>
                            <Input
                                type="email"
                                id="email-v3"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="w-full"
                            />
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="password-v3"
                                    className="text-sm font-medium"
                                >
                                    Password
                                </label>
                                <Button
                                    type="button"
                                    variant="link"
                                    className="p-0 text-xs text-[#7C3AED] hover:text-[#9461FF]"
                                >
                                    Forgot password?
                                </Button>
                            </div>
                            <Input
                                type="password"
                                id="password-v3"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full"
                            />
                        </div>
                        <div className="flex items-center space-x-2">
                            <Checkbox id="remember-v3" />
                            <label
                                htmlFor="remember-v3"
                                className="text-sm leading-none text-gray-500 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Remember for 30 days
                            </label>
                        </div>
                        <Button
                            type="submit"
                            className="w-full bg-[#7C3AED] hover:bg-[#9461FF]"
                        >
                            Sign in
                        </Button>
                    </form>
                    <div className="relative my-4">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t border-gray-300"></span>
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-white px-2 text-gray-500">
                                Or continue with
                            </span>
                        </div>
                    </div>
                    <Button type="button" variant="outline" className="w-full">
                        <Image
                            src="/placeholder.svg?height=20&width=20"
                            alt="Google"
                            width={20}
                            height={20}
                            className="mr-2 h-4 w-4"
                        />
                        Google
                    </Button>
                </CardContent>
                <CardFooter className="flex justify-center">
                    <p className="text-center text-sm text-gray-600">
                        Don't have an account?{" "}
                        <Button
                            type="button"
                            variant="link"
                            className="p-0 text-[#7C3AED] hover:text-[#9461FF]"
                        >
                            Sign up
                        </Button>
                    </p>
                </CardFooter>
            </Card>
        </div>
    );
}
