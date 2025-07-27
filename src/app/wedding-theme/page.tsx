import React from "react";

const WeddingTheme = () => {
    const commonClasses = "w-28 h-28 rounded-4xl ";
    return (
        <div className="font-winky">
            If you've made it to this page then you probably want to know some guidelines on what
            colours we'll be having at our wedding.
            <div className="flex flex-wrap gap-10 bg-black-matte/20 rounded-xl p-20">
                <div className={commonClasses + "bg-blue-navy"} />
                <div className={commonClasses + "bg-blue-midnight"} />
                <div className={commonClasses + "bg-blue-sky"} />
                <div className={commonClasses + "bg-white-blue"} />
                <div className={commonClasses + "bg-green-dark"} />
                <div className={commonClasses + "bg-green-leaf"} />
                <div className={commonClasses + "bg-green-vibrant"} />
                <div className={commonClasses + "bg-white-green"} />
                <div className={commonClasses + "bg-purple-royal"} />
                <div className={commonClasses + "bg-purple-lavender"} />
                <div className={commonClasses + "bg-purple-pastel"} />
                <div className={commonClasses + "bg-white-purple"} />
                <div className={commonClasses + "bg-red-velvet"} />
                <div className={commonClasses + "bg-red-blood"} />
                <div className={commonClasses + "bg-red-scarlet"} />
                <div className={commonClasses + "bg-red-pale"} />
                <div className={commonClasses + "bg-white-ivory"} />
                <div className={commonClasses + "bg-black-smoke"} />
                <div className={commonClasses + "bg-black-matte"} />
                <div className={commonClasses + "bg-white-smoke"} />
            </div>
        </div>
    );
};

export default WeddingTheme;
