import { Link } from "@inertiajs/react";
import React from "react";

const HeaderLogo = () => {
    return (
        <div className="w-full flex items-center justify-between">
            <Link href="/" className="w-[50%] max-mb:w-[80%] block">
                <img
                    src="/uploads/logo2.png"
                    alt="logo"
                    className="object-contain"
                    loading="lazy"
                />
            </Link>
            <div className="w-[18%]">
                <img
                    src="/uploads/ttknh.png"
                    alt="logo"
                    className="object-contain max-mb:hidden"
                    loading="lazy"
                />
            </div>
        </div>
    );
};

export default HeaderLogo;
