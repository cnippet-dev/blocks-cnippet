import { forwardRef } from "react";
import Link from "next/link";
import { RiArrowRightLine } from "@remixicon/react";

import { TypingText } from "@/components/motion/typing-text";

const Hero = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    (props, ref) => {
        return (
            <>
                <section className="mx-auto w-full max-w-full border-t-0 border-b px-4 md:px-10 xl:px-20 2xl:px-30 dark:border-neutral-800 dark:bg-black">
                    <div className="border border-t-0 border-b-0 dark:border-neutral-800">
                        <div className="grid grid-cols-6 divide-x dark:divide-neutral-800">
                            <div className="col-span-6 px-4 py-16 md:col-span-5">
                                <div className="mb-6 h-fit md:mb-0 md:h-[calc(2*theme(fontSize.6xl)*theme(lineHeight.tight))]">
                                    <h1 className="text-left text-4xl font-medium md:text-5xl lg:text-7xl">
                                        The creators library of{" "}
                                        <span className="text-violet-600">
                                            components
                                        </span>{" "}
                                        &{" "}
                                        <span className="text-blue-600">
                                            templates
                                        </span>
                                    </h1>
                                </div>

                                <p className="max-w-2xl text-sm leading-normal md:mt-2 md:text-lg text-gray-400">
                                        Cnippet Blocks equips you with
                                        everything needed to kickstart your next
                                        project: discover a wide range of
                                        sections (like hero, features, team, and
                                        more), ready-made pages (including
                                        landing, about, and contact), and
                                        complete website templates that cover
                                        every page. Build smarter and faster
                                        with block.cnippet.site.
                                </p>
                            </div>
                            <div className="col-span-1">
                                <div className="grid grid-cols-2">
                                    <div></div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-4 divide-x border-t md:grid-cols-6 dark:divide-neutral-800 dark:border-neutral-800">
                            <div className="col-span-3 py-10">
                                <p className="mb-4 max-w-2xl px-4 text-sm leading-normal md:mt-2 md:text-lg">
                                    <span className="text-gray-500">
                                        Unlock a world of professionally
                                        designed assets and tools to accelerate
                                        your workflow and elevate your projects.
                                    </span>{" "}
                                    <span className="font-medium">
                                        Join thousands of creators building with
                                        block.cnippet.site.
                                    </span>
                                </p>
                            </div>
                            <div className="col-span-1"></div>
                            <div className="col-span-1 hidden md:block"></div>
                            <div className="col-span-1 hidden md:block"></div>
                        </div>

                        <div className="grid h-12 grid-cols-1 divide-x border-t md:grid-cols-6 dark:divide-neutral-800 dark:border-neutral-800">
                            <div
                                ref={ref}
                                className="col-span-1 h-full w-full md:col-span-2"
                            >
                                <Link
                                    href="#explore"
                                    className="group relative flex h-full w-full items-center justify-center overflow-hidden bg-blue-700"
                                >
                                    <div className="absolute inset-0 w-full -translate-x-[110%] bg-blue-800 transition-transform duration-300 group-hover:translate-x-[0%] dark:bg-blue-600" />
                                    <span className="relative z-10 flex w-full items-center justify-between gap-2 px-4 text-lg text-white duration-300 group-hover:text-white dark:text-white">
                                        Browse Library
                                        <RiArrowRightLine
                                            className="text-white"
                                            size={20}
                                        />
                                    </span>
                                </Link>
                            </div>
                            <div className="col-span-1 hidden md:block"></div>
                            <div className="col-span-1 hidden md:block"></div>
                            <div className="col-span-1 hidden md:block"></div>
                            <div className="col-span-1 hidden md:block"></div>
                        </div>
                    </div>
                </section>
            </>
        );
    },
);

Hero.displayName = "Hero";

export default Hero;
