import React from "react";
import Link from "next/link";

import { RiArrowRightLine } from "@remixicon/react";
import { TypingText } from "@/components/motion/typing-text";

const Hero = () => {
    return (
        <>
            <section className="mx-auto w-full max-w-[1536px] border-t-0 border-b px-30">
                <div className="border border-t-0 border-b-0">
                    <div className="grid grid-cols-6 divide-x">
                        <div className="col-span-5 px-4 py-16">
                            {/* The key change is adding a fixed height or min-height */}
                            <div className="h-[calc(2*theme(fontSize.6xl)*theme(lineHeight.normal))] md:h-[calc(2*theme(fontSize.6xl)*theme(lineHeight.tight))] font-buch">
                                <TypingText
                                    className="text-left text-3xl font-medium md:text-7xl"
                                    speed={60}
                                    showCursor={false}
                                    once={true}
                                >
                                    Your Complete{" "}
                                    <span className="text-purple-600">
                                        Web Development
                                    </span>{" "}
                                    <span className="text-blue-600">
                                        Ecosystem
                                    </span>
                                </TypingText>
                            </div>

                            <p className="mb-4 max-w-2xl text-sm font-mono leading-normal md:mt-2 md:text-lg">
                                <span className="text-gray-500">
                                    Welcome to Cnippet - your one-stop solution
                                    for modern web development.
                                </span>{" "}
                                <span className="font-medium">
                                    From UI components to complete websites,
                                    we&apos;ve got everything you need
                                </span>{" "}
                                <span className="text-gray-500">
                                    to build, deploy, and scale your digital
                                    presence.
                                </span>
                            </p>
                            <ul className="mb-4 flex flex-col items-start justify-start space-y-2">
                                <li className="flex items-center gap-2">
                                    <span className="inline-block size-2 rotate-45 bg-purple-400" />
                                    <span>
                                        ui.cnippet.site - Core components,
                                        motion effects, and charts
                                    </span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="inline-block size-2 rotate-45 bg-orange-400" />
                                    <span>
                                        block.cnippet.site - Sections, pages,
                                        and complete templates
                                    </span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="inline-block size-2 rotate-45 bg-blue-600" />
                                    <span>
                                        next.cnippet.site - Guides, tutorials,
                                        and implementation help
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className="col-span-1">
                            <div className="grid grid-cols-2">
                                <div></div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-6 divide-x border-t">
                        <div className="col-span-3 py-10">
                            <p className="mb-4 max-w-2xl px-4 text-sm leading-normal md:mt-2 md:text-lg">
                                <span className="text-gray-500">
                                    Whether you&apos;re building a simple landing
                                    page or a complex web application,
                                </span>{" "}
                                <span className="font-medium">
                                    our comprehensive ecosystem provides the
                                    tools and resources
                                </span>{" "}
                                <span className="text-gray-500">
                                    you need to succeed in today&apos;s digital
                                    landscape.
                                </span>
                            </p>
                        </div>
                        <div className="col-span-1"></div>
                        <div className="col-span-1"></div>
                        <div className="col-span-1"></div>
                    </div>

                    <div className="grid h-12 grid-cols-6 divide-x border-t">
                        <div className="col-span-2 h-full w-full">
                            <Link
                                href="https://ui.cnippet.site"
                                className="group relative flex h-full w-full items-center justify-center overflow-hidden bg-blue-700 dark:bg-black"
                            >
                                <div className="absolute inset-0 w-full -translate-x-[100%] bg-blue-800 transition-transform duration-300 group-hover:translate-x-[0%] dark:bg-white" />
                                <span className="relative z-10 flex w-full items-center justify-between gap-2 px-4 text-lg text-white duration-300 group-hover:text-white dark:text-white dark:group-hover:text-black">
                                    Explore UI Components
                                    <RiArrowRightLine
                                        className="text-white"
                                        size={20}
                                    />
                                </span>
                            </Link>
                        </div>
                        <div className="col-span-1"></div>
                        <div className="col-span-1"></div>
                        <div className="col-span-1"></div>

                        <div className="col-span-1"></div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
