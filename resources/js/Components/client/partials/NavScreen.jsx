import React from "react";
import { Link, usePage, useForm } from "@inertiajs/react";
import AuthButton from "@/Components/client/partials/AuthButton";
import UserNav from "@/Components/client/partials/UserNav";
import { Dropdown } from "flowbite-react";

const NavScreen = ({ setIsShowNav }) => {
    const { post } = useForm();
    const logout = () => {
        post(route("logout"));
    };
    const user = usePage().props.auth.user;
    return (
        <div className="absolute top-0 left-0 right-0 bottom-0 z-50 min-mb:hidden py-2 px-6 mt-0.5 bg-white">
            <div className="flex items-center justify-between">
                <Link href="/" className="font-bold text-xl">
                    QUANG TRUONG THINH
                </Link>
                <span className="text-2xl ">
                    <i
                        class="fa-solid fa-xmark"
                        onClick={() => {
                            setIsShowNav(false);
                        }}
                    ></i>
                </span>
            </div>
            <ul className="flex flex-col w-full items-start gap-2 mt-6">
                <li className="w-full">
                    <Link
                        href="/"
                        className="w-full py-2 inline-block font-bold hover:text-blue-600 transition-all"
                    >
                        Trang chủ
                    </Link>
                </li>
                <li className="w-full">
                    <Link
                        href="#"
                        className="w-full py-2 inline-block font-bold hover:text-blue-600 transition-all"
                    >
                        Giới thiệu
                    </Link>
                </li>
                <li className="w-full">
                    <Link
                        href="#"
                        className="w-full py-2 inline-block font-bold hover:text-blue-600 transition-all"
                    >
                        Chính sách bán hàng
                    </Link>
                </li>
                <li className="w-full">
                    <Link
                        href="/lien-he"
                        className="w-full py-2 inline-block font-bold hover:text-blue-600 transition-all"
                    >
                        Liên hệ
                    </Link>
                </li>
            </ul>
            <ul className="flex flex-col w-full mt-8">
                {user ? (
                    <li className="flex-col flex bg-blue-600 p-3 rounded-lg text-white">
                        <div className="flex flex-col">
                            <span className="font-bold text-lg">
                                Xin chào, {user?.name}
                            </span>
                            <span className="font-bold text-sm">
                                {user?.email}
                            </span>
                        </div>
                        <ul className="flex flex-col gap-3 mt-2">
                            <li>
                                {user?.role == 1 && (
                                    <Link
                                        href={route("admin")}
                                        className="block w-full text-start p-2 bg-blue-500 rounded-lg"
                                        onClick={() => {
                                            setIsShowNav(false);
                                        }}
                                    >
                                        Vào trang Admin
                                    </Link>
                                )}
                            </li>
                            <li>
                                <Link
                                    href={route("showProfile")}
                                    className="block w-full text-start p-2 bg-blue-500 rounded-lg"
                                    onClick={() => {
                                        setIsShowNav(false);
                                    }}
                                >
                                    Thông tin cá nhân
                                </Link>
                            </li>
                            <li>
                                <Link
                                    // href={route("showOrders")}
                                    className="block w-full text-start p-2 bg-blue-500 rounded-lg"
                                    onClick={() => {
                                        setIsShowNav(false);
                                    }}
                                >
                                    Đơn mua
                                </Link>
                            </li>
                            <li>
                                <span
                                    className="block w-full p-2 bg-blue-800 rounded-lg mt-10 text-center"
                                    onClick={() => {
                                        logout();
                                        setIsShowNav(false);
                                    }}
                                >
                                    Đăng xuất
                                </span>
                            </li>
                        </ul>
                    </li>
                ) : (
                    <AuthButton />
                )}
            </ul>
        </div>
    );
};

export default NavScreen;
