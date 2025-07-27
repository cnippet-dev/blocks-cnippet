import React from "react";
import { Index } from "@/__registry__";

type Params = Promise<{ slug: string }>;

const PreviewPage = async ({ params }: { params: Params }) => {
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
            <section>
                <React.Suspense
                    fallback={
                        <div className="text-muted-foreground flex items-center text-sm">
                            Loading...
                        </div>
                    }
                >
                    <div className="overflow-col-span-2 row-start-2 mx-auto min-w-0">
                        <div className={`overflow-y-auto bg-white`}>
                            <Preview />
                        </div>
                    </div>
                </React.Suspense>
            </section>
        </>
    );
};

export default PreviewPage;
