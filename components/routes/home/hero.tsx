// import { ArrowRight } from "lucide-react";
// import Link from "next/link";
// import React from "react";

// const Hero = () => {
//     return (
//         <section className="py-16 text-center">
//             <div className="relative mx-auto max-w-7xl px-4 py-10">
//                 <div className="absolute top-0 left-0 -z-20 h-full w-full rounded-2xl bg-blue-600 bg-[url(https://res.cloudinary.com/dpna1cna0/image/upload/v1737200448/67038660a642e394ba5cb748_Backgorund_Shape-4_cogcpa.webp)] bg-cover bg-center"></div>

//                 <div className="absolute inset-0 -z-10 h-full w-full rounded-2xl bg-black/5"></div>
//                 {/* <div className="relative mb-8 overflow-hidden rounded-2xl bg-blue-600 bg-[url(https://res.cloudinary.com/dpna1cna0/image/upload/v1737200448/67038660a642e394ba5cb748_Backgorund_Shape-4_cogcpa.webp)] bg-cover px-8 py-10 text-white"> */}
//                 <div className="relative mb-2 text-sm text-white">
//                     <span>Blocks & Templates are now free and open source</span>{" "}
//                     <span className="text-blue-600">→</span>
//                 </div>
//                 <h1 className="mb-4 text-4xl font-normal text-white md:text-7xl">
//                     Everything you need
//                     <br />
//                     to build great products
//                 </h1>
//                 <p className="mx-auto mb-8 max-w-2xl text-xl text-white">
//                     Get access to 300+ carefully crafted blocks and every
//                     template to build dashboards, apps, and websites even
//                     faster.
//                 </p>
//                 <div className="flex flex-wrap justify-center gap-4">
//                     <Link
//                         href="#"
//                         className="inline-flex items-center rounded-md bg-white px-4 py-2 text-base font-medium text-gray-800 hover:text-black"
//                     >
//                         Explore Blocks
//                     </Link>
//                     <Link
//                         href="#"
//                         className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
//                     >
//                         Explore Templates{" "}
//                         <ArrowRight className="ml-2 h-4 w-4" />
//                     </Link>
//                 </div>
//             </div>
//             {/* <div className="mb-2 text-sm text-gray-600">
//                     <span>Blocks & Templates are now free and open source</span>{" "}
//                     <span className="text-blue-600">→</span>
//                 </div>
//                 <h1 className="mb-4 text-4xl font-medium md:text-7xl">
//                     Everything you need
//                     <br />
//                     to build great products
//                 </h1>
//                 <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-600">
//                     Get access to 300+ carefully crafted blocks and every
//                     template to build dashboards, apps, and websites even
//                     faster.
//                 </p>
//                 <div className="flex flex-wrap justify-center gap-4">
//                     <Link
//                         href="#"
//                         className="inline-flex items-center rounded-md bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600"
//                     >
//                         Explore Blocks
//                     </Link>
//                     <Link
//                         href="#"
//                         className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
//                     >
//                         Explore Templates{" "}
//                         <ArrowRight className="ml-2 h-4 w-4" />
//                     </Link>
//                 </div> */}
//             {/* </div> */}
//         </section>
//     );
// };

