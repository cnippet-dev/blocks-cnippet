// "use client";
// import { useState, useEffect } from "react";

// import { useTheme } from "next-themes";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Checkbox } from "@/components/ui/checkbox";
// import { Separator } from "@/components/ui/separator";
// import Image from "next/image";
// import {
//     RiFacebookFill,
//     RiLinkedinFill,
//     RiNewspaperFill,
// } from "@remixicon/react";
// import { Label } from "@/components/ui/label";
// import { Moon, Sun } from "lucide-react";

// const footerLinks = [
//     {
//         title: "Sections",
//         links: [
//             { title: "Hero", href: "/sections/hero" },
//             { title: "Navbar", href: "#" },
//             { title: "Pricing", href: "/sections/pricing" },
//             { title: "Footer", href: "/sections/footer" },
//         ],
//     },
//     {
//         title: "Pages",
//         links: [
//             { title: "Landing page", href: "#" },
//             { title: "About page", href: "#" },
//             { title: "Contact page", href: "#" },
//             { title: "Pricing page", href: "#" },
//         ],
//     },
//     {
//         title: "Company",
//         links: [
//             { title: "About us", href: "/about_us" },
//             { title: "Contact us", href: "/contact_us" },
//             { title: "Profile", href: "#" },
//             { title: "Changelog", href: "#" },
//             { title: "Blogs", href: "#" },
//         ],
//     },
// ];

// export default function EchoFooter() {
//     const { theme, setTheme } = useTheme();
//     const [mounted, setMounted] = useState(false);

//     useEffect(() => {
//         setMounted(true);
//     }, []);

//     return (
//         <footer className="font-kumb dark:bg-background bg-white px-6 py-12">
//             <div className="mx-auto max-w-7xl">
//                 <div className="grid grid-cols-1 gap-8 md:gap-12 lg:grid-cols-6">
//                     <div className="grid grid-cols-2 gap-0 md:grid-cols-4 md:gap-8 lg:col-span-4">
//                         <div className="col-span-4 mb-16 flex flex-wrap items-center gap-6">
//                             <div className="flex items-center">
//                                 {mounted && (
//                                     <Image
//                                         src={
//                                             theme === "dark"
//                                                 ? "https://res.cloudinary.com/dcxm3ccir/image/upload/v1753948226/logo-dark.png"
//                                                 : "https://res.cloudinary.com/dcxm3ccir/image/upload/v1753948225/logo-light.png"
//                                         }
//                                         alt=""
//                                         className="size-12"
//                                         width={1080}
//                                         height={1080}
//                                         suppressHydrationWarning
//                                     />
//                                 )}
//                                 <span className="font-mono text-2xl font-medium tracking-wider text-stone-800 dark:text-white">
//                                     CNIPPET
//                                 </span>
//                             </div>
//                             <Separator
//                                 orientation="vertical"
//                                 className="h-7 bg-neutral-400"
//                             />
//                             <div className="mr-auto flex items-center gap-4 [&_a]:text-gray-600 [&_a]:hover:text-gray-900">
//                                 <Link href="#">
//                                     <RiLinkedinFill className="h-5 w-5 dark:text-white" />
//                                 </Link>
//                                 <Link href="#">
//                                     <RiFacebookFill className="h-5 w-5 dark:text-white" />
//                                 </Link>
//                             </div>
//                             <div className="flex items-end">
//                                 {mounted && (
//                                     <div className="flex w-fit gap-1 rounded-full border p-1 dark:border-neutral-800">
//                                         <button
//                                             onClick={() => setTheme("light")}
//                                             className={`rounded-full p-1.5 ${theme === "light" ? "bg-slate-100 dark:bg-[#1a1a1a]" : ""}`}
//                                             aria-label="Light mode"
//                                         >
//                                             <Sun className="size-4" />
//                                         </button>
//                                         <button
//                                             onClick={() => setTheme("dark")}
//                                             className={`rounded-full p-1.5 ${theme === "dark" ? "bg-[#1a1a1a]" : ""}`}
//                                             aria-label="Dark mode"
//                                         >
//                                             <Moon className="size-4" />
//                                         </button>
//                                     </div>
//                                 )}
//                             </div>
//                         </div>

//                         {footerLinks.map((section, index) => (
//                             <div key={`${section.title}-${index}`}>
//                                 <h3 className="mb-6 font-medium text-gray-900 dark:text-white">
//                                     {section.title}
//                                 </h3>
//                                 <ul className="space-y-5">
//                                     {section.links.map((link) => (
//                                         <li key={link.title}>
//                                             <Link
//                                                 href={link.href}
//                                                 className="text-sm text-neutral-800 underline-offset-1 hover:text-black hover:underline dark:text-gray-400"
//                                             >
//                                                 {link.title}
//                                             </Link>
//                                         </li>
//                                     ))}
//                                 </ul>
//                             </div>
//                         ))}

//                         <div className="col-span-4 hidden md:block">
//                             <Separator className="my-6" />

