"use client";

import * as React from "react";
import { Index } from "@/__registry__";

import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
// import fetchPro from "@/lib/get-pro";
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
}

export function SectionPreview({ name, children }: SectionPreviewProps) {
    const [activeTab, setActiveTab] = React.useState<"preview" | "code">(
        "preview",
    );
    const resizablePanelRef = React.useRef<ImperativePanelHandle>(null);
    const [iframeKey, setIframeKey] = React.useState(0);
    const [view, setView] = React.useState("view");

    const { status } = useSession();
    // const email = session?.user?.email;
    const [loading, setLoading] = React.useState(false);
    const [loading1, setLoading1] = React.useState(false);

    const loginWithGoogle = async () => {
        setLoading(true);
        await signIn("google");
    };
    const loginWithGit = async () => {
        setLoading1(true);
        await signIn("github");
    };

    const Codes = React.Children.toArray(children) as React.ReactElement[];
    const Src = Codes[0];
    const [config] = useConfig();

    const a = "false";

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
        <BlockViewerContext.Provider
            value={{
                item: {
                    name,
                },
                iframeKey,
                setIframeKey,
                resizablePanelRef,
            }}
        >
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
                                <div className="ml-auto flex items-center gap-2">
                                    <div className="h-8 items-center gap-1.5 rounded-md border p-1 shadow-none">
                                        <ToggleGroup
                                            type="single"
                                            defaultValue="100"
                                            onValueChange={(value) => {
                                                setView("preview");
                                                if (
                                                    resizablePanelRef?.current
                                                ) {
                                                    resizablePanelRef.current.resize(
                                                        parseInt(value),
                                                    );
                                                }
                                            }}
                                            className="gap-1 *:data-[slot=toggle-group-item]:!size-6 *:data-[slot=toggle-group-item]:!rounded-sm"
                                        >
                                            <ToggleGroupItem
                                                value="100"
                                                title="Desktop"
                                            >
                                                <Monitor />
                                            </ToggleGroupItem>
                                            <ToggleGroupItem
                                                value="60"
                                                title="Tablet"
                                            >
                                                <Tablet />
                                            </ToggleGroupItem>
                                            <ToggleGroupItem
                                                value="30"
                                                title="Mobile"
                                            >
                                                <Smartphone />
                                            </ToggleGroupItem>
                                            <Separator
                                                orientation="vertical"
                                                className="!h-4"
                                            />
                                            <Button
                                                size="icon"
                                                variant="ghost"
                                                className="size-6 rounded-sm p-0"
                                                asChild
                                                title="Open in New Tab"
                                            >
                                                <Link
                                                    href={`/preview/${name}`}
                                                    target="_blank"
                                                >
                                                    <span className="sr-only">
                                                        Open in New Tab
                                                    </span>
                                                    <Fullscreen />
                                                </Link>
                                            </Button>
                                            <Separator
                                                orientation="vertical"
                                                className="!h-4"
                                            />
                                            <Button
                                                size="icon"
                                                variant="ghost"
                                                className="size-6 rounded-sm p-0"
                                                title="Refresh Preview"
                                                onClick={() => {
                                                    if (setIframeKey) {
                                                        setIframeKey(
                                                            (k) => k + 1,
                                                        );
                                                    }
                                                }}
                                            >
                                                <RotateCw />
                                                <span className="sr-only">
                                                    Refresh Preview
                                                </span>
                                            </Button>
                                        </ToggleGroup>
                                    </div>
                                    <Separator
                                        orientation="vertical"
                                        className="mx-1 !h-4"
                                    />
                                </div>
                                {status === "authenticated" || a === "false" ? (
                                    <>
                                        {/* {pro === true || p === "false" ? ( */}
                                        <button
                                            onClick={() => setActiveTab("code")}
                                            className={`flex items-center px-5 py-[0.45rem] text-sm tracking-wide ${activeTab === "code" ? "border-b-2 border-black text-black dark:border-white dark:text-white" : "border-dawn-100 text-dawn-300"} border-b`}
                                        >
                                            <Code className="size-5" />
                                            <span className="sr-only lg:not-sr-only lg:ml-2">
                                                Code
                                            </span>
                                        </button>
                                        {/* ) : ( */}
                                        <button
                                            onClick={() =>
                                                scrollToSection("checkout-pro")
                                            }
                                            className={`flex items-center rounded-md py-[0.45rem] pr-2 pl-2 text-sm tracking-wide lg:pr-3 ${activeTab === "code" ? "shadow" : ""} transition-all duration-500 ease-in-out`}
                                        >
                                            <Code className="dark:text-dawn-300 size-5 text-neutral-700" />

                                            <span className="dark:text-dawn-300 sr-only text-neutral-700 lg:not-sr-only lg:ml-2">
                                                Get pro to view code
                                            </span>
                                        </button>
                                        {/* )} */}
                                    </>
                                ) : (
                                    // <Link
                                    //     href={`/login?callbackUrl=${name}`}
                                    //     className={`flex items-center pl-2 pr-2 text-sm tracking-wide lg:pr-3 ${activeTab === "code" ? "border-b" : ""} transition-all duration-500 ease-in-out`}
                                    // >
                                    //     <Code className="size-5 text-neutral-700 dark:text-neutral-400" />

                                    //     <span className="sr-only text-neutral-700 dark:text-neutral-400 lg:not-sr-only lg:ml-2">
                                    //         Login to view code
                                    //     </span>
                                    // </Link>
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <div className="flex w-full items-center">
                                                <button
                                                    className={`flex items-center border-b px-4 py-[0.45rem] text-sm tracking-wide transition-all duration-500 ease-in-out lg:pr-3`}
                                                >
                                                    <Code className="size-5 text-neutral-700 dark:text-neutral-400" />

                                                    <span className="sr-only text-neutral-700 lg:not-sr-only lg:ml-2 dark:text-neutral-400">
                                                        Login to view code
                                                    </span>
                                                </button>
                                            </div>
                                        </DialogTrigger>
                                        <DialogContent className="py-20">
                                            <div className="mb-2 flex flex-col items-center gap-2">
                                                <div
                                                    className="border-border flex size-11 shrink-0 items-center justify-center rounded-full border"
                                                    aria-hidden="true"
                                                >
                                                    {" "}
                                                    <Image
                                                        src="/images/og/logo.png"
                                                        alt=""
                                                        width={3840}
                                                        height={2160}
                                                        className="w-[2.75rem] rounded-full dark:bg-white"
                                                    />
                                                </div>
                                                <DialogHeader>
                                                    <DialogTitle className="text-2xl sm:text-center">
                                                        Welcome back
                                                    </DialogTitle>
                                                    <DialogDescription className="sm:text-center">
                                                        Sign in to your account
                                                        to continue
                                                    </DialogDescription>
                                                </DialogHeader>
                                            </div>
                                            <button
                                                onClick={loginWithGoogle}
                                                className="group flex w-full items-center justify-center rounded-md border border-neutral-100 px-10 py-1.5 hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-900"
                                            >
                                                {loading && (
                                                    <Loader className="mr-3 -ml-1 h-5 w-5 animate-spin text-black" />
                                                )}
                                                {/* <Image
                                                    src={GoogleLogo}
                                                    alt="google-logo"
                                                    width={22}
                                                    height={22}
                                                    className="mx-3"
                                                /> */}
                                                Log in with Google
                                            </button>
                                            <div className="mx-auto flex w-full max-w-[90%] items-center gap-3 align-middle">
                                                <div className="h-[0.5px] w-full max-w-full bg-neutral-200 dark:bg-neutral-600" />
                                                <div className="text-xs text-neutral-500 dark:text-neutral-400">
                                                    OR
                                                </div>
                                                <div className="h-[0.5px] w-full max-w-full bg-neutral-200 dark:bg-neutral-600" />
                                            </div>

                                            <button
                                                onClick={loginWithGit}
                                                className="group flex w-full items-center justify-center rounded-md border border-neutral-100 px-10 py-1.5 hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-900"
                                            >
                                                {loading1 && (
                                                    <Loader className="mr-3 -ml-1 h-5 w-5 animate-spin text-black" />
                                                )}
                                                {/* <Image
                                                    src={Github}
                                                    alt="google-logo"
                                                    width={24}
                                                    height={24}
                                                    className="mx-3 rounded-full"
                                                /> */}
                                                Log in with GitHub
                                            </button>

                                            <p className="text-muted-foreground text-center text-xs">
                                                By logging in you agree to our{" "}
                                                <Link
                                                    className="underline hover:no-underline"
                                                    href="#"
                                                >
                                                    Privacy Policy
                                                </Link>
                                                .
                                            </p>
                                        </DialogContent>
                                    </Dialog>
                                )}
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
                            <BlockViewerView />
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
        </BlockViewerContext.Provider>
    );
}

