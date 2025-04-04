"use client";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Templates = () => {
    const [hoverStates, setHoverStates] = useState<boolean[]>(
        Array(5).fill(false),
    );

    const handleHover = (index: number, isHovering: boolean) => {
        setHoverStates((prev) => {
            const newStates = [...prev];
            newStates[index] = isHovering;
            return newStates;
        });
    };

    return (
        <section className="dark:bg-black">
            <div className="mx-auto w-full max-w-6xl px-4 md:px-10">
                <div className="grid h-full w-full grid-cols-12 border border-t-0 py-0 dark:border-neutral-800">
                    <div className="col-span-12 bg-white text-center dark:bg-black">
                        <h2 className="mt-16 mb-2 text-2xl leading-tight font-semibold tracking-tight md:text-5xl">
                            Production-ready templates to launch tomorrow
                        </h2>
                        <p className="mb-8 px-5 text-sm text-gray-500 md:mb-16 md:text-base">
                            Carefully crafted templates built for experts with
                            the latest technology stack based on React and
                            Next.js. Get templates for anything to build and
                            launch your idea.
                        </p>
                        <div className="grid grid-cols-1 divide-y border-t md:grid-cols-12 dark:divide-neutral-800 dark:border-neutral-800">
                            <div
                                className="relative overflow-hidden border-r p-5 md:col-span-7"
                                onMouseEnter={() => handleHover(0, true)}
                                onMouseLeave={() => handleHover(0, false)}
                            >
                                <Image
                                    src="/images/t1.png"
                                    alt="Dashboard Template"
                                    width={600}
                                    height={400}
                                    className="h-full w-full object-cover"
                                />
                                <motion.div
                                    className="pointer-events-none absolute bottom-0 left-0 h-24 w-full bg-white/20 backdrop-blur-sm dark:bg-black/20"
                                    animate={
                                        hoverStates[0] ? "visible" : "hidden"
                                    }
                                    variants={{
                                        hidden: { opacity: 0 },
                                        visible: { opacity: 1 },
                                    }}
                                    transition={{
                                        duration: 0.2,
                                        ease: "easeOut",
                                    }}
                                >
                                    <h3 className="mb-2 text-xl font-bold">
                                        Dashboard Template
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        Complete dashboard with analytics to
                                        better understand your data. Data
                                        visualization and reporting all in one
                                        application experience.
                                    </p>
                                </motion.div>
                            </div>

                            <div
                                className="relative overflow-hidden p-5 md:col-span-5"
                                onMouseEnter={() => handleHover(1, true)}
                                onMouseLeave={() => handleHover(1, false)}
                            >
                                <Image
                                    src="/images/c2.webp"
                                    alt="Dashboard Template"
                                    width={600}
                                    height={400}
                                    className="h-full w-full object-cover object-left"
                                />
                                <motion.div
                                    className="pointer-events-none absolute bottom-0 left-0 h-24 w-full bg-white/50 backdrop-blur-sm"
                                    animate={
                                        hoverStates[1] ? "visible" : "hidden"
                                    }
                                    variants={{
                                        hidden: { opacity: 0 },
                                        visible: { opacity: 1 },
                                    }}
                                    transition={{
                                        duration: 0.2,
                                        ease: "easeOut",
                                    }}
                                >
                                    <h3 className="mb-2 text-xl font-bold">
                                        SaaS Marketing Website
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        Complete marketing website with landing
                                        pages designed to convert visitors into
                                        users.
                                    </p>
                                </motion.div>
                            </div>

                            <div
                                className="relative overflow-hidden border-r p-5 md:col-span-4"
                                onMouseEnter={() => handleHover(2, true)}
                                onMouseLeave={() => handleHover(2, false)}
                            >
                                <Image
                                    src="/images/c3.jpg"
                                    alt="Dashboard Template"
                                    width={600}
                                    height={400}
                                    className="h-full w-full object-cover object-left"
                                />
                                <motion.div
                                    className="pointer-events-none absolute bottom-0 left-0 h-24 w-full bg-white/50 backdrop-blur-sm"
                                    animate={
                                        hoverStates[2] ? "visible" : "hidden"
                                    }
                                    variants={{
                                        hidden: { opacity: 0 },
                                        visible: { opacity: 1 },
                                    }}
                                    transition={{
                                        duration: 0.2,
                                        ease: "easeOut",
                                    }}
                                >
                                    <h3 className="mb-2 text-lg font-bold">
                                        Report Pages
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        Clean report design to summarize data in
                                        a beautiful way.
                                    </p>
                                </motion.div>
                            </div>

                            <div
                                className="relative overflow-hidden border-r p-5 md:col-span-4"
                                onMouseEnter={() => handleHover(3, true)}
                                onMouseLeave={() => handleHover(3, false)}
                            >
                                <Image
                                    src="/images/c1.jpg"
                                    alt="Dashboard Template"
                                    width={1920}
                                    height={1080}
                                    className="h-full w-full object-cover object-left"
                                />
                                <motion.div
                                    className="pointer-events-none absolute bottom-0 left-0 h-24 w-full bg-white/50 backdrop-blur-sm"
                                    animate={
                                        hoverStates[3] ? "visible" : "hidden"
                                    }
                                    variants={{
                                        hidden: { opacity: 0 },
                                        visible: { opacity: 1 },
                                    }}
                                    transition={{
                                        duration: 0.2,
                                        ease: "easeOut",
                                    }}
                                >
                                    <h3 className="mb-2 text-lg font-bold">
                                        SaaS Template
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        Build your SaaS product with ease using
                                        this template. Everything you need to
                                        build your SaaS application.
                                    </p>
                                </motion.div>
                            </div>

                            <div
                                className="relative overflow-hidden border-b p-5 md:col-span-4"
                                onMouseEnter={() => handleHover(4, true)}
                                onMouseLeave={() => handleHover(4, false)}
                            >
                                <Image
                                    src="/images/c4.jpg"
                                    alt="Dashboard Template"
                                    width={600}
                                    height={400}
                                    className="h-full w-full object-cover object-left"
                                />
                                <motion.div
                                    className="pointer-events-none absolute bottom-0 left-0 h-24 w-full bg-white/50 backdrop-blur-sm"
                                    animate={
                                        hoverStates[4] ? "visible" : "hidden"
                                    }
                                    variants={{
                                        hidden: { opacity: 0 },
                                        visible: { opacity: 1 },
                                    }}
                                    transition={{
                                        duration: 0.2,
                                        ease: "easeOut",
                                    }}
                                >
                                    <h3 className="mb-2 text-lg font-bold">
                                        One-Page Website
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        Launch your idea with a beautiful
                                        website template. Design in beautiful
                                        Gradual transitions, simple but with
                                        impact.
                                    </p>
                                </motion.div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <Link
                                href="/"
                                className="group relative w-full overflow-hidden bg-white p-5 dark:bg-black"
                            >
                                <div className="absolute inset-0 w-full -translate-x-[100%] bg-black transition-transform duration-300 group-hover:translate-x-[0%] dark:bg-white" />
                                <h3 className="relative z-10 text-2xl text-slate-950 duration-300 group-hover:text-white dark:text-white dark:group-hover:text-black">
                                    Explore More
                                </h3>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Templates;
