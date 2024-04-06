import { Link } from "@inertiajs/react";

const NavBarHeaderLink = () => {
    return (
        <li className="col-span-9 max-tl:col-span-5 max-mb:hidden">
            <ul className="flex items-center uppercase text-white font-bold gap-4 text-xs">
                <li className="h-full">
                    <Link
                        href="/"
                        className="px-4 hover:text-orange-400 transition-all"
                    >
                        Trang chủ
                    </Link>
                </li>
                <li className="h-full">
                    <Link
                        href="/gioi-thieu"
                        className="px-4 hover:text-orange-400 transition-all"
                    >
                        Giới thiệu
                    </Link>
                </li>
                <li className="h-full">
                    <Link className="px-4 hover:text-orange-400 transition-all">
                        Chính sách bán hàng
                    </Link>
                </li>
                <li className="h-full">
                    <Link
                        href="/lien-he"
                        className="px-4 hover:text-orange-400 transition-all"
                    >
                        Liên hệ
                    </Link>
                </li>
                <li>
                    <a
                        href="tel:0938505459"
                        className="p-2 px-4 font-bold hover:text-orange-400 transition-all"
                    >
                        Hotline: 0938505459
                    </a>
                </li>
            </ul>
        </li>
    );
};

export default NavBarHeaderLink;
