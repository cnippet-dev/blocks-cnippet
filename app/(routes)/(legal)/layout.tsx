"use client";
import Navbar from "@/components/shared/navbar/nav-1";
import { ReactNode } from "react";

interface ProfileLayoutProps {
    children: ReactNode;
}

export default function ProfileLayout({ children }: ProfileLayoutProps) {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
}
