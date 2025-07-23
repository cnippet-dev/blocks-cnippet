// "use client";

// import { Check, Zap, Layers, Database } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import {
//     Card,
//     CardContent,
//     CardFooter,
//     CardHeader,
// } from "@/components/ui/card";
// import { useState } from "react";

// const pricingPlans = [
//     {
//         id: "basic",
//         name: "Basic plan",
//         price: "₹100",
//         period: "/mth",
//         billing: "Billed annually.",
//         icon: Zap,
//         features: [
//             "Access to all basic features",
//             "Basic reporting and analytics",
//             "Up to 10 individual users",
//             "20 GB individual data each user",
//             "Basic chat and email support",
//         ],
//     },
//     {
//         id: "business",
//         name: "Business plan",
//         price: "₹200",
//         period: "/mth",
//         billing: "Billed annually.",
//         icon: Layers,
//         features: [
//             "200+ integrations",
//             "Advanced reporting and analytics",
//             "Up to 20 individual users",
//             "40 GB individual data each user",
//             "Priority chat and email support",
//         ],
//     },
//     {
//         id: "enterprise",
//         name: "Enterprise plan",
//         price: "₹400",
//         period: "/mth",
//         billing: "Billed annually.",
//         icon: Database,
//         features: [
//             "Advanced custom fields",
//             "Audit log and data history",
//             "Unlimited individual users",
//             "Unlimited individual data",
//             "Personalized + priority service",
//         ],
//     },
// ];

// export default function PricingSection() {
//     const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

//     const handleGetStarted = (planId: string) => {
//         setSelectedPlan(planId);
//         console.log(`Selected plan: ${planId}`);
//     };

//     return (
//         <div className="mx-auto w-full max-w-7xl px-4 py-16">
//             <div className="mb-16 text-left">
//                 <p className="mb-4 font-medium text-purple-600">Pricing</p>
//                 <h1 className="mb-5 text-4xl font-semibold text-gray-900 md:text-5xl">
//                     Simple, transparent pricing
//                 </h1>
//                 <p className="max-w-2xl text-lg text-gray-600">
//                     We believe Untitled should be accessible to all companies,
//                     no matter the size.
//                 </p>
//             </div>

//             <div className="mx-auto grid gap-8 md:grid-cols-3">
//                 {pricingPlans.map((plan) => {
//                     const IconComponent = plan.icon;
//                     return (
//                         <Card
//                             key={plan.id}
//                             className="relative overflow-hidden border border-gray-200 shadow-none transition-shadow hover:shadow-md"
//                         >
//                             <CardHeader className="pb-8 text-center">
//                                 <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
//                                     <IconComponent className="size-6 text-purple-600" />
//                                 </div>
//                                 <h3 className="mb-4 text-3xl font-medium text-purple-700">
//                                     {plan.name}
//                                 </h3>
//                                 <div className="mb-2">
//                                     <span className="text-4xl font-semibold text-gray-900">
//                                         {plan.price}
//                                     </span>
//                                     <span className="text-4xl font-semibold text-gray-900">
//                                         {plan.period}
//                                     </span>
//                                 </div>
//                                 <p className="text-gray-600">{plan.billing}</p>
//                             </CardHeader>

//                             <CardContent className="pb-8">
//                                 <ul className="space-y-4">
//                                     {plan.features.map((feature, index) => (
//                                         <li
//                                             key={index}
//                                             className="flex items-start gap-3"
//                                         >
//                                             <Check className="mt-0.5 h-5 w-5 flex-shrink-0 rounded-full bg-purple-100 p-0.5 text-purple-600" />
//                                             <span className="text-gray-700">
//                                                 {feature}
//                                             </span>
//                                         </li>
//                                     ))}
//                                 </ul>
//                             </CardContent>

//                             <CardFooter className="border-t bg-gray-50 pt-6">
//                                 <Button
//                                     className="w-full cursor-pointer rounded-lg bg-purple-600 py-3 font-medium text-white transition-colors hover:bg-purple-700"
//                                     onClick={() => handleGetStarted(plan.id)}
//                                 >
//                                     Get started
//                                 </Button>
//                             </CardFooter>
//                         </Card>
//                     );
//                 })}
//             </div>

//             {/* Selected Plan Feedback */}
//             {selectedPlan && (
//                 <div className="mt-8 text-center">
//                     <p className="font-medium text-purple-600">
//                         You selected the{" "}
//                         {pricingPlans.find((p) => p.id === selectedPlan)?.name}!
//                     </p>
//                 </div>
//             )}
//         </div>
//     );
// }

