import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const Hero = () => {
    return (
        <section className="py-16 text-center">
            <div className="mx-auto max-w-7xl px-4 py-10 relative">
                <div className="absolute top-0 left-0 -z-20 rounded-2xl w-full h-full bg-blue-600 bg-[url(https://res.cloudinary.com/dpna1cna0/image/upload/v1737200448/67038660a642e394ba5cb748_Backgorund_Shape-4_cogcpa.webp)] bg-cover bg-center"></div>

                <div className="absolute bg-black/5 w-full h-full inset-0 -z-10 rounded-2xl"></div>
                {/* <div className="relative mb-8 overflow-hidden rounded-2xl bg-blue-600 bg-[url(https://res.cloudinary.com/dpna1cna0/image/upload/v1737200448/67038660a642e394ba5cb748_Backgorund_Shape-4_cogcpa.webp)] bg-cover px-8 py-10 text-white"> */}
                    <div className="mb-2 text-sm text-white relative">
                        <span>
                            Blocks & Templates are now free and open source
                        </span>{" "}
                        <span className="text-blue-600">→</span>
                    </div>
                    <h1 className="mb-4 text-4xl font-normal md:text-7xl text-white">
                        Everything you need
                        <br />
                        to build great products
                    </h1>
                    <p className="mx-auto mb-8 max-w-2xl text-xl text-white">
                        Get access to 300+ carefully crafted blocks and every
                        template to build dashboards, apps, and websites even
                        faster.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            href="#"
                            className="inline-flex items-center rounded-md bg-white px-4 py-2 text-base font-medium text-gray-800 hover:text-black"
                        >
                            Explore Blocks
                        </Link>
                        <Link
                            href="#"
                            className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
                        >
                            Explore Templates{" "}
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </div>
                </div>
                {/* <div className="mb-2 text-sm text-gray-600">
                    <span>Blocks & Templates are now free and open source</span>{" "}
                    <span className="text-blue-600">→</span>
                </div>
                <h1 className="mb-4 text-4xl font-medium md:text-7xl">
                    Everything you need
                    <br />
                    to build great products
                </h1>
                <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-600">
                    Get access to 300+ carefully crafted blocks and every
                    template to build dashboards, apps, and websites even
                    faster.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <Link
                        href="#"
                        className="inline-flex items-center rounded-md bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600"
                    >
                        Explore Blocks
                    </Link>
                    <Link
                        href="#"
                        className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                        Explore Templates{" "}
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </div> */}
            {/* </div> */}
        </section>
    );
};

export default Hero;
