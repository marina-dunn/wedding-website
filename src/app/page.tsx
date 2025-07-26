"use client";

import { ColourTile } from "@/components/ColourTile";
import { Header } from "@/components/Header";
import React from "react";

export default function Home() {
    return (
        <div className="bg-white dark:bg-black text-green dark:text-blue">
            <Header />
            hello
            <ColourTile colour="hello" />
        </div>
    );
}
