import React from "react";
import { redirect } from "next/navigation";

import { getUserSession } from "@/lib/actions/auth.actions";
import Navbar from "@/components/routes/shared/navbar";

const layout = async ({ children }: { children: React.ReactNode }) => {
    const { session } = await getUserSession();
    if (!session) {
        redirect("/signin");
    }
    return (
        <>
            <Navbar />
            {children}
        </>
    );
};

export default layout;
