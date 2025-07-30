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
    number: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Sections = (props: { count?: number; sections?: any[] }) => {
    const components =
        props.sections ??
        Object.values(Index["default"]).filter(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (item: any): item is Section =>
                item.type === "registry:section" && "thumbnail" in item,
        );

    return (
        <>
            <section className="font-kumb mx-auto mt-10 w-full max-w-full border-t border-b px-4 md:mt-16 md:px-10 xl:px-20 2xl:px-30 dark:border-neutral-800 dark:bg-black">
                <div className="border border-t-0 border-b-0 dark:border-neutral-800">
                    <div className="max-w-3xl px-4 py-16">
                        <div className="h-fit">
                            <TypingText
                                className="text-3xl leading-tight font-medium tracking-tighter md:text-4xl"
                                speed={60}
                                showCursor={false}
                                once={true}
                            >
                                Explore wide range of{" "}
                                <span className="text-blue-700">Sections</span>
                            </TypingText>
                        </div>

                        <p className="mt-2 text-base text-gray-700 md:text-lg">
                            A library of 500+ professionally designed, expertly
                            crafted component examples you can drop into your
                            Tailwind projects and customize to your heart&apos;s
                            content.
                        </p>
                    </div>
                    <div>
                        <div className="grid grid-cols-1 divide-x border-t md:grid-cols-12 dark:divide-neutral-800 dark:border-neutral-800">
                            {components
                                ?.slice(0, props.count)
                                .map((component, i) => {
                                    const section = component as Section;
                                    return (
                                        <div
                                            key={i}
                                            className={`relative col-span-3 w-full dark:border-neutral-800`}
                                        >
                                            <Image
                                                width="960"
                                                height="600"
                                                src={section.thumbnail}
                                                sizes="100vw"
                                                alt="Description of my image"
                                                className="w-full border-b bg-black"
                                            />

                                            <div className="flex flex-col items-start p-4">
                                                <Link
                                                    href={section.slug}
                                                    className="font-medium text-black/80 capitalize dark:text-neutral-400"
                                                >
                                                    {component.name}
                                                    <span className="absolute inset-0"></span>
                                                </Link>
                                                <p className="text-sm text-gray-400">
                                                    {section.number} components
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                        </div>
                    </div>

                    <div className="grid h-12 grid-cols-1 divide-x border-t md:grid-cols-4 dark:divide-neutral-800 dark:border-neutral-800">
                        <div className="col-span-1 hidden md:block"></div>
                        <div className="col-span-1 hidden md:block"></div>
                        <div className="col-span-1 hidden md:block"></div>
                        <div className="col-span-1 h-full w-full">
                            <Link
                                href="/sections"
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