//eslint-disable-next-line @typescript-eslint/no-explicit-any
const BlockViewerContext = React.createContext<any | null>(null);

function useBlockViewer() {
    const context = React.useContext(BlockViewerContext);
    if (!context) {
        throw new Error(
            "useBlockViewer must be used within a BlockViewerProvider.",
        );
    }
    return context;
}

function BlockViewerIframe({ className }: { className?: string }) {
    const { item, iframeKey } = useBlockViewer();

    return (
        <iframe
            key={iframeKey}
            src={`/preview/${item.name}`}
            height={item.meta?.iframeHeight ?? 930}
            loading="lazy"
            className={cn(
                "bg-background no-scrollbar relative z-20 w-full",
                className,
            )}
        />
    );
}

function BlockViewerView() {
    const { resizablePanelRef } = useBlockViewer();

    return (
        <div className="hidden group-data-[view=code]/block-view-wrapper:hidden md:h-[var(--height)] lg:flex">
            <div className="relative grid w-full gap-4">
                <div className="absolute inset-0 right-4 [background-image:radial-gradient(#d4d4d4_1px,transparent_1px)] [background-size:20px_20px] dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"></div>
                <ResizablePanelGroup
                    direction="horizontal"
                    className="after:bg-surface/50 relative z-10 after:absolute after:inset-0 after:right-3 after:z-0 after:rounded-xl"
                >
                    <ResizablePanel
                        ref={resizablePanelRef}
                        className="bg-background relative aspect-[4/2.5] overflow-hidden rounded-lg border md:aspect-auto md:rounded-xl"
                        defaultSize={100}
                        minSize={30}
                    >
                        <BlockViewerIframe />
                    </ResizablePanel>
                    <ResizableHandle className="after:bg-border relative hidden w-3 bg-transparent p-0 after:absolute after:top-1/2 after:right-0 after:h-8 after:w-[6px] after:translate-x-[-1px] after:-translate-y-1/2 after:rounded-full after:transition-all after:hover:h-10 md:block" />
                    <ResizablePanel defaultSize={0} minSize={0} />
                </ResizablePanelGroup>
            </div>
        </div>
    );
}
