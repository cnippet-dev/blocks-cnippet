import React from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";

import { Mdx } from "@/mdx-components";

import { allSections } from "@/.content-collections/generated";
const Navbar = dynamic(() => import("@/components/shared/navbar"));
const Footer = dynamic(() => import("@/components/shared/footer"));

import { BASE_URL } from "@/config/docs";

type Params = Promise<{ slug: string }>;

async function getSectionDoc({ slug }: { slug: string }) {
    try {
        const doc = allSections.find((doc) => doc.slugAsParams === slug);
        return doc ? { ...doc, link: `/sections/${slug}` } : null;
    } catch (error) {
        console.error("Error fetching component:", error);
        return null;
    }
}

export default async function Blogpage({ params }: { params: Params }) {
    const slug = await params;

    const doc = await getSectionDoc(slug);

    if (!doc) {
        return <div>Component not found.</div>;
    }

    return (
        <>
            <Navbar className="px-4 md:px-10 xl:px-20" />
            <main className="">
                <div className="mx-auto w-full max-w-full border-t-0 border-b px-4 md:px-10 xl:px-20 dark:border-neutral-800 dark:bg-black">
                    <div className="border border-t-0 border-b-0 dark:border-neutral-800">
                        {doc?.body && <Mdx code={doc?.body.code} />}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export async function generateMetadata({
    params,
}: {
    params: Params;
}): Promise<Metadata> {
    const slug = await params;
    const doc = await getSectionDoc(slug);

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

        alternates: {
            canonical: `${BASE_URL}/sections/${slug}`,
        },

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
