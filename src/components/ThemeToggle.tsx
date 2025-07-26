"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    return (
        <button
            className="p-2 bg-gray-200 dark:bg-gray-700 rounded"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
            Toggle to {theme === "dark" ? "Light" : "Dark"} Mode
        </button>
    );
};
