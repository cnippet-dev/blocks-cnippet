import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { RiArtboard2Fill } from "@remixicon/react";

export default function Component() {
    const footerLinks = [
        {
            title: "Explore",
            links: [
                {
                    title: "Curated Classes",
                    href: "#",
                },
                {
                    title: "Retreats Locations",
                    href: "#",
                },
                {
                    title: "Training",
                    href: "#",
                },
                {
                    title: "Wellness blog",
                    href: "#",
                },
            ],
        },
        {
            title: "Guidance",
            links: [
                {
                    title: "Book a free call",
                    href: "#",
                },
                {
                    title: "FAQs & Supports",
                    href: "#",
                },
                {
                    title: "Workplace Policy",
                },
            ],
        },
        {
            title: "Support",
            links: [
                {
                    title: "Articles",
                    href: "#",
                },
                {
                    title: "Documentation",
                    href: "#",
                },
                {
                    title: "Tutorials",
                    href: "#",
                },
                {
                    title: "Help Center",
                },
            ],
        },
        {
            title: "Connect",
            links: [
                {
                    title: "Community Forum",
                    href: "#",
                },
                {
                    title: "Instagram",
                    href: "#",
                },
                {
                    title: "YouTube",
                    href: "#",
                },
            ],
        },
    ];
    return (
        <footer className="w-full bg-stone-100 px-10 pt-20">
            <div className="mx-auto max-w-7xl">
                <div className="rounded-2xl bg-stone-700 px-6 py-6 text-white">
                    <div className="mx-auto flex flex-col items-center justify-between gap-6 lg:flex-row">
                        <div className="flex w-full items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white p-2">
                                <RiArtboard2Fill className="size-10 text-white" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-light">
                                    Your mindset shapes{" "}
                                    <span className="text-yellow-400 italic">
                                        everything.
                                    </span>
                                </h2>
                                <p className="text-sm text-stone-300">
                                    Inhale the future, exhale the past.
                                </p>
                            </div>
                        </div>
                        <div className="flex w-full gap-3">
                            <Input
                                placeholder="Enter Your Email"
                                className="flex-1 rounded-full bg-white px-4 py-6 text-stone-900 placeholder:text-base placeholder:text-stone-700"
                            />
                            <Button className="rounded-full bg-yellow-300 px-6 py-6 text-base font-medium text-stone-900 hover:bg-yellow-600">
                                Join Sana—today
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto py-12">
                    <div className="grid justify-between gap-8 lg:grid-cols-12">
                        {/* Profile Card */}
                        <div className="col-span-3">
                            <Card className="border-stone-200 bg-white shadow-sm">
                                <CardContent className="relative p-0">
                                    <div className="relative h-80 overflow-hidden rounded-lg">
                                        <Image
                                            src="https://res.cloudinary.com/dphulm0s9/image/upload/v1741613286/h6.jpg"
                                            alt="Maya Patel"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="absolute bottom-2 w-full px-2">
                                        <div className="rounded-md bg-white px-2 py-1">
                                            <div className="mb-1 flex items-center gap-2">
                                                <h3 className="font-medium text-stone-900">
                                                    Maya Patel
                                                </h3>
                                                <CheckCircle className="h-4 w-4 text-blue-500" />
                                            </div>
                                            <p className="text-sm text-stone-600">
                                                Meditation Mentor
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="col-span-1" />
                        {/* Navigation Links */}
                        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:col-span-8">
                            {footerLinks.map((link) => (
                                <div key={link.title}>
                                    <h4 className="mb-4 font-medium text-stone-900">
                                        {link.title}
                                    </h4>
                                    <ul className="space-y-5">
                                        {link.links.map((link) => (
                                            <li key={link.title}>
                                                <Link
                                                    href={link.href || "#"}
                                                    className="text-stone-600 hover:text-stone-900"
                                                >
                                                    {link.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    <Separator className="my-8 bg-stone-400" />

                    <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
                        <div className="text-sm text-stone-600">
                            <p>
                                We honor the land we practice on.{" "}
                                <span className="font-medium text-orange-500">
                                    2%
                                </span>{" "}
                                of profits support Indigenous-led wellness
                                initiatives.
                            </p>
                        </div>

                        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center">
                            <div className="flex gap-4">
                                <Link
                                    href="#"
                                    className="text-sm text-stone-600 hover:text-stone-900"
                                >
                                    Terms
                                </Link>
                                <Link
                                    href="#"
                                    className="text-sm text-stone-600 hover:text-stone-900"
                                >
                                    Code of Ethics
                                </Link>
                                <Link
                                    href="#"
                                    className="text-sm text-stone-600 hover:text-stone-900"
                                >
                                    Privacy Policy
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 text-sm text-stone-500">
                        ©2025, Sana.co
                    </div>
                </div>
            </div>
        </footer>
    );
}