//                             <div className="flex w-full flex-col justify-between gap-4 text-xs md:flex-row md:gap-0">
//                                 <div className="flex items-center gap-4 text-gray-700 underline-offset-2 dark:text-neutral-300 [&_a]:hover:text-gray-900 [&_a]:hover:underline [&_a]:dark:hover:text-white">
//                                     <Link href="/legal/terms">Terms</Link>
//                                     <Link href="/legal/privacy">Privacy</Link>
//                                     <Link href="/legal/cancellation">
//                                         Cancellation
//                                     </Link>
//                                 </div>
//                                 <div className="text-xs text-gray-700 md:text-sm dark:text-neutral-400">
//                                     ©2025 All Rights Reserved - cnippet.dev
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="-mt-4 flex flex-col justify-between space-y-6 rounded-xl border bg-gray-100 p-4 lg:col-span-2 dark:border-neutral-800 dark:bg-black">
//                         <div>
//                             <div className="mb-6 flex items-center gap-2">
//                                 <RiNewspaperFill />
//                                 <h3 className="font-semibold text-gray-900 dark:text-white">
//                                     Newsletter
//                                 </h3>
//                             </div>
//                             <div className="space-y-4 rounded-lg bg-white p-4 shadow-sm dark:bg-neutral-900">
//                                 <div>
//                                     <Label
//                                         htmlFor="email"
//                                         className="mb-2 block text-sm text-gray-600"
//                                     >
//                                         Email address
//                                     </Label>
//                                     <Input
//                                         id="email"
//                                         type="email"
//                                         placeholder="jonathan@cnippet.co"
//                                         className="w-full"
//                                     />
//                                 </div>
//                                 <div className="flex items-center gap-2">
//                                     <Checkbox id="terms" />
//                                     <Label
//                                         htmlFor="terms"
//                                         className="text-xs text-gray-600"
//                                     >
//                                         I agree with the{" "}
//                                         <Link
//                                             href="#"
//                                             className="text-blue-600 hover:underline"
//                                         >
//                                             Term and Conditions
//                                         </Link>
//                                     </Label>
//                                 </div>
//                                 <Button
//                                     type="submit"
//                                     className="shadow-8 w-full bg-violet-600 hover:bg-violet-700"
//                                 >
//                                     Register
//                                 </Button>
//                             </div>
//                         </div>
//                         <div className="text-center">
//                             <div className="flex justify-between">
//                                 <svg
//                                     className="w-20 shrink-0 text-black *:data-lift:transition-transform *:data-lift:duration-300 group-hover:*:data-lift:-translate-y-0.5 group-data-selected:*:data-lift:translate-y-0 sm:w-30"
//                                     aria-hidden="true"
//                                     fill="none"
//                                     viewBox="0 0 120 72"
//                                 >
//                                     <path
//                                         className="fill-white"
//                                         d="M56.095 6 8.464 33.5c-.957.553-1.435 1.276-1.435 2v3c0 .724.478 1.448 1.435 2L56.095 68c1.913 1.105 5.015 1.105 6.928 0l47.632-27.5c.956-.552 1.435-1.276 1.435-2v-3c-.001-.724-.479-1.447-1.435-2L63.023 6c-1.913-1.104-5.015-1.104-6.928 0"
//                                     ></path>
//                                     <g stroke="currentColor" opacity="0.1">
//                                         <path
//                                             fill="currentColor"
//                                             d="M60.425 52.5c-.478-.276-.478-.724 0-1L87.272 36c.478-.276 1.254-.276 1.732 0l1.732 1c.478.276.478.724 0 1L63.89 53.5c-.478.276-1.253.276-1.732 0zM54.363 49c-.956-.552-.956-1.448 0-2l3.464-2c.957-.552 2.508-.552 3.464 0 .957.552.957 1.448 0 2l-3.464 2c-.956.552-2.507.552-3.464 0Z"
//                                         ></path>
//                                         <path
//                                             strokeLinecap="round"
//                                             d="m63.89 43.5 12.124-7"
//                                         ></path>
//                                         <path
//                                             fill="currentColor"
//                                             d="M46.57 44.5c-.48-.276-.48-.724 0-1L73.415 28c.478-.276 1.254-.276 1.732 0l1.732 1c.478.276.478.724 0 1L50.033 45.5c-.478.276-1.254.276-1.732 0z"
//                                         ></path>
//                                         <path
//                                             strokeLinecap="round"
//                                             d="m43.105 42.5 10.392-6"
//                                         ></path>
//                                         <path
//                                             fill="currentColor"
//                                             d="M37.043 39c-.478-.276-.478-.724 0-1L63.89 22.5c.478-.276 1.253-.276 1.732 0l1.732 1c.478.276.478.724 0 1L40.507 40c-.478.276-1.254.276-1.732 0z"
//                                         ></path>
//                                         <path
//                                             strokeLinecap="round"
//                                             d="m33.579 37 10.392-6"
//                                         ></path>
//                                     </g>
//                                     <path
//                                         stroke="currentColor"
//                                         strokeOpacity="0.4"
//                                         d="M112.09 35.5c-.001-.724-.479-1.447-1.435-2L63.023 6c-1.913-1.104-5.015-1.104-6.928 0L8.464 33.5c-.957.553-1.435 1.276-1.435 2m105.061 0c0 .724-.479 1.448-1.435 2L63.023 65c-1.913 1.105-5.015 1.105-6.928 0L8.464 37.5c-.957-.552-1.435-1.276-1.435-2m105.061 0v3c0 .724-.479 1.448-1.435 2L63.023 68c-1.913 1.105-5.015 1.105-6.928 0L8.464 40.5c-.957-.552-1.435-1.276-1.435-2v-3"
//                                     ></path>
//                                     <path
//                                         stroke="currentColor"
//                                         strokeOpacity="0.4"
//                                         d="M17.99 40c-.478-.276-.478-.724 0-1l47.632-27.5c.478-.276 1.254-.276 1.732 0L108.057 35c.478.276.478.724 0 1L60.426 63.5c-.479.276-1.254.276-1.732 0z"
//                                     ></path>
//                                     <path
//                                         fill="currentColor"
//                                         stroke="currentColor"
//                                         d="M11.062 36c-.478-.276-.478-.724 0-1L58.694 7.5c.478-.276 1.253-.276 1.732 0L63.024 9c.478.276.478.724 0 1L15.392 37.5c-.478.276-1.253.276-1.732 0z"
//                                         opacity="0.1"
//                                     ></path>
//                                     <g data-lift="true">
//                                         <path
//                                             className="fill-current"
//                                             fillOpacity="0.3"
//                                             stroke="currentColor"
//                                             d="M60.425 47.5c-.478-.276-.478-.724 0-1L87.272 31c.478-.276 1.254-.276 1.732 0l1.732 1c.478.276.478.724 0 1L63.89 48.5c-.478.276-1.253.276-1.732 0zM54.363 44c-.956-.552-.956-1.448 0-2l3.464-2c.957-.552 2.508-.552 3.464 0 .957.552.957 1.448 0 2l-3.464 2c-.956.552-2.507.552-3.464 0Z"
//                                         ></path>
//                                         <circle
//                                             cx="2"
//                                             cy="2"
//                                             r="2"
//                                             className="fill-white"
//                                             stroke="currentColor"
//                                             transform="matrix(.86603 -.5 .86603 .5 56.095 41)"
//                                         ></circle>
//                                         <path
//                                             stroke="currentColor"
//                                             strokeLinecap="round"
//                                             d="m63.89 38.5 12.124-7"
//                                         ></path>
//                                         <path
//                                             className="fill-white"
//                                             stroke="currentColor"
//                                             d="M46.57 39.5c-.48-.276-.48-.724 0-1L73.415 23c.478-.276 1.254-.276 1.732 0l1.732 1c.478.276.478.724 0 1L50.033 40.5c-.478.276-1.254.276-1.732 0z"
//                                         ></path>
//                                         <path
//                                             stroke="currentColor"
//                                             strokeLinecap="round"
//                                             d="m43.105 37.5 10.392-6"
//                                         ></path>
//                                         <path
//                                             className="fill-white"
//                                             stroke="currentColor"
//                                             d="M37.043 34c-.478-.276-.478-.724 0-1L63.89 17.5c.478-.276 1.253-.276 1.732 0l1.732 1c.478.276.478.724 0 1L40.507 35c-.478.276-1.254.276-1.732 0z"
//                                         ></path>
//                                         <path
//                                             stroke="currentColor"
//                                             strokeLinecap="round"
//                                             d="m33.579 32 10.392-6"
//                                         ></path>
//                                         <path
//                                             className="fill-white"
//                                             stroke="currentColor"
//                                             d="M11.062 31c-.478-.276-.478-.724 0-1L58.694 2.5c.478-.276 1.253-.276 1.732 0L63.024 4c.478.276.478.724 0 1L15.392 32.5c-.478.276-1.253.276-1.732 0z"
//                                         ></path>
//                                     </g>
//                                 </svg>
//                                 <svg
//                                     className="w-20 shrink-0 text-indigo-700 *:data-lift:transition-transform *:data-lift:duration-300 group-hover:*:data-lift:-translate-y-0.5 group-data-selected:*:data-lift:translate-y-0 sm:w-30"
//                                     aria-hidden="true"
//                                     fill="none"
//                                     viewBox="0 0 120 72"
//                                 >
//                                     <path
//                                         className="fill-white"
//                                         d="M56.095 7 8.464 34.5c-.957.553-1.435 1.276-1.435 2v3c0 .724.478 1.448 1.435 2L56.095 69c1.913 1.105 5.015 1.105 6.928 0l47.632-27.5c.956-.552 1.435-1.276 1.435-2v-3c-.001-.724-.479-1.447-1.435-2L63.023 7c-1.913-1.104-5.015-1.104-6.928 0"
//                                     ></path>
//                                     <path
//                                         stroke="currentColor"
//                                         strokeOpacity="0.4"
//                                         d="M112.09 36.5c-.001-.724-.479-1.447-1.435-2L63.023 7c-1.913-1.104-5.015-1.104-6.928 0L8.464 34.5c-.957.553-1.435 1.276-1.435 2m105.061 0c0 .724-.479 1.448-1.435 2L63.023 66c-1.913 1.105-5.015 1.105-6.928 0L8.464 38.5c-.957-.552-1.435-1.276-1.435-2m105.061 0v3c0 .724-.479 1.448-1.435 2L63.023 69c-1.913 1.105-5.015 1.105-6.928 0L8.464 41.5c-.957-.552-1.435-1.276-1.435-2v-3"
//                                     ></path>
//                                     <path
//                                         fill="currentColor"
//                                         stroke="currentColor"
//                                         d="M11.062 37c-.478-.276-.478-.724 0-1L58.694 8.5c.478-.276 1.253-.276 1.732 0l2.598 1.5c.478.276.478.724 0 1L15.392 38.5c-.478.276-1.253.276-1.732 0z"
//                                         opacity="0.1"
//                                     ></path>
//                                     <g
//                                         fill="currentColor"
//                                         stroke="currentColor"
//                                         opacity="0.1"
//                                     >
//                                         <path d="M19.723 42c-.479-.276-.479-.724 0-1l47.63-27.5c.48-.276 1.255-.276 1.733 0L89.004 25c.479.276.479.724 0 1l-47.63 27.5c-.48.276-1.255.276-1.733 0z"></path>
//                                         <path d="M34.445 31.5c-.479-.276-.479-.724 0-1L49.167 22c.478-.276 1.254-.276 1.732 0l23.383 13.5c.478.276.478.724 0 1L59.559 45c-.478.276-1.253.276-1.732 0z"></path>
//                                     </g>
//                                     <path
//                                         fill="currentColor"
//                                         stroke="currentColor"
//                                         d="M45.703 57c-.478-.276-.478-.724 0-1l47.632-27.5c.478-.276 1.254-.276 1.732 0l12.99 7.5c.479.276.479.724 0 1L60.426 64.5c-.478.276-1.254.276-1.732 0z"
//                                         opacity="0.1"
//                                     ></path>
//                                     <g data-lift="true">
//                                         <path
//                                             className="fill-white"
//                                             stroke="currentColor"
//                                             d="M11.062 32c-.478-.276-.478-.724 0-1L58.694 3.5c.478-.276 1.253-.276 1.732 0L63.024 5c.478.276.478.724 0 1L15.392 33.5c-.478.276-1.253.276-1.732 0z"
//                                         ></path>
//                                         <path
//                                             className="fill-white"
//                                             stroke="currentColor"
//                                             d="M19.723 37c-.479-.276-.479-.724 0-1l47.63-27.5c.48-.276 1.255-.276 1.733 0L89.004 20c.479.276.479.724 0 1l-47.63 27.5c-.48.276-1.255.276-1.733 0z"
//                                         ></path>
//                                         <path
//                                             stroke="currentColor"
//                                             strokeOpacity="0.3"
//                                             d="M37.909 44.5c-.478-.276-.478-.724 0-1l9.526-5.5c.479-.276 1.254-.276 1.732 0l1.732 1c.479.276.479.724 0 1l-9.526 5.5c-.478.276-1.254.276-1.732 0z"
//                                         ></path>
//                                         <path
//                                             className="fill-white"
//                                             stroke="currentColor"
//                                             d="M34.445 26.5c-.479-.276-.479-.724 0-1L49.167 17c.478-.276 1.254-.276 1.732 0l23.383 13.5c.478.276.478.724 0 1L59.559 40c-.478.276-1.253.276-1.732 0z"
//                                         ></path>
//                                         <path
//                                             stroke="currentColor"
//                                             strokeOpacity="0.3"
//                                             d="M56.096 36c-.479-.276-.479-.724 0-1l9.526-5.5c.478-.276 1.254-.276 1.732 0l1.732 1c.478.276.478.724 0 1L59.56 37c-.479.276-1.254.276-1.732 0zM70.818 25.5c-.478-.276-.478-.724 0-1l9.526-5.5c.479-.276 1.254-.276 1.733 0l1.732 1c.478.276.478.724 0 1l-9.527 5.5c-.478.276-1.254.276-1.732 0z"
//                                         ></path>
//                                         <path
//                                             className="fill-white"
//                                             stroke="currentColor"
//                                             d="M45.703 52c-.478-.276-.478-.724 0-1l47.632-27.5c.478-.276 1.254-.276 1.732 0l12.99 7.5c.479.276.479.724 0 1L60.426 59.5c-.478.276-1.254.276-1.732 0z"
//                                         ></path>
//                                         <path
//                                             stroke="currentColor"
//                                             strokeOpacity="0.3"
//                                             d="M93.335 34.5c-.478-.276-.478-.724 0-1l6.062-3.5c.478-.276 1.254-.276 1.732 0l1.732 1c.478.276.478.724 0 1l-6.062 3.5c-.478.276-1.254.276-1.732 0zM77.746 43.5c-.478-.276-.478-.724 0-1L89.004 36c.478-.276 1.254-.276 1.732 0l1.732 1c.479.276.479.724 0 1L81.21 44.5c-.478.276-1.254.276-1.732 0z"
//                                         ></path>
//                                     </g>
//                                 </svg>
//                                 <svg
//                                     className="w-20 shrink-0 text-black *:data-lift:transition-transform *:data-lift:duration-300 group-hover:*:data-lift:-translate-y-0.5 group-data-selected:*:data-lift:translate-y-0 sm:w-30"
//                                     aria-hidden="true"
//                                     fill="none"
//                                     viewBox="0 0 120 72"
//                                 >
//                                     <g data-lift="true">
//                                         <path
//                                             shapeRendering="geometricPrecision"
//                                             fill="white"
//                                             d="M56.066 6 8.435 33.5C7.478 34.053 7 34.776 7 35.5v3c0 .724.478 1.448 1.435 2L56.066 68c1.913 1.105 5.015 1.105 6.929 0l47.631-27.5c.957-.552 1.435-1.276 1.435-2v-3c0-.724-.479-1.447-1.435-2L62.995 6c-1.914-1.104-5.015-1.104-6.929 0"
//                                         ></path>
//                                         <path
//                                             shapeRendering="geometricPrecision"
//                                             stroke="currentColor"
//                                             d="M112.09 35.496c-.001-.723-.479-1.447-1.435-2l-47.632-27.5c-1.913-1.104-5.015-1.104-6.928 0l-47.631 27.5c-.957.553-1.435 1.277-1.435 2m105.061 0c0 .724-.479 1.448-1.435 2l-47.632 27.5c-1.913 1.105-5.015 1.105-6.928 0l-47.631-27.5c-.957-.552-1.435-1.276-1.435-2m105.061 0v3c0 .724-.479 1.448-1.435 2l-47.632 27.5c-1.913 1.105-5.015 1.105-6.928 0l-47.631-27.5c-.957-.552-1.435-1.276-1.435-2v-3"
//                                         ></path>
//                                         <path
//                                             shapeRendering="geometricPrecision"
//                                             stroke="currentColor"
//                                             strokeOpacity="0.3"
//                                             d="M11.062 35.996c-.478-.276-.478-.724 0-1l47.632-27.5c.478-.276 1.253-.276 1.732 0l30.31 17.5c.479.277.479.724 0 1l-47.63 27.5c-.479.276-1.255.276-1.733 0zM45.703 55.996c-.478-.276-.478-.724 0-1l47.632-27.5c.478-.276 1.254-.276 1.732 0l12.99 7.5c.479.276.479.724 0 1l-47.631 27.5c-.478.276-1.254.276-1.732 0z"
//                                         ></path>
//                                         <circle
//                                             shapeRendering="geometricPrecision"
//                                             cx="1.5"
//                                             cy="1.5"
//                                             r="1.5"
//                                             fill="currentColor"
//                                             transform="matrix(.86603 -.5 .86603 .5 16.258 35.496)"
//                                         ></circle>
//                                         <path
//                                             shapeRendering="geometricPrecision"
//                                             stroke="currentColor"
//                                             strokeLinecap="round"
//                                             d="m22.32 33.496 3.464-2M56.961 13.496l3.465-2M49.168 17.996l4.33-2.5M42.24 21.996l3.463-2"
//                                         ></path>
//                                         <path
//                                             stroke="currentColor"
//                                             strokeLinecap="round"
//                                             strokeOpacity="0.3"
//                                             d="m41.373 38.496 23.383-13.5"
//                                         ></path>
//                                         <path
//                                             shapeRendering="geometricPrecision"
//                                             stroke="currentColor"
//                                             strokeLinecap="round"
//                                             d="m53.498 55.496 6.928-4M69.086 46.496l6.928-4M84.674 37.496l6.929-4"
//                                         ></path>
//                                         <path
//                                             shapeRendering="geometricPrecision"
//                                             stroke="currentColor"
//                                             strokeLinecap="round"
//                                             strokeOpacity="0.3"
//                                             d="m56.096 56.996 9.526-5.5M71.684 47.996l9.526-5.5M87.273 38.996l9.526-5.5M58.693 58.496l8.66-5M74.282 49.496l8.66-5M89.87 40.496l8.66-5M46.57 38.496l18.186-10.5"
//                                         ></path>
//                                         <rect
//                                             shapeRendering="geometricPrecision"
//                                             width="28"
//                                             height="2"
//                                             fill="currentColor"
//                                             rx="0.5"
//                                             transform="matrix(.86603 -.5 .86603 .5 33.579 34.496)"
//                                         ></rect>
//                                         <rect
//                                             shapeRendering="geometricPrecision"
//                                             width="32"
//                                             height="2"
//                                             fill="currentColor"
//                                             rx="0.5"
//                                             transform="matrix(.86603 -.5 .86603 .5 35.311 37.496)"
//                                         ></rect>
//                                         <rect
//                                             shapeRendering="geometricPrecision"
//                                             width="10"
//                                             height="3"
//                                             fill="currentColor"
//                                             rx="1.5"
//                                             transform="matrix(.86603 -.5 .86603 .5 48.301 39.996)"
//                                         ></rect>
//                                         <rect
//                                             shapeRendering="geometricPrecision"
//                                             width="10"
//                                             height="3"
//                                             fill="currentColor"
//                                             fillOpacity="0.3"
//                                             rx="1.5"
//                                             transform="matrix(.86603 -.5 .86603 .5 58.693 33.996)"
//                                         ></rect>
//                                     </g>
//                                 </svg>
//                             </div>
//                             <div className="mt-2 rounded-lg bg-white p-4 shadow-sm dark:bg-neutral-900">
//                                 <h4 className="mb-2 font-semibold text-gray-900 dark:text-gray-200">
//                                     Get the latest newsletter
//                                 </h4>
//                                 <p className="text-sm text-gray-600 dark:text-gray-500">
//                                     Cnippet become a tech-driven legal solutions
//                                 </p>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="block md:hidden">
//                         <Separator className="my-6" />

