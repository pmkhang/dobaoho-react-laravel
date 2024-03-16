import React from "react";
import AuthButton from "./AuthButton";
import CartNav from "./CartNav";
import UserNav from "./UserNav";

const DesktopNav = ({ user, countProductCart }) => {
    return (
        <div className="w-1/3 flex justify-end max-tl:hidden">
            <ul className="flex items-center gap-2">
                <CartNav countProductCart={countProductCart} />
                {user ? <UserNav user={user} /> : <AuthButton />}
            </ul>
        </div>
    );
};

export default DesktopNav;