import {
    Search,
    Heart,
    ShoppingBag,
    User,
    ChevronDown,
    ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const artifactCategories = [
    {
        name: "Babylonian",
        description: "Browse 20+ artifacts",
        count: "20+",
        period: "",
    },
    {
        name: "Roman",
        description: "3th-5th centuries BCE",
        count: "7",
        period: "3th-5th centuries BCE",
    },
    {
        name: "Greek",
        description: "6th-8th centuries BCE",
        count: "12",
        period: "6th-8th centuries BCE",
    },
    {
        name: "Egyptian",
        description: "Ancient period",
        count: "15",
        period: "Ancient period",
    },
];

export default function Navbar() {
    return (
        <div className="w-full">
            {/* Top Banner */}
            <div className="text-sm text-gray-600">
                <div className="flex items-center justify-center gap-1 rounded-2xl bg-gray-100 px-10 py-2">
                    <span className="mr-2">✦</span>
                    {
                        "We've curated over 100+ hand-made and ancient artifacts! "
                    }
                    <a href="#" className="text-blue-600 hover:underline">
                        Browse collection
                    </a>
                </div>
            </div>

            {/* Main Navigation */}
            <div className="border-b bg-white px-4 py-3">
                <div className="mx-auto flex max-w-7xl items-center justify-between">
                    {/* Left Section - Artifacts Dropdown */}
                    <div className="flex items-center space-x-4">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    variant="ghost"
                                    className="flex items-center space-x-1"
                                >
                                    <span>Artifacts</span>
                                    <ChevronDown className="h-4 w-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                className="w-[800px] p-6"
                                align="start"
                            >
                                <div className="grid gap-3">
                                    <div className="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none">
                                        <div className="text-sm leading-none font-medium">
                                            Collection Management
                                        </div>
                                        <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                                            Organize and catalog your artifacts
                                        </p>
                                    </div>
                                    <div className="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none">
                                        <div className="text-sm leading-none font-medium">
                                            Authentication
                                        </div>
                                        <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                                            Verify the authenticity of artifacts
                                        </p>
                                    </div>
                                </div>
                                {/* <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <h3 className="mb-4 text-sm font-medium text-gray-500">
                                            Curated collection
                                        </h3>
                                        <div className="space-y-3">
                                            {artifactCategories.map(
                                                (category) => (
                                                    <div
                                                        key={category.name}
                                                        className="flex cursor-pointer items-center justify-between rounded-lg p-3 hover:bg-gray-50"
                                                    >
                                                        <div>
                                                            <h4 className="font-medium text-gray-900">
                                                                {category.name}
                                                            </h4>
                                                            <p className="text-sm text-gray-500">
                                                                {
                                                                    category.description
                                                                }
                                                            </p>
                                                        </div>
                                                        <div className="flex items-center space-x-2">
                                                            <span className="text-sm font-medium text-gray-400">
                                                                {category.count}
                                                            </span>
                                                            <div className="h-8 w-8 rounded-full bg-gray-200"></div>
                                                        </div>
                                                    </div>
                                                ),
                                            )}
                                        </div>
                                        <div className="mt-6 flex items-center justify-between rounded-lg border p-4">
                                            <div>
                                                <h4 className="font-medium text-gray-900">
                                                    Browse all
                                                </h4>
                                                <p className="text-sm text-gray-500">
                                                    Over 100+ hand-made and
                                                    ancient artifacts
                                                </p>
                                            </div>
                                            <Button
                                                size="sm"
                                                className="rounded-full"
                                            >
                                                <ArrowRight className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
                                            <img
                                                src="/placeholder.svg?height=200&width=200"
                                                alt="Ancient artifact"
                                                className="h-full w-full object-cover"
                                            />
                                        </div>
                                        <div className="space-y-3">
                                            <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
                                                <img
                                                    src="/placeholder.svg?height=100&width=100"
                                                    alt="Roman artifact"
                                                    className="h-full w-full object-cover"
                                                />
                                            </div>
                                            <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
                                                <img
                                                    src="/placeholder.svg?height=100&width=100"
                                                    alt="Greek artifact"
                                                    className="h-full w-full object-cover"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-span-2 aspect-video overflow-hidden rounded-lg bg-gray-100">
                                            <img
                                                src="/placeholder.svg?height=150&width=300"
                                                alt="Egyptian artifact"
                                                className="h-full w-full object-cover"
                                            />
                                        </div>
                                    </div>
                                </div> */}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>

                    {/* Center Section - Search and Logo */}
                    <div className="flex flex-1 items-center justify-center space-x-4">
                        <div className="relative max-w-md flex-1">
                            <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" />
                            <Input
                                placeholder="Search over 100+ templates..."
                                className="pr-4 pl-10"
                            />
                        </div>
                        <div className="h-8 w-8 rounded-full bg-black"></div>
                    </div>

                    {/* Right Section - Icons and Button */}
                    <div className="flex items-center space-x-3">
                        <Button variant="ghost" size="icon">
                            <Heart className="h-5 w-5" />
                        </Button>
                        <Button variant="ghost" size="icon">
                            <ShoppingBag className="h-5 w-5" />
                        </Button>
                        <Button variant="ghost" size="icon">
                            <User className="h-5 w-5" />
                        </Button>
                        <Button className="bg-blue-600 hover:bg-blue-700">
                            Explore
                        </Button>
                    </div>
                </div>
            </div>

            {/* Secondary Navigation */}
            <div className="bg-white px-4 py-3">
                <div className="mx-auto max-w-7xl">
                    <NavigationMenu>
                        <NavigationMenuList className="space-x-8">
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>
                                    Solutions
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <div className="w-[400px] p-4">
                                        <div className="grid gap-3">
                                            <NavigationMenuLink className="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none">
                                                <div className="text-sm leading-none font-medium">
                                                    Collection Management
                                                </div>
                                                <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                                                    Organize and catalog your
                                                    artifacts
                                                </p>
                                            </NavigationMenuLink>
                                            <NavigationMenuLink className="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none">
                                                <div className="text-sm leading-none font-medium">
                                                    Authentication
                                                </div>
                                                <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                                                    Verify the authenticity of
                                                    artifacts
                                                </p>
                                            </NavigationMenuLink>
                                        </div>
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink className="group bg-background hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                                    About
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink className="group bg-background hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                                    Artist
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink className="group bg-background hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                                    Contact
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
            </div>
        </div>
    );
}

// "use client";

// import * as React from "react";
// import Link from "next/link";
// import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react";

// import {
//     NavigationMenu,
//     NavigationMenuContent,
//     NavigationMenuItem,
//     NavigationMenuLink,
//     NavigationMenuList,
//     NavigationMenuTrigger,
//     navigationMenuTriggerStyle,
// } from "@/components/ui/navigation-menu";

// const components: { title: string; href: string; description: string }[] = [
//     {
//         title: "Alert Dialog",
//         href: "/docs/primitives/alert-dialog",
//         description:
//             "A modal dialog that interrupts the user with important content and expects a response.",
//     },
//     {
//         title: "Hover Card",
//         href: "/docs/primitives/hover-card",
//         description:
//             "For sighted users to preview content available behind a link.",
//     },
//     {
//         title: "Progress",
//         href: "/docs/primitives/progress",
//         description:
//             "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
//     },
//     {
//         title: "Scroll-area",
//         href: "/docs/primitives/scroll-area",
//         description: "Visually or semantically separates content.",
//     },
//     {
//         title: "Tabs",
//         href: "/docs/primitives/tabs",
//         description:
//             "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
//     },
//     {
//         title: "Tooltip",
//         href: "/docs/primitives/tooltip",
//         description:
//             "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
//     },
// ];

// export default function NavigationMenuDemo() {
//     return (
//         <NavigationMenu viewport={false} className="min-h-screen">
//             <NavigationMenuList>
//                 <NavigationMenuItem>
//                     <NavigationMenuTrigger>Home</NavigationMenuTrigger>
//                     <NavigationMenuContent className="data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-bottom-40 data-[motion=from-start]:slide-in-from-bottom-40 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 top-0 left-0 w-full p-2 pr-2.5 md:absolute md:w-auto">
//                         <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
//                             <li className="row-span-3">
//                                 <NavigationMenuLink asChild>
//                                     <a
//                                         className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
//                                         href="/"
//                                     >
//                                         <div className="mt-4 mb-2 text-lg font-medium">
//                                             shadcn/ui
//                                         </div>
//                                         <p className="text-muted-foreground text-sm leading-tight">
//                                             Beautifully designed components
//                                             built with Tailwind CSS.
//                                         </p>
//                                     </a>
//                                 </NavigationMenuLink>
//                             </li>
//                             <ListItem href="/docs" title="Introduction">
//                                 Re-usable components built using Radix UI and
//                                 Tailwind CSS.
//                             </ListItem>
//                             <ListItem
//                                 href="/docs/installation"
//                                 title="Installation"
//                             >
//                                 How to install dependencies and structure your
//                                 app.
//                             </ListItem>
//                             <ListItem
//                                 href="/docs/primitives/typography"
//                                 title="Typography"
//                             >
//                                 Styles for headings, paragraphs, lists...etc
//                             </ListItem>
//                         </ul>
//                     </NavigationMenuContent>
//                 </NavigationMenuItem>
//                 <NavigationMenuItem>
//                     <NavigationMenuTrigger>Components</NavigationMenuTrigger>
//                     <NavigationMenuContent>
//                         <ul className="grid w-[400px] z-50 gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
//                             {components.map((component) => (
//                                 <ListItem
//                                     key={component.title}
//                                     title={component.title}
//                                     href={component.href}
//                                 >
//                                     {component.description}
//                                 </ListItem>
//                             ))}
//                         </ul>
//                     </NavigationMenuContent>
//                 </NavigationMenuItem>
//                 <NavigationMenuItem>
//                     <NavigationMenuLink
//                         asChild
//                         className={navigationMenuTriggerStyle()}
//                     >
//                         <Link href="/docs">Docs</Link>
//                     </NavigationMenuLink>
//                 </NavigationMenuItem>
//                 <NavigationMenuItem>
//                     <NavigationMenuTrigger>List</NavigationMenuTrigger>
//                     <NavigationMenuContent>
//                         <ul className="grid w-[300px] gap-4">
//                             <li>
//                                 <NavigationMenuLink asChild>
//                                     <Link href="#">
//                                         <div className="font-medium">
//                                             Components
//                                         </div>
//                                         <div className="text-muted-foreground">
//                                             Browse all components in the
//                                             library.
//                                         </div>
//                                     </Link>
//                                 </NavigationMenuLink>
//                                 <NavigationMenuLink asChild>
//                                     <Link href="#">
//                                         <div className="font-medium">
//                                             Documentation
//                                         </div>
//                                         <div className="text-muted-foreground">
//                                             Learn how to use the library.
//                                         </div>
//                                     </Link>
//                                 </NavigationMenuLink>
//                                 <NavigationMenuLink asChild>
//                                     <Link href="#">
//                                         <div className="font-medium">Blog</div>
//                                         <div className="text-muted-foreground">
//                                             Read our latest blog posts.
//                                         </div>
//                                     </Link>
//                                 </NavigationMenuLink>
//                             </li>
//                         </ul>
//                     </NavigationMenuContent>
//                 </NavigationMenuItem>
//                 <NavigationMenuItem>
//                     <NavigationMenuTrigger>Simple</NavigationMenuTrigger>
//                     <NavigationMenuContent>
//                         <ul className="grid w-[200px] gap-4">
//                             <li>
//                                 <NavigationMenuLink asChild>
//                                     <Link href="#">Components</Link>
//                                 </NavigationMenuLink>
//                                 <NavigationMenuLink asChild>
//                                     <Link href="#">Documentation</Link>
//                                 </NavigationMenuLink>
//                                 <NavigationMenuLink asChild>
//                                     <Link href="#">Blocks</Link>
//                                 </NavigationMenuLink>
//                             </li>
//                         </ul>
//                     </NavigationMenuContent>
//                 </NavigationMenuItem>
//                 <NavigationMenuItem>
//                     <NavigationMenuTrigger>With Icon</NavigationMenuTrigger>
//                     <NavigationMenuContent>
//                         <ul className="grid w-[200px] gap-4">
//                             <li>
//                                 <NavigationMenuLink asChild>
//                                     <Link
//                                         href="#"
//                                         className="flex-row items-center gap-2"
//                                     >
//                                         <CircleHelpIcon />
//                                         Backlog
//                                     </Link>
//                                 </NavigationMenuLink>
//                                 <NavigationMenuLink asChild>
//                                     <Link
//                                         href="#"
//                                         className="flex-row items-center gap-2"
//                                     >
//                                         <CircleIcon />
//                                         To Do
//                                     </Link>
//                                 </NavigationMenuLink>
//                                 <NavigationMenuLink asChild>
//                                     <Link
//                                         href="#"
//                                         className="flex-row items-center gap-2"
//                                     >
//                                         <CircleCheckIcon />
//                                         Done
//                                     </Link>
//                                 </NavigationMenuLink>
//                             </li>
//                         </ul>
//                     </NavigationMenuContent>
//                 </NavigationMenuItem>
//             </NavigationMenuList>
//         </NavigationMenu>
//     );
// }

// function ListItem({
//     title,
//     children,
//     href,
//     ...props
// }: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
//     return (
//         <li {...props}>
//             <NavigationMenuLink asChild>
//                 <Link href={href}>
//                     <div className="text-sm leading-none font-medium">
//                         {title}
//                     </div>
//                     <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
//                         {children}
//                     </p>
//                 </Link>
//             </NavigationMenuLink>
//         </li>
//     );
// }
