import React from "react";
import { Index } from "@/__registry__";
import dynamic from "next/dynamic";

// type Params = Promise<{ slug: string }>;

const ScreenShift = dynamic(
    () =>
        import("../_components/screen-shift").then((mod) => ({
            default: mod.ScreenShift,
        })),
    {
        ssr: true,
        loading: () => <div className="h-20 bg-white dark:bg-black" />,
    },
);

const PreviewPage = async ({
    params,
}: {
    params: Promise<{ slug: string }>;
}) => {
    const slug = await params;

    const Preview =
        Index[slug.slug as keyof (typeof Index)]
            ?.component;

    if (!Preview) {
        return (
            <>
                <div>DDDD</div>
            </>
        );
    }

    return (
        <>
            <ScreenShift name={slug.slug} />
        </>
    );
};

export default PreviewPage;
