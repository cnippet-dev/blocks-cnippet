"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";

export default function Component() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url('/placeholder.svg?height=1080&width=1920')`,
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex min-h-screen items-center justify-center p-4">
                <Card className="w-full max-w-md border-0 bg-white/95 shadow-2xl backdrop-blur-sm">
                    <CardContent className="space-y-6 p-8">
                        {/* Header */}
                        <div className="space-y-2 text-center">
                            <h1 className="text-2xl font-bold text-gray-900">
                                Create an account
                            </h1>
                            <p className="text-gray-600">
                                Already have an account?{" "}
                                <button className="font-medium text-orange-500 underline-offset-4 hover:text-orange-600 hover:underline">
                                    Sign in
                                </button>
                            </p>
                        </div>

                        {/* Form */}
                        <form className="space-y-4">
                            {/* Email Field */}
                            <div className="space-y-2">
                                <Label
                                    htmlFor="email"
                                    className="text-sm font-medium text-gray-700"
                                >
                                    Email address
                                </Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="Curious@george.co"
                                    className="h-12 border-gray-200 bg-white focus:border-orange-500 focus:ring-orange-500"
                                />
                            </div>

                            {/* Name Fields */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label
                                        htmlFor="firstName"
                                        className="text-sm font-medium text-gray-700"
                                    >
                                        First name
                                    </Label>
                                    <Input
                                        id="firstName"
                                        placeholder="Curious"
                                        className="h-12 border-gray-200 bg-white focus:border-orange-500 focus:ring-orange-500"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label
                                        htmlFor="lastName"
                                        className="text-sm font-medium text-gray-700"
                                    >
                                        Last name
                                    </Label>
                                    <Input
                                        id="lastName"
                                        placeholder="George"
                                        className="h-12 border-gray-200 bg-white focus:border-orange-500 focus:ring-orange-500"
                                    />
                                </div>
                            </div>

                            {/* Password Field */}
                            <div className="space-y-2">
                                <Label
                                    htmlFor="password"
                                    className="text-sm font-medium text-gray-700"
                                >
                                    Password
                                </Label>
                                <div className="relative">
                                    <Input
                                        id="password"
                                        type={
                                            showPassword ? "text" : "password"
                                        }
                                        placeholder="••••••••••"
                                        className="h-12 border-gray-200 bg-white pr-12 focus:border-orange-500 focus:ring-orange-500"
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

                            {/* Newsletter Checkbox */}
                            <div className="flex items-center space-x-2 py-2">
                                <Checkbox
                                    id="newsletter"
                                    className="border-gray-300"
                                />
                                <Label
                                    htmlFor="newsletter"
                                    className="text-sm text-gray-600"
                                >
                                    send me a newsletter
                                </Label>
                            </div>

                            {/* Create Account Button */}
                            <Button className="h-12 w-full rounded-lg border-0 bg-amber-200 font-medium text-gray-900 shadow-sm hover:bg-amber-300">
                                Create account
                            </Button>

                            {/* Terms */}
                            <p className="text-xs leading-relaxed text-gray-500">
                                By clicking Create account, I agree that I have
                                read and accepted the{" "}
                                <button className="text-orange-500 underline-offset-4 hover:text-orange-600 hover:underline">
                                    Terms of Use
                                </button>{" "}
                                and{" "}
                                <button className="text-orange-500 underline-offset-4 hover:text-orange-600 hover:underline">
                                    Privacy Policy
                                </button>
                                .
                            </p>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
