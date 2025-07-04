import { Suspense } from "react";
import { ResetPassword } from "./_components/main";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Reset Password",
    description: "",
};

export default function ResetPasswordPage() {
    return (
        <Suspense>
            <ResetPassword />
        </Suspense>
    );
}
