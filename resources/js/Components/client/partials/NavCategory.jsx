import RecursiveCategory2 from "@/Utils/RecursiveCategory2";
import { Link } from "@inertiajs/react";
import { useEffect, useState } from "react";
import useSWR from "swr";

const NavCategory = ({ isHide }) => {
    const [isHideNav, setIsHideNav] = useState(isHide);
    const [isTabletScreen, setIsTabletScreen] = useState(isHide);
    const [hoveredItem, setHoveredItem] = useState(null);
    const [dbCategories, setDbCategories] = useState([]);
    const fetcheCategory = (...args) =>
        fetch(...args).then((res) => res.json());

    const { data } = useSWR(route("getCategories"), fetcheCategory, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    });

    useEffect(() => {
        if (data?.status) {
            setDbCategories(RecursiveCategory2(data?.categories));
        }
    }, [data]);

    useEffect(() => {
        const handleResize = () => {
            setIsHideNav(window.innerWidth <= 1025);
            setIsTabletScreen(window.innerWidth <= 1025);
        };

        const handle = isHide
            ? undefined
            : window.addEventListener("resize", handleResize);

        return () =>
            handle && window.removeEventListener("resize", handleResize);
    }, [isHide]);

    const tabletScreenCategories = (category) => {
        const commonClass =
            "px-4 py-2 w-full flex items-center justify-between gap-2 hover:bg-[#054e0a] hover:text-white transition-all before:content-[''] before:absolute before:right-[-30px] before:top-0 before:p-5";
        const handleClick = () =>
            setHoveredItem(hoveredItem == category?.id ? null : category?.id);

        return (
            <>
                {!isTabletScreen ? (
                    <>
                        {category?.children.length > 0 ? (
                            <span className={commonClass}>
                                <span>{category?.name}</span>
                                <i className="fa-solid fa-caret-right text-lg"></i>
                            </span>
                        ) : (
                            <Link
                                href={route(
                                    "productListByCategory",
                                    category?.id
                                )}
                                className={commonClass}
                            >
                                <span>{category?.name}</span>
                            </Link>
                        )}
                    </>
                ) : category?.children.length > 0 ? (
                    <span onClick={handleClick} className={`${commonClass}`}>
                        {category?.name}
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
                                "absolute z-50 top-[-7px] left-[102%] min-w-[250px] rounded-xl py-2 shadow-lg transition-all"
                            } bg-[#c9d7cb]`}
                        >
                            {category?.children?.map((child) => (
                                <li key={child?.id}>
                                    <Link
                                        href={route(
                                            "productListByCategory",
                                            child?.id
                                        )}
                                        className="px-6 py-2 w-full flex items-center justify-between gap-2 hover:bg-[#054e0a] border-t-2 hover:text-white transition-all"
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
                className={`dropdown flex flex-col  transition-all  font-bold ${
                    isHideNav ? "hidden" : ""
                }`}
            >
                {categories?.map((category) => (
                    <li
                        key={category?.id}
                        className="relative border-t-2"
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
        <div className="py-2 rounded-xl border border-gray-300 shadow-lg bg-[#bdd1bf] max-tl:hidden">
            <h2
                className="flex items-center px-4 py-2 cursor-pointer gap-3 text-md  font-semibold uppercase"
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
