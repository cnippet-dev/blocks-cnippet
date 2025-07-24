// components/providers/pro-status-provider.tsx

"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { useSession } from "next-auth/react";

interface ProStatusContextType {
    isPro: boolean;
    isLoading: boolean;
}

// Create a context with a default value.
const ProStatusContext = createContext<ProStatusContextType | undefined>(
    undefined,
);

export const ProStatusProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const { status: sessionStatus } = useSession();
    const [proStatus, setProStatus] = useState<ProStatusContextType>({
        isPro: false,
        isLoading: true,
    });

    useEffect(() => {
        if (sessionStatus === "loading") {
            return; // Wait for the session to be loaded
        }

        if (sessionStatus === "unauthenticated") {
            setProStatus({ isPro: false, isLoading: false });
            return;
        }

        // If authenticated, fetch the pro status once.
        const fetchStatus = async () => {
            try {
                const response = await fetch("/api/pro");
                const data = await response.json();
                setProStatus({ isPro: data.isPro, isLoading: false });
            } catch (error) {
                console.error("Failed to fetch pro status", error);
                setProStatus({ isPro: false, isLoading: false });
            }
        };

        fetchStatus();
    }, [sessionStatus]);

    return (
        <ProStatusContext.Provider value={proStatus}>
            {children}
        </ProStatusContext.Provider>
    );
};

// Custom hook to use the ProStatusContext
export const useProStatusContext = () => {
    const context = useContext(ProStatusContext);
    if (context === undefined) {
        throw new Error(
            "useProStatusContext must be used within a ProStatusProvider",
        );
    }
    return context;
};
