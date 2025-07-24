// // lib/hooks/use-pro-status.ts

// import * as React from "react";
// import { useSession } from "next-auth/react";

// interface ProStatus {
//     isPro: boolean;
//     isLoading: boolean;
// }

// export function useProStatus(): ProStatus {
//     const { status } = useSession();
//     const [proStatus, setProStatus] = React.useState<ProStatus>({
//         isPro: false,
//         isLoading: true,
//     });

//     React.useEffect(() => {
//         if (status === "loading") {
//             return; // Wait for session to load
//         }

//         if (status === "unauthenticated") {
//             setProStatus({ isPro: false, isLoading: false });
//             return;
//         }

//         // status === "authenticated"
//         const fetchProStatus = async () => {
//             try {
//                 const response = await fetch("/api/pro");
//                 if (!response.ok) {
//                     throw new Error("Failed to fetch pro status");
//                 }
//                 const data = await response.json();
//                 setProStatus({ isPro: data.isPro, isLoading: false });
//             } catch (error) {
//                 console.error(error);
//                 setProStatus({ isPro: false, isLoading: false });
//             }
//         };

//         fetchProStatus();
//     }, [status]);

//     return proStatus;
// }

// lib/hooks/use-pro-status.ts

// REMOVE the old code and REPLACE it with this:
import { useProStatusContext } from "@/providers/pro-status-provider";

export function useProStatus() {
    // This hook now simply returns the shared state from the context.
    return useProStatusContext();
}
