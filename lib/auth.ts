// auth.ts
import NextAuth, { NextAuthOptions } from "next-auth";
import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { loginSchema } from "@/lib/validations/auth";

const prisma = new PrismaClient();

// export const {
//     handlers: { GET, POST },
//     auth,
//     signIn,
//     signOut,
// } = NextAuth({
//     adapter: PrismaAdapter(prisma),
//     providers: [
//         Google({
//             clientId: process.env.GOOGLE_CLIENT_ID!,
//             clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//         }),
//         GitHub({
//             clientId: process.env.GITHUB_CLIENT_ID!,
//             clientSecret: process.env.GITHUB_CLIENT_SECRET!,
//         }),
//         Credentials({
//             // You can specify which fields should be submitted, by default the username and password field are used.
//             // For example, the name for the username field is "username"
//             credentials: {
//                 email: { label: "Email", type: "email" },
//                 password: { label: "Password", type: "password" },
//             },
//             authorize: async (credentials) => {
//                 const validatedFields = loginSchema.safeParse(credentials);

//                 if (validatedFields.success) {
//                     const { email, password } = validatedFields.data;

//                     const user = await prisma.user.findUnique({
//                         where: { email },
//                     });

//                     if (!user || !user.password) return null;

//                     const passwordsMatch = await bcrypt.compare(
//                         password,
//                         user.password,
//                     );

//                     if (passwordsMatch) {
//                         // Check if email is verified for email/password users
//                         if (!user.emailVerified) {
//                             throw new Error(
//                                 "Email not verified. Please verify your email to log in.",
//                             );
//                         }
//                         return user;
//                     }
//                 }
//                 return null; // If you return null then an error will be displayed advising the user to check their details.
//             },
//         }),
//     ],
//     session: {
//         strategy: "jwt",
//     },
//     pages: {
//         signIn: "/sign-in", // Custom sign-in page
//         newUser: "/about_you", // Custom new user redirect after OAuth sign-up
//         error: "/auth-error", // Custom error page
//     },
//     callbacks: {
//         async jwt({ token, user, trigger, session }) {
//             if (user) {
//                 token.id = user.id;
//                 token.username = (user as any).username; // Add username to JWT
//                 token.termsAccepted = (user as any).termsAccepted; // Add termsAccepted
//             }
//             // Update the token if session data changes (e.g., after updating username/terms)
//             if (trigger === "update" && session?.user?.username) {
//                 token.username = session.user.username;
//             }
//             if (
//                 trigger === "update" &&
//                 session?.user?.termsAccepted !== undefined
//             ) {
//                 token.termsAccepted = session.user.termsAccepted;
//             }
//             return token;
//         },
//         async session({ session, token }) {
//             if (token.id) {
//                 session!.user!.id = token.id as string;
//             }
//             if (token.username) {
//                 session!.user!.username = token.username as string;
//             }
//             if (token.termsAccepted !== undefined) {
//                 session.user.termsAccepted = token.termsAccepted as boolean;
//             }
//             return session;
//         },
//         async signIn({ user, account, profile, email }) {
//             if (
//                 account?.provider === "google" ||
//                 account?.provider === "github"
//             ) {
//                 // Check if user exists. If not, they will be created by the adapter.
//                 const existingUser = await prisma.user.findUnique({
//                     where: { email: user.email! },
//                 });

//                 if (!existingUser) {
//                     // New OAuth user, redirect to /about_you to add missing info
//                     return `/about_you?new_oauth_user=true&email=${encodeURIComponent(user.email!)}`;
//                 } else {
//                     // Existing OAuth user
//                     // If they haven't accepted terms, redirect to /about_you
//                     if (!existingUser.termsAccepted) {
//                         return `/about_you`;
//                     }
//                 }
//             }
//             return true; // Allow sign-in for credentials users and existing OAuth users
//         },
//     },
//     // If you use jwt for session strategy, you need to provide a secret.
//     // The default behavior uses a database session which doesn't require a secret.
//     secret: process.env.AUTH_SECRET,
// });
declare module "next-auth" {
    interface Session {
        user: {
            id: string;
            name?: string | null;
            email?: string | null;
            image?: string | null;
            provider?: string | null;
            username?: string | null;
        };
    }
}


declare module "next-auth/jwt" {
    interface JWT {
        id: string;
        name?: string | null;
        email?: string | null;
        image?: string | null;
        provider?: string | null;
        username?: string | null;
        termsAccepted?: boolean | null;
    }
}

export const nextAuthOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
        GitHub({
            clientId: process.env.GITHUB_CLIENT_ID!,
            clientSecret: process.env.GITHUB_CLIENT_SECRET!,
        }),
        Credentials({
            // You can specify which fields should be submitted, by default the username and password field are used.
            // For example, the name for the username field is "username"
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            authorize: async (credentials) => {
                const validatedFields = loginSchema.safeParse(credentials);

                if (validatedFields.success) {
                    const { email, password } = validatedFields.data;

                    const user = await prisma.user.findUnique({
                        where: { email },
                    });

                    if (!user || !user.password) return null;

                    const passwordsMatch = await bcrypt.compare(
                        password,
                        user.password,
                    );

                    if (passwordsMatch) {
                        // Check if email is verified for email/password users
                        if (!user.emailVerified) {
                            throw new Error(
                                "Email not verified. Please verify your email to log in.",
                            );
                        }
                        return user;
                    }
                }
                return null; // If you return null then an error will be displayed advising the user to check their details.
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user, trigger, session }) {
            if (user) {
                token.id = user.id;
                token.username = (user as any).username; // Add username to JWT
                token.termsAccepted = (user as any).termsAccepted; // Add termsAccepted
            }
            // Update the token if session data changes (e.g., after updating username/terms)
            if (trigger === "update" && session?.user?.username) {
                token.username = session.user.username;
            }
            if (
                trigger === "update" &&
                session?.user?.termsAccepted !== undefined
            ) {
                token.termsAccepted = session.user.termsAccepted;
            }
            return token;
        },
        async session({ session, token }: { session: any, token: any }) {
            if (token.id) {
                session!.user!.id = token.id as string;
            }
            if (token.username) {
                session!.user!.username = token.username as string;
            }
            if (token.termsAccepted !== undefined) {
                session.user.termsAccepted = token.termsAccepted as boolean;
            }
            return session;
        },
        async signIn({ user, account, profile, email }) {
            if (
                account?.provider === "google" ||
                account?.provider === "github"
            ) {
                // Check if user exists. If not, they will be created by the adapter.
                const existingUser = await prisma.user.findUnique({
                    where: { email: user.email! },
                });

                if (!existingUser) {
                    // New OAuth user, redirect to /about_you to add missing info
                    return `/about_you?new_oauth_user=true&email=${encodeURIComponent(user.email!)}`;
                } else {
                    // Existing OAuth user
                    // If they haven't accepted terms, redirect to /about_you
                    if (!existingUser.termsAccepted) {
                        return `/about_you`;
                    }
                }
            }
            return true; // Allow sign-in for credentials users and existing OAuth users
        },
    },
    secret: process.env.AUTH_SECRET,
};
