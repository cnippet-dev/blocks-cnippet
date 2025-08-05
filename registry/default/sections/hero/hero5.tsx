"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu } from "lucide-react";
import Link from "next/link";

export default function Component() {
    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('https://res.cloudinary.com/dcxm3ccir/image/upload/v1741613286/h8.jpg')",
                }}
            >
                <div className="absolute inset-0 bg-black/20" />
            </div>

            {/* Navigation */}
            <motion.nav
                className="relative z-10 flex items-center justify-between p-6 lg:px-12"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                {/* Left - Join Banner */}
                <motion.div
                    className="hidden items-center rounded-full bg-black/30 px-4 py-2 text-sm text-white/90 backdrop-blur-sm md:flex"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                    <span>Join our circle for gentle reminders.</span>
                    <Link
                        href="#"
                        className="ml-2 text-yellow-300 transition-colors hover:text-yellow-200"
                    >
                        Join →
                    </Link>
                </motion.div>

                {/* Center - Logo */}
                <motion.div
                    className="flex flex-col items-center text-white"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                    <div className="mb-1 h-12 w-12">
                        <svg
                            viewBox="0 0 48 48"
                            className="h-full w-full fill-current"
                        >
                            <g>
                                {Array.from({ length: 16 }, (_, i) => (
                                    <motion.line
                                        key={i}
                                        x1="24"
                                        y1="24"
                                        x2={
                                            24 +
                                            18 * Math.cos((i * Math.PI) / 8)
                                        }
                                        y2={
                                            24 +
                                            18 * Math.sin((i * Math.PI) / 8)
                                        }
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        initial={{ pathLength: 0, opacity: 0 }}
                                        animate={{ pathLength: 1, opacity: 1 }}
                                        transition={{
                                            duration: 0.8,
                                            delay: 0.5 + i * 0.05,
                                            ease: "easeOut",
                                        }}
                                    />
                                ))}
                            </g>
                        </svg>
                    </div>
                    <span className="text-sm font-light tracking-[0.2em]">
                        SANA
                    </span>
                </motion.div>

                {/* Right - Book Session & Menu */}
                <div className="flex items-center gap-4">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Button
                            variant="secondary"
                            className="border-white/30 bg-white/20 text-white backdrop-blur-sm hover:bg-white/30"
                        >
                            Book a session
                        </Button>
                    </motion.div>
                    <motion.button
                        className="p-2 text-white"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Menu className="h-6 w-6" />
                    </motion.button>
                </div>
            </motion.nav>

            {/* Hero Content */}
            <div className="relative z-10 flex min-h-[calc(100vh-120px)] flex-col items-center justify-center px-6 text-center text-white">
                <motion.div
                    className="max-w-4xl"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                >
                    {/* Main Heading */}
                    <motion.h1
                        className="mb-8 text-4xl leading-tight font-light md:text-6xl lg:text-7xl"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1 }}
                    >
                        Your mindset <br className="hidden sm:block" />
                        shapes{" "}
                        <motion.span
                            className="font-normal italic"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 1.5 }}
                        >
                            everything
                        </motion.span>
                        .
                    </motion.h1>

                    {/* CTA Button */}
                    <motion.div
                        className="mb-12"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 1.8 }}
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Button
                                size="lg"
                                className="rounded-full bg-white px-8 py-3 text-lg text-black hover:bg-white/90"
                            >
                                Join us—today
                            </Button>
                        </motion.div>
                    </motion.div>

                    {/* Subtitle */}
                    <motion.p
                        className="mx-auto max-w-3xl text-lg leading-relaxed text-white/90 md:text-xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 2.2 }}
                    >
                        A calm and steady mind is the foundation of every
                        meaningful
                        <br className="hidden md:block" />
                        change — start within, and watch life shift around you.
                    </motion.p>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 transform"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 2.8 }}
                >
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                        }}
                    >
                        <ChevronDown className="h-6 w-6 text-white/70" />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
