// "use client";

// import { ColourTile } from "@/components/ColourTile";
// import { Header } from "@/components/Header";
// import React from "react";

// export default function Home() {
//     return (
//         <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
//             <Header />
//             hello
//             <ColourTile colour="hello" />
//         </div>
//     );
// }
"use client";

import { ThemeToggle } from "@/components/ThemeToggle";

export default function Home() {
    return (
        <div className="min-h-screen">
            <ThemeToggle />
            <div className="bg-white dark:bg-black text-black dark:text-white p-10">
                This box should change background and text color with dark mode toggle
            </div>
        </div>
    );
}
