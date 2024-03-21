import React from "react";
import { Link } from "@inertiajs/react";

const Sidebar = () => {
    const magnetment = [
        {
            route: route("category"),
            icon: <i className="fa-solid fa-layer-group"></i>,
            name: "Thể loại sản phẩm",
        },
        {
            route: route("product"),
            icon: <i className="fa-brands fa-codepen"></i>,
            name: "Sản phẩm",
        },
        {
            route: route("user"),
            icon: <i className="fa-solid fa-users"></i>,
            name: "Thành viên",
        },
        {
            route: route("order"),
            icon: <i className="fa-solid fa-truck-fast"></i>,
            name: "Đơn hàng",
        },
    ];
    return (
        <aside className="w-1/6 min-h-[calc(100vh-120px)] ml-2">
            <nav className="min-h-[calc(100vh-120px)] px-6 py-4 bg-gray-300 rounded-2xl">
                <ul className="flex flex-col gap-4">
                    <li>
                        <Link
                            href={route("dashboard")}
                            className="flex items-center justify-between px-4 py-2 transition-all bg-gray-100 rounded-lg hover:bg-gray-700 hover:text-white"
                        >
                            <span className="flex items-center gap-2">
                                <i className="fa-solid fa-gauge-high"></i>
                                Dashboard
                            </span>
                            <i className="text-xl fa-solid fa-caret-right"></i>
                        </Link>
                    </li>
                    <li>
                        <h3 className="text-lg font-semibold uppercase">
                            Quản lý:
                        </h3>
                        <ul className="flex flex-col gap-4 mt-2">
                            {magnetment.map((i, index) => (
                                <li key={index}>
                                    <Link
                                        href={i.route}
                                        className="flex items-center justify-between px-4 py-2 font-medium transition-all bg-gray-100 rounded-lg hover:bg-gray-700 hover:text-white"
                                    >
                                        <span className="flex items-center gap-2">
                                            {i.icon}
                                            {i.name}
                                        </span>
                                        <i className="text-xl fa-solid fa-caret-right"></i>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
