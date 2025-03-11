import React from "react";
import { Metadata } from "next";

import Sections from "@/components/routes/shared/layout/all-sections";

const page = () => {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Webpage",
        name: "Components - cnippet/ui",
        url: "https://ui.cnippet.site/sections",
        description:
            "An extensive collection of copy-and-paste components for quickly building app UIs. Free, open-source, and ready to drop into your projects..",
        image: `${baseUrl}/images/og/site.png`,

        publisher: {
            "@type": "Organization",
            name: "Cnippet",
            url: "https://ui.cnippet.site",
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(structuredData),
                }}
            />

            <Sections count={15} />
        </>
    );
};

export default page;

const baseUrl = process.env.NEXT_PUBLIC_URL
    ? process.env.NEXT_PUBLIC_URL
    : "http://localhost:3000";

export const metadata: Metadata = {
    metadataBase: new URL(baseUrl),

    title: "Sections",
    description:
        "An extensive collection of copy-and-paste components for quickly building app UIs. Free, open-source, and ready to drop into your projects..",
    robots: "index, follow",

    applicationName: "Cnippet Ui",

    alternates: {
        canonical: `${baseUrl}/sections`,
        languages: {
            en: [
                {
                    url: `${baseUrl}/sections`,
                },
            ],
        },
        types: {
            url: `${baseUrl}/sections`,
        },
    },

    openGraph: {
        title: "Sections - cnippet/ui",
        description:
            "An extensive collection of copy-and-paste components for quickly building app UIs. Free, open-source, and ready to drop into your projects..",
        url: "https://ui.cnippet.site/sections",
        images: ["/images/og/site.png"],
        siteName: "Cnippet Ui",
    },

    twitter: {
        card: "summary_large_image",
        title: "Sections - cnippet/ui",
        description:
            "An extensive collection of copy-and-paste components for quickly building app UIs. Free, open-source, and ready to drop into your projects..",
        images: ["/images/og/site.png"],
    },
};
