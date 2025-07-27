import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { Layout } from "@/components/Layout";

export const metadata: Metadata = {
    title: "Andy and Marina's Wedding",
    description: "Details and RSVP form for Andy and Marina's wedding",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className="bg-white dark:bg-black text-black dark:text-white">
                <Layout>{children}</Layout>
            </body>
        </html>
    );
};

export default RootLayout;
