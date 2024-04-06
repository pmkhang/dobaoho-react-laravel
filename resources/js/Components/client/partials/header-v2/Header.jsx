import Logo from "@/Components/client/partials/header-v2/Logo";
import Navbar from "@/Components/client/partials/header-v2/Navbar";
import Search from "@/Components/client/partials/header-v2/Search";
import SubHeader from "@/Components/client/partials/header-v2/SubHeader";
import React from "react";

const Header = () => {
    return (
        <header className="w-full min-h-[100px]">
            <div className="w-full bg-[#f1f6f2] py-2">
                <SubHeader />
            </div>
            <div className="max-w-dt mx-auto py-4 p-2 max-tl:px-4">
                <Logo />
            </div>
            <div className="w-full bg-primary-darker py-1">
                <div className="max-w-dt mx-auto flex justify-between">
                    <Navbar />
                    <Search />
                </div>
            </div>
        </header>
    );
};

export default Header;
