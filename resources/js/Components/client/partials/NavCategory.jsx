import React, { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";

const NavCategory = ({ isHide, categories }) => {
    const [isHideNav, setIsHideNav] = useState(isHide);
    const [isTabletScreen, setIsTabletScreen] = useState(isHide);
    const [hoveredItem, setHoveredItem] = useState(null);
    useEffect(() => {
        if (!isHide) {
            window.addEventListener("resize", () =>
                setIsHideNav(window.innerWidth < 1024)
            );
            return () => {
                window.removeEventListener("resize", () =>
                    setIsHideNav(window.innerWidth < 1024)
                );
            };
        }
    }, []);
    useEffect(() => {
        window.addEventListener("resize", () =>
            setIsTabletScreen(window.innerWidth < 1024)
        );
        return () => {
            window.removeEventListener("resize", () =>
                setIsTabletScreen(window.innerWidth < 1024)
            );
        };
    }, []);
    return (
        <div className="py-2 rounded-xl shadow-lg bg-blue-600">
            <h2
                className="flex items-center px-4 py-2 cursor-pointer gap-3 text-md text-white font-semibold uppercase"
                onClick={() => setIsHideNav(!isHideNav)}
            >
                <i className="fa-solid fa-bars"></i>
                <span>Danh mục sản phẩm</span>
            </h2>
            {!isHideNav && (
                <ul className="dropdown flex flex-col text-white transition-all">
                    {categories?.map((category) => (
                        <li
                            key={category?.id}
                            className="relative"
                            onMouseEnter={() =>
                                isTabletScreen || setHoveredItem(category?.id)
                            }
                            onMouseLeave={() =>
                                isTabletScreen || setHoveredItem(null)
                            }
                        >
                            {!isTabletScreen ? (
                                <Link className="px-4 py-2 w-full flex items-center justify-between gap-2 hover:bg-white hover:text-blue-500 transition-all before:content-[''] before:absolute before:right-[-30px] before:top-0 before:p-5">
                                    <span>{category?.name}</span>
                                    {category?.children.length > 0 && (
                                        <i className="fa-solid fa-caret-right text-lg"></i>
                                    )}
                                </Link>
                            ) : category?.children.length > 0 ? (
                                <span
                                    onClick={() => {
                                        if (hoveredItem === category?.id) {
                                            setHoveredItem(null);
                                        } else {
                                            setHoveredItem(category?.id);
                                        }
                                    }}
                                    className="px-4 py-2 w-full flex items-center justify-between gap-2 hover:bg-white hover:text-blue-500 transition-all before:content-[''] before:absolute before:right-[-30px] before:top-0 before:p-5"
                                >
                                    <Link>{category?.name}</Link>
                                    {category?.children.length > 0 &&
                                        (hoveredItem === category?.id ? (
                                            <i className="fa-solid fa-caret-down text-lg"></i>
                                        ) : (
                                            <i className="fa-solid fa-caret-right text-lg"></i>
                                        ))}
                                </span>
                            ) : (
                                <Link
                                    href="#"
                                    onClick={() => {
                                        if (hoveredItem === category?.id) {
                                            setHoveredItem(null);
                                        } else {
                                            setHoveredItem(category?.id);
                                        }
                                    }}
                                    className="px-4 py-2 w-full flex items-center justify-between gap-2 hover:bg-white hover:text-blue-500 transition-all before:content-[''] before:absolute before:right-[-30px] before:top-0 before:p-5"
                                >
                                    <span>{category?.name}</span>
                                </Link>
                            )}
                            {category?.children.length > 0 &&
                                hoveredItem === category?.id && (
                                    <ul
                                        className={`${
                                            !isTabletScreen &&
                                            "absolute top-0 right-[-340px] w-full rounded-xl py-2 shadow-lg transition-all"
                                        } bg-blue-500`}
                                    >
                                        {category.children.map((child) => (
                                            <li key={child.id}>
                                                <Link
                                                    href="#"
                                                    className="px-4 py-2 w-full flex items-center justify-between gap-2 hover:bg-white hover:text-blue-500 transition-all"
                                                >
                                                    <span className="pl-4">
                                                        {child.name}
                                                    </span>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default NavCategory;