//                         <div className="flex w-full flex-col justify-between gap-4 text-xs md:flex-row md:gap-0">
//                             <div className="flex items-center gap-4 text-gray-700 underline-offset-2 dark:text-neutral-300 [&_a]:hover:text-gray-900 [&_a]:hover:underline [&_a]:dark:hover:text-white">
//                                 <Link href="/legal/terms">Terms</Link>
//                                 <Link href="/legal/privacy">Privacy</Link>
//                                 <Link href="/legal/cancellation">
//                                     Cancellation
//                                 </Link>
//                             </div>
//                             <div className="text-xs text-gray-700 md:text-sm dark:text-neutral-400">
//                                 ©2025 All Rights Reserved - cnippet.dev
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     );
// }

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { OrbitingCircles } from "../motion/orbiting-circles";
import {
    RiArrowRightUpLine,
    RiBehanceLine,
    RiDribbbleLine,
    RiTwitterLine,
} from "@remixicon/react";
import Link from "next/link";

export default function Component() {
    return (
        <div className="relative">
            <div className="pointer-events-none absolute top-0 bottom-0 left-0 z-0 flex w-full overflow-visible">
                <div
                    className="absolute top-20 left-0 z-0 h-[1px] w-full flex-auto overflow-hidden border-t border-dashed border-gray-200"
                    data-border="true"
                    data-framer-name="Top divider"
                ></div>

                <div
                    className="absolute top-0 left-1/2 z-0 h-full w-full max-w-7xl flex-auto -translate-x-1/2 overflow-visible"
                    data-framer-name="Vertical lines"
                >
                    <div
                        className="absolute right-0 bottom-0 z-0 h-full w-[1px] border-r border-dashed border-gray-200"
                        data-border="true"
                        data-framer-name="Right line"
                    >
                        <div
                            className="cnippet-dot2"
                            data-border="true"
                            data-framer-name="Ellipsis"
                        ></div>
                    </div>
                    <div
                        className="absolute bottom-0 left-0 z-0 h-full w-[1px] border-r border-dashed border-gray-200"
                        data-border="true"
                        data-framer-name="Left line"
                    >
                        <div
                            className="cnippet-dot2"
                            data-border="true"
                            data-framer-name="Ellipsis"
                        ></div>
                    </div>
                </div>
            </div>

            <section className="m-4 rounded-3xl bg-gray-50 py-28">
                <div className="mx-auto max-w-6xl rounded-4xl bg-white px-10 py-2 shadow-lg">
                    <div className="grid items-center gap-12 lg:grid-cols-2">
                        {/* Left Content */}
                        <div className="space-y-4 py-5">
                            <div className="space-y-2">
                                <p className="text-sm text-gray-600">
                                    Become an Affiliate
                                </p>
                                <h1 className="text-4xl leading-tight font-semibold text-gray-900 md:text-5xl lg:text-2xl">
                                    Join our Affiliate Program
                                </h1>
                            </div>

                            <div className="space-y-4">
                                <p className="text-base leading-relaxed text-gray-600">
                                    Earn up to{" "}
                                    <span className="font-semibold text-gray-900">
                                        $200
                                    </span>{" "}
                                    with our generous{" "}
                                    <span className="font-semibold text-gray-900">
                                        40%
                                    </span>{" "}
                                    commission for every sale you drive with
                                    your referral link.
                                </p>
                            </div>

                            <Button
                                size="lg"
                                className="mt-3 cursor-pointer rounded-full bg-black px-8 py-5.5 text-sm text-white shadow-none hover:bg-gray-800"
                            >
                                Become an affiliate
                                <RiArrowRightUpLine />
                            </Button>
                        </div>

                        <div className="relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden">
                            <OrbitingCircles iconSize={40}>
                                <Avatar.a1 />
                                <Avatar.a2 />
                                <Avatar.a3 />
                                <Avatar.a4 />
                                <Avatar.a5 />
                                <Avatar.a6 />
                            </OrbitingCircles>
                            <OrbitingCircles
                                iconSize={30}
                                radius={100}
                                reverse
                                speed={2}
                            >
                                <Icons.whatsapp />
                                <Icons.notion />
                                <Icons.openai />
                                <Icons.googleDrive />
                            </OrbitingCircles>
                            <OrbitingCircles radius={20} speed={2} />
                        </div>
                    </div>
                </div>

                <footer className="">
                    <div className="mx-auto max-w-6xl px-4 pt-16">
                        <div className="grid gap-20 md:grid-cols-2 lg:grid-cols-6">
                            <div className="col-span-2 space-y-2">
                                <div className="flex items-center">
                                    <Image
                                        src="https:res.cloudinary.com/dcxm3ccir/image/upload/v1753948226/logo-light.png"
                                        alt=""
                                        className="size-10"
                                        width={1080}
                                        height={1080}
                                        suppressHydrationWarning
                                    />
                                    <span className="text-xl font-semibold tracking-tight text-gray-900">
                                        Cnippet{" "}
                                        <span className="text-gray-400">
                                            Blocks
                                        </span>
                                    </span>
                                </div>
                                <p className="w-[70%] text-sm leading-relaxed text-gray-700">
                                    The most Powerful Figma Ui Kit & Design
                                    System for designers.
                                </p>
                            </div>

                            <div className="col-span-2 flex space-x-10">
                                <div className="space-y-4">
                                    <h3 className="text-sm font-semibold text-gray-900">
                                        Company
                                    </h3>
                                    <div className="space-y-3 [&_a]:text-sm">
                                        <Link
                                            href="#"
                                            className="block text-gray-600 transition-colors hover:text-gray-900"
                                        >
                                            Pricing
                                        </Link>
                                        <Link
                                            href="#"
                                            className="block text-gray-600 transition-colors hover:text-gray-900"
                                        >
                                            Contact Us
                                        </Link>
                                        <Link
                                            href="#"
                                            className="flex items-center text-gray-600 transition-colors hover:text-gray-900"
                                        >
                                            Become an Affiliate
                                            <RiArrowRightUpLine className="ml-1 h-3 w-3" />
                                        </Link>
                                        <Link
                                            href="#"
                                            className="flex items-center text-gray-600 transition-colors hover:text-gray-900"
                                        >
                                            Projects
                                            <RiArrowRightUpLine className="ml-1 h-3 w-3" />
                                        </Link>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-sm font-semibold text-gray-900">
                                        Socials
                                    </h3>
                                    <div className="space-y-3 [&_a]:text-sm">
                                        <a
                                            href="#"
                                            className="flex items-center text-gray-600 transition-colors hover:text-gray-900"
                                        >
                                            Behance
                                            <RiArrowRightUpLine className="ml-1 h-3 w-3" />
                                        </a>
                                        <a
                                            href="#"
                                            className="flex items-center text-gray-600 transition-colors hover:text-gray-900"
                                        >
                                            Dribbble
                                            <RiArrowRightUpLine className="ml-1 h-3 w-3" />
                                        </a>
                                        <a
                                            href="#"
                                            className="flex items-center text-gray-600 transition-colors hover:text-gray-900"
                                        >
                                            Twitter/X
                                            <RiArrowRightUpLine className="ml-1 h-3 w-3" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-span-2 space-y-2">
                                <h3 className="text-sm font-semibold text-gray-900">
                                    Newsletter
                                </h3>
                                <p className="text-sm leading-relaxed text-gray-700">
                                    Receive product updates news, exclusive
                                    discounts and early access.
                                </p>
                                <div className="flex overflow-hidden rounded-full bg-white p-1 shadow-sm">
                                    <Input
                                        type="email"
                                        placeholder="Enter your email..."
                                        className="border-none py-5 shadow-none focus:z-10 focus-visible:ring-0"
                                    />
                                    <Button className="rounded-full bg-black px-6 py-5 text-white hover:bg-gray-800">
                                        <ArrowRight className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Footer */}
                        <div className="mt-16 flex flex-col items-center justify-between space-y-4 border-t border-gray-200 pt-8 md:flex-row md:space-y-0">
                            <div className="flex items-center space-x-4 text-xs font-medium tracking-tight text-gray-600">
                                <span>© 2025 Cnippet</span>
                                <span>•</span>
                                <span>All rights reserved</span>
                                <span>•</span>
                                <span>Made with CnippetUi</span>
                            </div>
                            <div className="flex items-center space-x-4 text-sm text-gray-600">
                                <div className="flex items-center space-x-2 [&_svg]:size-5 [&_svg]:text-gray-700">
                                    <RiBehanceLine />
                                    <RiDribbbleLine />
                                    <RiTwitterLine />
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </section>
        </div>
    );
}

