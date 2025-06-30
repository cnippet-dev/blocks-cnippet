import dynamic from "next/dynamic";

const SignUpForm = dynamic(() => import("@/components/shared/form/sign-up"));

export default function SignUp() {
    return (
        <>
            <SignUpForm />
        </>
    );
}
