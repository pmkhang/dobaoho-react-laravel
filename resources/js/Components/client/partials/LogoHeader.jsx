import React from "react";
import { Link } from "@inertiajs/react";

const LogoHeader = () => {
    return (
        <div className="w-1/3  flex items-center justify-center max-mb:justify-start max-mb:px-4">
            <Link href="/" className="font-bold text-xl">
                QUANG TRUONG THINH
            </Link>
        </div>
    );
};

export default LogoHeader;
