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

                            <div className="flex items-center gap-8 text-sm font-medium">
                                <Link
                                    href="/component/accordion"
                                    className="text-gray-800 transition hover:text-black dark:text-neutral-400 dark:hover:text-white"
                                >
                                    Components
                                </Link>
                                <Link
                                    href="/motion/accordion"
                                    className="text-gray-800 transition hover:text-black dark:text-neutral-400 dark:hover:text-white"
                                >
                                    Motions
                                </Link>
                                <Link
                                    href="#"
                                    className="text-gray-800 transition hover:text-black dark:text-neutral-400 dark:hover:text-white"
                                >
                                    Sections
                                </Link>
                                <Link
                                    href="#"
                                    className="text-gray-800 transition hover:text-black dark:text-neutral-400 dark:hover:text-white"
                                >
                                    Templates
                                </Link>
                                <NavUser />
                            </div>
                            <div className="group/toggle hover:bg-accent hover:text-accent-foreground focus-visible:ring-ring inline-flex h-8 w-8 items-center justify-center gap-2 rounded-md px-0 py-2 text-sm font-medium whitespace-nowrap transition-colors focus-visible:ring-1 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0">
                                {/* <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-sun [html.dark_&amp;]:block hidden"
                                >
                                    <circle cx="12" cy="12" r="4"></circle>
                                    <path d="M12 2v2"></path>
                                    <path d="M12 20v2"></path>
                                    <path d="m4.93 4.93 1.41 1.41"></path>
                                    <path d="m17.66 17.66 1.41 1.41"></path>
                                    <path d="M2 12h2"></path>
                                    <path d="M20 12h2"></path>
                                    <path d="m6.34 17.66-1.41 1.41"></path>
                                    <path d="m19.07 4.93-1.41 1.41"></path>
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-moon [html.light_&amp;]:block hidden"
                                >
                                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                                </svg> */}
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
                                <span className="sr-only">Toggle theme</span>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
