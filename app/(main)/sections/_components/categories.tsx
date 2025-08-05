"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

import { Index } from "@/__registry__";
import { useFavourites } from "@/hooks/use-favourites";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import {
    RiArrowDownSLine,
    RiCloseLine,
    RiEyeLine,
    RiHeartFill,
    RiLayoutColumnLine,
    RiLayoutRowLine,
    RiMenu2Line,
    RiMenuUnfold2Line,
    RiSearchLine,
} from "@remixicon/react";

const getCategories = () => {
    return Array.from(
        new Set(
            Object.values(Index["default"])
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                .filter((item: any) => item.type === "registry:sections")
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                .map((item: any) => {
                    const match = item.name.match(/^(.*?)-/);
                    return match ? match[1] : item.name;
                }),
        ),
    );
};

export default function SectionsPage() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const urlCategories = searchParams.get("categories") || "";
    const selectedCategories = urlCategories
        .split("|")
        .map((c) => c.trim())
        .filter(Boolean);
    const urlLicense = searchParams.get("license") || "";
    const categories = getCategories();
    const [viewMode, setViewMode] = React.useState<"grid" | "list">("grid");
    const [searchQuery, setSearchQuery] = React.useState("");
    const [sidebarOpen, setSidebarOpen] = React.useState(true);
    const [failedImages, setFailedImages] = React.useState<Set<string>>(
        new Set(),
    );
    const { toggleFavourite, isFavourite, isPending } = useFavourites();

    const handleImageError = (sectionName: string) => {
        setFailedImages((prev) => new Set(prev).add(sectionName));
    };

    const filteredSections = Object.values(Index["default"]).filter(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (item: any) => {
            if (item.type !== "registry:sections") return false;

            // Search filter
            if (
                searchQuery &&
                !item.name.toLowerCase().includes(searchQuery.toLowerCase())
            ) {
                return false;
            }

            if (selectedCategories.length > 0) {
                const match = item.name.match(/^(.*?)-/);
                const category = match ? match[1] : item.name;
                if (!selectedCategories.includes(category)) return false;
            }
            if (urlLicense === "pro" && !item.pro) return false;
            if (urlLicense === "free" && item.pro) return false;
            return true;
        },
    );

    const updateCategoryInUrl = (categoriesArr: string[], license?: string) => {
        const params = new URLSearchParams(searchParams.toString());
        if (categoriesArr.length > 0) {
            params.set("categories", categoriesArr.join("|"));
        } else {
            params.delete("categories");
        }
        if (license) {
            params.set("license", license);
        } else {
            params.delete("license");
        }
        router.push(`/sections?${params.toString()}`);
    };

    const capitalize = (str: string) =>
        str.charAt(0).toUpperCase() + str.slice(1);

    return (
        <div className="relative min-h-screen px-4 md:px-10 xl:px-8">
            <div className="grid grid-cols-12 border border-t-0">
                <div
                    className={`${sidebarOpen ? "col-span-2" : "hidden"} bg-white transition-all duration-300`}
                >
                    <div
                        className={` ${sidebarOpen ? "sticky" : "block"} top-0 space-y-6`}
                    >
                        <div className="relative">
                            <RiSearchLine className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
                            <Input
                                placeholder="Search components..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="h-12 rounded-none border-t-0 border-r-0 border-l-0 border-gray-200 pl-10 shadow-none focus:border-blue-500 focus:ring-blue-500 focus-visible:ring-0"
                            />
                        </div>

                        <div className="px-3">
                            <div className="mb-3 flex items-center justify-between">
                                <h3 className="font-medium text-gray-900">
                                    Active Filters
                                </h3>
                                {(selectedCategories.length > 0 ||
                                    urlLicense) && (
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={() =>
                                            updateCategoryInUrl([], "")
                                        }
                                        className="text-xs text-gray-500 hover:text-gray-700"
                                    >
                                        Clear all
                                    </Button>
                                )}
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {selectedCategories.length === 0 &&
                                    !urlLicense && (
                                        <span className="text-xs text-gray-400">
                                            No filters applied
                                        </span>
                                    )}
                                {selectedCategories.map((category) => (
                                    <Badge
                                        key={category}
                                        variant="secondary"
                                        className="flex items-center gap-1 bg-blue-50 px-3 py-0.5 text-sm text-blue-700 shadow-sm shadow-blue-300 hover:bg-blue-100"
                                    >
                                        {capitalize(category)}
                                        <button
                                            onClick={() => {
                                                const updated =
                                                    selectedCategories.filter(
                                                        (c) => c !== category,
                                                    );
                                                updateCategoryInUrl(
                                                    updated,
                                                    urlLicense,
                                                );
                                            }}
                                            className="ml-1 cursor-pointer hover:text-blue-900"
                                        >
                                            <RiCloseLine className="h-3 w-3" />
                                        </button>
                                    </Badge>
                                ))}
                                {urlLicense && (
                                    <Badge
                                        variant="secondary"
                                        className="flex items-center gap-1 bg-purple-50 px-2 py-0.5 text-sm shadow-sm text-purple-700 shadow-purple-300 hover:bg-purple-100"
                                    >
                                        {urlLicense === "pro" ? "Pro" : "Free"}
                                        <button
                                            onClick={() =>
                                                updateCategoryInUrl(
                                                    selectedCategories,
                                                    "",
                                                )
                                            }
                                            className="ml-1 hover:text-purple-900"
                                        >
                                            <RiCloseLine className="h-3 w-3" />
                                        </button>
                                    </Badge>
                                )}
                            </div>
                        </div>

                        <Collapsible
                            defaultOpen
                            className="border-t border-b border-dashed px-3 py-7"
                        >
                            <CollapsibleTrigger className="flex w-full items-center justify-between rounded-lg font-medium text-gray-900">
                                Categories
                                <RiArrowDownSLine className="h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
                            </CollapsibleTrigger>
                            <CollapsibleContent className="mt-3">
                                <div className="flex flex-wrap gap-2">
                                    {categories
                                        .filter(
                                            (category) =>
                                                !selectedCategories.includes(
                                                    category,
                                                ),
                                        )
                                        .map((category) => (
                                            <Button
                                                key={category}
                                                variant="outline"
                                                size="sm"
                                                onClick={() => {
                                                    const updated = [
                                                        ...selectedCategories,
                                                        category,
                                                    ];
                                                    updateCategoryInUrl(
                                                        updated,
                                                        urlLicense,
                                                    );
                                                }}
                                                className="cursor-pointer justify-start rounded-full border-gray-200 text-sm font-normal shadow-none hover:border-indigo-300 hover:bg-blue-50"
                                            >
                                                {capitalize(category)}
                                            </Button>
                                        ))}
                                </div>
                            </CollapsibleContent>
                        </Collapsible>

                        <div className="px-3">
                            <h3 className="mb-3 font-medium text-gray-900">
                                License
                            </h3>
                            <div className="flex gap-2">
                                <Button
                                    variant={
                                        urlLicense === "pro"
                                            ? "default"
                                            : "outline"
                                    }
                                    size="sm"
                                    onClick={() =>
                                        updateCategoryInUrl(
                                            selectedCategories,
                                            urlLicense === "pro" ? "" : "pro",
                                        )
                                    }
                                    className={
                                        urlLicense === "pro"
                                            ? "bg-purple-600 hover:bg-purple-700"
                                            : "rounded-lg border-gray-200 text-sm font-normal shadow-none hover:border-purple-300 hover:bg-purple-50"
                                    }
                                >
                                    Pro
                                </Button>
                                <Button
                                    variant={
                                        urlLicense === "free"
                                            ? "default"
                                            : "outline"
                                    }
                                    size="sm"
                                    onClick={() =>
                                        updateCategoryInUrl(
                                            selectedCategories,
                                            urlLicense === "free" ? "" : "free",
                                        )
                                    }
                                    className={
                                        urlLicense === "free"
                                            ? "bg-black"
                                            : "rounded-lg border-gray-200 text-sm font-normal shadow-none hover:border-green-300 hover:bg-green-50"
                                    }
                                >
                                    Free
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className={`${sidebarOpen ? "col-span-10 border-l" : "col-span-12"} flex-1 bg-white`}
                >
                    <header className="border-b bg-white/80 backdrop-blur-sm">
                        <div className="flex h-[2.95555rem] items-center justify-between px-6">
                            <div className="flex items-center gap-4">
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => setSidebarOpen(!sidebarOpen)}
                                    className="[&_svg]:size-5"
                                >
                                    {sidebarOpen ? (
                                        <RiMenuUnfold2Line />
                                    ) : (
                                        <RiMenu2Line />
                                    )}
                                </Button>
                                <div className="text-sm text-gray-600">
                                    {filteredSections.length} components
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-1 rounded-lg bg-gray-100 p-1">
                                    <Button
                                        variant={
                                            viewMode === "grid"
                                                ? "default"
                                                : "ghost"
                                        }
                                        size="sm"
                                        onClick={() => setViewMode("grid")}
                                        className="h-8 w-8 p-0"
                                    >
                                        <RiLayoutColumnLine className="h-4 w-4" />
                                    </Button>
                                    <Button
                                        variant={
                                            viewMode === "list"
                                                ? "default"
                                                : "ghost"
                                        }
                                        size="sm"
                                        onClick={() => setViewMode("list")}
                                        className="h-8 w-8 p-0"
                                    >
                                        <RiLayoutRowLine className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </header>

                    {/* Content */}
                    <main className="p-6">
                        {filteredSections.length === 0 ? (
                            <div className="flex flex-col items-center justify-center py-16 text-center">
                                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
                                    <RiSearchLine className="h-8 w-8 text-gray-400" />
                                </div>
                                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                                    No components found
                                </h3>
                                <p className="mb-4 text-gray-600">
                                    Try adjusting your filters or search terms
                                </p>
                                <Button
                                    variant="outline"
                                    onClick={() => {
                                        updateCategoryInUrl([], "");
                                        setSearchQuery("");
                                    }}
                                >
                                    Clear all filters
                                </Button>
                            </div>
                        ) : (
                            <div
                                className={`grid gap-6 ${
                                    viewMode === "grid"
                                        ? "grid-cols-1 md:grid-cols-2 xl:grid-cols-2"
                                        : "grid-cols-1"
                                }`}
                            >
                                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                                {filteredSections.map((section: any) => {
                                    const match = section.name.match(/^(.*?)-/);
                                    const category = match
                                        ? match[1]
                                        : section.name;
                                    return (
                                        <Card
                                            key={section.name}
                                            className="group overflow-hidden border-none shadow-none"
                                        >
                                            <CardContent className="p-0">
                                                <div className="relative overflow-hidden">
                                                    <div className="relative overflow-hidden rounded-xl border border-gray-200">
                                                        {failedImages.has(
                                                            section.name,
                                                        ) ? (
                                                            <Image
                                                                src={`https://res.cloudinary.com/dcxm3ccir/image/upload/v1753946156/coming-soon.png`}
                                                                alt={
                                                                    section.name
                                                                }
                                                                width={4210}
                                                                height={1080}
                                                                suppressHydrationWarning
                                                                className="aspect-video w-full object-cover object-top"
                                                            />
                                                        ) : (
                                                            <Image
                                                                src={`https://res.cloudinary.com/dcxm3ccir/image/upload/v1753946156/${section.name}.png`}
                                                                alt={
                                                                    section.name
                                                                }
                                                                width={4210}
                                                                height={1080}
                                                                suppressHydrationWarning
                                                                className="aspect-video w-full object-cover object-top"
                                                                onError={() =>
                                                                    handleImageError(
                                                                        section.name,
                                                                    )
                                                                }
                                                            />
                                                        )}
                                                        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                                    </div>

                                                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 transition-all duration-300 ease-in group-hover:bottom-4 group-hover:opacity-100">
                                                        <div className="flex items-center justify-center gap-2">
                                                            <TooltipProvider>
                                                                <Tooltip>
                                                                    <TooltipTrigger
                                                                        asChild
                                                                    >
                                                                        <Button
                                                                            onClick={() =>
                                                                                toggleFavourite(
                                                                                    section.name,
                                                                                )
                                                                            }
                                                                            disabled={
                                                                                isPending
                                                                            }
                                                                            className="h-8 w-fit cursor-pointer rounded-md bg-white p-3 shadow-sm backdrop-blur-sm transition-all duration-200 hover:bg-white [&_svg]:size-4.5"
                                                                        >
                                                                            <RiHeartFill
                                                                                className={` ${
                                                                                    isFavourite(
                                                                                        section.name,
                                                                                    )
                                                                                        ? "fill-red-500 text-red-500"
                                                                                        : "text-gray-800 hover:text-red-500"
                                                                                }`}
                                                                            />
                                                                        </Button>
                                                                    </TooltipTrigger>

                                                                    <TooltipContent
                                                                        side="top"
                                                                        showArrow={
                                                                            true
                                                                        }
                                                                        className="dark px-2 py-1 text-xs"
                                                                    >
                                                                        {isFavourite(
                                                                            section.name,
                                                                        )
                                                                            ? "Remove from favourites"
                                                                            : "Add to favourites"}
                                                                    </TooltipContent>
                                                                </Tooltip>
                                                            </TooltipProvider>

                                                            <TooltipProvider>
                                                                <Tooltip>
                                                                    <TooltipTrigger
                                                                        asChild
                                                                    >
                                                                        <Button
                                                                            size="sm"
                                                                            className="h-8 cursor-pointer rounded-md bg-white p-3 shadow-sm backdrop-blur-sm hover:bg-white [&_svg]:size-4.5"
                                                                        >
                                                                            <Link
                                                                                href={`/sections/${section.name.split("-")[0]}`}
                                                                                target="_blank"
                                                                            >
                                                                                <RiEyeLine className="size-5 text-gray-800" />
                                                                            </Link>
                                                                        </Button>
                                                                    </TooltipTrigger>

                                                                    <TooltipContent
                                                                        side="top"
                                                                        showArrow={
                                                                            true
                                                                        }
                                                                        className="dark px-2 py-1 text-xs"
                                                                    >
                                                                        Preview
                                                                    </TooltipContent>
                                                                </Tooltip>
                                                            </TooltipProvider>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="p-4">
                                                    <div className="mb-1 flex items-start justify-between">
                                                        <h3 className="text-lg font-semibold text-gray-900">
                                                            {capitalize(
                                                                section.name.replace(
                                                                    /-/g,
                                                                    " 0",
                                                                ),
                                                            )}
                                                        </h3>
                                                        {section.pro && (
                                                            <Badge className="border-0 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                                                                Pro
                                                            </Badge>
                                                        )}
                                                    </div>
                                                    <p className="text-sm text-gray-500 capitalize">
                                                        {category}
                                                    </p>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    );
                                })}
                            </div>
                        )}
                    </main>
                </div>
            </div>
        </div>
    );
}
