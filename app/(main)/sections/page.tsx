"use client";

import { Suspense } from "react";
import SectionsPage from "./_components/categories";
import Navbar from "@/components/shared/navbar";

const page = () => {
    return (
        <>
            <Navbar />
            <Suspense>
                <SectionsPage />
            </Suspense>
        </>
    );
};

export default page;
