"use client";

import { Suspense } from "react";
import SectionsPage from "./_components/categories";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";

import ReactLenis from "lenis/react";

const page = () => {
    return (
        <>
            <ReactLenis root>
                <Navbar />
                <Suspense>
                    <SectionsPage />
                </Suspense>
                <Footer />
            </ReactLenis>
        </>
    );
};

export default page;
