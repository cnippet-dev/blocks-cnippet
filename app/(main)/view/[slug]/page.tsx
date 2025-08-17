// import React from "react";
// import { Index } from "@/__registry__";

// type Params = Promise<{ slug: string }>;

// const PreviewPage = async ({ params }: { params: Params }) => {
//     const slug = await params;

//     const Preview =
//         Index[slug.slug as keyof (typeof Index)]
//             ?.component;

//     if (!Preview) {
//         return (
//             <>
//                 <div>DDDD</div>
//             </>
//         );
//     }

//     return (
//         <>
//             <section>
//                 <React.Suspense
//                     fallback={
//                         <div className="text-muted-foreground flex items-center text-sm">
//                             Loading...
//                         </div>
//                     }
//                 >
//                     <div className="overflow-col-span-2 row-start-2 mx-auto min-w-0">
//                         <div className={`overflow-y-auto bg-white`}>
//                             <Preview />
//                         </div>
//                     </div>
//                 </React.Suspense>
//             </section>
//         </>
//     );
// };

// export default PreviewPage;

import * as React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { registryItemSchema } from "@/registry/schema";
import { z } from "zod";

import { getRegistryComponent, getRegistryItem } from "@/lib/registry";
import { cn } from "@/lib/utils";

export const revalidate = false;
export const dynamic = "force-static";
export const dynamicParams = false;

const getCachedRegistryItem = React.cache(async (name: string) => {
    return await getRegistryItem(name);
});

export async function generateStaticParams() {
    const { Index } = await import("@/__registry__/index");
    const index = z.record(z.string(), registryItemSchema).parse(Index);

    return Object.values(index)
        .filter((block) =>
            [
                "registry:block",
                "registry:component",
                "registry:example",
                "registry:internal",
            ].includes(block.type),
        )
        .map((block) => ({
            name: block.name,
        }));
}

export default async function BlockPage({
    params,
}: {
    params: Promise<{
        slug: string;
    }>;
}) {
    const { slug } = await params;
    const item = await getCachedRegistryItem(slug);
    const Component = getRegistryComponent(slug);

    if (!item || !Component) {
        return notFound();
    }

    return (
        <>
            <div className={cn("bg-background", item.meta?.container)}>
                <Component />
            </div>
        </>
    );
}
