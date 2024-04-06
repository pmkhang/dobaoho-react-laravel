import React from "react";
import { Link } from "@inertiajs/react";
import HeaderControll from "./HeaderControll";

const Header = () => {
    return (
        <div className="w-full py-2 px-4 relative z-50">
            <header className="w-full min-h-[80px] bg-gray-700 backdrop-blur flex items-center px-8 rounded-full">
                <div className="w-full flex justify-between items-center">
                    <Link
                        href={route("dashboard")}
                        className="block text-white font-bold text-3xl"
                    >
                        QUANG TRUONG THINH
                    </Link>
                    <HeaderControll />
                </div>
            </header>
        </div>
    );
};

export default Header;
