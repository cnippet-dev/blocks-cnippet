"use client";
import React from "react";
import Link from "next/link";
import { Index } from "@/__registry__";

import Image from "next/image";
import { RiArrowRightLine } from "@remixicon/react";
import { TypingText } from "../motion/typing-text";

interface Section {
    name: string;
    slug: string;
    thumbnail: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Sections = (props: any) => {
    const components = Object.values(Index["default"]).filter(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (item: any): item is Section => item.type === "registry:section",
    );

    return (
        <>
            <section className="mx-auto mt-10 w-full max-w-full border-t border-b px-4 md:mt-20 md:px-10 xl:px-20 2xl:px-30 dark:border-neutral-800 dark:bg-black">
                <div className="border border-t-0 border-b-0 dark:border-neutral-800">
                    <div className="max-w-3xl px-4 py-16">
                        <div className="h-fit md:h-[calc(2*theme(fontSize.5xl)*theme(lineHeight.tight))]">
                            <TypingText
                                className="text-3xl leading-tight font-medium tracking-tight md:text-5xl"
                                speed={60}
                                showCursor={false}
                                once={true}
                            >
                                Explore wide range of <br />
                                <span className="text-blue-700">Sections</span>
                            </TypingText>
                        </div>

                        <p className="mt-2 text-base text-gray-500 md:text-lg">
                            Join thousands of developers who trust Cnippet for
                            their web development needs. Our ecosystem has
                            helped teams build everything from simple landing
                            pages to complex enterprise applications.
                        </p>
                    </div>
                    <div>
                        <div className="grid grid-cols-1 divide-y border-t md:grid-cols-12 dark:divide-neutral-800 dark:border-neutral-800">
                            {components
                                ?.slice(0, props.count)
                                .map((component, i) => (
                                    <div
                                        key={i}
                                        className={`relative col-span-4 w-full ${i === 2 || i === 5 ? "border-r-0" : "border-r"} ${i === 5 ? "border-b" : ""} dark:border-neutral-800`}
                                    >
                                        <Image
                                            width="960"
                                            height="600"
                                            src={`https://res.cloudinary.com/dphulm0s9/image/upload/v1737836551/${component.name.split("-")[0]}.png`}
                                            sizes="100vw"
                                            alt="Description of my image"
                                            className="w-full border-b"
                                        />

                                        <div className="flex flex-col items-start p-4">
                                            <Link
                                                href={component.slug}
                                                className="font-medium text-black/80 capitalize dark:text-neutral-400"
                                            >
                                                {component.name}
                                                <span className="absolute inset-0"></span>
                                            </Link>
                                            <p className="text-sm text-gray-400">
                                                3 components
                                            </p>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>

                    <div className="grid h-12 grid-cols-1 divide-x border-t md:grid-cols-6 dark:divide-neutral-800 dark:border-neutral-800">
                        <div className="col-span-1 hidden md:block"></div>
                        <div className="col-span-1 hidden md:block"></div>
                        <div className="col-span-1 hidden md:block"></div>
                        <div className="col-span-1 hidden md:block"></div>
                        <div className="col-span-1 h-full w-full md:col-span-2">
                            <Link
                                href="https://ui.cnippet.site"
                                className="group relative flex h-full w-full items-center justify-center overflow-hidden bg-blue-700"
                            >
                                <div className="absolute inset-0 w-full -translate-x-[110%] bg-blue-800 transition-transform duration-300 group-hover:translate-x-[0%] dark:bg-blue-600" />
                                <span className="relative z-10 flex w-full items-center justify-between gap-2 px-4 text-lg text-white duration-300 group-hover:text-white dark:text-white">
                                    Explore All Sections
                                    <RiArrowRightLine
                                        className="text-white"
                                        size={20}
                                    />
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Sections;
