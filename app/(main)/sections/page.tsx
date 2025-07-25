"use client";
import React, { FormEvent, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Sections from "@/components/shared/all-sections";
import { Index } from "@/__registry__";
import Image from "next/image";
import SectionsPage from "./_components/categories";
import Navbar from "@/components/shared/navbar/nav-1";

const getCategories = () => {
    // Only include items of type registry:sections
    return Object.values(Index["default"])
        .filter((item: any) => item.type === "registry:section")
        .map((item: any) => item.name);
};

const page = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const category = searchParams.get("category") || "";
    const license = searchParams.get("license") || "";

    const categories = getCategories();
    const [screenshotUrl, setScreenshotUrl] = useState<string | null>(null);

    // Filter sections by category and license if selected
    const filteredSections = Object.values(Index["default"]).filter(
        (item: any) =>
            item.type === "registry:sections" &&
            (category ? item.name.includes(category) : true) &&
            (license
                ? license === "pro"
                    ? item.pro === true
                    : item.pro === false
                : true),
    );

    const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        const params = new URLSearchParams(searchParams.toString());
        if (value) {
            params.set("category", value);
        } else {
            params.delete("category");
        }
        router.push(`/sections?${params.toString()}`);
    };

    const handleLicenseChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        const params = new URLSearchParams(searchParams.toString());
        if (value) {
            params.set("license", value);
        } else {
            params.delete("license");
        }
        router.push(`/sections?${params.toString()}`);
    };

    return (
        <>
        <Navbar/>
            <SectionsPage />
            <div className="container mx-auto px-4 py-8">
                <div className="mb-6 flex items-center gap-4">
                    <label htmlFor="category" className="text-lg font-medium">
                        Filter by Section:
                    </label>
                    <select
                        id="category"
                        value={category}
                        onChange={handleCategoryChange}
                        className="rounded border px-3 py-2"
                    >
                        <option value="">All</option>
                        {categories.map((cat) => (
                            <option key={cat} value={cat}>
                                {cat.charAt(0).toUpperCase() + cat.slice(1)}
                            </option>
                        ))}
                    </select>
                    <label
                        htmlFor="license"
                        className="ml-4 text-lg font-medium"
                    >
                        License:
                    </label>
                    <select
                        id="license"
                        value={license}
                        onChange={handleLicenseChange}
                        className="rounded border px-3 py-2"
                    >
                        <option value="">All</option>
                        <option value="free">Free</option>
                        <option value="pro">Pro</option>
                    </select>
                </div>

                <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10">
                    {filteredSections.map((section) => (
                        <div key={section.name}>
                            <Image
                                src={`https://res.cloudinary.com/dphulm0s9/image/upload/v1753447263/${section.name}.png`}
                                alt={section.name}
                                width={4210}
                                height={1080}
                                className="aspect-video h-full w-full rounded-2xl border object-cover object-top"
                            />
                            <h2>
                                {section.name}{" "}
                                {(section as any).pro ? "(Pro)" : "(Free)"}
                            </h2>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default page;
