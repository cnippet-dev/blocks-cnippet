import React from "react";
import { Metadata } from "next";

import { Mdx } from "@/mdx-components";

import { allSections } from "@/.content-collections/generated";

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
        <main className="mt-5 md:mt-0">
            <div className="font-ins font-medium">
                <div className="section mx-auto w-full px-5 pt-10 md:max-w-[95%] md:px-0">
                    {doc?.body && <Mdx code={doc?.body.code} />}
                </div>
            </div>
        </main>
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