// export default Hero;

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Hero = () => {
    return (
        <section className="relative w-full dark:bg-black">
            <div className="mx-auto w-full max-w-6xl px-4 pt-16 md:px-10 md:pt-24">
                <div className="relative">
                    <div className="absolute -top-2.5 -left-2.5 z-40 mx-auto grid size-5.5 grid-cols-2 grid-rows-2 divide-x divide-y divide-neutral-500">
                        <div className=" " />
                        <div className="border-r-0" />
                        <div className="border-b-0" />
                        <div className=" " />
                    </div>
                    <div className="relative grid h-[6rem] w-full grid-cols-8 grid-rows-1 divide-x divide-y border-t first:border-l md:h-[5.5rem] md:grid-cols-12 dark:divide-neutral-800 dark:border-neutral-800">
                        <div className="col-span-1 border-l" />
                        <div className="col-span-1" />
                        <div className="col-span-1" />
                        <div className="col-span-1" />
                        <div className="col-span-1" />
                        <div className="col-span-1" />
                        <div className="col-span-1" />
                        <div className="col-span-1" />
                        <div className="col-span-1" />
                        <div className="col-span-1" />
                        
                        <div className="col-span-1" />
                        <div className="col-span-1 bg-rose-500" />
                    </div>

                    <div className="relative w-full">
                        <div className="grid w-full grid-cols-8 grid-rows-3 md:grid-cols-12 dark:border-neutral-800">
                            <div className="col-span-1 row-span-3 grid grid-cols-1 grid-rows-2 divide-x divide-y border-l md:col-span-1 md:grid-cols-1 md:grid-rows-4 dark:divide-neutral-800 dark:border-neutral-800">
                                <div className=""></div>
                                <div></div>
                                <div className="hidden md:block"></div>
                                <div className="hidden md:block"></div>
                                <div className="hidden md:block"></div>
                            </div>
                            <div className="col-span-6 row-span-3 flex flex-col items-center justify-center border-r border-b bg-white px-10 py-5 text-center md:col-span-10 md:py-16 dark:border-neutral-800 dark:bg-black">
                                <h1 className="mt-4 text-2xl leading-tight font-semibold tracking-tight md:mt-0 md:text-5xl dark:text-neutral-50">
                                    Build your{" "}
                                    <span className="text-violet-700">
                                        next idea
                                    </span>{" "}
                                    even faster with ready-made{" "}
                                    <span className="text-blue-700">
                                        blocks & templates
                                    </span>
                                    .
                                </h1>
                                <p className="mt-4 px-10 text-sm leading-normal md:mt-2 md:text-lg">
                                    <span className="text-gray-500">
                                        Say goodbye to complexity and
                                        time-consuming design processes.
                                    </span>{" "}
                                    <span className="font-medium">
                                        With our 111+ pre-designed blocks and
                                        templates,
                                    </span>{" "}
                                    <span className="text-gray-500">
                                        you can effortlessly create stunning,
                                        professional-grade layouts that save
                                        time and elevate the quality of your
                                        projects.
                                    </span>
                                </p>
                                <div className="mt-4 space-y-2 md:space-y-0 md:space-x-3">
                                    <Button className="rounded-full">
                                        Explore Blocks
                                    </Button>
                                    <Button
                                        variant="outline"
                                        className="rounded-full"
                                    >
                                        Get Templates
                                    </Button>
                                </div>
                            </div>
                            <div className="col-span-1 row-span-3 grid grid-cols-1 grid-rows-2 divide-x divide-y md:col-span-1 md:grid-cols-1 md:grid-rows-4 dark:divide-neutral-800">
                                <div></div>
                                <div></div>
                                <div className="hidden md:block"></div>
                                <div className="hidden border-r border-b md:block"></div>
                            </div>
                        </div>
                    </div>

                    <div className="relative grid h-[6rem] w-full grid-cols-8 grid-rows-2 divide-x divide-y md:h-[11rem] md:grid-cols-12 dark:divide-neutral-800 dark:border-neutral-800">
                        
                        <div className="col-span-1 border-l bg-violet-600" />
                        <div className="col-span-1" />
                        <div className="col-span-1" />
                        <div className="col-span-1" />
                        <div className="col-span-1" />
                        <div className="col-span-1" />
                        <div className="col-span-1" />
                        <div className="col-span-1" />
                        <div className="col-span-1" />
                        <div className="col-span-1" />
                        <div className="col-span-1" />
                        <div className="col-span-1" />
                        <div className="col-span-1 border-l bg-violet-600" />
                        <div className="col-span-1 bg-violet-600" />
                        <div className="col-span-1" />
                        <div className="col-span-1" />
                        <div className="col-span-1" />
                        <div className="col-span-1" />
                        <div className="col-span-1" />
                        <div className="col-span-1" />
                        <div className="col-span-1" />
                        <div className="col-span-1" />
                        <div className="col-span-1" />
                        <div className="col-span-1" />
                        <div className="col-span-1" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
