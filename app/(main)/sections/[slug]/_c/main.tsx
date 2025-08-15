
import dynamic from "next/dynamic";
import { Suspense } from "react";

const MdxContent = dynamic(() => import("./mdx-content"), {
    loading: () => (
        <div className="h-64 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-800" />
    ),
});

// Dynamic import for breadcrumb components
const Breadcrumb = dynamic(() => import("@/components/ui/breadcrumb").then(mod => ({ default: mod.Breadcrumb })));
const BreadcrumbItem = dynamic(() => import("@/components/ui/breadcrumb").then(mod => ({ default: mod.BreadcrumbItem })));
const BreadcrumbLink = dynamic(() => import("@/components/ui/breadcrumb").then(mod => ({ default: mod.BreadcrumbLink })));
const BreadcrumbList = dynamic(() => import("@/components/ui/breadcrumb").then(mod => ({ default: mod.BreadcrumbList })));
const BreadcrumbPage = dynamic(() => import("@/components/ui/breadcrumb").then(mod => ({ default: mod.BreadcrumbPage })));
const BreadcrumbSeparator = dynamic(() => import("@/components/ui/breadcrumb").then(mod => ({ default: mod.BreadcrumbSeparator })));

// Dynamic import for icons
const HomeIcon = dynamic(() => import("lucide-react").then(mod => ({ default: mod.HomeIcon })));

//eslint-disable-next-line @typescript-eslint/no-explicit-any
const Main = ({ doc }: { doc: any }) => {
    return (
        <>
            <main className="">
                <section className="relative h-full">
                    <div className="pointer-events-none absolute top-0 bottom-0 left-0 z-0 flex w-full overflow-visible">
                        <div
                            className="absolute top-0 left-1/2 z-0 h-full w-full max-w-7xl flex-auto -translate-x-1/2 overflow-visible"
                            data-framer-name="Vertical lines"
                        >
                            <div
                                className="absolute top-0 right-0 bottom-0 z-0 h-full w-[1px] border-r border-dashed border-gray-200 dark:border-neutral-700"
                                data-border="true"
                                data-framer-name="Right line"
                            ></div>
                            <div
                                className="absolute bottom-0 left-0 z-0 h-full w-[1px] border-r border-dashed border-gray-200 dark:border-neutral-700"
                                data-border="true"
                                data-framer-name="Left line"
                            ></div>
                        </div>
                    </div>

                    <div className="mx-auto max-w-7xl px-0.5 pb-20">
                        <Suspense
                            fallback={
                                <nav className="mt-2 h-6 animate-pulse rounded bg-gray-100 px-3 dark:bg-gray-800" />
                            }
                        >
                            <Breadcrumb className="mt-2 px-3">
                                <BreadcrumbList>
                                    <BreadcrumbItem>
                                        <BreadcrumbLink href="#">
                                            <HomeIcon
                                                size={16}
                                                aria-hidden="true"
                                            />
                                            <span className="sr-only">
                                                Home
                                            </span>
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator>
                                        {" "}
                                        /{" "}
                                    </BreadcrumbSeparator>
                                    <BreadcrumbItem>
                                        <BreadcrumbLink href="/sections">
                                            Sections
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator>
                                        {" "}
                                        /{" "}
                                    </BreadcrumbSeparator>
                                    <BreadcrumbItem>
                                        <BreadcrumbPage>
                                            {doc.title}
                                        </BreadcrumbPage>
                                    </BreadcrumbItem>
                                </BreadcrumbList>
                            </Breadcrumb>
                        </Suspense>

                        <div className="mx-3 my-8 max-w-full space-y-1.5 rounded-lg border border-neutral-800 bg-neutral-950 p-5">
                            <p className="text-sm text-gray-300">
                                Some components may require components from
                                Motion-Primitives to function properly.
                            </p>
                            <p className="text-sm text-gray-300">
                                You can easily install them by following the
                                instructions in the{" "}
                                <a
                                    href="#"
                                    className="text-blue-400 hover:text-blue-300"
                                >
                                    documentation
                                </a>
                                .
                            </p>
                        </div>

                        {doc?.body && (
                            <Suspense
                                fallback={
                                    <div className="h-96 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-800" />
                                }
                            >
                                <MdxContent code={doc?.body.code} />
                            </Suspense>
                        )}
                    </div>
                </section>
            </main>
        </>
    );
};

export default Main;
