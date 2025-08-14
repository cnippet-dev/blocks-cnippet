"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

import NavUser from "./nav-user";
// import { MobileNav } from "./mobile-nav";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { RiArrowRightUpLine } from "@remixicon/react";

const Navbar = () => {
    return (
        <>
            <div className="pointer-events-none absolute top-0 bottom-0 left-0 z-0 flex h-full w-full overflow-visible">
                <div
                    className="absolute top-20 left-0 z-0 h-[1px] w-full flex-auto overflow-hidden border-t border-dashed border-gray-200 dark:border-neutral-700"
                    data-border="true"
                    data-framer-name="Top divider"
                ></div>

                <div
                    className="absolute top-0 left-1/2 z-0 h-28 w-full max-w-7xl flex-auto -translate-x-1/2 overflow-visible"
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

            <div className="sticky top-0 z-50">
                <div className="sticky top-4 z-50 pt-3 pb-6">
                    <motion.nav
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className="mx-auto flex max-w-4xl items-center justify-between rounded-full bg-gray-200/60 px-2 py-2 backdrop-blur-md dark:bg-neutral-800/50"
                    >
                        <Link href="/" className="flex items-center">
                            <Image
                                src="https:res.cloudinary.com/dcxm3ccir/image/upload/v1753948226/logo-light.png"
                                alt=""
                                className="size-10"
                                width={1080}
                                height={1080}
                            />
                            <span className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                Cnippet{" "}
                                <span className="text-gray-400 dark:text-gray-500">
                                    Blocks
                                </span>
                            </span>
                        </Link>

                        <div className="hidden items-center space-x-8 text-sm font-medium md:flex">
                            {[
                                "Sections",
                                "Pages",
                                "Templates",
                                "Docs",
                                "Pricing",
                            ].map((item, index) => (
                                <motion.div
                                    key={item}
                                    initial={{ y: -10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{
                                        duration: 0.4,
                                        delay: index * 0.1,
                                    }}
                                >
                                    <Link
                                        href={`/${item.toLowerCase()}`}
                                        className="text-gray-600 transition-colors duration-200 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white"
                                    >
                                        {item}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.4, delay: 0.6 }}
                            className="flex items-center space-x-4"
                        >
                            <Button
                                variant="ghost"
                                size="sm"
                                className="hidden items-center space-x-2 sm:flex"
                            >
                                <RiArrowRightUpLine className="h-4 w-4" />
                                <span>Preview</span>
                            </Button>
                            {/* <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Button className="rounded-full bg-black px-6 text-white hover:bg-gray-800">
                                        Buy Now
                                        <span className="ml-2">↗</span>
                                    </Button>
                                </motion.div> */}
                            <NavUser />
                        </motion.div>
                    </motion.nav>
                </div>
            </div>
        </>
    );
};

export default Navbar;
