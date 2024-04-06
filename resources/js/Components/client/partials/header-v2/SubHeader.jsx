import React from "react";
import { Link } from "@inertiajs/react";

const SubHeader = () => {
    return (
        <div className="max-w-dt mx-auto flex items-center justify-between ">
            <ul className="flex items-center gap-3 font-bold text-lg text-primary pl-3">
                <li>
                    <a
                        href="https://zalo.me/0938505459"
                        className="hover:text-secondary transition-all "
                    >
                        Zalo
                    </a>
                </li>
                <li>
                    <a
                        href="mailto:quangtruongthinh79@gmail"
                        className="hover:text-secondary transition-all "
                    >
                        <i className="fa-solid fa-envelope"></i>
                    </a>
                </li>
                <li>
                    <a href="tel:0938505459" className="hover:text-secondary transition-all ">
                        Hotline: 0938505459
                    </a>
                </li>
            </ul>
            <ul className="flex items-center gap-2 font-bold">
                <li className="flex items-center gap-2">
                    <i className="fa-solid fa-cart-shopping"></i>
                    <span>Giỏ hàng</span>
                </li>
                <li>
                    <Link
                        href={route("login")}
                        className="px-2 text-primary-darker hover:underline"
                    >
                        Đăng nhập
                    </Link>
                </li>
                <li>
                    <Link
                        href={route("register")}
                        className="px-2 text-primary-darker hover:underline"
                    >
                        Đăng ký
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default SubHeader;
