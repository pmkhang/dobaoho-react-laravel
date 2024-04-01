import React from "react";
import { Link } from "@inertiajs/react";

const LogoHeader = () => {
    return (
        <div className="max-mb:w-full  max-mb:px-4">
            <Link
                href="/"
                className="w-full flex items-center justify-center max-mb:justify-start"
            >
                <img
                    src="/uploads/logo.png"
                    alt="logo"
                    className="h-[42px] object-contain"
                />
            </Link>
        </div>
    );
};

export default LogoHeader;
