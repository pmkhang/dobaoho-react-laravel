import React from "react";
import NavBarHeaderLink from "@/Components/client/partials/NavBarHeaderLink";
import NavCategoryHeader from "@/Components/client/partials/NavCategoryHeader";

const NavbarHeader = () => {
    return (
        <div className="w-full bg-primary-darker fixed top-0 right-0 left-0 z-30 shadow-xl transition-all max-mb:top-[60px]">
            <ul className="max-w-dt h-[42px] mx-auto px-2 max-mb:px-0 grid grid-cols-5 max-tl:grid-cols-7 gap-4 justify-start items-center">
                <NavCategoryHeader />
                <NavBarHeaderLink />
            </ul>
        </div>
    );
};

export default NavbarHeader;
