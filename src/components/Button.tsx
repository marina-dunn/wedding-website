import React, { FC, JSX } from "react";

interface IProps {
    colour: string;
    handleClick: () => void;
    role: "button" | "submit";
    children: React.ReactNode;
}

export const Button: FC<IProps> = (props) => {
    const { colour, handleClick, children, role } = props;
    return (
        <button role={role} onClick={handleClick} className={colour}>
            {children}
        </button>
    );
};
