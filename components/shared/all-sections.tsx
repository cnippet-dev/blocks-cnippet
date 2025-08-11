"use client";
import React, { forwardRef } from "react";
import Image from "next/image";
import { motion } from "motion/react";

import { Index } from "@/__registry__";

interface Section {
    name: string;
    slug: string;
    thumbnail: string;
    number: string;
}

const itemVariants = {
    hidden: {
        opacity: 0,
        y: 30,
        scale: 0.95,
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring" as const,
            stiffness: 100,
            damping: 15,
            duration: 0.6,
        },
    },
};

interface SectionsProps extends React.HTMLAttributes<HTMLDivElement> {
    count?: number;
    //eslint-disable-next-line @typescript-eslint/no-explicit-any
    sections?: any[];
}

const Sections = forwardRef<HTMLDivElement, SectionsProps>(
    ({ count, sections }, ref) => {
        const components =
            sections ??
            Object.values(Index["default"]).filter(
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                (item: any): item is Section =>
                    item.type === "registry:section" && "thumbnail" in item,
            );

        return (
            <>
                <section className="relative h-full pt-10">
                    <div className="pointer-events-none absolute top-0 bottom-0 left-0 z-0 flex w-full overflow-visible">
                        <div
                            className="absolute top-20 left-0 z-0 h-[1px] w-full flex-auto overflow-hidden border-t border-dashed border-gray-200 dark:border-neutral-700"
                            data-border="true"
                            data-framer-name="Top divider"
                        ></div>

                        <div
                            className="absolute top-0 left-1/2 z-0 h-full w-full max-w-7xl flex-auto -translate-x-1/2 overflow-visible"
                            data-framer-name="Vertical lines"
                        >
                            <div
                                className="absolute right-0 bottom-0 z-0 h-full w-[1px] border-r border-dashed border-gray-200 dark:border-neutral-700"
                                data-border="true"
                                data-framer-name="Right line"
                            >
                                <div
                                    className="cnippet-dot"
                                    data-border="true"
                                    data-framer-name="Ellipsis"
                                ></div>
                            </div>
                            <div
                                className="absolute bottom-0 left-0 z-0 h-full w-[1px] border-r border-dashed border-gray-200 dark:border-neutral-700"
                                data-border="true"
                                data-framer-name="Left line"
                            >
                                <div
                                    className="cnippet-dot"
                                    data-border="true"
                                    data-framer-name="Ellipsis"
                                ></div>
                            </div>
                        </div>
                    </div>

                    <div className="mx-auto max-w-7xl">
                        <div className="mt-32 max-w-7xl px-10">
                            <div className="mb-16 space-y-4">
                                <motion.h1 className="text-4xl font-semibold tracking-tight text-black dark:text-white md:text-4xl">
                                    Explore wide range of Sections
                                </motion.h1>

                                <motion.p
                                    className="max-w-md text-gray-600 dark:text-gray-400"
                                    transition={{ delay: 0.2 }}
                                >
                                    A library of 500+ professionally designed,
                                    expertly crafted component examples you can
                                    drop into your Tailwind projects and
                                    customize to your heart&apos;s content.
                                </motion.p>
                            </div>
                        </div>

                        <div className="w-full px-1 pb-10">
                            <motion.div
                                ref={ref}
                                className="mx-auto grid grid-cols-1 md:grid-cols-4"
                                initial="hidden"
                                animate="visible"
                            >
                                {components
                                    ?.slice(0, count)
                                    .map((component, index) => {
                                        const section = component as Section;

                                        return (
                                            <motion.div
                                                key={index}
                                                className={`relative overflow-visible border-dashed border-gray-400/50 bg-white dark:bg-background p-4 transition-shadow duration-300 ${index !== 3 && index !== 7 && index !== 11 ? "border-r" : ""} ${index <= 11 ? "border-b" : ""}`}
                                                variants={itemVariants}
                                                whileHover={{
                                                    transition: {
                                                        type: "spring",
                                                        stiffness: 300,
                                                        damping: 20,
                                                    },
                                                }}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                <motion.div
                                                    className="flex items-start space-x-4"
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{
                                                        delay:
                                                            index * 0.1 + 0.5,
                                                    }}
                                                >
                                                    {index !== 0 &&
                                                        index !== 4 &&
                                                        index !== 8 &&
                                                        index < 12 && (
                                                            <div
                                                                className="cnippet-dot3"
                                                                data-framer-name="Ellipsis"
                                                            ></div>
                                                        )}

                                                    <div className="flex-1">
                                                        <Image
                                                            width="960"
                                                            height="600"
                                                            src={
                                                                section.thumbnail
                                                            }
                                                            sizes="100vw"
                                                            alt="Description of my image"
                                                            className="w-full rounded-2xl"
                                                        />

                                                        <div className="flex flex-col items-start p-4">
                                                            <motion.a
                                                                href={
                                                                    section.slug
                                                                }
                                                                className="font-medium text-black/80 capitalize dark:text-white"
                                                                initial={{
                                                                    opacity: 0,
                                                                    x: -10,
                                                                }}
                                                                animate={{
                                                                    opacity: 1,
                                                                    x: 0,
                                                                }}
                                                                transition={{
                                                                    delay:
                                                                        index *
                                                                            0.1 +
                                                                        0.6,
                                                                }}
                                                            >
                                                                {component.name}
                                                                <span className="absolute inset-0"></span>
                                                            </motion.a>
                                                            <motion.p
                                                                className="text-sm text-gray-400"
                                                                initial={{
                                                                    opacity: 0,
                                                                    x: -10,
                                                                }}
                                                                animate={{
                                                                    opacity: 1,
                                                                    x: 0,
                                                                }}
                                                                transition={{
                                                                    delay:
                                                                        index *
                                                                            0.1 +
                                                                        0.7,
                                                                }}
                                                            >
                                                                {section.number}{" "}
                                                                components
                                                            </motion.p>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            </motion.div>
                                        );
                                    })}
                            </motion.div>
                        </div>
                    </div>
                </section>
            </>
        );
    },
);

Sections.displayName = "Sections";

export default Sections;
