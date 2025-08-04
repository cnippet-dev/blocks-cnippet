"use client";

import { motion } from "motion/react";
import { ChevronRight, Sparkles } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import DotsPattern from "@/components/motion/dots-pattern";
import { RiFlashlightFill } from "@remixicon/react";

export default function Component() {
    return (
        <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-orange-50 to-red-50">
            {/* Dotted pattern background */}
            <DotsPattern
                backgroundColor="#F8F5EC"
                dotColor="#4A5568"
                gridSpacing={30}
            />

            {/* <div className="absolute inset-0 opacity-30">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `radial-gradient(circle, #f97316 1px, transparent 1px)`,
                        backgroundSize: "24px 24px",
                    }}
                />
            </div> */}

            <div className="relative z-10 mx-auto h-screen max-w-7xl border-l border-neutral-400 py-16 pl-16">
                <div className="grid items-center gap-12 lg:grid-cols-12">
                    <motion.div
                        className="col-span-10 space-y-8 pt-20"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        {/* Beta Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                        >
                            <Badge
                                variant="secondary"
                                className="bg-white px-2 py-2 text-xs font-medium text-black"
                            >
                                <RiFlashlightFill className="mr-2 h-4 w-4 rounded-full bg-purple-50 p-0.5 text-purple-600 shadow" />
                                New features are now available{" "}
                                <span className="text-purple-500">(Beta)</span>
                            </Badge>
                        </motion.div>

                        {/* Main Headline */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                        >
                            <h1 className="font-funn text-5xl font-medium text-gray-900 lg:text-7xl">
                                Collecting customer <br />
                                feedback,{" "}
                                <span className="text-orange-500">
                                    back-to-back.
                                </span>
                            </h1>
                        </motion.div>

                        {/* Subtitle */}
                        <motion.p
                            className="max-w-lg text-lg leading-relaxed text-gray-700"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                        >
                            Use Jambo for analyzing and engaging with customer
                            feedback and unlocking valuable insights.
                        </motion.p>

                        <motion.div
                            className="flex flex-col items-start gap-6 sm:flex-row sm:items-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                        >
                            <Button
                                size="lg"
                                className="group rounded-full bg-gray-900 px-4 py-4 text-base font-medium text-white hover:bg-gray-800"
                            >
                                See it in action
                                <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </Button>

                            <p className="text-sm font-medium text-gray-700">
                                50+ people use Jambo today.
                            </p>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="absolute w-full max-w-3xl bottom-0 right-0"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.3,
                            ease: "easeOut",
                        }}
                    >
                        <motion.div
                            className="relative z-10"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.6,
                                ease: "easeOut",
                            }}
                        >
                            <div className="overflow-hidden rounded-2xl bg-white p-1 shadow-2xl">
                                <Image
                                    src="https://res.cloudinary.com/dcxm3ccir/image/upload/v1741613286/h10.jpg"
                                    alt="Jambo Dashboard Interface"
                                    width={600}
                                    height={400}
                                    className="h-80 w-full rounded-xl object-cover object-center"
                                    priority
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
