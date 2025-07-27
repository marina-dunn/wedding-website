import React from "react";
import type { Metadata } from "next";
import { Nunito, Winky_Sans, Playwrite_NO } from "next/font/google";
import { Layout } from "@/components/Layout";
import "./globals.css";

export const metadata: Metadata = {
    title: {
        default: "Andy and Marina's Wedding",
        template: "%s | A&M Wedding",
    },
    description: "Details and RSVP form for Andy and Marina's wedding",
};

const nunito = Nunito({
    subsets: ["latin"],
    variable: "--font-nunito",
});

const winky = Winky_Sans({
    subsets: ["latin"],
    variable: "--font-winky",
});

const playwrite = Playwrite_NO({
    variable: "--font-playwrite",
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html
            lang="en"
            className={`${nunito.variable} ${winky.variable} ${playwrite.variable}`}
            suppressHydrationWarning
        >
            <body className="max-w-7xl m-auto">
                <Layout>{children}</Layout>
            </body>
        </html>
    );
};

export default RootLayout;
