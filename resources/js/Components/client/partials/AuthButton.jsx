import React from "react";
import { Link } from "@inertiajs/react";


const AuthButton = () => {
    return (
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
    );
};

export default AuthButton;
