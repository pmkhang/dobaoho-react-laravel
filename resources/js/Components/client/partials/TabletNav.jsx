import React from "react";
import AuthButton from "./AuthButton";
import CartNav from "./CartNav";
import UserNav from "./UserNav";
import Navbar from "@/Components/client/partials/Navbar";

const TabletNav = ({ user }) => {
    return (
        <nav className="w-full max-w-dt my-0 mx-auto flex items-center justify-between min-tl:justify-center max-mb:hidden">
            <Navbar isTablet={true} />
            <div className="min-tl:hidden max-tl:flex mr-6">
                <ul className="flex items-center gap-2">
                    {/* <CartNav /> */}
                    {user ? <UserNav user={user} /> : <AuthButton />}
                </ul>
            </div>
        </nav>
    );
};

export default TabletNav;
