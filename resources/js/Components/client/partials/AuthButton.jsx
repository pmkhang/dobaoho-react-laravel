import React from "react";
import { Link } from "@inertiajs/react";

const AuthButton = () => {
    return (
        <li>
            <Link
                href={route("login")}
                className="px-3 py-2.5 bg-blue-600 text-white rounded-md hover:bg-blue-800 transition-all"
            >
                Đăng nhập
            </Link>
        </li>
    );
};

export default AuthButton;
