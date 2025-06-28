import { RiArrowRightLine } from "@remixicon/react";
import React from "react";

const Cta = () => {
    return (
        <>
            <section className="mx-auto w-full max-w-[1536px] border-t-0 border-b bg-blue-700 pl-30 text-white">
                <div className="grid grid-cols-6 divide-x">
                    <div className="col-span-5 py-28">
                        <h2 className="text-2xl leading-tight font-medium tracking-tight md:text-5xl">
                            Ready to Build Your Next Project?
                        </h2>
                        <p className="mt-4 text-gray-100">
                            Explore our complete ecosystem: UI components for
                            custom interfaces, website templates for quick
                            deployment, and comprehensive guides for advanced
                            implementation. Everything you need to succeed in
                            web development.
                        </p>
                    </div>
                    <div className="col-span-1 flex items-center justify-center bg-white">
                        <RiArrowRightLine className="text-blue-800" size={60} />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Cta;
