import HeaderLogo from "@/Components/client/partials/header-v2/HeaderLogo";
import Navbar from "@/Components/client/partials/header-v2/Navbar";
import NavFixed from "@/Components/client/partials/header-v2/NavFixed";
import NavMobile from "@/Components/client/partials/header-v2/NavMobile";
import Search from "@/Components/client/partials/header-v2/Search";
import SubHeader from "@/Components/client/partials/header-v2/SubHeader";
import React, { useState, useEffect } from "react";

const Header = () => {
    const [isShowNavHeader, setIsShowNavHeader] = useState(false);
    const [isShowNavMobile, setIsShowNavMobile] = useState(false);
    const handleScroll = () => {
        if (window.scrollY > 150) {
            setIsShowNavHeader(true);
        } else {
            setIsShowNavHeader(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <header className="w-full min-h-[100px] relative z-30 max-mb:fixed max-mb:top-0 max-mb:right-0 max-mb:left-0">
            <div className="w-full bg-[#f1f6f2] p-2 max-mb:hidden">
                <SubHeader />
            </div>
            <div className="max-w-dt bg-[#f3faf4] mx-auto py-4 p-2 max-tl:px-4 ">
                <HeaderLogo setIsShowNavMobile={setIsShowNavMobile} />
            </div>
            <div className="w-full bg-primary-darker">
                <div className="max-w-dt mx-auto flex justify-between max-mb:hidden py-1">
                    <Navbar />
                    <Search />
                </div>
            </div>
            {isShowNavHeader && (
                <div className="w-full bg-primary-darker shadow-xl min-mb:fixed min-mb:top-0 min-mb:right-0 min-mb:left-0">
                    <div className="max-w-dt mx-auto">
                        <NavFixed />
                    </div>
                </div>
            )}
            {isShowNavMobile && (
                <NavMobile setIsShowNavMobile={setIsShowNavMobile} />
            )}
        </header>
    );
};

export default Header;
