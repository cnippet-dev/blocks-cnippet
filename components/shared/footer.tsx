"use client";
import { useState, useEffect } from "react";

import { useTheme } from "next-themes";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import {
    RiFacebookFill,
    RiLinkedinFill,
    RiNewspaperFill,
} from "@remixicon/react";
import { Label } from "@/components/ui/label";
import { Moon, Sun } from "lucide-react";

const footerLinks = [
    {
        title: "Sections",
        links: [
            { title: "Hero", href: "/sections/hero" },
            { title: "Navbar", href: "#" },
            { title: "Pricing", href: "/sections/pricing" },
            { title: "Footer", href: "/sections/footer" },
        ],
    },
    {
        title: "Pages",
        links: [
            { title: "Landing page", href: "#" },
            { title: "About page", href: "#" },
            { title: "Contact page", href: "#" },
            { title: "Pricing page", href: "#" },
        ],
    },
    {
        title: "Company",
        links: [
            { title: "About us", href: "/about_us" },
            { title: "Contact us", href: "/contact_us" },
            { title: "Profile", href: "#" },
            { title: "Changelog", href: "#" },
            { title: "Blogs", href: "#" },
        ],
    },
];

export default function EchoFooter() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <footer className="font-kumb dark:bg-background bg-white px-6 py-12">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-6">
                    <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:col-span-4">
                        <div className="col-span-4 mb-16 flex items-center gap-6">
                            <div className="flex items-center">
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
                                <span className="font-mono text-2xl font-medium tracking-wider text-stone-800 dark:text-white">
                                    CNIPPET
                                </span>
                            </div>
                            <Separator
                                orientation="vertical"
                                className="h-7 bg-neutral-400"
                            />
                            <div className="mr-auto flex items-center gap-4 [&_a]:text-gray-600 [&_a]:hover:text-gray-900">
                                <Link href="#">
                                    <RiLinkedinFill className="h-5 w-5 dark:text-white" />
                                </Link>
                                <Link href="#">
                                    <RiFacebookFill className="h-5 w-5 dark:text-white" />
                                </Link>
                            </div>
                            <div className="flex items-end">
                                {mounted && (
                                    <div className="flex w-fit gap-1 rounded-full border p-1 dark:border-neutral-800">
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
                        {footerLinks.map((section, index) => (
                            <div key={`${section.title}-${index}`}>
                                <h3 className="mb-6 font-medium text-gray-900 dark:text-white">
                                    {section.title}
                                </h3>
                                <ul className="space-y-5">
                                    {section.links.map((link) => (
                                        <li key={link.title}>
                                            <Link
                                                href={link.href}
                                                className="text-sm text-neutral-800 underline-offset-1 hover:text-black hover:underline dark:text-gray-400"
                                            >
                                                {link.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                        <div className="col-span-4">
                            <Separator className="my-6" />

                            <div className="flex w-full justify-between text-xs">
                                <div className="flex items-center gap-4 text-gray-700 underline-offset-2 dark:text-neutral-300 [&_a]:hover:text-gray-900 [&_a]:hover:underline [&_a]:dark:hover:text-white">
                                    <Link href="/legal/terms">Terms</Link>
                                    <Link href="/legal/privacy">Privacy</Link>
                                    <Link href="/legal/cancellation">Cancellation</Link>
                                </div>
                                <div className="text-sm text-gray-700 dark:text-neutral-400">
                                    ©2025 All Rights Reserved - cnippet.dev
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="-mt-4 flex flex-col justify-between space-y-6 rounded-xl border bg-gray-100 p-4 lg:col-span-2 dark:border-neutral-800 dark:bg-black">
                        <div>
                            <div className="mb-6 flex items-center gap-2">
                                <RiNewspaperFill />
                                <h3 className="font-semibold text-gray-900 dark:text-white">
                                    Newsletter
                                </h3>
                            </div>
                            <div className="space-y-4 rounded-lg bg-white p-4 shadow-sm dark:bg-neutral-900">
                                <div>
                                    <Label
                                        htmlFor="email"
                                        className="mb-2 block text-sm text-gray-600"
                                    >
                                        Email address
                                    </Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="jonathan@cnippet.co"
                                        className="w-full"
                                    />
                                </div>
                                <div className="flex items-center gap-2">
                                    <Checkbox id="terms" />
                                    <Label
                                        htmlFor="terms"
                                        className="text-xs text-gray-600"
                                    >
                                        I agree with the{" "}
                                        <Link
                                            href="#"
                                            className="text-blue-600 hover:underline"
                                        >
                                            Term and Conditions
                                        </Link>
                                    </Label>
                                </div>
                                <Button
                                    type="submit"
                                    className="shadow-8 w-full bg-violet-600 hover:bg-violet-700"
                                >
                                    Register
                                </Button>
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="flex">
                                <svg
                                    className="w-20 shrink-0 text-black *:data-lift:transition-transform *:data-lift:duration-300 group-hover:*:data-lift:-translate-y-0.5 group-data-selected:*:data-lift:translate-y-0 sm:w-30"
                                    aria-hidden="true"
                                    fill="none"
                                    viewBox="0 0 120 72"
                                >
                                    <path
                                        className="fill-white"
                                        d="M56.095 6 8.464 33.5c-.957.553-1.435 1.276-1.435 2v3c0 .724.478 1.448 1.435 2L56.095 68c1.913 1.105 5.015 1.105 6.928 0l47.632-27.5c.956-.552 1.435-1.276 1.435-2v-3c-.001-.724-.479-1.447-1.435-2L63.023 6c-1.913-1.104-5.015-1.104-6.928 0"
                                    ></path>
                                    <g stroke="currentColor" opacity="0.1">
                                        <path
                                            fill="currentColor"
                                            d="M60.425 52.5c-.478-.276-.478-.724 0-1L87.272 36c.478-.276 1.254-.276 1.732 0l1.732 1c.478.276.478.724 0 1L63.89 53.5c-.478.276-1.253.276-1.732 0zM54.363 49c-.956-.552-.956-1.448 0-2l3.464-2c.957-.552 2.508-.552 3.464 0 .957.552.957 1.448 0 2l-3.464 2c-.956.552-2.507.552-3.464 0Z"
                                        ></path>
                                        <path
                                            strokeLinecap="round"
                                            d="m63.89 43.5 12.124-7"
                                        ></path>
                                        <path
                                            fill="currentColor"
                                            d="M46.57 44.5c-.48-.276-.48-.724 0-1L73.415 28c.478-.276 1.254-.276 1.732 0l1.732 1c.478.276.478.724 0 1L50.033 45.5c-.478.276-1.254.276-1.732 0z"
                                        ></path>
                                        <path
                                            strokeLinecap="round"
                                            d="m43.105 42.5 10.392-6"
                                        ></path>
                                        <path
                                            fill="currentColor"
                                            d="M37.043 39c-.478-.276-.478-.724 0-1L63.89 22.5c.478-.276 1.253-.276 1.732 0l1.732 1c.478.276.478.724 0 1L40.507 40c-.478.276-1.254.276-1.732 0z"
                                        ></path>
                                        <path
                                            strokeLinecap="round"
                                            d="m33.579 37 10.392-6"
                                        ></path>
                                    </g>
                                    <path
                                        stroke="currentColor"
                                        strokeOpacity="0.4"
                                        d="M112.09 35.5c-.001-.724-.479-1.447-1.435-2L63.023 6c-1.913-1.104-5.015-1.104-6.928 0L8.464 33.5c-.957.553-1.435 1.276-1.435 2m105.061 0c0 .724-.479 1.448-1.435 2L63.023 65c-1.913 1.105-5.015 1.105-6.928 0L8.464 37.5c-.957-.552-1.435-1.276-1.435-2m105.061 0v3c0 .724-.479 1.448-1.435 2L63.023 68c-1.913 1.105-5.015 1.105-6.928 0L8.464 40.5c-.957-.552-1.435-1.276-1.435-2v-3"
                                    ></path>
                                    <path
                                        stroke="currentColor"
                                        strokeOpacity="0.4"
                                        d="M17.99 40c-.478-.276-.478-.724 0-1l47.632-27.5c.478-.276 1.254-.276 1.732 0L108.057 35c.478.276.478.724 0 1L60.426 63.5c-.479.276-1.254.276-1.732 0z"
                                    ></path>
                                    <path
                                        fill="currentColor"
                                        stroke="currentColor"
                                        d="M11.062 36c-.478-.276-.478-.724 0-1L58.694 7.5c.478-.276 1.253-.276 1.732 0L63.024 9c.478.276.478.724 0 1L15.392 37.5c-.478.276-1.253.276-1.732 0z"
                                        opacity="0.1"
                                    ></path>
                                    <g data-lift="true">
                                        <path
                                            className="fill-current"
                                            fillOpacity="0.3"
                                            stroke="currentColor"
                                            d="M60.425 47.5c-.478-.276-.478-.724 0-1L87.272 31c.478-.276 1.254-.276 1.732 0l1.732 1c.478.276.478.724 0 1L63.89 48.5c-.478.276-1.253.276-1.732 0zM54.363 44c-.956-.552-.956-1.448 0-2l3.464-2c.957-.552 2.508-.552 3.464 0 .957.552.957 1.448 0 2l-3.464 2c-.956.552-2.507.552-3.464 0Z"
                                        ></path>
                                        <circle
                                            cx="2"
                                            cy="2"
                                            r="2"
                                            className="fill-white"
                                            stroke="currentColor"
                                            transform="matrix(.86603 -.5 .86603 .5 56.095 41)"
                                        ></circle>
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            d="m63.89 38.5 12.124-7"
                                        ></path>
                                        <path
                                            className="fill-white"
                                            stroke="currentColor"
                                            d="M46.57 39.5c-.48-.276-.48-.724 0-1L73.415 23c.478-.276 1.254-.276 1.732 0l1.732 1c.478.276.478.724 0 1L50.033 40.5c-.478.276-1.254.276-1.732 0z"
                                        ></path>
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            d="m43.105 37.5 10.392-6"
                                        ></path>
                                        <path
                                            className="fill-white"
                                            stroke="currentColor"
                                            d="M37.043 34c-.478-.276-.478-.724 0-1L63.89 17.5c.478-.276 1.253-.276 1.732 0l1.732 1c.478.276.478.724 0 1L40.507 35c-.478.276-1.254.276-1.732 0z"
                                        ></path>
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            d="m33.579 32 10.392-6"
                                        ></path>
                                        <path
                                            className="fill-white"
                                            stroke="currentColor"
                                            d="M11.062 31c-.478-.276-.478-.724 0-1L58.694 2.5c.478-.276 1.253-.276 1.732 0L63.024 4c.478.276.478.724 0 1L15.392 32.5c-.478.276-1.253.276-1.732 0z"
                                        ></path>
                                    </g>
                                </svg>
                                <svg
                                    className="w-20 shrink-0 text-indigo-700 *:data-lift:transition-transform *:data-lift:duration-300 group-hover:*:data-lift:-translate-y-0.5 group-data-selected:*:data-lift:translate-y-0 sm:w-30"
                                    aria-hidden="true"
                                    fill="none"
                                    viewBox="0 0 120 72"
                                >
                                    <path
                                        className="fill-white"
                                        d="M56.095 7 8.464 34.5c-.957.553-1.435 1.276-1.435 2v3c0 .724.478 1.448 1.435 2L56.095 69c1.913 1.105 5.015 1.105 6.928 0l47.632-27.5c.956-.552 1.435-1.276 1.435-2v-3c-.001-.724-.479-1.447-1.435-2L63.023 7c-1.913-1.104-5.015-1.104-6.928 0"
                                    ></path>
                                    <path
                                        stroke="currentColor"
                                        strokeOpacity="0.4"
                                        d="M112.09 36.5c-.001-.724-.479-1.447-1.435-2L63.023 7c-1.913-1.104-5.015-1.104-6.928 0L8.464 34.5c-.957.553-1.435 1.276-1.435 2m105.061 0c0 .724-.479 1.448-1.435 2L63.023 66c-1.913 1.105-5.015 1.105-6.928 0L8.464 38.5c-.957-.552-1.435-1.276-1.435-2m105.061 0v3c0 .724-.479 1.448-1.435 2L63.023 69c-1.913 1.105-5.015 1.105-6.928 0L8.464 41.5c-.957-.552-1.435-1.276-1.435-2v-3"
                                    ></path>
                                    <path
                                        fill="currentColor"
                                        stroke="currentColor"
                                        d="M11.062 37c-.478-.276-.478-.724 0-1L58.694 8.5c.478-.276 1.253-.276 1.732 0l2.598 1.5c.478.276.478.724 0 1L15.392 38.5c-.478.276-1.253.276-1.732 0z"
                                        opacity="0.1"
                                    ></path>
                                    <g
                                        fill="currentColor"
                                        stroke="currentColor"
                                        opacity="0.1"
                                    >
                                        <path d="M19.723 42c-.479-.276-.479-.724 0-1l47.63-27.5c.48-.276 1.255-.276 1.733 0L89.004 25c.479.276.479.724 0 1l-47.63 27.5c-.48.276-1.255.276-1.733 0z"></path>
                                        <path d="M34.445 31.5c-.479-.276-.479-.724 0-1L49.167 22c.478-.276 1.254-.276 1.732 0l23.383 13.5c.478.276.478.724 0 1L59.559 45c-.478.276-1.253.276-1.732 0z"></path>
                                    </g>
                                    <path
                                        fill="currentColor"
                                        stroke="currentColor"
                                        d="M45.703 57c-.478-.276-.478-.724 0-1l47.632-27.5c.478-.276 1.254-.276 1.732 0l12.99 7.5c.479.276.479.724 0 1L60.426 64.5c-.478.276-1.254.276-1.732 0z"
                                        opacity="0.1"
                                    ></path>
                                    <g data-lift="true">
                                        <path
                                            className="fill-white"
                                            stroke="currentColor"
                                            d="M11.062 32c-.478-.276-.478-.724 0-1L58.694 3.5c.478-.276 1.253-.276 1.732 0L63.024 5c.478.276.478.724 0 1L15.392 33.5c-.478.276-1.253.276-1.732 0z"
                                        ></path>
                                        <path
                                            className="fill-white"
                                            stroke="currentColor"
                                            d="M19.723 37c-.479-.276-.479-.724 0-1l47.63-27.5c.48-.276 1.255-.276 1.733 0L89.004 20c.479.276.479.724 0 1l-47.63 27.5c-.48.276-1.255.276-1.733 0z"
                                        ></path>
                                        <path
                                            stroke="currentColor"
                                            strokeOpacity="0.3"
                                            d="M37.909 44.5c-.478-.276-.478-.724 0-1l9.526-5.5c.479-.276 1.254-.276 1.732 0l1.732 1c.479.276.479.724 0 1l-9.526 5.5c-.478.276-1.254.276-1.732 0z"
                                        ></path>
                                        <path
                                            className="fill-white"
                                            stroke="currentColor"
                                            d="M34.445 26.5c-.479-.276-.479-.724 0-1L49.167 17c.478-.276 1.254-.276 1.732 0l23.383 13.5c.478.276.478.724 0 1L59.559 40c-.478.276-1.253.276-1.732 0z"
                                        ></path>
                                        <path
                                            stroke="currentColor"
                                            strokeOpacity="0.3"
                                            d="M56.096 36c-.479-.276-.479-.724 0-1l9.526-5.5c.478-.276 1.254-.276 1.732 0l1.732 1c.478.276.478.724 0 1L59.56 37c-.479.276-1.254.276-1.732 0zM70.818 25.5c-.478-.276-.478-.724 0-1l9.526-5.5c.479-.276 1.254-.276 1.733 0l1.732 1c.478.276.478.724 0 1l-9.527 5.5c-.478.276-1.254.276-1.732 0z"
                                        ></path>
                                        <path
                                            className="fill-white"
                                            stroke="currentColor"
                                            d="M45.703 52c-.478-.276-.478-.724 0-1l47.632-27.5c.478-.276 1.254-.276 1.732 0l12.99 7.5c.479.276.479.724 0 1L60.426 59.5c-.478.276-1.254.276-1.732 0z"
                                        ></path>
                                        <path
                                            stroke="currentColor"
                                            strokeOpacity="0.3"
                                            d="M93.335 34.5c-.478-.276-.478-.724 0-1l6.062-3.5c.478-.276 1.254-.276 1.732 0l1.732 1c.478.276.478.724 0 1l-6.062 3.5c-.478.276-1.254.276-1.732 0zM77.746 43.5c-.478-.276-.478-.724 0-1L89.004 36c.478-.276 1.254-.276 1.732 0l1.732 1c.479.276.479.724 0 1L81.21 44.5c-.478.276-1.254.276-1.732 0z"
                                        ></path>
                                    </g>
                                </svg>
                                <svg
                                    className="w-20 shrink-0 text-black *:data-lift:transition-transform *:data-lift:duration-300 group-hover:*:data-lift:-translate-y-0.5 group-data-selected:*:data-lift:translate-y-0 sm:w-30"
                                    aria-hidden="true"
                                    fill="none"
                                    viewBox="0 0 120 72"
                                >
                                    <g data-lift="true">
                                        <path
                                            shapeRendering="geometricPrecision"
                                            fill="white"
                                            d="M56.066 6 8.435 33.5C7.478 34.053 7 34.776 7 35.5v3c0 .724.478 1.448 1.435 2L56.066 68c1.913 1.105 5.015 1.105 6.929 0l47.631-27.5c.957-.552 1.435-1.276 1.435-2v-3c0-.724-.479-1.447-1.435-2L62.995 6c-1.914-1.104-5.015-1.104-6.929 0"
                                        ></path>
                                        <path
                                            shapeRendering="geometricPrecision"
                                            stroke="currentColor"
                                            d="M112.09 35.496c-.001-.723-.479-1.447-1.435-2l-47.632-27.5c-1.913-1.104-5.015-1.104-6.928 0l-47.631 27.5c-.957.553-1.435 1.277-1.435 2m105.061 0c0 .724-.479 1.448-1.435 2l-47.632 27.5c-1.913 1.105-5.015 1.105-6.928 0l-47.631-27.5c-.957-.552-1.435-1.276-1.435-2m105.061 0v3c0 .724-.479 1.448-1.435 2l-47.632 27.5c-1.913 1.105-5.015 1.105-6.928 0l-47.631-27.5c-.957-.552-1.435-1.276-1.435-2v-3"
                                        ></path>
                                        <path
                                            shapeRendering="geometricPrecision"
                                            stroke="currentColor"
                                            strokeOpacity="0.3"
                                            d="M11.062 35.996c-.478-.276-.478-.724 0-1l47.632-27.5c.478-.276 1.253-.276 1.732 0l30.31 17.5c.479.277.479.724 0 1l-47.63 27.5c-.479.276-1.255.276-1.733 0zM45.703 55.996c-.478-.276-.478-.724 0-1l47.632-27.5c.478-.276 1.254-.276 1.732 0l12.99 7.5c.479.276.479.724 0 1l-47.631 27.5c-.478.276-1.254.276-1.732 0z"
                                        ></path>
                                        <circle
                                            shapeRendering="geometricPrecision"
                                            cx="1.5"
                                            cy="1.5"
                                            r="1.5"
                                            fill="currentColor"
                                            transform="matrix(.86603 -.5 .86603 .5 16.258 35.496)"
                                        ></circle>
                                        <path
                                            shapeRendering="geometricPrecision"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            d="m22.32 33.496 3.464-2M56.961 13.496l3.465-2M49.168 17.996l4.33-2.5M42.24 21.996l3.463-2"
                                        ></path>
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeOpacity="0.3"
                                            d="m41.373 38.496 23.383-13.5"
                                        ></path>
                                        <path
                                            shapeRendering="geometricPrecision"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            d="m53.498 55.496 6.928-4M69.086 46.496l6.928-4M84.674 37.496l6.929-4"
                                        ></path>
                                        <path
                                            shapeRendering="geometricPrecision"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeOpacity="0.3"
                                            d="m56.096 56.996 9.526-5.5M71.684 47.996l9.526-5.5M87.273 38.996l9.526-5.5M58.693 58.496l8.66-5M74.282 49.496l8.66-5M89.87 40.496l8.66-5M46.57 38.496l18.186-10.5"
                                        ></path>
                                        <rect
                                            shapeRendering="geometricPrecision"
                                            width="28"
                                            height="2"
                                            fill="currentColor"
                                            rx="0.5"
                                            transform="matrix(.86603 -.5 .86603 .5 33.579 34.496)"
                                        ></rect>
                                        <rect
                                            shapeRendering="geometricPrecision"
                                            width="32"
                                            height="2"
                                            fill="currentColor"
                                            rx="0.5"
                                            transform="matrix(.86603 -.5 .86603 .5 35.311 37.496)"
                                        ></rect>
                                        <rect
                                            shapeRendering="geometricPrecision"
                                            width="10"
                                            height="3"
                                            fill="currentColor"
                                            rx="1.5"
                                            transform="matrix(.86603 -.5 .86603 .5 48.301 39.996)"
                                        ></rect>
                                        <rect
                                            shapeRendering="geometricPrecision"
                                            width="10"
                                            height="3"
                                            fill="currentColor"
                                            fillOpacity="0.3"
                                            rx="1.5"
                                            transform="matrix(.86603 -.5 .86603 .5 58.693 33.996)"
                                        ></rect>
                                    </g>
                                </svg>
                            </div>
                            <div className="mt-2 rounded-lg bg-white p-4 shadow-sm dark:bg-neutral-900">
                                <h4 className="mb-2 font-semibold text-gray-900 dark:text-gray-200">
                                    Get the latest newsletter
                                </h4>
                                <p className="text-sm text-gray-600 dark:text-gray-500">
                                    Cnippet become a tech-driven legal solutions
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
