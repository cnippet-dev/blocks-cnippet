import * as React from "react";
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
