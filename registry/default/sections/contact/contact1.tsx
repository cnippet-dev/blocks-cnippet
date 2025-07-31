"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Zap } from "lucide-react";

export default function Component() {
    return (
        <div className="mx-auto w-full max-w-4xl px-4 py-16">
            <div className="mb-8 flex justify-center">
                <Badge
                    variant="outline"
                    className="flex items-center gap-2 border-gray-200 bg-white px-4 py-2 text-sm"
                >
                    <Zap className="h-4 w-4 text-yellow-500" />
                    Real Feedback
                </Badge>
            </div>

            <div className="mb-4 text-center">
                <h1 className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
                    Feel free to send our
                    <br />
                    friendly team a message
                </h1>
            </div>

            <div className="mb-12 text-center">
                <p className="text-lg text-gray-600">
                    Real stories from teams transforming workflows with Beam.
                </p>
            </div>

            <form className="flex flex-col gap-6">
                <div className="grid gap-6 md:grid-cols-2">
                    <div className="grid gap-3">
                        <Label htmlFor="firstName">
                            Your Name <span className="text-red-500">*</span>
                        </Label>
                        <Input
                            id="firstName"
                            placeholder="John"
                            className="py-5"
                        />
                    </div>
                    <div className="grid gap-3">
                        <Label htmlFor="lastName">
                            Last Name <span className="text-red-500">*</span>
                        </Label>
                        <Input
                            id="lastName"
                            placeholder="Doe"
                            className="py-5"
                        />
                    </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    <div className="grid gap-3">
                        <Label htmlFor="email">
                            Email <span className="text-red-500">*</span>
                        </Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="beam@connect.com"
                            className="py-5"
                        />
                    </div>
                    <div className="grid gap-3">
                        <Label htmlFor="phone">
                            Phone Number <span className="text-red-500">*</span>
                        </Label>
                        <Input
                            id="phone"
                            type="tel"
                            placeholder="(555) 000-0000"
                            className="py-5"
                        />
                    </div>
                </div>

                <div className="grid gap-3">
                    <Label htmlFor="message">
                        How can we help? <span className="text-red-500">*</span>
                    </Label>
                    <Textarea
                        id="message"
                        placeholder="Write your message here..."
                        className="min-h-[120px] resize-none py-5"
                    />
                </div>

                <div className="flex items-center gap-2">
                    <Checkbox id="privacy" />
                    <Label htmlFor="privacy" className="cursor-pointer text-sm">
                        I Agree to the privacy policy
                    </Label>
                </div>

                <div className="flex flex-col gap-4 pt-4 md:flex-row md:items-center md:justify-between">
                    <p className="text-sm text-gray-600">
                        By submitting, I acknowledge that I have read and agree
                        to the{" "}
                        <a
                            href="#"
                            className="text-gray-900 underline hover:no-underline"
                        >
                            Privacy Policy.
                        </a>
                    </p>
                    <Button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 md:w-auto"
                    >
                        Submit Form
                    </Button>
                </div>
            </form>
        </div>
    );
}
