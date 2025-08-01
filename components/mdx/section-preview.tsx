// section-preview.tsx

"use client";

import * as React from "react";
import { Index } from "@/__registry__";
import Link from "next/link";
import { Fullscreen } from "lucide-react";
import { useSession } from "next-auth/react";

import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { useConfig } from "@/lib/use-config";
import { useProStatus } from "@/lib/get-pro";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "../ui/tooltip";

interface SectionPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
    name: string;
}

export function SectionPreview({ name, children }: SectionPreviewProps) {
    const [activeTab, setActiveTab] = React.useState<
        "preview" | "code" | "login" | "pro"
    >("preview");
    const [config] = useConfig();
    const Codes = React.Children.toArray(children) as React.ReactElement[];
    const Src = Codes[0];

    const { status } = useSession();
    const { isPro, isLoading: isProLoading } = useProStatus();

    //eslint-disable-next-line @typescript-eslint/no-explicit-any
    const componentConfig = (Index[config.style] as any)[name];

    const Preview = React.useMemo(() => {
        if (!componentConfig) {
            return (
                <p className="text-muted-foreground text-sm">
                    Component{" "}
                    <code className="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm">
                        {name}
                    </code>{" "}
                    not found in registry.
                </p>
            );
        }
        const Component = componentConfig.component;
        if (!Component) {
            return <p>Component not found.</p>;
        }
        return <Component />;
    }, [componentConfig, name]);

    const { auth: requiresAuth, pro: requiresPro } = componentConfig || {};
    const isLoggedIn = status === "authenticated";
    const canViewCode =
        !requiresAuth || (isLoggedIn && (!requiresPro || isPro));

    const renderTabs = () => {
        if (canViewCode) {
            return (
                <TabsTrigger value="code" onClick={() => setActiveTab("code")}>
                    Code
                </TabsTrigger>
            );
        }
        if (requiresPro && !isPro) {
            return (
                <TabsTrigger value="pro" onClick={() => setActiveTab("pro")}>
                    Code
                </TabsTrigger>
            );
        }

        return (
            <TabsTrigger value="login" onClick={() => setActiveTab("login")}>
                Code
            </TabsTrigger>
        );
    };

    const renderContent = () => {
        if (activeTab === "preview") {
            return Preview;
        }
        if (activeTab === "code" && canViewCode) {
            return (
                <div className="overflow-y-auto rounded-xl text-sm break-words">
                    <div className="w-full rounded-md [&_pre]:my-0 [&_pre]:max-h-[600px] [&_pre]:overflow-auto">
                        {Src}
                    </div>
                </div>
            );
        }
        if (activeTab === "pro" || (requiresPro && !isPro)) {
            return (
                <div className="flex min-h-[200px] flex-col items-center justify-center gap-4">
                    <p className="text-muted-foreground text-center text-base">
                        This is a Pro component. Upgrade to view the code.
                    </p>
                    <Button asChild>
                        <Link href="/pricing">Get Pro</Link>
                    </Button>
                </div>
            );
        }
        if (activeTab === "login" || (requiresAuth && !isLoggedIn)) {
            return (
                <div className="flex min-h-[200px] flex-col items-center justify-center gap-4">
                    <p className="text-muted-foreground text-center text-base">
                        You must be logged in to view this section.
                    </p>
                    <Button asChild>
                        <Link href="/sign_in">Login</Link>
                    </Button>
                </div>
            );
        }
        return null;
    };

    return (
        <TooltipProvider delayDuration={0}>
            <Tooltip>
                <div className={`relative mx-auto mt-32 first:mt-0`}>
                    <div className="relative flex flex-col items-start justify-between md:flex-row md:items-center">
                        <div className="ml-auto flex items-center gap-10 md:-mt-13">
                            <div className="flex items-center gap-2">
                                <Tabs
                                    defaultValue="preview"
                                    value={activeTab}
                                    onValueChange={(value) =>
                                        setActiveTab(
                                            value as
                                                | "preview"
                                                | "code"
                                                | "login"
                                                | "pro",
                                        )
                                    }
                                    className="w-full"
                                >
                                    <TabsList className="grid h-8 grid-cols-2 items-center rounded-md p-0.5 *:data-[slot=tabs-trigger]:h-6 *:data-[slot=tabs-trigger]:rounded-sm *:data-[slot=tabs-trigger]:px-2 *:data-[slot=tabs-trigger]:text-xs">
                                        <TabsTrigger
                                            value="preview"
                                            onClick={() =>
                                                setActiveTab("preview")
                                            }
                                        >
                                            Preview
                                        </TabsTrigger>
                                        {isProLoading ? (
                                            <div className="px-2 text-xs">
                                                ...
                                            </div>
                                        ) : (
                                            renderTabs()
                                        )}
                                    </TabsList>
                                </Tabs>
                                <Separator
                                    orientation="vertical"
                                    className="!h-6"
                                />
                                <TooltipTrigger>
                                    <Button
                                        size="icon"
                                        variant="ghost"
                                        className="mr-4 size-6 rounded-sm px-4"
                                        asChild
                                    >
                                        <Link
                                            href={`/preview/${name}`}
                                            target="_blank"
                                        >
                                            <Fullscreen />
                                        </Link>
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent
                                    side="bottom"
                                    className="px-1 py-1 text-xs"
                                >
                                    Fullscreen
                                </TooltipContent>
                            </div>
                        </div>
                    </div>

                    <React.Suspense
                        fallback={
                            <div className="flex min-h-[40vh] items-center justify-center gap-2">
                                <div className="loader"></div>
                                Loading component...
                            </div>
                        }
                    >
                        <div className="overflow- col-span-2 row-start-2 mx-auto mt-8 min-w-0 border border-r-0 border-l-0">
                            {renderContent()}
                        </div>
                    </React.Suspense>
                </div>
            </Tooltip>
        </TooltipProvider>
    );
}
