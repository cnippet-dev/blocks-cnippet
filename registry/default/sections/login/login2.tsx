"use client";

import { useState } from "react";
import { Eye, EyeOff, Facebook, Instagram, Linkedin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

export default function Component() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 py-8 lg:py-16">
                <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-2 lg:gap-16">
                    {/* Left Column - Security & App Showcase */}
                    <div className="space-y-8 text-center lg:text-left">
                        {/* Logo */}
                        <div className="flex justify-center lg:justify-start">
                            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm">
                                <svg
                                    className="h-8 w-8 text-orange-500"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                                </svg>
                            </div>
                        </div>

                        {/* Header */}
                        <div className="space-y-4">
                            <h1 className="text-3xl font-bold text-gray-900 lg:text-4xl xl:text-5xl">
                                World Class Security
                            </h1>
                            <p className="mx-auto max-w-md text-lg text-gray-600 lg:mx-0">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing.
                            </p>
                        </div>

                        {/* App Store Button */}
                        <div className="flex justify-center lg:justify-start">
                            <Button className="rounded-full bg-gray-900 px-8 py-3 font-medium text-white hover:bg-gray-800">
                                Vario App Store
                            </Button>
                        </div>

                        {/* Phone and Card Mockup */}
                        <div className="relative mt-12 flex justify-center lg:justify-start">
                            <div className="relative">
                                {/* iPhone Mockup */}
                                <div className="h-[520px] w-64 rounded-[3rem] bg-black p-2 shadow-2xl">
                                    <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] bg-white">
                                        {/* Status Bar */}
                                        <div className="flex items-center justify-between px-6 pt-4 pb-2">
                                            <span className="text-sm font-semibold">
                                                9:41
                                            </span>
                                            <div className="flex items-center space-x-1">
                                                <div className="flex space-x-1">
                                                    <div className="h-1 w-1 rounded-full bg-black"></div>
                                                    <div className="h-1 w-1 rounded-full bg-black"></div>
                                                    <div className="h-1 w-1 rounded-full bg-black"></div>
                                                    <div className="h-1 w-1 rounded-full bg-gray-300"></div>
                                                </div>
                                                <svg
                                                    className="h-4 w-6"
                                                    fill="black"
                                                    viewBox="0 0 24 16"
                                                >
                                                    <rect
                                                        x="1"
                                                        y="3"
                                                        width="22"
                                                        height="10"
                                                        rx="2"
                                                        fill="none"
                                                        stroke="black"
                                                        strokeWidth="1"
                                                    />
                                                    <rect
                                                        x="2"
                                                        y="4"
                                                        width="18"
                                                        height="8"
                                                        rx="1"
                                                        fill="black"
                                                    />
                                                </svg>
                                            </div>
                                        </div>

                                        {/* App Content */}
                                        <div className="px-6 py-8">
                                            <div className="mb-8 flex items-center space-x-3">
                                                <svg
                                                    className="h-8 w-8 text-orange-500"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                                                </svg>
                                                <span className="text-xl font-bold">
                                                    Vario
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Credit Card */}
                                <div className="absolute -right-8 -bottom-8 h-48 w-80 rotate-6 transform rounded-2xl bg-gradient-to-br from-gray-900 to-black p-6 text-white shadow-2xl">
                                    {/* Card Elements */}
                                    <div className="mb-8 flex items-start justify-between">
                                        <div className="h-8 w-12 rounded bg-gradient-to-r from-yellow-400 to-yellow-600"></div>
                                        <div className="flex items-center space-x-2">
                                            <div className="h-8 w-8 rounded-full bg-red-500 opacity-80"></div>
                                            <div className="-ml-4 h-8 w-8 rounded-full bg-yellow-500 opacity-80"></div>
                                        </div>
                                    </div>

                                    {/* Contactless Symbol */}
                                    <div className="absolute top-6 left-20">
                                        <svg
                                            className="h-6 w-6 text-white opacity-60"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
                                            />
                                        </svg>
                                    </div>

                                    {/* Card Info */}
                                    <div className="absolute bottom-6 left-6">
                                        <div className="mb-1 text-xs opacity-80">
                                            Cardholder Name
                                        </div>
                                        <div className="text-lg font-bold">
                                            Arthur Taylor
                                        </div>
                                    </div>

                                    {/* Card Logo */}
                                    <div className="absolute right-6 bottom-6">
                                        <div className="bg-opacity-20 flex h-8 w-8 items-center justify-center rounded-full bg-white">
                                            <div className="h-4 w-4 rounded-full bg-white"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Login Form */}
                    <div className="mx-auto max-w-md space-y-8 lg:mx-0">
                        {/* Header */}
                        <div className="space-y-2 text-center lg:text-left">
                            <h2 className="text-2xl font-bold text-gray-900 lg:text-3xl">
                                Login to Vario
                            </h2>
                            <p className="text-gray-600">
                                Lorem ipsum dolor sit amet consectetur.
                            </p>
                        </div>

                        {/* Social Icons */}
                        <div className="flex justify-center space-x-6 lg:justify-start">
                            <Button variant="ghost" size="sm" className="p-2">
                                <Facebook className="h-5 w-5 text-gray-600" />
                            </Button>
                            <Button variant="ghost" size="sm" className="p-2">
                                <Instagram className="h-5 w-5 text-gray-600" />
                            </Button>
                            <Button variant="ghost" size="sm" className="p-2">
                                <Linkedin className="h-5 w-5 text-gray-600" />
                            </Button>
                        </div>

                        {/* Divider */}
                        <div className="text-center text-gray-500">or</div>

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
                                        className="h-12 border-gray-200 bg-white focus:border-orange-500 focus:ring-orange-500"
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
                                        className="h-12 border-gray-200 bg-white focus:border-orange-500 focus:ring-orange-500"
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
                                    className="h-12 border-gray-200 bg-white focus:border-orange-500 focus:ring-orange-500"
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
                            <Button className="h-12 w-full rounded-full bg-gray-900 font-medium text-white hover:bg-gray-800">
                                Register
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
