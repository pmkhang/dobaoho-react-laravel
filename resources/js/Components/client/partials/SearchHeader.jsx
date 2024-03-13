import React from "react";

const SearchHeader = () => {
    return (
        <form className="w-full max-mb:hidden">
            <div className="flex gap-2 max-tl:px-4">
                <input
                    type="search"
                    id="search"
                    className="block w-full p-3 text-sm text-gray-900 border-2 border-blue-600 rounded-lg shadow-md bg-gray-50 outline-none"
                    placeholder="Tìm kiếm"
                    required
                />
                <button className="flex items-center justify-center w-[55px] text-white bg-blue-700 hover:bg-blue-800 transition-all focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 ">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </div>
        </form>
    );
};

export default SearchHeader;