const Avatar = {
    a1: () => (
        <Image
            src="https://res.cloudinary.com/dcxm3ccir/image/upload/v1753947972/a1.jpg"
            alt=""
            width="1920"
            height="1080"
            className="w-20 rounded-full object-cover"
        />
    ),
    a2: () => (
        <Image
            src="https://res.cloudinary.com/dcxm3ccir/image/upload/v1753947972/a2.jpg"
            alt=""
            width="1920"
            height="1080"
            className="w-20 rounded-full object-cover"
        />
    ),
    a3: () => (
        <Image
            src="https://res.cloudinary.com/dcxm3ccir/image/upload/v1753947972/a3.jpg"
            alt=""
            width="1920"
            height="1080"
            className="w-20 rounded-full object-cover"
        />
    ),
    a4: () => (
        <Image
            src="https://res.cloudinary.com/dcxm3ccir/image/upload/v1753947972/a4.jpg"
            alt=""
            width="1920"
            height="1080"
            className="w-20 rounded-full object-cover"
        />
    ),
    a5: () => (
        <Image
            src="https://res.cloudinary.com/dcxm3ccir/image/upload/v1753947972/a5.jpg"
            alt=""
            width="1920"
            height="1080"
            className="w-20 rounded-full object-cover"
        />
    ),
    a6: () => (
        <Image
            src="https://res.cloudinary.com/dcxm3ccir/image/upload/v1753947972/a6.jpg"
            alt=""
            width="1920"
            height="1080"
            className="w-20 rounded-full object-cover"
        />
    ),
};

