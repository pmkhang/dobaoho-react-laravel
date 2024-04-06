export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.jsx",
        "node_modules/flowbite-react/lib/esm/**/*.js",
    ],
    theme: {
        extend: {
            screens: {
                "max-dt": { max: "1200px" },
                "max-tl": { max: "1024px" },
                "max-mb": { max: "768px" },
                "min-dt": { min: "1401px" },
                "min-tl": { min: "1025px" },
                "min-mb": { min: "769px" },
            },
            maxWidth: {
                dt: "1200px",
                tl: "1024px",
                mb: "768px",
            },
        },
        colors: {
            primary: "#076e12",
            "primary-darker": "#054e0a",
            secondary: "#f26622",
        },
    },
    plugins: [require("flowbite/plugin"), require("tailwindcss-animated")],
};
