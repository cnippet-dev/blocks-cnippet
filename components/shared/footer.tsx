"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import { useTheme } from "next-themes";
import { Sun, Moon, Loader2, ChevronDownIcon } from "lucide-react";
import { RiGithubLine } from "@remixicon/react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Footer() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [email, setEmail] = useState("");

    //eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [status, setStatus] = useState<
        "idle" | "loading" | "success" | "error"
    >("idle");

    //eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [message, setMessage] = useState("");

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <footer className="bg-white px-4 pt-28 pb-10 md:px-8 lg:px-16 dark:bg-black dark:text-white">
            <div className="mx-auto max-w-6xl px-4 md:px-10">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-6">
                    {/* Logo and Social Links */}
                    <div className="col-span-2 flex flex-col lg:col-span-1">
                        <div className="mb-8">
                            <Link href="/" className="flex items-center gap-2">
                                <Image
                                    src="https://res.cloudinary.com/dphulm0s9/image/upload/v1746006954/logo-light.png"
                                    alt=""
                                    className="size-9 rounded-full"
                                    width={1080}
                                    height={1080}
                                />
                                <span className="inline-block">
                                    Cnippet Blocks
                                </span>
                            </Link>
                        </div>
                    </div>

                    <div className="lg:col-span-1">
                        <h3 className="mb-4 font-medium">Sections</h3>
                        <ul className="space-y-2">
                            <FooterLink href="#">Hero</FooterLink>
                            <FooterLink href="#">Features</FooterLink>
                            <FooterLink href="#">FAQ</FooterLink>
                            <FooterLink href="#">Pricing</FooterLink>
                            <FooterLink href="#">Testimonials</FooterLink>
                            <FooterLink href="#">CTA</FooterLink>
                            <FooterLink href="#">Footer</FooterLink>
                        </ul>
                    </div>

                    <div className="lg:col-span-1">
                        <h3 className="mb-4 font-medium">Pages</h3>
                        <ul className="space-y-3">
                            <FooterLink href="#">Home</FooterLink>
                            <FooterLink href="#">About</FooterLink>
                            <FooterLink href="#">Contact</FooterLink>
                            <FooterLink href="#">Sign In</FooterLink>
                            <FooterLink href="#">Sign Up</FooterLink>
                            <FooterLink href="#">Profile</FooterLink>
                        </ul>
                    </div>

                    <div className="lg:col-span-1">
                        <h3 className="mb-4 font-medium">Company</h3>
                        <ul className="space-y-3">
                            <FooterLink href="/about_us">About</FooterLink>
                            <FooterLink href="#">Blog</FooterLink>
                            <FooterLink href="/changelog">Changelog</FooterLink>
                            <FooterLink href="/contact_us">Contact Us</FooterLink>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline" className="text-left px-0 py-0 shadow-none  border-none rounded-none text-sm text-gray-600 h-fit hover:bg-white hover:text-black dark:text-gray-500 dark:hover:text-white">Legal
                                        <ChevronDownIcon />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-56" align="start">
                                    <DropdownMenuGroup>
                                        <DropdownMenuItem>
                                            <Link href="/privacy">
                                                Privacy Policy
                                            </Link>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <Link href="/terms">
                                                Terms of Service
                                            </Link>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <Link href="/cancellation">
                                                Cancellation Policy
                                            </Link>
                                        </DropdownMenuItem>
                                    </DropdownMenuGroup>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </ul>
                    </div>

                    <div className="col-span-2">
                        <div>
                            <h3 className="mb-4 font-medium">
                                Subscribe to our newsletter
                            </h3>
                            <p className="mb-4 text-sm text-gray-400">
                                Stay updated on new releases and features,
                                guides, and case studies.
                            </p>
                            <form
                                // onSubmit={handleSubmit}
                                className="flex flex-col gap-2 rounded-lg border-none bg-slate-100 p-1 text-white sm:flex-row md:max-w-[90%] dark:bg-[#1a1a1a]"
                            >
                                <Input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="you@domain.com"
                                    className="h-7 rounded-md border-none dark:bg-black"
                                />
                                <Button size="sm" className="h-7 text-sm">
                                    {status === "loading" ? (
                                        <Loader2 className="h-5 w-5 animate-spin" />
                                    ) : (
                                        "Subscribe"
                                    )}
                                </Button>
                            </form>
                            <p
                                className={`mt-1 text-xs ${status === "success" ? "text-green-500" : "text-blue-500"}`}
                            >
                                {message}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Theme Toggle */}
                <div className="mt-12 flex justify-between">
                    <div className="">
                        <p className="mb-4 text-sm text-gray-400">
                            © 2025 Cnippet, Inc.
                        </p>
                        <div className="flex space-x-4">
                            <Link
                                href="https://github.com/cnippet-site/ui-cnippet"
                                className="text-gray-400 hover:text-white"
                            >
                                <RiGithubLine size={20} />
                            </Link>
                            <Link
                                href="#"
                                className="text-gray-400 hover:text-white"
                            >
                                <XIcon />
                            </Link>
                            <Link
                                href="#"
                                className="text-gray-400 hover:text-white"
                            >
                                <MIcon />
                            </Link>
                        </div>
                    </div>

                    <div className="mt-auto">
                        {mounted && (
                            <div className="flex gap-1 rounded-full border p-1 dark:border-neutral-800">
                                <button
                                    onClick={() => setTheme("light")}
                                    className={`rounded-full p-1.5 ${theme === "light" ? "bg-slate-100 dark:bg-[#1a1a1a]" : ""}`}
                                    aria-label="Light mode"
                                >
                                    <Sun className="size-4" />
                                </button>
                                <button
                                    onClick={() => setTheme("dark")}
                                    className={`rounded-full p-1.5 ${theme === "dark" ? "bg-[#1a1a1a]" : ""}`}
                                    aria-label="Dark mode"
                                >
                                    <Moon className="size-4" />
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </footer>
    );
}

