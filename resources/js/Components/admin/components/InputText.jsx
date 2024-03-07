import { forwardRef, useEffect, useRef } from "react";

const InputText = forwardRef(
    (
        {
            type = "text",
            className = "",
            isFocused = false,
            label,
            name,
            message,
            required,
            ...props
        },
        ref
    ) => {
        const input = ref ? ref : useRef();

        useEffect(() => {
            if (isFocused) {
                input.current.focus();
            }
        }, []);

        return (
            <div className="w-full flex flex-col gap-2 relative">
                <label htmlFor={name} className="block font-bold text-gray-900">
                    {label}
                    {required && <i className="text-red-500"> *</i>}
                </label>
                <input
                    type={type}
                    className={`bg-gray-50 outline-none border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5  ${className}`}
                    id={name}
                    ref={input}
                    {...props}
                />
                {message && (
                    <span className="absolute text-base text-red-500 bottom-[-24px]">
                        {message}
                    </span>
                )}
            </div>
        );
    }
);

export default InputText;
