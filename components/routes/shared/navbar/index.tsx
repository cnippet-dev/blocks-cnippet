"use client";

import Link from "next/link";
import React from "react";
import NavUser from "./nav-user";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine } from "@remixicon/react";
import Image from "next/image";

const Navbar = () => {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur dark:border-neutral-900 dark:bg-black">
            <div className="mx-auto max-w-full px-0 md:px-10">
                <div className="container flex h-16 items-center px-4">
                    <div className="mr-4 hidden md:flex">
                        <Link
                            className="mr-4 flex items-center gap-0 lg:mr-6"
                            href="/"
                        >
                            {theme === "dark" ? (
                                <Image
                                    src="/images/logo-dark.png"
                                    alt=""
                                    className="size-9 rounded-full"
                                    width={1080}
                                    height={1080}
                                />
                            ) : (
                                <Image
                                    src="/images/logo-light.png"
                                    alt=""
                                    className="size-8"
                                    width={1320}
                                    height={1320}
                                />
                            )}

                            <span className="hidden font-mono font-medium lg:inline-block">
                                cnippet/block
                            </span>
                        </Link>
                        <nav className="flex items-center gap-4 text-sm xl:gap-6">
                            <Link
                                href="/component/button"
                                className="text-foreground/80 hover:text-foreground/80 transition-colors"
                            >
                                Sections
                            </Link>
                            <Link
                                href="/motion/accordion"
                                className="text-foreground/80 hover:text-foreground/80 transition-colors"
                            >
                                Pages
                            </Link>
                            <Link
                                href="/chart/area-chart"
                                className="text-foreground/80 hover:text-foreground/80 transition-colors"
                            >
                                Templates
                            </Link>
                            <Link
                                href="#"
                                className="text-foreground/80 hover:text-foreground/80 transition-colors"
                            >
                                Changelog
                            </Link>
                            {/* <Link
                                    href="#"
                                    className="text-foreground/80 hover:text-foreground/80 transition-colors"
                                >
                                    Templates
                                </Link>
                                <Link
                                    href="#"
                                    className="text-foreground/80 hover:text-foreground/80 transition-colors"
                                >
                                    Colors
                                </Link> */}
                        </nav>
                    </div>
                    {/* <MobileNav /> */}

                    <div className="ml-auto flex flex-1 items-center justify-between gap-2 md:justify-end">
                        {/* <CommandMenu /> */}
                        <div>
                            <NavUser />
                        </div>

                        <nav className="flex items-center gap-0.5">
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
                                <span className="sr-only">Toggle theme</span>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
