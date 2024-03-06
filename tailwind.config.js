export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.jsx",
    ],
    theme: {
        extend: {
            screens: {
                dt: { max: "1400px" },
                tl: { max: "1024px" },
                mb: { max: "768px" },
            },
            maxWidth: {
                dt: "1400px",
                tl: "1024px",
                mb: "768px",
            },
        },
    },
    plugins: [],
};
