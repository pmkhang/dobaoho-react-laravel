import React from "react";
import { Link } from "@inertiajs/react";

const Navbar = ({ isTablet }) => {
    return (
        <div
            className={` flex items-center  justify-center py-4 min-tl:py-3 min-tl:text-white max-mb:hidden ${
                isTablet ? "" : "hidden"
            }`}
        >
            <ul className="flex items-center gap-6 text-sm uppercase">
                <li>
                    <Link
                        href="/"
                        className="p-2 px-4 font-bold hover:text-orange-400 transition-all"
                    >
                        Trang chủ
                    </Link>
                </li>
                <li>
                    <Link
                        href={route("introducePage")}
                        className="p-2 px-4 font-bold hover:text-orange-400 transition-all"
                    >
                        Giới thiệu
                    </Link>
                </li>
                <li>
                    <Link
                        href="#"
                        className="p-2 px-4 font-bold hover:text-orange-400 transition-all"
                    >
                        Chính sách bán hàng
                    </Link>
                </li>
                <li>
                    <Link
                        href="/lien-he"
                        className="p-2 px-4 font-bold hover:text-orange-400 transition-all"
                    >
                        Liên hệ
                    </Link>
                </li>
                <li>
                    <a
                        href="tel:0938505459"
                        className="p-2 px-4 font-bold hover:text-orange-400 transition-all"
                    >
                        Hotline: 0938505459
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
