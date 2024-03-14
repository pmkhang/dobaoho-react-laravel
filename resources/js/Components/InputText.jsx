const InputText = ({
    type = "text",
    className = "",
    label,
    name,
    message,
    required,
    ...props
}) => {
    return (
        <div className="w-full flex flex-col gap-1 relative">
            <label htmlFor={name} className="block font-bold text-gray-900">
                {label}
                {required && <i className="text-red-500"> *</i>}
            </label>
            <input
                type={type}
                className={`bg-gray-50 outline-none border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5  ${className}`}
                id={name}
                {...props}
            />
            {message && (
                <span className="absolute text-base text-red-500 bottom-[-24px]">
                    {message}
                </span>
            )}
        </div>
    );
};

export default InputText;
