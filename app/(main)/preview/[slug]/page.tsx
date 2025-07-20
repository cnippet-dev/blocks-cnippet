import React from "react";
import { Index } from "@/__registry__";
import { Metadata } from "next";

type Params = Promise<{ slug: string }>;

const PreviewPage = async ({ params }: { params: Params }) => {
    const slug = await params;
    console.log(slug);

    const Preview = Index["default"][slug.slug as keyof typeof Index["default"]]?.component;

    // If Preview is a valid component, render it using React.Suspense
    if (!Preview) {
        return (
            <>
            <div>DDDD</div>
            </>
        );
    }

    return (
        <>
            <section>
                <React.Suspense
                    fallback={
                        <div className="flex items-center text-sm text-muted-foreground">
                            Loading...
                        </div>
                    }
                >
                    <div className="overflow-col-span-2 row-start-2 mx-auto min-w-0">
                        <div
                            className={`overflow-y-auto break-words bg-white font-ins font-medium`}
                        >
                            {/* Render the component */}
                            <Preview />
                        </div>
                    </div>
                </React.Suspense>
            </section>
        </>
    );
};

export default PreviewPage;