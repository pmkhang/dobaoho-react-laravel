import React from "react";
import { Link, usePage } from "@inertiajs/react";

const Navbar = () => {
    const { url } = usePage();
    const active = "text-primary font-bold rounded-lg bg-[#edf1ee]";
    return (
        <ul className="flex items-center gap-6 max-tl:gap-2 p-2 text-white text-sm font-semibold uppercase">
            <li>
                <Link
                    href="/"
                    className={`px-4 max-tl:px-2 hover:text-secondary transition-all py-2 ${
                        url == "/" ? active : ""
                    }`}
                >
                    Trang chủ
                </Link>
            </li>
            <li>
                <Link
                    href="/gioi-thieu"
                    className={`px-4 max-tl:px-2 hover:text-secondary transition-all py-2 ${
                        url == "/gioi-thieu" ? active : ""
                    }`}
                >
                    Giới thiệu
                </Link>
            </li>
            <li>
                <Link
                    href="/"
                    className={`px-4 max-tl:px-2 hover:text-secondary transition-all py-2`}
                >
                    Chính sách bán hàng
                </Link>
            </li>
            <li>
                <Link
                    href="/lien-he"
                    className={`px-4 max-tl:px-2 hover:text-secondary transition-all py-2 ${
                        url == "/lien-he" ? active : ""
                    }`}
                >
                    Liên hệ
                </Link>
            </li>
        </ul>
    );
};

export default Navbar;
