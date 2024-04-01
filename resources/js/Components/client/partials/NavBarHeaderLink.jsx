import { Link } from "@inertiajs/react";

const NavBarHeaderLink = () => {
    return (
        <li className="col-span-4 max-tl:col-span-5 max-mb:hidden">
            <ul className="flex items-center uppercase font-bold gap-4 text-sm">
                <li className="h-full">
                    <Link
                        href="/"
                        className="px-4 hover:text-blue-600 transition-all"
                    >
                        Trang chủ
                    </Link>
                </li>
                <li className="h-full">
                    <Link
                        href="/gioi-thieu"
                        className="px-4 hover:text-blue-600 transition-all"
                    >
                        Giới thiệu
                    </Link>
                </li>
                <li className="h-full">
                    <Link className="px-4 hover:text-blue-600 transition-all">
                        Chính sách bán hàng
                    </Link>
                </li>
                <li className="h-full">
                    <Link
                        href="/lien-he"
                        className="px-4 hover:text-blue-600 transition-all"
                    >
                        Liên hệ
                    </Link>
                </li>
            </ul>
        </li>
    );
};

export default NavBarHeaderLink;
