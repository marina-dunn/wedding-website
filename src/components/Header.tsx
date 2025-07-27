"use client";
import React from "react";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "./Button";
import Link from "next/link";

export const Header = () => {
    return (
        <header className="sticky flex flex-row justify-between font-playwrite">
            <div className="">
                <Link href="/about">About</Link>
                <Link href="/wedding-theme">Theme</Link>
                <Link href="/gallery">Gallery</Link>
                <Link href="/registry">Registry</Link>
                <Link href="/faq">FAQ</Link>
            </div>
            <Link href="/">
                <span className="text-2xl">Andy and Marina's Wedding</span>
            </Link>
            <div>
                <ThemeToggle />
                <Button colour="bg-green-leaf" role="button" link={"/rsvp"}>
                    RSVP
                </Button>
            </div>
        </header>
    );
};
