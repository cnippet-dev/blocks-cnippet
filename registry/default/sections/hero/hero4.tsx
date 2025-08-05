"use client";

import { motion } from "motion/react";
import { ChevronRight, Sparkles } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import DotsPattern from "@/components/motion/dots-pattern";
import {
    RiFigmaLine,
    RiFlashlightFill,
    RiNotionFill,
    RiSlackFill,
} from "@remixicon/react";

export default function Component() {
    return (
        <div className="relative min-h-screen overflow-hidden bg-[#fdf9ed]">
            <div className="relative z-10 mx-auto h-screen max-w-7xl py-16">
                <motion.div
                    className="grid grid-cols-12"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="col-span-7 space-y-8">
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

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                        >
                            <h1 className="font-funn text-5xl font-medium text-gray-900 lg:text-6xl">
                                Collecting customer <br />
                                feedback,{" "}
                                <span className="text-orange-500">
                                    back-to-back.
                                </span>
                            </h1>
                        </motion.div>
                    </div>

                    <div className="col-span-5 flex flex-col items-start justify-end space-y-6">
                        <motion.p
                            className="max-w-full text-lg leading-relaxed text-gray-700"
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
                    </div>
                </motion.div>

                <div className="relative mt-20 h-[35rem]">
                    <DotsPattern
                        backgroundColor="transparent"
                        dotColor="#4A5568"
                        gridSpacing={30}
                    />
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.3,
                            ease: "easeOut",
                        }}
                        className="absolute bottom-0 -z-20 h-full w-full border-0"
                    >
                        <div className="pointer-events-none mx-auto h-[35rem] max-w-6xl rounded-t-full bg-yellow-200"></div>
                    </motion.div>
                    <motion.div
                        className="absolute right-1/2 bottom-0 mx-auto w-full max-w-4xl translate-x-1/2"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.3,
                            ease: "easeOut",
                        }}
                    >
                        {/* <Image
                            src="/s1.svg"
                            alt="Jambo Dashboard Interface"
                            width={600}
                            height={400}
                            className="mr-10 ml-auto aspect-square size-68 translate-y-32 rounded-xl object-cover object-center"
                            priority
                        /> */}

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
                            <div className="overflow-hidden rounded-2xl">
                                <Image
                                    src="https://res.cloudinary.com/dcxm3ccir/image/upload/v1741613286/h12.jpg"
                                    alt="Jambo Dashboard Interface"
                                    width={600}
                                    height={400}
                                    className="mx-auto h-[30rem] w-full rounded-t-xl object-cover object-center"
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
