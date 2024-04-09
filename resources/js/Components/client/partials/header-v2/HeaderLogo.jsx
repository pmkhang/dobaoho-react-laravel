import { Link } from "@inertiajs/react";
import React from "react";

const HeaderLogo = ({ setIsShowNavMobile }) => {
    return (
        <div className="w-full flex items-center justify-between gap-6">
            <Link href="/" className="w-[50%] max-mb:w-[110%] block">
                <img
                    src="/uploads/logo2.png"
                    alt="logo"
                    className="object-contain"
                />
            </Link>
            <button
                className="flex flex-col gap-1 min-mb:hidden"
                onClick={() => {
                    setIsShowNavMobile(true);
                }}
            >
                <span className="py-0.5 px-3 bg-primary rounded-md"></span>
                <span className="py-0.5 px-3 bg-secondary rounded-md"></span>
                <span className="py-0.5 px-3 bg-primary rounded-md"></span>
            </button>
            <div className="w-[18%] max-mb:hidden">
                <img
                    src="/uploads/ttknh.png"
                    alt="logo"
                    className="object-contain "
                />
            </div>
        </div>
    );
};

export default HeaderLogo;
