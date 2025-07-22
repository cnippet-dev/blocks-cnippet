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
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";

interface SectionPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
    name: string;
    description: string;
    session: "authenticated" | "unauthenticated";
}

export function SectionPreview({ name, children }: SectionPreviewProps) {
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
                <div className="ml-auto flex items-center gap-10 md:-mt-13">
                    <div className="flex items-center gap-2">
                        <Tabs
                            value={activeTab}
                            onValueChange={(value) =>
                                setActiveTab(value as "preview" | "code")
                            }
                        >
                            <TabsList className="grid h-8 grid-cols-2 items-center rounded-md p-0.5 *:data-[slot=tabs-trigger]:h-6 *:data-[slot=tabs-trigger]:rounded-sm *:data-[slot=tabs-trigger]:px-2 *:data-[slot=tabs-trigger]:text-xs">
                                <TabsTrigger value="preview">
                                    Preview
                                </TabsTrigger>
                                <TabsTrigger value="code">Code</TabsTrigger>
                            </TabsList>
                        </Tabs>
                        <Separator orientation="vertical" className="!h-6" />
                        <Button
                            size="icon"
                            variant="ghost"
                            className="size-6 rounded-sm p-0"
                            asChild
                            title="Open in New Tab"
                        >
                            <Link href={`/preview/${name}`} target="_blank">
                                <span className="sr-only">Open in New Tab</span>
                                <Fullscreen />
                            </Link>
                        </Button>
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