const Icons = {
    gitHub: () => (
        <svg width="100" height="100" viewBox="0 0 438.549 438.549">
            <path
                fill="currentColor"
                d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
            />
        </svg>
    ),
    notion: () => (
        <svg
            width="100"
            height="100"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M6.017 4.313l55.333 -4.087c6.797 -0.583 8.543 -0.19 12.817 2.917l17.663 12.443c2.913 2.14 3.883 2.723 3.883 5.053v68.243c0 4.277 -1.553 6.807 -6.99 7.193L24.467 99.967c-4.08 0.193 -6.023 -0.39 -8.16 -3.113L3.3 79.94c-2.333 -3.113 -3.3 -5.443 -3.3 -8.167V11.113c0 -3.497 1.553 -6.413 6.017 -6.8z"
                fill="#ffffff"
            />
            <path
                d="M61.35 0.227l-55.333 4.087C1.553 4.7 0 7.617 0 11.113v60.66c0 2.723 0.967 5.053 3.3 8.167l13.007 16.913c2.137 2.723 4.08 3.307 8.16 3.113l64.257 -3.89c5.433 -0.387 6.99 -2.917 6.99 -7.193V20.64c0 -2.21 -0.873 -2.847 -3.443 -4.733L74.167 3.143c-4.273 -3.107 -6.02 -3.5 -12.817 -2.917zM25.92 19.523c-5.247 0.353 -6.437 0.433 -9.417 -1.99L8.927 11.507c-0.77 -0.78 -0.383 -1.753 1.557 -1.947l53.193 -3.887c4.467 -0.39 6.793 1.167 8.54 2.527l9.123 6.61c0.39 0.197 1.36 1.36 0.193 1.36l-54.933 3.307 -0.68 0.047zM19.803 88.3V30.367c0 -2.53 0.777 -3.697 3.103 -3.893L86 22.78c2.14 -0.193 3.107 1.167 3.107 3.693v57.547c0 2.53 -0.39 4.67 -3.883 4.863l-60.377 3.5c-3.493 0.193 -5.043 -0.97 -5.043 -4.083zm59.6 -54.827c0.387 1.75 0 3.5 -1.75 3.7l-2.91 0.577v42.773c-2.527 1.36 -4.853 2.137 -6.797 2.137 -3.107 0 -3.883 -0.973 -6.21 -3.887l-19.03 -29.94v28.967l6.02 1.363s0 3.5 -4.857 3.5l-13.39 0.777c-0.39 -0.78 0 -2.723 1.357 -3.11l3.497 -0.97v-38.3L30.48 40.667c-0.39 -1.75 0.58 -4.277 3.3 -4.473l14.367 -0.967 19.8 30.327v-26.83l-5.047 -0.58c-0.39 -2.143 1.163 -3.7 3.103 -3.89l13.4 -0.78z"
                fill="#000000"
                fillRule="evenodd"
                clipRule="evenodd"
            />
        </svg>
    ),
    openai: () => (
        <svg
            width="100"
            height="100"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-black dark:fill-white"
        >
            <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
        </svg>
    ),
    googleDrive: () => (
        <svg
            width="100"
            height="100"
            viewBox="0 0 87.3 78"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z"
                fill="#0066da"
            />
            <path
                d="m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44a9.06 9.06 0 0 0 -1.2 4.5h27.5z"
                fill="#00ac47"
            />
            <path
                d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.502l5.852 11.5z"
                fill="#ea4335"
            />
            <path
                d="m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2z"
                fill="#00832d"
            />
            <path
                d="m59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z"
                fill="#2684fc"
            />
            <path
                d="m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.15 28h27.45c0-1.55-.4-3.1-1.2-4.5z"
                fill="#ffba00"
            />
        </svg>
    ),
    whatsapp: () => (
        <svg
            width="100"
            height="100"
            viewBox="0 0 175.216 175.552"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <linearGradient
                    id="b"
                    x1="85.915"
                    x2="86.535"
                    y1="32.567"
                    y2="137.092"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0" stopColor="#57d163" />
                    <stop offset="1" stopColor="#23b33a" />
                </linearGradient>
                <filter
                    id="a"
                    width="1.115"
                    height="1.114"
                    x="-.057"
                    y="-.057"
                    colorInterpolationFilters="sRGB"
                >
                    <feGaussianBlur stdDeviation="3.531" />
                </filter>
            </defs>
            <path
                d="m54.532 138.45 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.523h.023c33.707 0 61.139-27.426 61.153-61.135.006-16.335-6.349-31.696-17.895-43.251A60.75 60.75 0 0 0 87.94 25.983c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.558zm-40.811 23.544L24.16 123.88c-6.438-11.154-9.825-23.808-9.821-36.772.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954zm0 0"
                fill="#b3b3b3"
                filter="url(#a)"
            />
            <path
                d="m12.966 161.238 10.439-38.114a73.42 73.42 0 0 1-9.821-36.772c.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954z"
                fill="#ffffff"
            />
            <path
                d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.559 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.524h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.929z"
                fill="url(#linearGradient1780)"
            />
            <path
                d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.313-6.179 22.558 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.517 31.126 8.523h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.928z"
                fill="url(#b)"
            />
            <path
                d="M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013 12.718 20.381 31.405 27.75c15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74 1.532-7.971 1.073-8.74-1.685-1.226-3.525-2.146-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647"
                fill="#ffffff"
                fillRule="evenodd"
            />
        </svg>
    ),
};
