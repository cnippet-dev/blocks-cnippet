import Link from "next/link";
import React from "react";

const Navbar = () => {
    return (
        <header className="">
            <nav className="w-full border-t border-b border-neutral-200">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-6">
                    <div className="py-4">
                        <div className="hidden items-center justify-between md:flex">
                            <Link
                                href="/"
                                className="text-xl font-medium text-black"
                            >
                                cnippet
                                <span className="font-mono text-sm ml-3">blocks</span>
                            </Link>

                            <div className="flex items-center gap-8 text-sm font-medium">
                                <Link
                                    href="/component/accordion"
                                    className="text-gray-800 transition hover:text-black"
                                >
                                    Components
                                </Link>
                                <Link
                                    href="/motion/accordion"
                                    className="text-gray-800 transition hover:text-black"
                                >
                                    Motions
                                </Link>
                                <Link
                                    href="#"
                                    className="text-gray-800 transition hover:text-black"
                                >
                                    Sections
                                </Link>
                                <Link
                                    href="#"
                                    className="text-gray-800 transition hover:text-black"
                                >
                                    Templates
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
