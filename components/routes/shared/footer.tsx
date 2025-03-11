import Link from "next/link";
import React from "react";

const Footer = () => {
    return (
        <footer className="border-t border-gray-200 bg-white py-12">
            <div className="mx-auto max-w-7xl px-4">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-6">
                    <div className="col-span-2">
                        <div className="mb-4 flex items-center gap-2">
                            <Link
                                href="/"
                                className="text-xl font-medium text-black"
                            >
                                cnippet
                                <span className="ml-3 font-mono text-sm">
                                    blocks
                                </span>
                            </Link>
                        </div>
                        <p className="mb-4 text-sm text-gray-600">
                            The complete platform for building modern web
                            applications.
                        </p>
                    </div>
                    <div>
                        <h4 className="mb-4 text-sm font-medium">Product</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>
                                <Link href="#">Features</Link>
                            </li>
                            <li>
                                <Link href="#">Pricing</Link>
                            </li>
                            <li>
                                <Link href="#">Templates</Link>
                            </li>
                            <li>
                                <Link href="#">Blocks</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="mb-4 text-sm font-medium">Resources</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>
                                <Link href="#">Documentation</Link>
                            </li>
                            <li>
                                <Link href="#">Guides</Link>
                            </li>
                            <li>
                                <Link href="#">API Reference</Link>
                            </li>
                            <li>
                                <Link href="#">Blog</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="mb-4 text-sm font-medium">Legal</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>
                                <Link href="#">Privacy</Link>
                            </li>
                            <li>
                                <Link href="#">Terms</Link>
                            </li>
                            <li>
                                <Link href="#">Security</Link>
                            </li>
                            <li>
                                <Link href="#">Cookies</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="mb-4 text-sm font-medium">Company</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>
                                <Link href="#">About</Link>
                            </li>
                            <li>
                                <Link href="#">Careers</Link>
                            </li>
                            <li>
                                <Link href="#">Contact</Link>
                            </li>
                            <li>
                                <Link href="#">Partners</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 border-t border-gray-200 pt-8 text-center text-sm text-gray-600">
                    © 2025 Cnippet Labs, Inc. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
