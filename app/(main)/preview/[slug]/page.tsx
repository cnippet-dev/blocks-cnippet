import React from "react";
import { Index } from "@/__registry__";
import { ScreenShift } from "../_components/screen-shift";

// type Params = Promise<{ slug: string }>;

const PreviewPage = async ({
    params,
}: {
    params: Promise<{ slug: string }>;
}) => {
    const slug = await params;

    const Preview =
        Index["default"][slug.slug as keyof (typeof Index)["default"]]
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
