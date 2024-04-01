import { usePage, Link } from "@inertiajs/react";
import DesktopNav from "./DesktopNav";
import LogoHeader from "./LogoHeader";
import MobileNav from "./MobileNav";
import SearchHeader from "./SearchHeader";
import TabletNav from "./TabletNav";
import Navbar from "@/Components/client/partials/Navbar";

const Header = ({ setIsShowNav, setIsShowSearch }) => {
    const user = usePage().props.auth.user;
    const countProductCart = usePage().props.countProductCart;

    return (
        <header className="w-full shadow-lg bg-white max-mb:fixed top-0 right-0 left-0 z-30">
            <div className="w-full max-w-dt my-0 mx-auto h-fit py-4 max-tl:py-3 flex justify-between items-center px-2">
                <LogoHeader />
                <MobileNav
                    setIsShowNav={setIsShowNav}
                    setIsShowSearch={setIsShowSearch}
                />
                <SearchHeader />
                <DesktopNav user={user} countProductCart={countProductCart} />
            </div>
            <TabletNav user={user} />
            <Navbar isTablet={false} />
        </header>
    );
};

export default Header;
