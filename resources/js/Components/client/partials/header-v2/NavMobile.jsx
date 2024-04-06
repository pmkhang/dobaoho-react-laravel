import { Link } from "@inertiajs/react";
import React from "react";

const NavMobile = ({ setIsShowNavMobile }) => {
    return (
        <div className="fixed top-0 right-0 left-0 bottom-0 bg-[#f3faf4]">
            <div className="w-full p-4 ">
                <div className="flex items-center justify-between gap-6">
                    <Link href="/" className="w-[50%] max-mb:w-[110%] block">
                        <img
                            src="/uploads/logo2.png"
                            alt="logo"
                            className="object-contain"
                            loading="lazy"
                        />
                    </Link>
                    <button
                        className="flex flex-col mr-6 gap-1 min-tl:hidden relative"
                        onClick={() => {
                            setIsShowNavMobile(false);
                        }}
                    >
                        <span className="py-0.5 px-3 bg-primary rounded-md rotate-45 absolute"></span>
                        <span className="py-0.5 px-3 bg-secondary rounded-md -rotate-45 absolute"></span>
                    </button>
                </div>
                <ul className="w-full flex flex-col items-end gap-4 mt-8 font-bold text-lg text-primary-darker">
                    <li className="w-full text-end">
                        <Link
                            href="/"
                            className={`block w-full px-2 rounded-lg `}
                        >
                            Trang chủ
                        </Link>
                    </li>
                    <li className="w-full text-end">
                        <Link
                            href="/gioi-thieu"
                            className={`block w-full px-2 rounded-lg `}
                        >
                            Giới thiệu
                        </Link>
                    </li>
                    <li className="w-full text-end">
                        <Link
                            href="/"
                            className={`block w-full px-2 rounded-lg `}
                        >
                            Chính sách bán hàng
                        </Link>
                    </li>
                    <li className="w-full text-end">
                        <Link
                            href="/lien-he"
                            className={`block w-full px-2 rounded-lg `}
                        >
                            Liên hệ
                        </Link>
                    </li>
                </ul>
                <ul className="flex flex-col items-end justify-end gap-2 mt-8 font-bold text-lg text-secondary">
                    <li>
                        <Link
                            href="/login"
                            className={`block w-full px-2 rounded-lg `}
                        >
                            Đăng nhập
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/login"
                            className={`block w-full px-2 rounded-lg `}
                        >
                            Đăng ký
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default NavMobile;
