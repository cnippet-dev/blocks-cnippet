import { forwardRef, useState } from "react";
import { RiArrowRightLine } from "@remixicon/react";
import { motion } from "motion/react";
import Link from "next/link";

import { TypingText } from "@/components/motion/typing-text";

const metrics = [
    {
        title: "500+",
        description: "UI Components",
        content: "ui.cnippet.site",
        content2:
            "Core components, motion effects, text animations, charts, and interactive elements for modern web applications.",
    },
    {
        title: "100+",
        description: "Page Templates",
        content: "block.cnippet.site",
        content2:
            "Complete sections, landing pages, about pages, contact forms, and full website templates ready to deploy.",
    },
    {
        title: "200+",
        description: "Guides & Tutorials",
        content: "next.cnippet.site",
        content2:
            "Comprehensive guides for authentication, payment gateways, SEO optimization, and advanced web development techniques.",
    },
    {
        title: "24/7",
        description: "Support",
        content: "Community Driven",
        content2:
            "Active community support, documentation, and resources to help you succeed with every project.",
    },
];

const Features = forwardRef<HTMLDivElement>((props, ref) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <>
            <section
                {...props}
                className="mx-auto w-full max-w-[1536px] border-t-0 border-b px-30 dark:border-neutral-800 dark:bg-black"
            >
                <div className="border border-t-0 border-b-0 dark:border-neutral-800">
                    <div className="max-w-2xl px-4 py-20">
                        <div className="h-[calc(2*theme(fontSize.6xl)*theme(lineHeight.normal))] md:h-[calc(2*theme(fontSize.5xl)*theme(lineHeight.tight))]">
                            <TypingText
                                className="text-2xl leading-tight font-medium tracking-tight md:text-5xl"
                                speed={60}
                                showCursor={false}
                                once={true}
                            >
                                Everything You Need for a Complete Website
                            </TypingText>
                        </div>

                        <p className="mt-2 text-gray-500">
                            Cnippet block offers a growing library of ready-made
                            sections (like hero, features, team), full pages
                            (landing, about, contact), and complete website
                            templates. Build your next project faster with
                            SEO-friendly, customizable blocks.
                        </p>
                    </div>
                    <div className="grid grid-cols-6 divide-x border-t dark:divide-neutral-800 dark:border-neutral-800">
                        <div
                            ref={ref}
                            className="col-span-2 flex flex-col items-start justify-start gap-2 px-4 py-10"
                        >
                            <h3 className="text-2xl font-medium tracking-tight">
                                ui.cnippet.site - Core Components
                            </h3>
                            <p className="text-gray-500">
                                Access 500+ production-ready UI components
                                including accordions, dialogs, toasts, motion
                                effects, text animations, and interactive
                                charts. All components are TypeScript-ready and
                                optimized for performance.
                            </p>
                        </div>

                        <div className="col-span-2 flex flex-col items-start justify-start gap-2 px-4 py-10">
                            <h3 className="text-2xl font-medium tracking-tight">
                                block.cnippet.site - Sections & Templates
                            </h3>
                            <p className="text-gray-500">
                                Access 100+ pre-built sections, pages, and full
                                website templates. Perfect for landing pages,
                                about pages, contact forms, and more. All blocks
                                are responsive, SEO-optimized, and easy to
                                customize for any project.
                            </p>
                        </div>

                        <div className="col-span-2 flex flex-col items-start justify-start gap-2 px-4 py-10">
                            <h3 className="text-2xl font-medium tracking-tight">
                                next.cnippet.site - Learning Hub
                            </h3>
                            <p className="text-gray-500">
                                Access 200+ comprehensive guides, tutorials, and
                                implementation examples. Learn about
                                authentication, payment gateways, SEO,
                                performance optimization, and advanced web
                                development techniques.
                            </p>
                        </div>
                    </div>

                    <div className="grid h-12 grid-cols-6 divide-x border-t dark:divide-neutral-800 dark:border-neutral-800">
                        <div className="col-span-1"></div>
                        <div className="col-span-1"></div>
                        <div className="col-span-1"></div>

                        <div className="col-span-1"></div>
                        <div className="col-span-2 h-full w-full">
                            <Link
                                href="https://ui.cnippet.site"
                                className="group relative flex h-full w-full items-center justify-center overflow-hidden bg-blue-700 dark:bg-black"
                            >
                                <div className="absolute inset-0 w-full -translate-x-[100%] bg-blue-800 transition-transform duration-300 group-hover:translate-x-[0%] dark:bg-white" />
                                <span className="relative z-10 flex w-full items-center justify-between gap-2 px-4 text-lg text-white duration-300 group-hover:text-white dark:text-white dark:group-hover:text-black">
                                    Start Building
                                    <RiArrowRightLine
                                        className="text-white"
                                        size={20}
                                    />
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className="grid h-52 grid-cols-6 divide-x border-t dark:divide-neutral-800 dark:border-neutral-800">
                        <div className="col-span-1"></div>
                        <div className="col-span-1"></div>
                        <div className="col-span-1"></div>

                        <div className="col-span-1"></div>
                        <div className="col-span-1"></div>
                        <div className="col-span-1"></div>
                    </div>
                </div>
            </section>

            <section className="mx-auto mt-20 w-full max-w-[1536px] border-t border-b px-30 dark:border-neutral-800 dark:bg-black">
                <div className="border border-t-0 border-b-0 dark:border-neutral-800">
                    <div className="max-w-3xl px-4 py-20">
                        <div className="h-[calc(2*theme(fontSize.6xl)*theme(lineHeight.normal))] md:h-[calc(2*theme(fontSize.5xl)*theme(lineHeight.tight))]">
                            <TypingText
                                className="text-2xl leading-tight font-medium tracking-tight md:text-5xl"
                                speed={60}
                                showCursor={false}
                                once={true}
                            >
                                Trusted by Developers <br />{" "}
                                <span className="text-blue-700">Worldwide</span>
                            </TypingText>
                        </div>

                        <p className="mt-2 text-lg text-gray-500">
                            Join thousands of developers who trust Cnippet for
                            their web development needs. Our ecosystem has
                            helped teams build everything from simple landing
                            pages to complex enterprise applications.
                        </p>
                    </div>

                    <div className="grid h-12 grid-cols-6 divide-x border-t dark:divide-neutral-800 dark:border-neutral-800">
                        <div className="col-span-1"></div>
                        <div className="col-span-1"></div>
                        <div className="col-span-1"></div>

                        <div className="col-span-1"></div>
                        <div className="col-span-2 h-full w-full">
                            <Link
                                href="https://block.cnippet.site"
                                className="group relative flex h-full w-full items-center justify-center overflow-hidden bg-blue-700 dark:bg-black"
                            >
                                <div className="absolute inset-0 w-full -translate-x-[100%] bg-blue-800 transition-transform duration-300 group-hover:translate-x-[0%] dark:bg-white" />
                                <span className="relative z-10 flex w-full items-center justify-between gap-2 px-4 text-lg text-white duration-300 group-hover:text-white dark:text-white dark:group-hover:text-black">
                                    Explore Templates
                                    <RiArrowRightLine
                                        className="text-white"
                                        size={20}
                                    />
                                </span>
                            </Link>
                        </div>
                    </div>

                    <div className="grid h-full grid-cols-4 divide-x border-t dark:divide-neutral-800 dark:border-neutral-800">
                        {metrics.map((metric, index) => (
                            <div
                                key={index}
                                className="group col-span-1 flex cursor-pointer flex-col items-start justify-start gap-2 px-4 py-10 transition-all duration-300 hover:bg-gray-800 dark:hover:bg-gray-900"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <div>
                                    <motion.div
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={
                                            hoveredIndex === index
                                                ? { opacity: 1, y: 0 }
                                                : { opacity: 0, y: 40 }
                                        }
                                        transition={{ duration: 0.4 }}
                                    >
                                        <h3 className="text-xl font-medium text-white">
                                            {metric.content}
                                        </h3>
                                        <p className="text-gray-400">
                                            {metric.content2}
                                        </p>
                                    </motion.div>
                                </div>
                                <h3 className="mt-auto pt-40 text-2xl font-medium tracking-tight group-hover:text-white md:text-7xl">
                                    {metric.title}
                                </h3>
                                <p className="text-xl font-medium text-gray-500 group-hover:text-white">
                                    {metric.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
});

Features.displayName = "Features";

export default Features;
