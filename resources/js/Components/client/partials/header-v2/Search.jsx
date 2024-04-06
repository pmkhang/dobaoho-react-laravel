import React from "react";

const Search = () => {
    return (
        <div className="relative px-2 flex items-center">
            <input
                type="search"
                placeholder="Tìm kiếm sản phẩm"
                className="text-gray-900 text-sm rounded-lg focus:ring-0 outline-none block min-w-[300px] p-2.5"
            />
            <button type="submit" className="absolute right-3 bg-primary hover:bg-primary-darker py-1 px-2 text-white rounded-md">
                <i className="fa-solid fa-magnifying-glass"></i>
            </button>
        </div>
    );
};

export default Search;
