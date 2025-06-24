// app/sign-up/page.tsx
"use client";

import { useState } from "react";
import SignUpStep1Form from "./_components/SignUpStep1Form";
import SignUpStep2Form from "./_components/SignUpStep2Form";
import EmailVerificationForm from "./_components/SignUpStep3Form";
import { Separator } from "@/components/ui/separator"; // Shadcn UI
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"; // Shadcn UI
import { toast } from "sonner"; // For toasts

export default function SignUpPage() {
    const [step, setStep] = useState(1);
    const [emailForVerification, setEmailForVerification] = useState("");

    const handleStep1Submit = async (data: {
        email: string;
        username: string;
        name: string;
        acceptTerms: boolean;
    }) => {
        // In a real app, you'd likely temporarily store data for step 2 or send it to server for temp storage
        // For this example, we'll just store the email to pass to step 2 and verification.
        setEmailForVerification(data.email);
        setStep(2);
    };

    const handleStep2Submit = async (success: boolean, message: string) => {
        if (success) {
            toast.success(message);
            setStep(3);
        } else {
            toast.error(message);
        }
    };

    const handleEmailVerificationSubmit = async (
        success: boolean,
        message: string,
    ) => {
        if (success) {
            toast.success(message);
            // Redirect to sign-in page after successful verification
            window.location.href = "/sign-in";
        } else {
            toast.error(message);
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center">
            <Card className="w-[400px]">
                <CardHeader>
                    <CardTitle>Sign Up</CardTitle>
                    <CardDescription>
                        {step === 1 && "Step 1: Your Basic Information"}
                        {step === 2 && "Step 2: Set Your Password"}
                        {step === 3 && "Step 3: Verify Your Email"}
                    </CardDescription>
                    <Separator className="mt-2" />
                </CardHeader>
                <CardContent>
                    {step === 1 && (
                        <SignUpStep1Form onSubmit={handleStep1Submit} />
                    )}
                    {step === 2 && (
                        <SignUpStep2Form
                            email={emailForVerification}
                            onSubmit={handleStep2Submit}
                        />
                    )}
                    {step === 3 && (
                        <EmailVerificationForm
                            email={emailForVerification}
                            onSubmit={handleEmailVerificationSubmit}
                        />
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
