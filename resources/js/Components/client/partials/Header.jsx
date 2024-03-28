import { usePage, Link } from "@inertiajs/react";
import DesktopNav from "./DesktopNav";
import LogoHeader from "./LogoHeader";
import MobileNav from "./MobileNav";
import SearchHeader from "./SearchHeader";
import TabletNav from "./TabletNav";

const Header = () => {
    const user = usePage().props.auth.user;
    const countProductCart = usePage().props.countProductCart;
    return (
        <header className="w-full shadow-lg sticky top-0 bg-white z-10">
            <div className="w-full max-w-dt my-0 mx-auto h-fit py-4 flex justify-between items-center px-2 gap-10">
                <LogoHeader />
                <MobileNav />
                <SearchHeader />
                <DesktopNav user={user} countProductCart={countProductCart} />
            </div>
            <TabletNav user={user} />
            <div className="flex items-center justify-center pb-4">
                <ul className="flex items-center gap-6">
                    <li>
                        <Link
                            href="/"
                            className="p-2 px-4 font-bold hover:text-blue-600 transition-all"
                        >
                            Trang chủ
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#"
                            className="p-2 px-4 font-bold hover:text-blue-600 transition-all"
                        >
                            Giới thiệu
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#"
                            className="p-2 px-4 font-bold hover:text-blue-600 transition-all"
                        >
                            Chính sách bán hàng
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/lien-he"
                            className="p-2 px-4 font-bold hover:text-blue-600 transition-all"
                        >
                            Liên hệ
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
