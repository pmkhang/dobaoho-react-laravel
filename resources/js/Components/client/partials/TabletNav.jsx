import React from "react";
import AuthButton from "./AuthButton";
import CartNav from "./CartNav";
import UserNav from "./UserNav";

const TabletNav = ({ user }) => {
    return (
        <nav className="w-full max-w-dt my-0 mx-auto  h-fit max-tl:px-4 max-tl:pb-3 max-tl:flex max-mb:hidden">
            <div className="flex-1 justify-end min-tl:hidden max-tl:flex">
                <ul className="flex items-center gap-2">
                    <CartNav />
                    {user ? <UserNav user={user} /> : <AuthButton />}
                </ul>
            </div>
        </nav>
    );
};

export default TabletNav;
