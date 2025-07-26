import { FC } from "react";

export const ColourTile: FC<{ colour: string }> = ({ colour }) => {
    return <div className="rounded w-10 h-10 bg-blue-sky" />;
};
