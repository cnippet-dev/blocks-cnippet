import type { Metadata } from "next";

import SignInForm from "@/components/shared/form/sign-in";

export const metadata: Metadata = {
    title: "Sign In",
    description: "",
};

const page = () => {
    return <SignInForm />;
};

export default page;
