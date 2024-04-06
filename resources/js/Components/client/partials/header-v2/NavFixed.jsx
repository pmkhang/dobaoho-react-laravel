import NavCategories from "@/Components/client/partials/header-v2/NavCategories";
import Search from "@/Components/client/partials/header-v2/Search";
import { Link } from "@inertiajs/react";
import React from "react";

const NavFixed = () => {
    return (
        <ul className="grid grid-cols-12 items-center gap-4 font-bold px-2 max-mb:p-0">
            <li className="col-span-3 max-tl:col-span-4 max-mb:col-span-12 py-2 max-mb:p-0">
                <NavCategories />
            </li>
            <li className="col-span-9 flex items-center justify-between max-tl:col-span-8 max-mb:hidden">
                <ul className="flex items-center gap-2 text-white">
                    <li>
                        <Link className="py-2 px-3 max-tl:px-2 hover:text-secondary transition-all">
                            Trang chủ
                        </Link>
                    </li>
                    <li>
                        <Link className="py-2 px-3 max-tl:px-2 hover:text-secondary transition-all">
                            Giới thiệu
                        </Link>
                    </li>
                    <li>
                        <Link className="py-2 px-3 max-tl:px-2 hover:text-secondary transition-all">
                            Chính sách bán hàng
                        </Link>
                    </li>
                    <li>
                        <Link className="py-2 px-3 max-tl:px-2 hover:text-secondary transition-all">
                            Liên hệ
                        </Link>
                    </li>
                </ul>
                <div className="py-1 max-tl:hidden">
                    <Search />
                </div>
            </li>
        </ul>
    );
};

export default NavFixed;
