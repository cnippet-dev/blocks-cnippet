"use client";

import dynamic from "next/dynamic";

const Mdx = dynamic(
    () => import("@/mdx-components").then((mod) => mod.Mdx),
    {
        ssr: false,
    }
);

export default function MdxContent({ code }: { code: string }) {
    return <Mdx code={code} />;
}