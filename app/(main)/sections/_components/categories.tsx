"use client";

import * as React from "react";
import {
    LayoutGrid,
    Grid3X3,
    ExternalLink,
    X,
    ChevronDown,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Index } from "@/__registry__";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";

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

    const filteredSections = Object.values(Index["default"]).filter(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (item: any) => {
            if (item.type !== "registry:sections") return false;
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
        <SidebarProvider>
            <div className="flex min-h-screen w-full">
                <Sidebar className="border-r pt-20">
                    <SidebarContent className="px-3">
                        <SidebarGroup>
                            <SidebarGroupLabel className="text-sm font-normal">
                                Applied Filters
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="ml-auto"
                                    onClick={() => updateCategoryInUrl([], "")}
                                >
                                    Clear all
                                </Button>
                            </SidebarGroupLabel>
                            <SidebarGroupContent>
                                <div className="mt-2 flex flex-wrap gap-2">
                                    {selectedCategories.length === 0 &&
                                        !urlLicense && (
                                            <span className="text-muted-foreground text-xs">
                                                No filters applied
                                            </span>
                                        )}
                                    {selectedCategories.map((category) => (
                                        <Button
                                            key={category}
                                            className="flex h-fit cursor-pointer items-center gap-1 rounded-lg bg-purple-200 px-3 py-1 text-purple-700 hover:bg-purple-200"
                                        >
                                            <span>{capitalize(category)}</span>
                                            <div
                                                className="ml-1 bg-none text-xs text-purple-700 hover:text-purple-900"
                                                onClick={() => {
                                                    const updated =
                                                        selectedCategories.filter(
                                                            (c) =>
                                                                c !== category,
                                                        );
                                                    updateCategoryInUrl(
                                                        updated,
                                                        urlLicense,
                                                    );
                                                }}
                                            >
                                                <X className="size-2" />
                                            </div>
                                        </Button>
                                    ))}
                                    {urlLicense && (
                                        <Button
                                            className="flex h-fit cursor-pointer items-center gap-1 rounded-lg bg-blue-200 px-3 py-1 text-blue-700 hover:bg-blue-200"
                                            onClick={() => {
                                                updateCategoryInUrl(
                                                    selectedCategories,
                                                    "",
                                                );
                                            }}
                                        >
                                            <span>
                                                {urlLicense === "pro"
                                                    ? "Pro"
                                                    : "Free"}
                                            </span>
                                            <div className="ml-1 bg-none text-xs text-blue-700 hover:text-blue-900">
                                                <X className="size-2" />
                                            </div>
                                        </Button>
                                    )}
                                </div>
                            </SidebarGroupContent>
                        </SidebarGroup>

                        <Collapsible defaultOpen>
                            <SidebarGroup>
                                <CollapsibleTrigger asChild>
                                    <SidebarGroupLabel className="hover:bg-sidebar-accent cursor-pointer rounded-md text-base font-normal">
                                        Categories
                                        <ChevronDown className="ml-auto h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
                                    </SidebarGroupLabel>
                                </CollapsibleTrigger>
                                <CollapsibleContent>
                                    <SidebarGroupContent>
                                        <div className="mt-5 flex flex-wrap gap-2">
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
                                                        className="flex h-fit items-center space-x-2 rounded-md border px-2 py-1"
                                                    >
                                                        <Label
                                                            htmlFor={category}
                                                            className="cursor-pointer text-[15px] font-normal"
                                                        >
                                                            {capitalize(
                                                                category,
                                                            )}
                                                        </Label>
                                                    </Button>
                                                ))}
                                        </div>
                                    </SidebarGroupContent>
                                </CollapsibleContent>
                            </SidebarGroup>
                        </Collapsible>

                        <SidebarGroup>
                            <SidebarGroupLabel className="mt-6 text-sm font-normal">
                                License
                            </SidebarGroupLabel>
                            <SidebarGroupContent>
                                <div className="mt-2 flex gap-2">
                                    <Button
                                        variant={
                                            urlLicense === "pro"
                                                ? "secondary"
                                                : "outline"
                                        }
                                        className="rounded-md px-3 py-1 text-sm"
                                        onClick={() =>
                                            updateCategoryInUrl(
                                                selectedCategories,
                                                urlLicense === "pro"
                                                    ? ""
                                                    : "pro",
                                            )
                                        }
                                    >
                                        Pro
                                    </Button>
                                    <Button
                                        variant={
                                            urlLicense === "free"
                                                ? "secondary"
                                                : "outline"
                                        }
                                        className="rounded-md px-3 py-1 text-sm"
                                        onClick={() =>
                                            updateCategoryInUrl(
                                                selectedCategories,
                                                urlLicense === "free"
                                                    ? ""
                                                    : "free",
                                            )
                                        }
                                    >
                                        Free
                                    </Button>
                                </div>
                            </SidebarGroupContent>
                        </SidebarGroup>
                    </SidebarContent>
                </Sidebar>

                <SidebarInset className="flex-1">
                    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 border-b backdrop-blur">
                        <div className="flex h-16 items-center gap-4 px-6">
                            <SidebarTrigger />
                            <Separator orientation="vertical" className="h-6" />

                            <div className="ml-auto flex items-center gap-2">
                                <div className="flex items-center gap-1 rounded-md border p-1">
                                    <Button
                                        variant={
                                            viewMode === "grid"
                                                ? "outline"
                                                : "outline"
                                        }
                                        size="sm"
                                        onClick={() => setViewMode("grid")}
                                    >
                                        <LayoutGrid className="h-4 w-4" />
                                    </Button>
                                    <Button
                                        variant={
                                            viewMode === "list"
                                                ? "secondary"
                                                : "ghost"
                                        }
                                        size="sm"
                                        onClick={() => setViewMode("list")}
                                    >
                                        <Grid3X3 className="h-4 w-4" />
                                    </Button>
                                </div>

                                <div className="text-muted-foreground flex items-center gap-2 text-sm">
                                    <span>Sort by:</span>
                                    <Button variant="ghost" size="sm">
                                        Newest
                                        <ChevronDown className="ml-1 h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </header>

                    <main className="p-6">
                        <div className="mb-6">
                            <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-purple-700 to-blue-800 p-8 text-white">
                                <div className="relative z-10">
                                    <div className="mb-2 inline-block rounded-full bg-white/20 px-3 py-1 text-xs">
                                        Build Better, Faster
                                    </div>
                                    <h1 className="mb-2 text-2xl font-medium">
                                        Build a better website, faster than ever
                                    </h1>
                                    <p className="mb-3 max-w-2xl text-sm">
                                        Browse thousands of components and paste
                                        them directly into your project. Built
                                        for every category to help you build
                                        better, faster.
                                    </p>
                                    <div className="flex gap-4">
                                        <Button className="bg-white text-purple-600 hover:bg-gray-100">
                                            🔓 Unlock all access
                                        </Button>
                                        <Button
                                            variant="outline"
                                            className="border-white bg-transparent text-white hover:bg-white/10"
                                        >
                                            Learn more
                                        </Button>
                                    </div>
                                </div>
                                <div className="absolute top-0 right-0 h-full w-1/2 opacity-20">
                                    <div className="h-full w-full bg-gradient-to-l from-white/10 to-transparent" />
                                </div>
                            </div>
                        </div>

                        <div
                            className={`grid gap-6 ${
                                viewMode === "grid"
                                    ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-2"
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
                                        className="group cursor-pointer border-0 shadow-none"
                                    >
                                        <CardContent className="p-0">
                                            <div className="relative overflow-hidden">
                                                <Image
                                                    src={`https://res.cloudinary.com/dphulm0s9/image/upload/v1753447263/${section.name}.png`}
                                                    alt={section.name}
                                                    width={4210}
                                                    height={1080}
                                                    className="aspect-video h-full w-full rounded-2xl border object-cover object-top"
                                                />
                                                <div className="absolute top-3 right-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                                    <Button
                                                        size="sm"
                                                        variant="secondary"
                                                        className="h-8 w-8 rounded-full p-0"
                                                    >
                                                        <ExternalLink className="h-4 w-4" />
                                                    </Button>
                                                </div>
                                            </div>

                                            <div className="p-4">
                                                <div className="mb-2 flex items-center justify-between">
                                                    <h3 className="group-hover:text-primary text-lg font-semibold">
                                                        {capitalize(
                                                            section.name,
                                                        )}
                                                    </h3>
                                                    {section.pro && (
                                                        <Badge
                                                            variant="secondary"
                                                            className="bg-purple-100 text-purple-700"
                                                        >
                                                            Pro
                                                        </Badge>
                                                    )}
                                                </div>
                                                <p className="text-muted-foreground mb-3 text-sm">
                                                    {category}
                                                </p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                );
                            })}
                        </div>

                        {filteredSections.length === 0 && (
                            <div className="py-12 text-center">
                                <p className="text-muted-foreground">
                                    No sections found matching your filters.
                                </p>
                                <Button
                                    variant="outline"
                                    className="mt-4 bg-transparent"
                                    onClick={() => updateCategoryInUrl([], "")}
                                >
                                    Clear all filters
                                </Button>
                            </div>
                        )}
                    </main>
                </SidebarInset>
            </div>
        </SidebarProvider>
    );
}
