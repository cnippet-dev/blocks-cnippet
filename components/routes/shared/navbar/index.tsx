"use client";

import Link from "next/link";
import React from "react";
import NavUser from "./nav-user";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine } from "@remixicon/react";

const Navbar = () => {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <header className="">
            <nav className="w-full border-b border-neutral-200 dark:border-neutral-800 dark:bg-black">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-6">
                    <div className="py-4">
                        <div className="hidden items-center justify-between md:flex">
                            <Link
                                href="/"
                                className="text-xl font-medium text-black dark:text-white"
                            >
                                cnippet
                                <span className="ml-3 font-mono text-sm">
                                    blocks
                                </span>
                            </Link>

                            <div className="mr-auto ml-5 flex items-center gap-8 text-sm font-medium">
                                <Link
                                    href="/component/accordion"
                                    className="text-gray-800 transition hover:text-black dark:text-neutral-400 dark:hover:text-white"
                                >
                                    Sections
                                </Link>
                                <Link
                                    href="/motion/accordion"
                                    className="text-gray-800 transition hover:text-black dark:text-neutral-400 dark:hover:text-white"
                                >
                                    Pages
                                </Link>
                                <Link
                                    href="#"
                                    className="text-gray-800 transition hover:text-black dark:text-neutral-400 dark:hover:text-white"
                                >
                                    Templates
                                </Link>
                                <Link
                                    href="#"
                                    className="text-gray-800 transition hover:text-black dark:text-neutral-400 dark:hover:text-white"
                                >
                                    
                                </Link>
                            </div>

                            <div className="flex items-center gap-3">
                                <NavUser />
                                <div className="group/toggle hover:bg-accent hover:text-accent-foreground focus-visible:ring-ring [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 inline-flex h-8 w-8 items-center justify-center gap-2 rounded-md px-0 py-2 text-sm font-medium whitespace-nowrap transition-colors focus-visible:ring-1 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50">
                                    <Button
                                        variant="ghost"
                                        onClick={() => toggleTheme()}
                                        className="hover:bg-dusk-500 flex items-center justify-center gap-2 rounded-lg p-2 text-black dark:text-white hover:dark:bg-neutral-700"
                                    >
                                        {theme === "dark" ? (
                                            <RiSunLine className="size-5" />
                                        ) : (
                                            <RiMoonFill className="size-5" />
                                        )}
                                        {/* <span>Toogle theme</span> */}
                                    </Button>
                                    <span className="sr-only">
                                        Toggle theme
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
