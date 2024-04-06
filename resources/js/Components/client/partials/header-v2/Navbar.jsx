import React from "react";
import { Link } from "@inertiajs/react";

const Navbar = () => {
    return (
        <ul className="flex items-center gap-6 p-2 text-white text-sm font-semibold uppercase">
            <li>
                <Link href="/" className="px-4 hover:text-secondary">
                    Trang chủ
                </Link>
            </li>
            <li>
                <Link href="/gioi-thieu" className="px-4 hover:text-secondary">
                    Giới thiệu
                </Link>
            </li>
            <li>
                <Link href="/lien-he" className="px-4 hover:text-secondary">
                    Liên hệ
                </Link>
            </li>
        </ul>
    );
};

export default Navbar;
