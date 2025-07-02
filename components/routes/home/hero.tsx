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
                                <div className="font-buch mb-6 h-fit md:mb-0 md:h-[calc(2*theme(fontSize.6xl)*theme(lineHeight.tight))]">
                                    <TypingText
                                        className="text-left text-4xl font-medium md:text-5xl lg:text-7xl"
                                        speed={60}
                                        showCursor={false}
                                        once={true}
                                    >
                                        Build Websites{" "}
                                        <span className="text-violet-600">
                                            Faster
                                        </span>{" "}
                                        with{" "}
                                        <span className="text-blue-600">
                                            Cnippet Blocks
                                        </span>
                                    </TypingText>
                                </div>

                                <p className="max-w-2xl text-sm leading-normal md:mt-2 md:text-lg">
                                    <span className="text-gray-500">
                                        Cnippet Blocks provides everything you
                                        need to launch your next project:
                                        sections, pages and templates.
                                    </span>{" "}
                                    <span className="font-medium">
                                        All sections and templates are
                                        SEO-friendly, easy to customize, and
                                        ready to deploy.
                                    </span>{" "}
                                    <span className="text-gray-500">
                                        Start building your website with
                                        high-quality, production-ready blocks.
                                    </span>
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
                                        Whether you&apos;re building a simple
                                        landing page or a complex web
                                        application,
                                    </span>{" "}
                                    <span className="font-medium">
                                        our comprehensive ecosystem provides the
                                        tools and resources
                                    </span>{" "}
                                    <span className="text-gray-500">
                                        you need to succeed in today&apos;s
                                        digital landscape.
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
                                    href="#"
                                    className="group relative flex h-full w-full items-center justify-center overflow-hidden bg-blue-700"
                                >
                                    <div className="absolute inset-0 w-full -translate-x-[110%] bg-blue-800 transition-transform duration-300 group-hover:translate-x-[0%] dark:bg-blue-600" />
                                    <span className="relative z-10 flex w-full items-center justify-between gap-2 px-4 text-lg text-white duration-300 group-hover:text-white dark:text-white">
                                        Explore
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

Hero.displayName = "Community";

export default Hero;
