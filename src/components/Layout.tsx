"use client";

import { ThemeProvider } from "next-themes";
import { Header } from "./Header";

export const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Header />
            {children}
        </ThemeProvider>
    );
};
