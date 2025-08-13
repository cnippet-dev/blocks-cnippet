import React from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";

import { Mdx } from "@/mdx-components";

import { allSections } from "@/.content-collections/generated";
const Navbar = dynamic(() => import("@/components/shared/navbar"));
const Footer = dynamic(() => import("@/components/shared/footer"));
import { BASE_URL } from "@/config/docs";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { HomeIcon } from "lucide-react";

export const revalidate = 60;

export const dynamicParams = true;

export async function generateStaticParams() {
    return allSections.map((doc) => ({
        slug: doc.slugAsParams,
    }));
}

function getComponentDoc({ slug }: { slug: string }) {
    return allSections.find((doc) => doc.slugAsParams === slug);
}

export default async function Blogpage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const slug = await params;

    const doc = getComponentDoc(slug);

    if (!doc) {
        return <div>Component not found.</div>;
    }

    return (
        <>
            <Navbar className="px-4 md:px-10 xl:px-20" />
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
                        <Breadcrumb className="mt-2 px-3">
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="#">
                                        <HomeIcon
                                            size={16}
                                            aria-hidden="true"
                                        />
                                        <span className="sr-only">Home</span>
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator> / </BreadcrumbSeparator>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="#">
                                        Sections
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator> / </BreadcrumbSeparator>
                                <BreadcrumbItem>
                                    <BreadcrumbPage>{doc.title}</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>

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

                        {doc?.body && <Mdx code={doc?.body.code} />}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const slug = await params;
    const doc = getComponentDoc(slug);

    if (!doc) {
        return {
            title: "Section Not Found",
            description: "The requested section does not exist.",
            alternates: {
                canonical: `${BASE_URL}/404`,
            },
        };
    }

    return {
        metadataBase: new URL(BASE_URL),

        title: doc.title,
        description: doc.description,

        openGraph: {
            type: "article",
            title: doc.title,
            description: doc.description,
            url: `${BASE_URL}/sections/${slug}`,
            images: [
                {
                    url: `${BASE_URL}${doc.thumbnail.src}`,
                    width: 1200,
                    height: 630,
                    alt: doc.thumbnail.alt || `${doc.title} component preview`,
                },
            ],
            siteName: "Cnippet UI",
        },

        twitter: {
            card: "summary_large_image",
            title: doc.title,
            description: doc.description,
            images: [
                {
                    url: `${BASE_URL}${doc.thumbnail.src}`,
                    width: 1200,
                    height: 630,
                    alt: doc.thumbnail.alt || `${doc.title} section preview`,
                },
            ],
        },
    };
}
