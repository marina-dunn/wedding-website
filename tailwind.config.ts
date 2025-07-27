// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        colors: {
            blue: {
                midnight: "#191970",
                navy: "#000435",
                sky: "#85E4FF",
            },
            purple: {
                royal: "#36013f",
                pastel: "#f4bbfe",
                lavender: "#7851a9",
            },
            green: {
                leaf: "#51B73B",
                dark: "#0F4702",
                vibrant: "#30EE06",
            },
            white: {
                blue: "#D6F6FF",
                ivory: "#FFFCEE",
                purple: "#F1DDF8",
                green: "#E6F8DD",
                smoke: "#D1D1D1",
            },
            red: {
                blood: "#4c0001",
                scarlet: "#5b0001",
                pale: "#D9544D",
                velvet: "#1e0000",
            },
            black: {
                smoke: "#100c08",
                matte: "#28282B",
            },
        },
        extend: {
            fontFamily: {
                nunito: "var(--font-nunito)",
                winky: "var(--font-winky)",
                playwrite: "var(--font-playwrite)",
            },
        },
    },
    variants: {
        extend: {
            backgroundColor: ["dark"],
            textColor: ["dark"],
        },
    },
    plugins: [],
};
