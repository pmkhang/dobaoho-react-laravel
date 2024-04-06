import React from "react";
import { Link } from "@inertiajs/react";

const Navbar = () => {
    return (
        <ul className="flex items-center gap-6 max-tl:gap-2 p-2 text-white text-sm font-semibold uppercase">
            <li>
                <Link
                    href="/"
                    className="px-4 max-tl:px-2 hover:text-secondary transition-all"
                >
                    Trang chủ
                </Link>
            </li>
            <li>
                <Link
                    href="/gioi-thieu"
                    className="px-4 max-tl:px-2 hover:text-secondary transition-all"
                >
                    Giới thiệu
                </Link>
            </li>
            <li>
                <Link
                    href="#"
                    className="px-4 max-tl:px-2 hover:text-secondary transition-all"
                >
                    Chính sách bán hàng
                </Link>
            </li>
            <li>
                <Link
                    href="/lien-he"
                    className="px-4 max-tl:px-2 hover:text-secondary transition-all"
                >
                    Liên hệ
                </Link>
            </li>
        </ul>
    );
};

export default Navbar;
