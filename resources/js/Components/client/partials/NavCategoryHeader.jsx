import RecursiveCategory2 from "@/Utils/RecursiveCategory2";
import { Link } from "@inertiajs/react";
import { useEffect, useState } from "react";
import useSWR from "swr";

const NavCategoryHeader = () => {
    const [isShowCategory, setIsShowCategory] = useState(false);
    const [dbCategories, setDbCategories] = useState([]);
    const [hoveredItem, setHoveredItem] = useState(null);
    const [isTabletScreen] = useState(true);
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

    const CategoryItems = ({ category }) => {
        const commonClass =
            "px-4 py-2 w-full flex items-center justify-between gap-2 hover:bg-white hover:text-blue-500 transition-all before:content-[''] before:absolute before:right-[-30px] before:top-0 before:p-5";
        const handleClick = () =>
            setHoveredItem(hoveredItem == category?.id ? null : category?.id);
        return (
            <>
                {category?.children.length > 0 ? (
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

    const ChildrenCategories = ({ category }) => {
        return (
            <>
                {category?.children.length > 0 &&
                    hoveredItem == category?.id && (
                        <ul
                            className={`${
                                !isTabletScreen &&
                                "absolute z-50 top-0 left-[102%] min-w-[250px] rounded-xl py-2 shadow-lg transition-all"
                            } bg-gray-50`}
                        >
                            {category?.children?.map((child) => (
                                <li key={child?.id}>
                                    <Link
                                        href={route(
                                            "productListByCategory",
                                            child?.id
                                        )}
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

    return (
        <li
            className={`col-span-1 max-tl:col-span-2 max-mb:col-span-7 max-mb:bg-white bg-gray-50 h-full flex items-center px-4 relative `}
            onMouseEnter={() => {
                setIsShowCategory(true);
            }}
            onMouseLeave={() => {
                setIsShowCategory(false);
            }}
        >
            <p
                className="flex items-center gap-2 w-full"
                onClick={() => {
                    setIsShowCategory(!isShowCategory);
                }}
            >
                <i className="fa-solid fa-bars"></i>
                <span className="uppercase text-base font-bold">
                    Danh mục sản phẩm
                </span>
            </p>
            {isShowCategory && (
                <ul className="absolute top-10 right-0 font-bold left-0 border bg-gray-50 shadow-xl pb-2 transition-all flex flex-col rounded-b-xl">
                    {dbCategories?.map((i) => (
                        <li
                            key={i?.id}
                            className="w-full border-t-2 border-gray-100 relative"
                            onMouseEnter={() => setHoveredItem(i?.id)}
                            onMouseLeave={() => setHoveredItem(null)}
                        >
                            <CategoryItems category={i} />
                            <ChildrenCategories category={i} />
                        </li>
                    ))}
                </ul>
            )}
        </li>
    );
};

export default NavCategoryHeader;
