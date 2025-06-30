"use client";

import * as React from "react";
import { Index } from "@/__registry__";

import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import fetchPro from "@/lib/get-pro";
import { scrollToSection } from "@/lib/utils";
import { Eye, Code, SquareArrowOutUpRight, Loader } from "lucide-react";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog-cn";
import Image from "next/image";
// import GoogleLogo from "@/public/images/svg/google-logo.svg";
// import Github from "@/public/images/svg/github.svg";
// import { Button } from "@/components/ui/button";
// import { LoadingIcon } from "@/components/icons";

interface SectionPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
    name: string;
    description: string;
}

export function SectionPreview({
    name,
    // description,
    children,
    className,
    // ...props
}: SectionPreviewProps) {
    // const [key, setKey] = React.useState(0);
    const [activeTab, setActiveTab] = React.useState<"preview" | "code">(
        "preview",
    );

    const { status, data: session } = useSession();
    const email = session?.user?.email;
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

    const { pro } = fetchPro(email);
    // console.log("in component:" + pro);

    const Codes = React.Children.toArray(children) as React.ReactElement[];
    const Src = Codes[0]; // Use first child instead of index-based selection

    // const n = name.split("-");

    const a = "false"; // Default auth value
    const p = "false"; // Default pro value

    const Preview = React.useMemo(() => {
        const Component = Index[name as keyof typeof Index]?.component;

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
        <>
            <div className={`relative mx-auto mt-32 first:mt-0`}>
                <div className="relative flex flex-col items-start justify-between md:flex-row md:items-center">
                    {/* <div>
                        <h2 className="flex items-end gap-2 truncate py-1 font-ins text-4xl font-normal capitalize tracking-tight text-blue-600 md:text-5xl">
                            <span className="text-black dark:text-white">
                                {n[0]}
                            </span>
                            {"-"}
                            <span className="text-2xl text-blue-600 md:text-3xl">
                                0{n[1]}
                            </span>
                            <span className="text-3xl text-[#cfd2d6]">.</span>
                            <Link
                                href={`/u/preview?component=${name}`}
                                target="_blank"
                            >
                                <SquareArrowOutUpRight className="mb-2 size-4 text-black" />
                            </Link>
                        </h2>

                        <p className="foin mt-5 max-w-xl text-base text-neutral-700 dark:text-neutral-400">
                            {description}
                        </p>
                    </div> */}

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
                                {status === "authenticated" || a === "false" ? (
                                    <>
                                        {pro === true || p === "false" ? (
                                            <button
                                                onClick={() =>
                                                    setActiveTab("code")
                                                }
                                                className={`flex items-center px-5 py-[0.45rem] text-sm tracking-wide ${activeTab === "code" ? "border-b-2 border-black text-black dark:border-white dark:text-white" : "border-dawn-100 text-dawn-300"} border-b`}
                                            >
                                                <Code className="size-5" />
                                                <span className="sr-only lg:not-sr-only lg:ml-2">
                                                    Code
                                                </span>
                                            </button>
                                        ) : (
                                            <button
                                                onClick={() =>
                                                    scrollToSection(
                                                        "checkout-pro",
                                                    )
                                                }
                                                className={`flex items-center rounded-md py-[0.45rem] pr-2 pl-2 text-sm tracking-wide lg:pr-3 ${activeTab === "code" ? "shadow" : ""} transition-all duration-500 ease-in-out`}
                                            >
                                                <Code className="dark:text-dawn-300 size-5 text-neutral-700" />

                                                <span className="dark:text-dawn-300 sr-only text-neutral-700 lg:not-sr-only lg:ml-2">
                                                    Get pro to view code
                                                </span>
                                            </button>
                                        )}
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
                        <Link
                            href={`/preview/${name.split("-")[0]}/${name}`}
                            target="_blank"
                        >
                            <SquareArrowOutUpRight className="size-4 text-black dark:text-neutral-300" />
                        </Link>
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
                            <div
                                className={`font-ins dark:border-dawn-600 overflow-y-auto rounded-xl border ${className} bg-white`}
                            >
                                {Preview}
                            </div>
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
        </>
    );
}
