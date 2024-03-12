import React from "react";
import { Link, usePage } from "@inertiajs/react";

const Header = () => {
    const user = usePage().props.auth.user;
    return (
        <header className="w-full shadow-lg sticky top-0 bg-white z-10">
            <div className="w-full max-w-dt my-0 mx-auto h-fit py-4 flex justify-between items-center px-2 gap-10">
                <div className="w-1/3  flex items-center justify-center max-mb:justify-start max-mb:px-4">
                    <Link href="/" className="font-bold text-3xl">
                        LOGO
                    </Link>
                </div>
                <ul className="flex items-center gap-2 min-mb:hidden">
                    <li className="px-2 hover:text-blue-700 transition-all cursor-pointer flex items-center gap-1">
                        <button className="flex min-mb:hidden items-center justify-center transition-all font-medium text-lg">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </li>
                    <li className="px-2 hover:text-blue-700 transition-all cursor-pointer flex items-center gap-1">
                        <i className="fa-solid fa-cart-shopping text-xl text-blue-600"></i>
                    </li>
                    <li className="px-2 hover:text-blue-700 transition-all cursor-pointer flex items-center gap-1">
                        <i className="fa-solid fa-bars text-xl text-blue-600"></i>
                    </li>
                </ul>
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
                <div className="w-1/3 flex justify-end max-tl:hidden">
                    <ul className="flex items-center gap-2">
                        <li className="px-2 hover:text-blue-700 transition-all cursor-pointer flex items-center gap-1">
                            <i className="fa-solid fa-cart-shopping text-xl text-blue-600"></i>
                        </li>
                        {user ? (
                            <li className="px-2 hover:text-blue-700 transition-all cursor-pointer flex items-center gap-1">
                                <i className="fa-solid fa-circle-user text-xl text-blue-600"></i>
                            </li>
                        ) : (
                            <li className="flex items-center gap-3 px-2 hover:text-blue-700  cursor-pointer flex items-center gap-1">
                                <Link
                                    href={route("login")}
                                    className="px-2 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-800 transition-all"
                                >
                                    Đăng nhập
                                </Link>
                                <Link
                                    href={route("register")}
                                    className="px-2 py-1 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition-all"
                                >
                                    Đăng ký
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
            <nav className="w-full max-w-dt my-0 mx-auto  h-fit max-tl:px-4 max-tl:pb-3 max-tl:flex max-mb:hidden">
                <div className="flex-1 justify-end min-tl:hidden max-tl:flex">
                    <ul className="flex items-center gap-2">
                        <li className="px-2 hover:text-blue-700 transition-all cursor-pointer flex items-center gap-1">
                            <i className="fa-solid fa-cart-shopping text-xl text-blue-600"></i>
                        </li>
                        {user ? (
                            <li className="px-2 hover:text-blue-700 transition-all cursor-pointer flex items-center gap-1">
                                <i className="fa-solid fa-circle-user text-xl text-blue-600"></i>
                            </li>
                        ) : (
                            <li className="flex items-center gap-3 px-2 hover:text-blue-700  cursor-pointer flex items-center gap-1">
                                <Link className="px-2 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-800 transition-all">
                                    Đăng nhập
                                </Link>
                                <Link className="px-2 py-1 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition-all">
                                    Đăng ký
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;
