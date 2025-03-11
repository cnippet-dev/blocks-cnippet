"use client";
import React from "react";
import { ComponentProps } from "@/types/global";
import Link from "next/link";
import { Index } from "@/__registry__";

import { MoveRight } from "lucide-react";
import Image from "next/image";
import { useConfig } from "@/lib/use-config";

interface Section {
    name: string;
    slug: string;
    thumbnail: string;
}
const Sections: React.FC<ComponentsProps> = (props) => {
    const { header, description } = {
        ...ComponentsDefaults,
        ...props,
    };

    const [config] = useConfig();

    // select all the components from the registry
    const components = Object.values(Index.default).filter(
        (item: any): item is Section => item.type === "registry:section",
    );

    return (
        <section className="relative overflow-hidden py-20 font-sans">
            <div className="mx-auto my-auto h-full w-full max-w-full px-5 md:max-w-7xl md:px-0">
                <div className="flex h-full flex-col items-center gap-0">
                    <div
                        className={`flex w-full justify-between gap-5 md:gap-0`}
                    >
                        <h2 className="font-ins text-4xl font-medium md:text-5xl">
                            {header?.split(" ").map((item, i) => (
                                <span
                                    key={i}
                                    className={`${i === 1 ? "text-blue-600" : ""}`}
                                >
                                    {item}{" "}
                                </span>
                            ))}
                        </h2>
                        {props.count <= 4 ? (
                            <Link
                                href="/sections"
                                className="mt-auto flex items-center gap-2 hover:text-blue-700"
                            >
                                Explore more sections
                                <MoveRight className="size-4" />
                            </Link>
                        ) : (
                            <p className="mt-auto max-w-md text-right text-neutral-700">
                                {description}
                            </p>
                        )}
                    </div>
                    <div className="mt-10 grid w-full items-center justify-center gap-10 font-medium md:grid-cols-4">
                        {components
                            ?.slice(0, props.count)
                            .map((component, i) => (
                                <div key={i} className="relative w-full">
                                    {/* <Image
                                        src={component.thumbnail.src}
                                        alt={component.thumbnail.alt}
                                        width={1080}
                                        height={680}
                                        className="w-full rounded-xl ring-1 ring-gray-200"
                                    /> */}
                                    <Image
                                        width="960"
                                        height="600"
                                        src={`https://res.cloudinary.com/dphulm0s9/image/upload/v1737836551/${component.name.split("-")[0]}.png`}
                                        sizes="100vw"
                                        alt="Description of my image"
                                        className="w-full rounded-xl border"
                                    />

                                    <div className="mt-5">
                                        <Link
                                            href={component.slug}
                                            className="capitalize text-black/80 dark:text-dawn-100"
                                        >
                                            {component.name}
                                            <span className="absolute inset-0"></span>
                                        </Link>
                                        <p className="text-sm text-gray-400">
                                            3 components
                                        </p>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sections;

type ComponentsProps = React.ComponentPropsWithoutRef<"section"> &
    Partial<ComponentProps> & {
        count: number;
    };

const ComponentsDefaults: ComponentProps = {
    header: "All-in-one Sections",
    description:
        " Copy paste the most trending components and use them in your websites without having to worry about styling and animations.",
};
