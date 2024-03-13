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
                "max-dt": { max: "1400px" },
                "max-tl": { max: "1024px" },
                "max-mb": { max: "768px" },
                "min-dt": { min: "1400px" },
                "min-tl": { min: "1024px" },
                "min-mb": { min: "768px" },
            },
            maxWidth: {
                dt: "1400px",
                tl: "1024px",
                mb: "768px",
            },
        },
    },
    plugins: [require("flowbite/plugin")],
};
