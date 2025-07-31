"use client";

import { Suspense } from "react";
import SectionsPage from "./_components/categories";
import Navbar from "@/components/shared/navbar";

const page = () => {
    return (
        <>
            <Navbar className="px-4 md:px-10 xl:px-8" />
            <Suspense>
                <SectionsPage />
            </Suspense>
        </>
    );
};

export default page;
