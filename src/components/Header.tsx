import React from "react";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "./Button";

export const Header = () => {
    return (
        <header className="">
            <span></span>
            <ThemeToggle />
            <Button colour="bg-green-leaf" role="button" handleClick={() => console.log("wahoo")}>
                RSVP
            </Button>
        </header>
    );
};
