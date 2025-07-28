"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { useSession } from "next-auth/react";

interface ProStatusContextType {
    isPro: boolean;
    isLoading: boolean;
}

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
            return;
        }

        if (sessionStatus === "unauthenticated") {
            setProStatus({ isPro: false, isLoading: false });
            return;
        }

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

export const useProStatusContext = () => {
    const context = useContext(ProStatusContext);
    if (context === undefined) {
        throw new Error(
            "useProStatusContext must be used within a ProStatusProvider",
        );
    }
    return context;
};
