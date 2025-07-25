"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";

export default function Component() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="min-h-screen bg-white">
            <div className="container mx-auto px-4 py-8">
                <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-2 lg:gap-16">
                    {/* Left Column - Form */}
                    <div className="space-y-8">
                        {/* Logo */}
                        <div className="text-sm font-medium text-gray-600">
                            Login Vario
                        </div>

                        {/* Header */}
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold text-gray-900 lg:text-4xl">
                                Welcome to Vario
                            </h1>
                            <p className="text-gray-600">
                                Lorem ipsum dolor sit amet consectetur.
                            </p>
                        </div>

                        {/* Form */}
                        <form className="space-y-6">
                            {/* Name Fields */}
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div className="space-y-2">
                                    <Label
                                        htmlFor="firstName"
                                        className="text-sm font-medium text-gray-900"
                                    >
                                        First Name{" "}
                                        <span className="text-red-500">*</span>
                                    </Label>
                                    <Input
                                        id="firstName"
                                        placeholder="John"
                                        className="h-12 border-gray-200 focus:border-orange-500 focus:ring-orange-500"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label
                                        htmlFor="lastName"
                                        className="text-sm font-medium text-gray-900"
                                    >
                                        Last Name{" "}
                                        <span className="text-red-500">*</span>
                                    </Label>
                                    <Input
                                        id="lastName"
                                        placeholder="Smith"
                                        className="h-12 border-gray-200 focus:border-orange-500 focus:ring-orange-500"
                                    />
                                </div>
                            </div>

                            {/* Email Field */}
                            <div className="space-y-2">
                                <Label
                                    htmlFor="email"
                                    className="text-sm font-medium text-gray-900"
                                >
                                    Email Address{" "}
                                    <span className="text-red-500">*</span>
                                </Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="john@example.com"
                                    className="h-12 border-gray-200 focus:border-orange-500 focus:ring-orange-500"
                                />
                            </div>

                            {/* Password Field */}
                            <div className="space-y-2">
                                <Label
                                    htmlFor="password"
                                    className="text-sm font-medium text-gray-900"
                                >
                                    Password{" "}
                                    <span className="text-red-500">*</span>
                                </Label>
                                <div className="relative">
                                    <Input
                                        id="password"
                                        type={
                                            showPassword ? "text" : "password"
                                        }
                                        placeholder="••••••••"
                                        className="h-12 border-gray-200 pr-12 focus:border-orange-500 focus:ring-orange-500"
                                    />
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="sm"
                                        className="absolute top-0 right-0 h-12 px-3 py-2 hover:bg-transparent"
                                        onClick={() =>
                                            setShowPassword(!showPassword)
                                        }
                                    >
                                        {showPassword ? (
                                            <EyeOff className="h-4 w-4 text-gray-400" />
                                        ) : (
                                            <Eye className="h-4 w-4 text-gray-400" />
                                        )}
                                    </Button>
                                </div>
                            </div>

                            {/* Terms Checkbox */}
                            <div className="flex items-center space-x-2">
                                <Checkbox
                                    id="terms"
                                    className="border-gray-300"
                                />
                                <Label
                                    htmlFor="terms"
                                    className="text-sm text-gray-600"
                                >
                                    I agree to the Terms and Privacy Policy
                                </Label>
                            </div>

                            {/* Register Button */}
                            <Button className="h-12 w-full bg-gray-900 font-medium text-white hover:bg-gray-800">
                                Register
                            </Button>

                            {/* Divider */}
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <Separator className="w-full" />
                                </div>
                                <div className="relative flex justify-center text-xs uppercase">
                                    <span className="bg-white px-2 text-gray-500">
                                        or
                                    </span>
                                </div>
                            </div>

                            {/* Google Button */}
                            <Button
                                variant="outline"
                                className="h-12 w-full border-gray-200 bg-transparent hover:bg-gray-50"
                            >
                                <svg
                                    className="mr-2 h-5 w-5"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="#4285F4"
                                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                    />
                                    <path
                                        fill="#34A853"
                                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                    />
                                    <path
                                        fill="#FBBC05"
                                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                    />
                                    <path
                                        fill="#EA4335"
                                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                    />
                                </svg>
                                Continue with Google
                            </Button>
                        </form>
                    </div>

                    {/* Right Column - Trial Info & Cards */}
                    <div className="space-y-8 lg:pl-8">
                        {/* Trial Info */}
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-gray-900 lg:text-3xl">
                                Free 14-day Trial
                            </h2>
                            <p className="text-gray-600">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Ut metus nunc, fermentum id ex
                                non
                            </p>
                        </div>

                        {/* Credit Cards Mockup */}
                        <div className="relative">
                            <div className="flex items-center justify-center space-x-4 lg:space-x-6">
                                {/* Gray Card */}
                                <div className="relative h-32 w-48 rotate-12 transform overflow-hidden rounded-2xl bg-gradient-to-br from-gray-300 to-gray-400 shadow-lg lg:h-36 lg:w-56">
                                    <div className="absolute top-4 left-4">
                                        <div className="h-6 w-8 rounded bg-white opacity-80"></div>
                                    </div>
                                    <div className="absolute bottom-4 left-4 text-xs text-white opacity-80">
                                        <div>Cardholder Name</div>
                                        <div className="text-sm font-bold">
                                            Arthur Taylor
                                        </div>
                                    </div>
                                    <div className="absolute top-4 right-4">
                                        <div className="text-lg font-bold text-black">
                                            Vario
                                        </div>
                                    </div>
                                    <div className="absolute right-4 bottom-4">
                                        <svg
                                            className="h-6 w-6 text-white opacity-60"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Black Card */}
                                <div className="relative z-10 h-32 w-48 -rotate-6 transform overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-black shadow-xl lg:h-36 lg:w-56">
                                    <div className="absolute top-4 left-4">
                                        <div className="h-6 w-8 rounded bg-gradient-to-r from-red-500 to-orange-500"></div>
                                    </div>
                                    <div className="absolute bottom-4 left-4 text-xs text-white">
                                        <div className="opacity-80">
                                            Cardholder Name
                                        </div>
                                        <div className="text-sm font-bold">
                                            Arthur Taylor
                                        </div>
                                    </div>
                                    <div className="absolute top-4 right-4">
                                        <div className="text-lg font-bold text-white">
                                            Vario
                                        </div>
                                    </div>
                                    <div className="absolute right-4 bottom-4">
                                        <svg
                                            className="h-6 w-6 text-white opacity-60"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Orange Card */}
                                <div className="relative h-32 w-48 rotate-6 transform overflow-hidden rounded-2xl bg-gradient-to-br from-orange-400 to-orange-600 shadow-lg lg:h-36 lg:w-56">
                                    <div className="absolute top-4 left-4">
                                        <div className="h-6 w-8 rounded bg-white opacity-90"></div>
                                    </div>
                                    <div className="absolute bottom-4 left-4 text-xs text-white">
                                        <div className="opacity-90">
                                            Cardholder Name
                                        </div>
                                        <div className="text-sm font-bold">
                                            Arthur Taylor
                                        </div>
                                    </div>
                                    <div className="absolute top-4 right-4">
                                        <div className="text-lg font-bold text-white">
                                            Vario
                                        </div>
                                    </div>
                                    <div className="absolute right-4 bottom-4">
                                        <svg
                                            className="h-6 w-6 text-white opacity-70"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
