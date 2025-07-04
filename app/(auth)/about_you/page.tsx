import React from "react";

import type { Metadata } from "next";
import CompleteSignupPage from "./_components/main";

export const metadata: Metadata = {
    title: "Complete Signup",
    description: "",
};

const ForgotPasswordPage = () => {
    return <CompleteSignupPage />;
};

export default ForgotPasswordPage;
