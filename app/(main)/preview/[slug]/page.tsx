import React from "react";
import { Index } from "@/__registry__";
import { ScreenShift } from "../_components/screen-shift";

type Params = Promise<{ slug: string }>;

const PreviewPage = async ({ params }: { params: Params }) => {
    const slug = await params;
    console.log(slug);

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
            <div className="px-10 py-10">
                <ScreenShift name={slug.slug} />
            </div>
        </>
    );
};

export default PreviewPage;
