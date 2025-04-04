import React from "react";
import Link from "next/link";
import Component from "./blocks/bar-chart-demo";
import Component2 from "./blocks/radial-chart-demo";

const images = [
    "https://res.cloudinary.com/dphulm0s9/image/upload/v1737986668/h1.jpg",
    "https://res.cloudinary.com/dphulm0s9/image/upload/v1737986668/h3.jpg",
    "https://res.cloudinary.com/dphulm0s9/image/upload/v1737986668/h7.jpg",
    "https://res.cloudinary.com/dphulm0s9/image/upload/v1737986668/h8.jpg",
    "https://res.cloudinary.com/dphulm0s9/image/upload/v1737986668/h9.jpg",
    "https://res.cloudinary.com/dphulm0s9/image/upload/v1737986668/h10.jpg",
];

const Components = () => {
    return (
        <section className="dark:bg-black">
            <div className="mx-auto w-full max-w-6xl px-4 md:px-10">
                <div className="grid h-full w-full grid-cols-12 border border-t-0 py-0 dark:border-neutral-800">
                    <div className="col-span-12 bg-white text-center dark:bg-black">
                        <h2 className="mt-16 mb-2 text-2xl leading-tight font-semibold tracking-tight md:text-5xl">
                            Interactive Components Gallery.
                        </h2>
                        <p className="mb-8 px-5 text-sm text-gray-500 md:mb-16 md:text-base">
                            Explore our collection of motion-enhanced UI
                            elements that are ready to use in your projects.
                        </p>
                        <div className="grid grid-cols-1 divide-y border-t md:grid-cols-12 dark:divide-neutral-800 dark:border-neutral-800">
                            <div className="overflow-hidden border-r p-5 md:col-span-7">
                                <Component />
                            </div>
                            <div className="flex items-center border-b justify-center px-5 py-5 md:col-span-5 md:py-0">
                                <Component2 />
                            </div>
                            {/* <div className="p-0 md:col-span-4 md:p-5"></div> */}
                            {/* <div className="flex flex-col items-center justify-center md:col-span-8"></div> */}
                            {/* <div className="flex items-center justify-center border-r px-5 py-5 md:col-span-4 md:py-10"></div> */}
                            {/* <div className="flex items-center justify-center border-r px-5 py-5 md:col-span-4 md:py-10"></div> */}
                            {/* <div className="border-b px-5 py-5 md:col-span-4 md:py-10 dark:border-neutral-800"></div> */}
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <Link
                                href="/"
                                className="group relative w-full overflow-hidden bg-white p-5 dark:bg-black"
                            >
                                <div className="absolute inset-0 w-full -translate-x-[100%] bg-black transition-transform duration-300 group-hover:translate-x-[0%] dark:bg-white" />
                                <h3 className="relative z-10 text-2xl text-slate-950 duration-300 group-hover:text-white dark:text-white dark:group-hover:text-black">
                                    Explore More
                                </h3>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Components;
