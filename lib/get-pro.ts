import { useEffect, useState } from "react";

interface FetchProResponse {
    pro: boolean | null;
    loading: boolean;
}

const FetchPro = (email: string | null | undefined): FetchProResponse => {
    const [pro, setPro] = useState<boolean | null>(null);

    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        async function fetchPro() {
            if (!email) return;

            const storedPro = sessionStorage.getItem("pro");

            if (storedPro === "true") {
                setPro(true);
                setLoading(false);
                return;
            }

            try {
                const data = { email };
                const result = await fetch("/api/pro", {
                    method: "POST",
                    body: JSON.stringify(data),
                    headers: { "Content-Type": "application/json" },
                });
                const res = await result.json();

                if (res.pro === "true") {
                    sessionStorage.setItem("pro", res.pro);
                    setPro(true);
                } else {
                    sessionStorage.setItem("pro", res.pro);
                    setPro(false);
                }
            } catch (error) {
                console.error("Error fetching pro data:", error);
            }
        }

        fetchPro();

        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, [email]);

    return { pro, loading };
};

export default FetchPro;
