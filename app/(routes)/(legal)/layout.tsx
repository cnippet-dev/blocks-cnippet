"use client";

import { ReactNode } from "react";
import dynamic from "next/dynamic";

interface ProfileLayoutProps {
    children: ReactNode;
}

const Navbar = dynamic(() => import("@/components/shared/navbar/nav-1"));
const Footer = dynamic(() => import("@/components/shared/footer"));

export default function ProfileLayout({ children }: ProfileLayoutProps) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}
