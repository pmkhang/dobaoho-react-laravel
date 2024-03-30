import React from "react";
import CartNav from "./CartNav";

const MobileNav = () => {
    return (
        <ul className="flex items-center gap-2 min-mb:hidden">
            <li className="px-2 hover:text-blue-700 transition-all cursor-pointer flex items-center gap-1">
                <button className="flex min-mb:hidden items-center justify-center transition-all font-medium text-lg">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </li>
            {/* <CartNav /> */}
            <li className="px-2 hover:text-blue-700 transition-all cursor-pointer flex items-center gap-1">
                <i className="fa-solid fa-bars text-xl text-blue-600"></i>
            </li>
        </ul>
    );
};

export default MobileNav;
