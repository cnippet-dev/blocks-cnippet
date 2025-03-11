import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
    return (
        <header className="border-b border-gray-200 bg-white">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <div className="flex items-center gap-2">
                    <Image
                        src="/images/logo-light.png"
                        alt=""
                        className="size-9"
                        width={1320}
                        height={1320}
                    />
                    <Link href="/" className="text-2xl font-medium text-black">
                        Cnippet
                    </Link>
                </div>
                <nav className="hidden items-center space-x-6 md:flex">
                    <Link
                        href="#"
                        className="text-sm text-gray-600 hover:text-gray-900"
                    >
                        Pricing
                    </Link>
                    <Link
                        href="#"
                        className="text-sm text-gray-600 hover:text-gray-900"
                    >
                        Templates
                    </Link>
                    <Link
                        href="#"
                        className="text-sm text-gray-600 hover:text-gray-900"
                    >
                        Getting Started
                    </Link>
                </nav>
                <div className="flex items-center gap-4">
                    <Link
                        href="#"
                        className="text-sm text-gray-600 hover:text-gray-900"
                    >
                        Sign In
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
