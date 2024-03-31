import React from "react";
import { Link } from "@inertiajs/react";

const Navbar = ({ isTablet }) => {
    return (
        <div
            className={`flex items-center justify-center py-4 max-mb:hidden ${
                isTablet ? "" : "hidden"
            }`}
        >
            <ul className="flex items-center gap-6 uppercase">
                <li>
                    <Link
                        href="/"
                        className="p-2 px-4 font-bold hover:text-blue-600 transition-all"
                    >
                        Trang chủ
                    </Link>
                </li>
                <li>
                    <Link
                        href="#"
                        className="p-2 px-4 font-bold hover:text-blue-600 transition-all"
                    >
                        Giới thiệu
                    </Link>
                </li>
                <li>
                    <Link
                        href="#"
                        className="p-2 px-4 font-bold hover:text-blue-600 transition-all"
                    >
                        Chính sách bán hàng
                    </Link>
                </li>
                <li>
                    <Link
                        href="/lien-he"
                        className="p-2 px-4 font-bold hover:text-blue-600 transition-all"
                    >
                        Liên hệ
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
