"use client";

import * as React from "react";
import { Index } from "@/__registry__";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { cn, scrollToSection } from "@/lib/utils";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog-cn";
import Image from "next/image";
import { useConfig } from "@/lib/use-config";
import {
    Code,
    Eye,
    Fullscreen,
    Loader,
    Monitor,
    RotateCw,
    Smartphone,
    Tablet,
} from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { ImperativePanelHandle } from "react-resizable-panels";

import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

interface SectionPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
    name: string;
    description: string;
    session: "authenticated" | "unauthenticated";
}

export function SectionPreview({
    name,
    children,
}: SectionPreviewProps) {
    const [activeTab, setActiveTab] = React.useState<"preview" | "code">(
        "preview",
    );
    const [config] = useConfig();
    const Codes = React.Children.toArray(children) as React.ReactElement[];
    const Src = Codes[0];

    const Preview = React.useMemo(() => {
        //eslint-disable-next-line @typescript-eslint/no-explicit-any
        const Component = (Index[config.style] as any)[name]?.component;

        if (!Component) {
            console.error(
                `Component with name "${name}" not found in registry.`,
            );
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

        return <Component />;
    }, [name]);

    return (
        <div className={`relative mx-auto mt-32 first:mt-0`}>
            <div className="relative flex flex-col items-start justify-between md:flex-row md:items-center">
                <div className="ml-auto flex items-center gap-10 md:-mt-20">
                    <div className="font-normal">
                        <div className="mx-auto flex w-fit items-center justify-center">
                            <button
                                onClick={() => setActiveTab("preview")}
                                className={`flex items-center px-5 py-[0.45rem] text-sm tracking-wide ${activeTab === "preview" ? "border-b-2 border-black text-black dark:border-white dark:text-white" : "border-dawn-100 text-dawn-300"} border-b`}
                            >
                                <Eye className="size-5" />
                                <span className="sr-only lg:not-sr-only lg:ml-2">
                                    Preview
                                </span>
                            </button>

                            <Button
                                size="icon"
                                variant="ghost"
                                className="size-6 rounded-sm p-0"
                                asChild
                                title="Open in New Tab"
                            >
                                <Link href={`/preview/${name}`} target="_blank">
                                    <span className="sr-only">
                                        Open in New Tab
                                    </span>
                                    <Fullscreen />
                                </Link>
                            </Button>
                            <button
                                onClick={() => setActiveTab("code")}
                                className={`flex items-center px-5 py-[0.45rem] text-sm tracking-wide ${activeTab === "code" ? "border-b-2 border-black text-black dark:border-white dark:text-white" : "border-dawn-100 text-dawn-300"} border-b`}
                            >
                                <Code className="size-5" />
                                <span className="sr-only lg:not-sr-only lg:ml-2">
                                    Code
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <React.Suspense
                fallback={
                    <div className="text-muted-foreground flex items-center text-sm">
                        Loading...
                    </div>
                }
            >
                <div className="overflow- col-span-2 row-start-2 mx-auto mt-8 min-w-0">
                    {activeTab === "preview" ? (
                        Preview
                    ) : (
                        <div className="overflow-y-auto rounded-xl text-sm break-words">
                            <div className="w-full rounded-md [&_pre]:my-0 [&_pre]:max-h-[600px] [&_pre]:overflow-auto">
                                {Src}
                            </div>
                        </div>
                    )}
                </div>
            </React.Suspense>
        </div>
    );
}
