// const Selector = ({
//     name,
//     control,
//     label,
//     rules,
//     errors,
//     options,
//     optionPlaceHolder,
//     ...props
// }) => {
//     return (
//         <div className="w-full flex flex-col mb-2 gap-2 mt-2">
//             <label htmlFor={name} className="block font-bold text-gray-900">
//                 {label}
//                 {rules && <i className="text-red-500"> *</i>}
//             </label>
//             <Controller
//                 name={name}
//                 control={control}
//                 defaultValue=""
//                 rules={rules}
//                 render={({ field }) => (
//                     <select
//                         className="bg-gray-50 outline-none border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
//                         {...field}
//                         {...props}
//                     >
//                         <option value="">- {optionPlaceHolder} -</option>
//                         {options?.map((i) => (
//                             <option key={i?.id} value={i?.id}>
//                                 {i?.name}
//                             </option>
//                         ))}
//                     </select>
//                 )}
//             />
//             {errors && errors[name] && (
//                 <span className="text-red-500">{errors[name]?.message}</span>
//             )}
//         </div>
//     );
// };

import { forwardRef, useEffect, useRef } from "react";

const Selector = forwardRef(
    (
        {
            className = "",
            isFocused = false,
            label,
            name,
            message,
            required,
            options,
            optionPlaceHolder,
            ...props
        },
        ref
    ) => {
        const select = ref ? ref : useRef();

        useEffect(() => {
            if (isFocused) {
                select.current.focus();
            }
        }, []);

        return (
            <div className="w-full flex flex-col gap-2 relative">
                <label htmlFor={name} className="block font-bold text-gray-900">
                    {label}
                    {required && <i className="text-red-500"> *</i>}
                </label>
                <select
                    className="bg-gray-50 outline-none border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                    ref={select}
                    {...props}
                >
                    {optionPlaceHolder && (
                        <option value="">- {optionPlaceHolder} -</option>
                    )}
                    {options?.map((i) => (
                        <option key={i?.id} value={i?.id}>
                            {i?.name}
                        </option>
                    ))}
                </select>
                {message && (
                    <span className="absolute text-base text-red-500 bottom-[-24px]">
                        {message}
                    </span>
                )}
            </div>
        );
    }
);

export default Selector;
