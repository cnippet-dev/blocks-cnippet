"use client";

import type React from "react";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function LoginVariant4() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle login logic
        console.log({ email, password });
    };

    return (
        <div className="flex min-h-[600px] overflow-hidden rounded-xl border border-gray-200 shadow-lg">
            {/* Left Side - Login Form */}
            <div className="flex w-full flex-col justify-center bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 p-8 text-white md:p-12 lg:w-1/2">
                {/* Logo */}
                <div className="mx-auto w-full max-w-md">
                    <div className="mb-12">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                            <div className="h-6 w-6 rounded-full bg-white/50"></div>
                        </div>
                    </div>

                    {/* Welcome Text */}
                    <h1 className="mb-2 text-3xl font-semibold">
                        Welcome back
                    </h1>
                    <p className="mb-8 text-indigo-100">
                        Welcome back! Please enter your details.
                    </p>

                    {/* Login Form */}
                    <form
                        className="flex flex-col gap-6"
                        onSubmit={handleSubmit}
                    >
                        <div>
                            <label
                                htmlFor="email-v4"
                                className="mb-2 block text-sm"
                            >
                                Email
                            </label>
                            <Input
                                type="email"
                                id="email-v4"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="w-full rounded-lg border-0 bg-white/10 p-3 text-white backdrop-blur-sm transition-all outline-none placeholder:text-indigo-200 focus:ring-2 focus:ring-white/30"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="password-v4"
                                className="mb-2 block text-sm"
                            >
                                Password
                            </label>
                            <Input
                                type="password"
                                id="password-v4"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full rounded-lg border-0 bg-white/10 p-3 text-white backdrop-blur-sm transition-all outline-none focus:ring-2 focus:ring-white/30"
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Checkbox
                                    id="remember-v4"
                                    className="border-indigo-300 text-pink-500 focus:ring-pink-500"
                                />
                                <label
                                    htmlFor="remember-v4"
                                    className="text-sm text-indigo-100"
                                >
                                    Remember for 30 days
                                </label>
                            </div>
                            <Button
                                type="button"
                                variant="link"
                                className="p-0 text-sm text-indigo-100 hover:text-white"
                            >
                                Forgot password
                            </Button>
                        </div>

                        <Button
                            type="submit"
                            className="w-full rounded-lg bg-white py-3 text-indigo-900 transition-colors hover:bg-indigo-100"
                        >
                            Sign in
                        </Button>

                        <Button
                            type="button"
                            variant="outline"
                            className="flex w-full items-center justify-center gap-2 rounded-lg border border-white/30 py-3 text-white backdrop-blur-sm transition-colors hover:bg-white/10"
                        >
                            <Image
                                src="/placeholder.svg?height=20&width=20"
                                alt="Google"
                                width={20}
                                height={20}
                                className="h-5 w-5"
                            />
                            Sign in with Google
                        </Button>

                        <p className="text-center text-sm text-indigo-100">
                            Don't have an account?{" "}
                            <Button
                                type="button"
                                variant="link"
                                className="p-0 text-white hover:text-indigo-200"
                            >
                                Sign up
                            </Button>
                        </p>
                    </form>
                </div>
            </div>

            {/* Right Side - Testimonial */}
            <div className="relative hidden bg-gradient-to-br from-indigo-100 to-pink-100 lg:block lg:w-1/2">
                <div className="absolute inset-0 overflow-hidden rounded-xl">
                    <Image
                        src="https://res.cloudinary.com/dphulm0s9/image/upload/v1741613287/h6.jpg"
                        alt="Testimonial"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-indigo-900/80 to-purple-800/80 p-16 text-white">
                    <blockquote className="mb-6 text-3xl font-medium">
                        "Untitled has saved us thousands of hours of work. We're
                        able to spin up projects faster and take on more
                        clients."
                    </blockquote>
                    <div>
                        <div className="text-xl font-semibold">Lulu Meyers</div>
                        <div className="text-indigo-100">
                            Product Manager, Hourglass
                            <div className="mt-1 text-sm">
                                Web Design Agency
                            </div>
                        </div>
                    </div>
                    <div className="absolute right-16 bottom-16 flex gap-4">
                        <Button
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 p-0 backdrop-blur-sm transition-colors hover:bg-white/20"
                            variant="ghost"
                            size="icon"
                        >
                            <span className="sr-only">
                                Previous testimonial
                            </span>
                            <ChevronLeft className="h-5 w-5" />
                        </Button>
                        <Button
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 p-0 backdrop-blur-sm transition-colors hover:bg-white/20"
                            variant="ghost"
                            size="icon"
                        >
                            <span className="sr-only">Next testimonial</span>
                            <ChevronRight className="h-5 w-5" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
