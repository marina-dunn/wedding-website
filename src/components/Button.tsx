import React, { FC } from "react";
import Link from "next/link";

interface IProps {
    colour: string;
    handleClick?: () => void;
    role?: "button" | "submit";
    link?: string;
    children: React.ReactNode;
}

export const Button: FC<IProps> = (props) => {
    const { colour, handleClick, children, role, link } = props;

    return link ? (
        <Link href={link}>{children}</Link>
    ) : (
        <button role={role} onClick={handleClick} className={colour}>
            {children}
        </button>
    );
};