function FooterLink({
    href,
    children,
}: {
    href: string;
    children: React.ReactNode;
}) {
    return (
        <li>
            <Link
                href={href}
                className="text-sm text-gray-600 hover:text-black dark:text-gray-500 dark:hover:text-white"
            >
                {children}
            </Link>
        </li>
    );
}

function XIcon() {
    return (
        <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z"
                fill="currentColor"
            />
        </svg>
    );
}

function MIcon() {
    return (
        <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M16.7 5.3c-1.3-1.4-3-2.1-5.1-2.1-4.4 0-8 3.6-8 8s3.6 8 8 8c2.1 0 3.8-.7 5.1-2.1 1.3-1.3 2-3.1 2-5.1 0-1.8-.7-3.6-2-4.7zm-5.1 9.8c-2.3 0-4.2-1.9-4.2-4.2s1.9-4.2 4.2-4.2 4.2 1.9 4.2 4.2c0 2.3-1.9 4.2-4.2 4.2z"
                fill="currentColor"
            />
        </svg>
    );
}

{
    /* <div className="absolute inset-0 grid h-44 grid-cols-12 px-10">
                            {Array.from({ length: 7 }).map((_, i) => (
                                <div
                                    key={i}
                                    className={`${i === 0 || i === 6 ? "col-span-1" : "col-span-2"}`}
                                >
                                    {i === 0 && (
                                        <div
                                            className={`h-1/2 border-b-0 w-full rounded-tr-full border border-gray-200`}
                                        />
                                    )}
                                    {i > 0 && i < 6 && (
                                        <>
                                            {i % 2 === 0 ? (
                                                <div
                                                    className={`h-full w-full rounded-t-full border border-gray-200`}
                                                />
                                            ) : (
                                                <div
                                                    className={`h-full w-full rounded-b-full border border-gray-200`}
                                                />
                                            )}
                                        </>
                                    )}
                                    {i === 6 && (
                                        <div
                                            className={`h-1/2 w-full border-b-0 rounded-tl-full border border-gray-200`}
                                        />
                                    )}
                                </div>
                            ))}
                        </div> */
}
