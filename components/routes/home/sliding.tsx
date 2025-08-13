import { useRef } from "react";
import Image from "next/image";
import { useScroll, useTransform, motion } from "motion/react";
import { RiBardFill } from "@remixicon/react";

type SliderItem = {
    color: string;
    src: string;
};

const slider1: SliderItem[] = [
    {
        color: "#e3e5e7",
        src: "https://res.cloudinary.com/dcxm3ccir/image/upload/v1753946156/hero-4.png",
    },
    {
        color: "#d6d7dc",
        src: "https://res.cloudinary.com/dcxm3ccir/image/upload/v1753946156/pricing-3.png",
    },
    {
        color: "#e3e3e3",
        src: "https://res.cloudinary.com/dcxm3ccir/image/upload/v1753946156/pricing-5.png",
    },
    {
        color: "#21242b",
        src: "https://res.cloudinary.com/dcxm3ccir/image/upload/v1753946156/hero-3.png",
    },
    {
        color: "#21242b",
        src: "https://res.cloudinary.com/dcxm3ccir/image/upload/v1753946156/blog-5.png",
    },
];

const slider2: SliderItem[] = [
    {
        color: "#d4e3ec",
        src: "https://res.cloudinary.com/dcxm3ccir/image/upload/v1753946156/contact-1.png",
    },
    {
        color: "#e5e0e1",
        src: "https://res.cloudinary.com/dcxm3ccir/image/upload/v1753946156/login-3.png",
    },
    {
        color: "#d7d4cf",
        src: "https://res.cloudinary.com/dcxm3ccir/image/upload/v1753946156/login-2.png",
    },
    {
        color: "#e1dad6",
        src: "https://res.cloudinary.com/dcxm3ccir/image/upload/v1753946156/hero-5.png",
    },
    {
        color: "#e1dad6",
        src: "https://res.cloudinary.com/dcxm3ccir/image/upload/v1753946156/contact-1.png",
    },
];

export default function SlidingImages() {
    const container = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"],
    });

    const x1 = useTransform(scrollYProgress, [0, 1], [0, 450]);
    const x2 = useTransform(scrollYProgress, [0, 1], [0, -450]);

    return (
        <div ref={container} className="relative pb-20">
            <div className="pointer-events-none absolute top-0 bottom-0 left-0 z-20 flex w-full overflow-visible">
                <div
                    className="absolute top-20 left-0 z-0 h-[1px] w-full flex-auto overflow-hidden border-t border-dashed border-gray-200 dark:border-neutral-700"
                    data-border="true"
                    data-framer-name="Top divider"
                ></div>

                <div
                    className="absolute top-0 left-1/2 z-0 h-full w-full max-w-7xl flex-auto -translate-x-1/2 overflow-visible"
                    data-framer-name="Vertical lines"
                >
                    <div
                        className="absolute right-0 bottom-0 z-0 h-full w-[1px] border-r border-dashed border-gray-200 dark:border-neutral-700"
                        data-border="true"
                        data-framer-name="Right line"
                    >
                        <div
                            className="cnippet-dot"
                            data-border="true"
                            data-framer-name="Ellipsis"
                        ></div>
                    </div>
                    <div
                        className="absolute bottom-0 left-0 z-0 h-full w-[1px] border-r border-dashed border-gray-200 dark:border-neutral-700"
                        data-border="true"
                        data-framer-name="Left line"
                    >
                        <div
                            className="cnippet-dot"
                            data-border="true"
                            data-framer-name="Ellipsis"
                        ></div>
                    </div>
                </div>
            </div>

            <div className="relative z-1 mx-auto flex max-w-7xl flex-col gap-[3vw] overflow-hidden">
                <div className="mt-32 max-w-7xl px-10">
                    <div className="mb-16 space-y-4">
                        <div className="flex w-fit items-center justify-start gap-1 rounded-full border px-3 py-1 text-xs">
                            <RiBardFill className="size-3 text-blue-500" />
                            <p>Made with Cnippet UI</p>
                        </div>

                        <motion.h1 className="text-4xl font-semibold tracking-tight text-black md:text-4xl dark:text-white">
                            Build your next project with Cnippet Blocks
                        </motion.h1>

                        <motion.p
                            className="max-w-md text-sm text-gray-600 dark:text-gray-400"
                            transition={{ delay: 0.2 }}
                        >
                            The perfect starting point for your next web
                            application or website.
                        </motion.p>
                    </div>
                </div>

                <div className="relative">
                    <div className="dark:from-background absolute top-0 left-0 z-10 h-full w-40 bg-gradient-to-r from-white" />
                    <div className="dark:from-background absolute top-0 right-0 z-10 h-full w-40 bg-gradient-to-l from-white" />

                    <motion.div
                        style={{ x: x1 }}
                        className="relative left-[-60vw] flex w-[130vw] gap-[3vw]"
                    >
                        {slider1.map((project, index) => (
                            <div
                                key={index}
                                className="flex h-[16vw] w-[50%] items-center justify-center rounded-2xl bg-gray-50 dark:bg-neutral-800"
                            >
                                <div className="relative h-[90%] w-[90%]">
                                    <Image
                                        fill
                                        alt="slider image"
                                        src={`${project.src}`}
                                        className="aspect-video rounded-xl object-cover shadow-md"
                                    />
                                </div>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div
                        style={{ x: x2 }}
                        className="relative left-[-10vw] mt-16 flex w-[130vw] gap-[3vw]"
                    >
                        {slider2.map((project, index) => (
                            <div
                                key={index}
                                className="flex h-[16vw] w-[50%] items-center justify-center rounded-2xl bg-gray-50 dark:bg-neutral-800"
                            >
                                <div className="relative h-[90%] w-[90%]">
                                    <Image
                                        fill
                                        alt="slider image"
                                        src={`${project.src}`}
                                        className="aspect-video rounded-xl object-cover shadow-md"
                                    />
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
