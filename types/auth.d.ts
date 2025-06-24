// types/auth.d.ts
import { DefaultSession } from "next-auth";

declare module "next-auth" {
    interface Session {
        user: {
            id: string;
            username?: string | null;
            termsAccepted?: boolean;
        } & DefaultSession["user"];
    }

    interface User {
        username?: string | null;
        termsAccepted?: boolean;
    }
}

declare module "@auth/core/jwt" {
    interface JWT {
        username?: string | null;
        termsAccepted?: boolean;
    }
}
