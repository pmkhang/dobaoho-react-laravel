import { Link } from "@inertiajs/react";
import React from "react";

const Logo = () => {
    return (
        <div className="w-full flex gap-4">
            <Link href="/" className="w-[70%] block">
                <img
                    src="/uploads/logo2.png"
                    alt="logo"
                    className=" object-contain"
                />
            </Link>
            <img
                src="/uploads/logo1.png"
                alt="logo"
                className="w-[30%] object-contain"
            />
        </div>
    );
};

export default Logo;
