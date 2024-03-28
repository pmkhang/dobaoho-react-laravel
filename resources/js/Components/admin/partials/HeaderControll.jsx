import React from "react";

const HeaderControll = () => {
    return (
        <ul className="flex items-center gap-6 text-white text-xl">
            <li className="flex items-center gap-3 relative">
                <input
                    type="text"
                    id="first_name"
                    className="text-gray-900 text-sm rounded-full outline-none block min-w-[300px] p-2.5"
                    placeholder="Tìm kiếm ..."
                    required
                />
                <button className="text-lg absolute text-gray-700 right-4">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </li>
            <li className="relative cursor-pointer">
                <i className="fa-solid fa-bell"></i>
                <span className="absolute top-[-10px] right-[-16px] text-[14px] bg-red-500 text-white rounded-full flex items-center justify-center min-w-[20px] h-[20px] text-center p-2">
                    1
                </span>
            </li>
            <li className="flex gap-3 items-center py-2 px-4 rounded-full bg-white text-gray-700 cursor-pointer">
                <i className="fa-solid fa-user"></i>
                <span className="text-base">Admin name</span>
            </li>
        </ul>
    );
};

export default HeaderControll;
