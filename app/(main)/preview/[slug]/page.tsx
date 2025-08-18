import React from "react";
import dynamic from "next/dynamic";
import { getRegistryComponent, getRegistryItem } from "@/lib/registry";

const getCachedRegistryItem = React.cache(async (name: string) => {
    return await getRegistryItem(name);
});

const ScreenShift = dynamic(
    () =>
        import("../_components/screen-shift").then((mod) => ({
            default: mod.default,
        })),
    {
        ssr: true,
        loading: () => <div className="h-20 bg-white dark:bg-black" />,
    },
);

const PreviewPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params;

    try {
        const [item, Component] = await Promise.all([
            getCachedRegistryItem(slug),
            getRegistryComponent(slug),
        ]);

        if (!item || !Component) {
            return (
                <div className="p-8 text-center">
                    Component not found: {slug}
                </div>
            );
        }

        return (
            <>
                <ScreenShift name={slug} />
            </>
        );
    } catch (error) {
        console.error("Preview loading failed:", error);
        return (
            <div className="p-8 text-center text-red-500">
                Failed to load component preview
            </div>
        );
    }
};

export default PreviewPage;
