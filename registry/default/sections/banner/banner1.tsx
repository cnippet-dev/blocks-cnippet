"use client";

import { Button } from "@/components/ui/button";
import { X, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Component() {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <div className="w-full border-b border-dashed border-gray-300 bg-gray-50">
            <div className="mx-auto max-w-7xl px-4 py-3">
                <div className="relative flex items-center justify-center">
                    {/* Banner Content */}
                    <div className="flex items-center gap-2 text-sm">
                        <span className="text-gray-700">
                            Echo new feature: AI-driven workspace for law firms.
                        </span>
                        <Button
                            variant="link"
                            className="flex h-auto items-center gap-1 p-0 font-medium text-blue-600 hover:text-blue-700"
                        >
                            Try it now
                            <ArrowRight className="h-4 w-4" />
                        </Button>
                    </div>

                    {/* Close Button */}
                    <Button
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 h-6 w-6 p-0 text-gray-500 hover:bg-gray-200 hover:text-gray-700"
                        onClick={() => setIsVisible(false)}
                    >
                        <X className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </div>
    );
}
