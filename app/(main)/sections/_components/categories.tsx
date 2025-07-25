"use client";

import * as React from "react";
import { Search, Grid3X3, LayoutGrid, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";

// Sample data
const platforms = [
    { id: "webflow", name: "Webflow", icon: "🌊" },
    { id: "framer", name: "Framer", icon: "🎨" },
    { id: "figma", name: "Figma", icon: "🎯" },
];

const collections = [
    { id: "sana", name: "Sana", icon: "🌸" },
    { id: "antik", name: "Antik", icon: "⚫" },
    { id: "beam", name: "Beam", icon: "🔵" },
    { id: "echo", name: "Echo", icon: "📢" },
    { id: "donezo", name: "Donezo", icon: "✅" },
    { id: "helio", name: "Helio", icon: "☀️" },
    { id: "wonder", name: "Wonder", icon: "⭐" },
    { id: "cyrus", name: "Cyrus", icon: "🔷" },
    { id: "jambo", name: "Jambo", icon: "🎪" },
    { id: "zen", name: "Zen", icon: "🧘" },
];

const categories = [
    "Header",
    "Navigation",
    "Content",
    "Feature",
    "Testimonial",
    "Pricing",
    "Footer",
    "CTA",
    "Team",
];

const components = [
    {
        id: 1,
        title: "Sana Header 07",
        category: "Header",
        collection: "sana",
        platform: "webflow",
        isPro: true,
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%7BFDD5392F-A968-4EF0-96F5-B8F0F9CE5A45%7D-wHki63TrOI9g4pvCZVoUtpVJVBNlOm.png",
        addedDate: "Jul 10, 2025",
    },
    {
        id: 2,
        title: "Sana Header 06",
        category: "Header",
        collection: "sana",
        platform: "framer",
        isPro: true,
        image: "/placeholder.svg?height=300&width=400",
        addedDate: "Jul 9, 2025",
    },
    {
        id: 3,
        title: "Beam Navigation 01",
        category: "Navigation",
        collection: "beam",
        platform: "figma",
        isPro: false,
        image: "/placeholder.svg?height=300&width=400",
        addedDate: "Jul 8, 2025",
    },
    {
        id: 4,
        title: "Echo Feature 03",
        category: "Feature",
        collection: "echo",
        platform: "webflow",
        isPro: true,
        image: "/placeholder.svg?height=300&width=400",
        addedDate: "Jul 7, 2025",
    },
    {
        id: 5,
        title: "Wonder CTA 02",
        category: "CTA",
        collection: "wonder",
        platform: "framer",
        isPro: false,
        image: "/placeholder.svg?height=300&width=400",
        addedDate: "Jul 6, 2025",
    },
    {
        id: 6,
        title: "Zen Footer 01",
        category: "Footer",
        collection: "zen",
        platform: "figma",
        isPro: true,
        image: "/placeholder.svg?height=300&width=400",
        addedDate: "Jul 5, 2025",
    },
];

const tabs = [
    { id: "components", name: "Components", icon: "🧩", active: true },
    { id: "wireframes", name: "Wireframes", icon: "📐", active: false },
    { id: "elements", name: "Elements", icon: "🔷", active: false },
    { id: "illustrations", name: "Illustrations", icon: "🎨", active: false },
    { id: "icons", name: "Icons", icon: "⭐", active: false },
];

export default function SectionsPage() {
    const [searchQuery, setSearchQuery] = React.useState("");
    const [selectedPlatforms, setSelectedPlatforms] = React.useState<string[]>(
        [],
    );
    const [selectedCollections, setSelectedCollections] = React.useState<
        string[]
    >([]);
    const [selectedCategories, setSelectedCategories] = React.useState<
        string[]
    >([]);
    const [viewMode, setViewMode] = React.useState<"grid" | "list">("grid");

    const filteredComponents = components.filter((component) => {
        const matchesSearch = component.title
            .toLowerCase()
            .includes(searchQuery.toLowerCase());
        const matchesPlatform =
            selectedPlatforms.length === 0 ||
            selectedPlatforms.includes(component.platform);
        const matchesCollection =
            selectedCollections.length === 0 ||
            selectedCollections.includes(component.collection);
        const matchesCategory =
            selectedCategories.length === 0 ||
            selectedCategories.includes(component.category);

        return (
            matchesSearch &&
            matchesPlatform &&
            matchesCollection &&
            matchesCategory
        );
    });

    const handlePlatformChange = (platformId: string, checked: boolean) => {
        setSelectedPlatforms((prev) =>
            checked
                ? [...prev, platformId]
                : prev.filter((id) => id !== platformId),
        );
    };

    const handleCollectionChange = (collectionId: string, checked: boolean) => {
        setSelectedCollections((prev) =>
            checked
                ? [...prev, collectionId]
                : prev.filter((id) => id !== collectionId),
        );
    };

    const handleCategoryChange = (category: string, checked: boolean) => {
        setSelectedCategories((prev) =>
            checked ? [...prev, category] : prev.filter((c) => c !== category),
        );
    };

    return (
        <SidebarProvider>
            <div className="flex min-h-screen w-full font-sans">
                <Sidebar className="border-r pt-10">
                    <SidebarContent>
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
                                            {categories.map((category) => (
                                                <div
                                                    key={category}
                                                    className="flex items-center space-x-2 rounded-md border px-2 py-1"
                                                >
                                                    <Label
                                                        htmlFor={category}
                                                        className="cursor-pointer text-[15px] font-normal"
                                                    >
                                                        {category}
                                                    </Label>
                                                </div>
                                            ))}
                                        </div>
                                    </SidebarGroupContent>
                                </CollapsibleContent>
                            </SidebarGroup>
                        </Collapsible>
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
                                                ? "secondary"
                                                : "ghost"
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
                            <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-purple-500 to-blue-600 p-8 text-white">
                                <div className="relative z-10">
                                    <div className="mb-4 inline-block rounded-full bg-white/20 px-3 py-1 text-sm">
                                        Build Better, Faster
                                    </div>
                                    <h1 className="mb-4 text-4xl font-bold">
                                        Build a better website, faster than ever
                                    </h1>
                                    <p className="mb-6 max-w-2xl text-lg">
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
                                    ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                                    : "grid-cols-1"
                            }`}
                        >
                            {filteredComponents.map((component) => (
                                <Card
                                    key={component.id}
                                    className="group cursor-pointer border-0 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                                >
                                    <CardContent className="p-0">
                                        <div className="relative overflow-hidden rounded-t-lg bg-gradient-to-br from-amber-50 to-orange-100">
                                            <img
                                                src={
                                                    component.image ||
                                                    "/placeholder.svg"
                                                }
                                                alt={component.title}
                                                className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
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
                                                <h3 className="group-hover:text-primary text-lg font-semibold transition-colors">
                                                    {component.title}
                                                </h3>
                                                {component.isPro && (
                                                    <Badge
                                                        variant="secondary"
                                                        className="bg-purple-100 text-purple-700"
                                                    >
                                                        Pro
                                                    </Badge>
                                                )}
                                            </div>

                                            <p className="text-muted-foreground mb-3 text-sm">
                                                Added {component.addedDate} in{" "}
                                                {component.category}
                                            </p>

                                            <div className="flex items-center gap-2">
                                                <span className="bg-muted rounded px-2 py-1 text-xs">
                                                    {
                                                        collections.find(
                                                            (c) =>
                                                                c.id ===
                                                                component.collection,
                                                        )?.icon
                                                    }
                                                    {
                                                        collections.find(
                                                            (c) =>
                                                                c.id ===
                                                                component.collection,
                                                        )?.name
                                                    }
                                                </span>
                                                <span className="bg-muted rounded px-2 py-1 text-xs">
                                                    {
                                                        platforms.find(
                                                            (p) =>
                                                                p.id ===
                                                                component.platform,
                                                        )?.icon
                                                    }
                                                    {
                                                        platforms.find(
                                                            (p) =>
                                                                p.id ===
                                                                component.platform,
                                                        )?.name
                                                    }
                                                </span>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        {filteredComponents.length === 0 && (
                            <div className="py-12 text-center">
                                <p className="text-muted-foreground">
                                    No components found matching your filters.
                                </p>
                                <Button
                                    variant="outline"
                                    className="mt-4 bg-transparent"
                                    onClick={() => {
                                        setSelectedPlatforms([]);
                                        setSelectedCollections([]);
                                        setSelectedCategories([]);
                                        setSearchQuery("");
                                    }}
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
