import type { Metadata } from "next";
import "./globals.css";
import AuthProvider from "@/lib/providers/auth-provider";
import { GoogleAnalytics } from "@next/third-parties/google";
import ThemeProvider from "@/providers/theme-provider";

export const metadata: Metadata = {
    title: "Cnippet Blocks",
    description:
        "Get access to 300+ carefully crafted blocks and every template to build dashboards, apps, and websites even faster.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`antialiased`}>
                <AuthProvider>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="light"
                        enableSystem
                        disableTransitionOnChange
                    >
                        {children}
                    </ThemeProvider>
                </AuthProvider>
            </body>
            <GoogleAnalytics gaId="G-1506H21DSX" />
        </html>
    );
}
