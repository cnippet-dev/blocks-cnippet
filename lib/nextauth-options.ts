import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import prisma from "./prisma";
import bcrypt from "bcryptjs";
import { signInWithCredentials } from "./actions/auth.actions";

export const nextauthOptions: NextAuthOptions = {
    secret: process.env.NEXTAUTH_SECRET!,
    pages: {
        signIn: "/signin",
        error: "/error",
    },
    providers: [
        // GoogleProvider({
        //     clientId: process.env.GOOGLE_CLIENT_ID!,
        //     clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        // }),
        // GitHubProvider({
        //     clientId: process.env.GITHUB_CLIENT_ID!,
        //     clientSecret: process.env.GITHUB_CLIENT_SECRET!,
        // }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email", required: true },
                password: {
                    label: "Password",
                    type: "password",
                    required: true,
                },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    return null;
                }

                const result = await signInWithCredentials({
                    email: credentials?.email,
                    password: credentials?.password,
                });

                if (!result.success || !result.data?.id) {
                    return null;
                }

                // Return the user object in the format NextAuth expects
                return {
                    id: result.data.id,
                    name: result.data.name || null,
                    email: result.data.email || null,
                };
            },
        }),
    ],
    callbacks: {
        async jwt({ token }) {
            if (!token.sub) return token;

            const existingUser = await prisma.user.findUnique({
                where: {
                    id: token.sub,
                },
            });

            if (!existingUser) return token;

            return token;
        },

        async session({ token, session }) {
            if (token.sub && session.user) {
                session.user.id = token.sub;
            }

            return session;
        },
    },
};
function GoogleProvider(arg0: { clientId: string; clientSecret: string; }): import("next-auth/providers/index").Provider {
    throw new Error("Function not implemented.");
}

function GitHubProvider(arg0: { clientId: string; clientSecret: string; }): import("next-auth/providers/index").Provider {
    throw new Error("Function not implemented.");
}

