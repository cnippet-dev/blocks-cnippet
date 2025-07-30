"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

import NavUser from "./nav-user";
import { MobileNav } from "./mobile-nav";

const Nav1 = () => {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <>
            <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 mx-auto w-full max-w-full border-t-0 border-b px-4 backdrop-blur md:px-10 xl:px-20 2xl:px-30 dark:border-neutral-900 dark:bg-black/70">
                <div className="w-full border border-t-0 border-r-0 border-b-0 dark:border-neutral-800">
                    <div className="grid grid-cols-2 divide-x-0 md:grid-cols-6 md:divide-x dark:divide-neutral-800">
                        <div className="col-span-1 md:col-span-1">
                            <Link
                                suppressHydrationWarning
                                className="grid grid-cols-4"
                                href="/"
                            >
                                <span className="col-span-1 flex size-full w-full items-center justify-center py-2">
                                    {mounted && (
                                        <Image
                                            src={
                                                theme === "dark"
                                                    ? "https://res.cloudinary.com/dphulm0s9/image/upload/v1746006954/logo-dark.png"
                                                    : "https://res.cloudinary.com/dphulm0s9/image/upload/v1746006954/logo-light.png"
                                            }
                                            alt=""
                                            className="size-12"
                                            width={1080}
                                            height={1080}
                                            suppressHydrationWarning
                                        />
                                    )}
                                </span>
                                <span className="col-span-3 hidden items-center justify-start font-mono text-base uppercase xl:flex">
                                    cnippet/blocks
                                </span>
                            </Link>
                        </div>

                        <div className="col-span-4 hidden items-center px-4 md:flex xl:col-span-3">
                            <nav className="[&_a]:text-foreground/80 flex items-center gap-4 text-sm xl:gap-6 [&_a]:uppercase [&_a]:transition-colors [&_a]:hover:text-black">
                                <Link href="/sections">Sections</Link>
                                <Link href="#">Pages</Link>
                                <Link href="#">Templates</Link>
                            </nav>
                        </div>

                        <div className="col-span-1"></div>

                        <div className="col-span-1 flex">
                            <div></div>
                            {/* <div className="group/toggle focus-visible:ring-ring [&amp;_svg]:pointer-events-none [&amp;_svg]:size-5 [&amp;_svg]:shrink-0 bg-muted/50 inline-flex w-full items-center justify-center gap-2 rounded-none px-0 text-sm font-medium whitespace-nowrap transition-colors hover:bg-none focus-visible:ring-1 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50">
                                {mounted &&
                                    (theme === "dark" ? (
                                        <button
                                            onClick={() => setTheme("light")}
                                            className={`cursor-pointer rounded-full p-1.5`}
                                            aria-label="Light mode"
                                        >
                                            <RiSunLine className="size-5 text-black dark:text-white" />
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() => setTheme("dark")}
                                            className={`cursor-pointer rounded-full p-1.5`}
                                            aria-label="Dark mode"
                                        >
                                            <RiMoonFill className="size-5 text-black dark:text-white" />
                                        </button>
                                    ))}
                                <span className="sr-only">Toggle theme</span>
                            </div> */}
                            <div className="flex w-full items-center justify-center bg-gray-50 dark:bg-black">
                                <NavUser />
                            </div>
                        </div>

                        <div className="col-span-1 ml-auto flex items-center justify-end md:col-span-0 md:hidden">
                            <MobileNav />
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Nav1;
