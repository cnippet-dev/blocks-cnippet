import React from "react";
import { ForgotPassword } from "./_components/main";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Forgot Password",
    description: "",
};

const ForgotPasswordPage = () => {
    return <ForgotPassword />;
};

export default ForgotPasswordPage;
