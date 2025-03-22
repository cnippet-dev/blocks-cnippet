"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function LoginFour() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle login logic here
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
            <div className="w-full max-w-md space-y-8 rounded-lg bg-white p-8 shadow-sm">
                {/* Logo */}
                <div className="flex justify-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-600">
                        <div className="h-4 w-4 rounded-full bg-white"></div>
                    </div>
                </div>

                {/* Header */}
                <div className="text-center">
                    <h2 className="text-2xl font-semibold text-gray-900">
                        Log in to your account
                    </h2>
                    <p className="mt-2 text-gray-600">
                        Welcome back! Please enter your details.
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex gap-4 border-b">
                    <Link
                        href="/signup"
                        className="pb-4 text-gray-500 hover:text-gray-700"
                    >
                        Sign up
                    </Link>
                    <Link
                        href="/login"
                        className="border-b-2 border-purple-600 pb-4 text-gray-900"
                    >
                        Log in
                    </Link>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                    <div className="space-y-4">
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-purple-500 focus:ring-purple-500 focus:outline-none"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-purple-500 focus:ring-purple-500 focus:outline-none"
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                                className="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                            />
                            <label
                                htmlFor="remember-me"
                                className="ml-2 block text-sm text-gray-700"
                            >
                                Remember for 30 days
                            </label>
                        </div>

                        <Link
                            href="/forgot-password"
                            className="text-sm text-purple-600 hover:text-purple-500"
                        >
                            Forgot password
                        </Link>
                    </div>

                    <div className="space-y-4">
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md border border-transparent bg-purple-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-purple-700 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:outline-none"
                        >
                            Sign in
                        </button>

                        <button
                            type="button"
                            className="flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:outline-none"
                        >
                            Sign in with Google
                        </button>
                    </div>

                    <div className="text-center text-sm text-gray-600">
                        Don't have an account?{" "}
                        <Link
                            href="/signup"
                            className="text-purple-600 hover:text-purple-500"
                        >
                            Sign up
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
} 