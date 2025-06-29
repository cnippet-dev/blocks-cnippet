"use client";
import React from "react";
import Link from "next/link";
import { Index } from "@/__registry__";

import Image from "next/image";

interface Section {
    name: string;
    slug: string;
    thumbnail: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Sections = (props: any) => {
    const components = Object.values(Index).filter(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (item: any): item is Section => item.type === "registry:sections",
    );

    return (
        <>
            <section className="dark:bg-black">
                <div className="mx-auto w-full max-w-6xl px-4 md:px-10">
                    <div className="grid h-full w-full grid-cols-12 border border-t-0 py-0 dark:border-neutral-800">
                        <div className="col-span-12 bg-white text-center dark:bg-black">
                            <h2 className="mt-16 mb-2 text-2xl leading-tight font-semibold tracking-tight md:text-5xl">
                                Interactive Components Gallery.
                            </h2>
                            <p className="mb-8 px-5 text-sm text-gray-500 md:mb-16 md:text-base">
                                Explore our collection of motion-enhanced UI
                                elements that are ready to use in your projects.
                            </p>
                            <div className="grid grid-cols-1 divide-y border-t md:grid-cols-12 dark:divide-neutral-800 dark:border-neutral-800">
                                {components
                                    ?.slice(0, props.count)
                                    .map((component, i) => (
                                        <div
                                            key={i}
                                            className={`relative col-span-4 w-full p-6 ${i === 2 || i === 5 ? "border-r-0" : "border-r"} ${i === 5 ? "border-b" : ""}`}
                                        >
                                            {/* <Image
                                        src={component.thumbnail.src}
                                        alt={component.thumbnail.alt}
                                        width={1080}
                                        height={680}
                                        className="w-full rounded-xl ring-1 ring-gray-200"
                                    /> */}
                                            <Image
                                                width="960"
                                                height="600"
                                                src={`https://res.cloudinary.com/dphulm0s9/image/upload/v1737836551/${component.name.split("-")[0]}.png`}
                                                sizes="100vw"
                                                alt="Description of my image"
                                                className="w-full rounded-lg border"
                                            />

                                            <div className="mt-4 flex flex-col items-start px-4">
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
                                {/* <div className="p-0 md:col-span-4 md:p-5"></div> */}
                                {/* <div className="flex flex-col items-center justify-center md:col-span-8"></div> */}
                                {/* <div className="flex items-center justify-center border-r px-5 py-5 md:col-span-4 md:py-10"></div> */}
                                {/* <div className="flex items-center justify-center border-r px-5 py-5 md:col-span-4 md:py-10"></div> */}
                                {/* <div className="border-b px-5 py-5 md:col-span-4 md:py-10 dark:border-neutral-800"></div> */}
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <Link
                                    href="/sections"
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
        </>
    );
};

export default Sections;
