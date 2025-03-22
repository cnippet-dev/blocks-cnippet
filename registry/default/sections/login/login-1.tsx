import React from "react";
import Image from "next/image";

const LoginSection = () => {
    return (
        <div className="flex min-h-screen">
            {/* Left Side - Login Form */}
            <div className="flex w-full flex-col justify-center bg-black p-8 text-white md:p-12 lg:w-1/2">
                {/* Logo */}
                <div className="mx-auto max-w-md w-full">
                    <div className="mb-12">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#7C3AED]">
                            <div className="h-6 w-6 rounded-full bg-white/30"></div>
                        </div>
                    </div>

                    {/* Welcome Text */}
                    <h1 className="mb-2 text-3xl font-semibold">
                        Welcome back
                    </h1>
                    <p className="mb-8 text-gray-400">
                        Welcome back! Please enter your details.
                    </p>

                    {/* Login Form */}
                    <form className="flex flex-col gap-6">
                        <div>
                            <label
                                htmlFor="email"
                                className="mb-2 block text-sm"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                className="w-full rounded-lg border border-gray-800 bg-gray-900 p-3 transition-all outline-none focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED]"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="password"
                                className="mb-2 block text-sm"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="w-full rounded-lg border border-gray-800 bg-gray-900 p-3 transition-all outline-none focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED]"
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <label className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    className="rounded border-gray-600 text-[#7C3AED] focus:ring-[#7C3AED]"
                                />
                                <span className="text-sm text-gray-400">
                                    Remember for 30 days
                                </span>
                            </label>
                            <button
                                type="button"
                                className="text-sm text-[#7C3AED] hover:text-[#9461FF]"
                            >
                                Forgot password
                            </button>
                        </div>

                        <button
                            type="submit"
                            className="w-full rounded-lg bg-[#7C3AED] py-3 text-white transition-colors hover:bg-[#9461FF]"
                        >
                            Sign in
                        </button>

                        <button
                            type="button"
                            className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-800 py-3 text-white transition-colors hover:bg-gray-900"
                        >
                            <Image
                                src="/google.svg"
                                alt="Google"
                                width={20}
                                height={20}
                                className="h-5 w-5"
                            />
                            Sign in with Google
                        </button>

                        <p className="text-center text-sm text-gray-400">
                            Don't have an account?{" "}
                            <button
                                type="button"
                                className="text-[#7C3AED] hover:text-[#9461FF]"
                            >
                                Sign up
                            </button>
                        </p>
                    </form>
                </div>
            </div>

            {/* Right Side - Testimonial */}
            <div className="relative hidden bg-black lg:block lg:w-1/2">
                <div className="absolute inset-4 rounded-xl overflow-hidden">
                    <Image
                        src="https://res.cloudinary.com/dphulm0s9/image/upload/v1741613287/h6.jpg"
                        alt="Testimonial"
                        layout="fill"
                        objectFit="cover"
                        className="brightness-90"
                    />
                </div>
                <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/50 to-black/50 p-16 text-white">
                    <blockquote className="mb-6 text-3xl font-medium">
                        "Untitled has saved us thousands of hours of work. We're
                        able to spin up projects faster and take on more
                        clients."
                    </blockquote>
                    <div>
                        <div className="text-xl font-semibold">Lulu Meyers</div>
                        <div className="text-gray-300">
                            Product Manager, Hourglass
                            <div className="mt-1 text-sm">
                                Web Design Agency
                            </div>
                        </div>
                    </div>
                    <div className="absolute right-16 bottom-16 flex gap-4">
                        <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 transition-colors hover:bg-white/10">
                            <span className="sr-only">
                                Previous testimonial
                            </span>
                            <svg
                                width="20"
                                height="20"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M15 19l-7-7 7-7"
                                />
                            </svg>
                        </button>
                        <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 transition-colors hover:bg-white/10">
                            <span className="sr-only">Next testimonial</span>
                            <svg
                                width="20"
                                height="20"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginSection;
