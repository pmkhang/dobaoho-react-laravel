import React from "react";

const Button = ({ type = "submit", text, className, ...props }) => {
    return (
        <button
            type={type}
            className={`w-full flex items-center justify-center bg-blue-600 rounded-lg text-white px-3 py-2 ${className}`}
            {...props}
        >
            {text}
        </button>
    );
};

export default Button;
