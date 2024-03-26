import React, { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";
import RecursiveCategory2 from "@/Utils/RecursiveCategory2";

const NavCategory = ({ isHide, categories }) => {
    const [isHideNav, setIsHideNav] = useState(isHide);
    const [isTabletScreen, setIsTabletScreen] = useState(isHide);
    const [hoveredItem, setHoveredItem] = useState(null);
    const [dbCategories] = useState(RecursiveCategory2(categories));

    useEffect(() => {
        const handleResize = () => {
            setIsHideNav(window.innerWidth < 1024);
            setIsTabletScreen(window.innerWidth < 1024);
        };

        const handle = isHide
            ? undefined
            : window.addEventListener("resize", handleResize);

        return () =>
            handle && window.removeEventListener("resize", handleResize);
    }, [isHide]);

    const tabletScreenCategories = (category) => {
        const commonClass =
            "px-4 py-2 w-full flex items-center justify-between gap-2 hover:bg-white hover:text-blue-500 transition-all before:content-[''] before:absolute before:right-[-30px] before:top-0 before:p-5";
        const handleClick = () =>
            setHoveredItem(hoveredItem == category?.id ? null : category?.id);

        return (
            <>
                {!isTabletScreen ? (
                    <Link
                        href={route("productListByCategory", category?.id)}
                        className={commonClass}
                    >
                        <span>{category?.name}</span>
                        {category?.children.length > 0 && (
                            <i className="fa-solid fa-caret-right text-lg"></i>
                        )}
                    </Link>
                ) : category?.children.length > 0 ? (
                    <span onClick={handleClick} className={`${commonClass}`}>
                        <Link
                            href={route("productListByCategory", category?.id)}
                        >
                            {category?.name}
                        </Link>
                        {hoveredItem == category?.id ? (
                            <i className="fa-solid fa-caret-down text-lg"></i>
                        ) : (
                            <i className="fa-solid fa-caret-right text-lg"></i>
                        )}
                    </span>
                ) : (
                    <Link
                        onClick={handleClick}
                        className={commonClass}
                        href={route("productListByCategory", category?.id)}
                    >
                        <span>{category?.name}</span>
                    </Link>
                )}
            </>
        );
    };

    const childrenCategories = (category) => {
        return (
            <>
                {category?.children.length > 0 &&
                    hoveredItem == category?.id && (
                        <ul
                            className={`${
                                !isTabletScreen &&
                                "absolute top-0 left-[102%] min-w-[250px] rounded-xl py-2 shadow-lg transition-all"
                            } bg-blue-500`}
                        >
                            {category?.children?.map((child) => (
                                <li key={child?.id}>
                                    <Link
                                        href={route("productListByCategory", child?.id)}
                                        className="px-6 py-2 w-full flex items-center justify-between gap-2 hover:bg-white hover:text-blue-500 transition-all"
                                    >
                                        <span>{child?.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
            </>
        );
    };

    const dataCategories = (categories) => {
        return (
            <ul
                className={`dropdown flex flex-col text-white transition-all ${
                    isHideNav ? "hidden" : ""
                }`}
            >
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
                        {tabletScreenCategories(category)}
                        {childrenCategories(category)}
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <div className="py-2 rounded-xl shadow-lg bg-blue-600">
            <h2
                className="flex items-center px-4 py-2 cursor-pointer gap-3 text-md text-white font-semibold uppercase"
                onClick={() => setIsHideNav(!isHideNav)}
            >
                <i className="fa-solid fa-bars"></i>
                <span>Danh mục sản phẩm</span>
            </h2>
            {dataCategories(dbCategories)}
        </div>
    );
};

export default NavCategory;
