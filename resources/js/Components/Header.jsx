import React from "react";
// import { Link } from "react-router-dom";
import { Link } from "@inertiajs/react";

const Header = () => {
    return (
        <header className="w-full shadow-lg sticky top-0 bg-white z-10">
            <div className="w-full max-w-dt my-0 mx-auto h-[80px] flex justify-between items-center px-2 gap-10">
                <div className="w-1/3 flex items-center justify-center">
                    <a href="/" className="font-bold text-3xl">
                        LOGO
                    </a>
                </div>
                <form className="w-full ">
                    <label
                        htmlFor="search"
                        className="mb-2 text-sm font-medium text-gray-900 sr-only "
                    >
                        Search
                    </label>
                    <div className="flex gap-2">
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
                <div className="w-1/3 flex justify-end">
                    <ul className="flex items-center gap-2">
                        <li className="px-2 hover:text-blue-700 transition-all cursor-pointer flex items-center gap-1">
                            <i className="fa-solid fa-cart-shopping text-xl text-blue-600"></i>
                            <span>Giỏ hàng</span>
                        </li>
                        <li className="px-2 hover:text-blue-700 transition-all cursor-pointer flex items-center gap-1">
                            <i className="fa-solid fa-circle-user text-xl text-blue-600"></i>
                            <span>Tài khoản</span>
                        </li>
                    </ul>
                </div>
            </div>
            <nav className="w-full max-w-dt my-0 mx-auto h-fit pb-3">
                <ul className="flex items-center justify-center gap-6 font-semibold ">
                    <li>
                        <Link
                            href="/about"
                            className="px-2 hover:text-blue-700 transition-all"
                        >
                            Trang chủ
                        </Link>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="px-2 hover:text-blue-700 transition-all"
                        >
                            Về chúng tôi
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="px-2 hover:text-blue-700 transition-all"
                        >
                            Sản phẩm
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="px-2 hover:text-blue-700 transition-all"
                        >
                            Liên hệ
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
