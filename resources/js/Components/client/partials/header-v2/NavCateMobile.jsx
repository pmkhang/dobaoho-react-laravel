import Search from "@/Components/client/partials/header-v2/Search";
import RecursiveCategory2 from "@/Utils/RecursiveCategory2";
import useSWR from "swr";
import { useEffect, useState } from "react";
import { Link, useForm } from "@inertiajs/react";

const NavCateMobile = () => {
    const [dbCategories, setDbCategories] = useState([]);
    const fetcheCategory = (...args) =>
        fetch(...args).then((res) => res.json());

    const { data } = useSWR(route("getCategories"), fetcheCategory, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    });
    const { get } = useForm();
    const [showChildren, setShowChildren] = useState({});

    const handleShowChild = (categoryId) => {
        setShowChildren((prevState) => ({
            ...prevState,
            [categoryId]: !prevState[categoryId],
        }));
    };

    useEffect(() => {
        if (data?.status) {
            setDbCategories(RecursiveCategory2(data?.categories));
        }
    }, [data]);
    const [setshowCategories, setSetshowCategories] = useState(false);
    return (
        <div className="min-mb:hidden w-full bg-primary-darker shadow-xl min-mb:fixed min-mb:top-0 min-mb:right-0 min-mb:left-0">
            <div className="max-w-dt mx-auto min-mb:hidden ">
                <div className="py-1 px-1 flex items-center justify-between">
                    <button
                        onClick={() => {
                            setSetshowCategories(true);
                        }}
                        className="ml-4 flex flex-col gap-1 min-mb:hidden"
                    >
                        <span className="py-0.5 px-3 bg-white rounded-md"></span>
                        <span className="py-0.5 px-3 bg-white rounded-md"></span>
                        <span className="py-0.5 px-3 bg-white rounded-md"></span>
                    </button>
                    <Search />
                </div>
            </div>
            <div
                className={`fixed bottom-0 top-0 right-0 left-0   ${
                    setshowCategories ? "block" : "hidden"
                }`}
            >
                <div
                    onClick={() => setSetshowCategories(false)}
                    className="absolute w-full h-screen backdrop-blur-sm bg-gray-900 bg-opacity-45"
                ></div>
                <div className="absolute w-3/4 h-screen bg-primary-darker text-white shadow-xl p-4 overflow-y-scroll">
                    <div className="text-end text-2xl">
                        <i className="fa-solid fa-xmark"></i>
                    </div>
                    <h3 className="flex items-center gap-3 font-bold uppercase text-lg mt-3">
                        <i className="fa-solid fa-bars"></i>
                        Danh mục sản phẩm
                    </h3>
                    <ul className="flex flex-col mt-4 text-primary-darker">
                        {dbCategories?.map((category) => (
                            <li key={category.id}>
                                {category?.children?.length > 0 && (
                                    <div className="p-2 inline-block w-full font-bold bg-[#f5f5f5] mb-2 rounded-lg">
                                        <p
                                            className="w-full flex items-center justify-between"
                                            onClick={() =>
                                                handleShowChild(category?.id)
                                            }
                                        >
                                            <span>{category?.name}</span>
                                            <i
                                                className={`fa-solid ${
                                                    showChildren[category.id]
                                                        ? "fa-sort-down pb-2"
                                                        : "fa-caret-right"
                                                } `}
                                            ></i>
                                        </p>
                                        {showChildren[category?.id] && (
                                            <ul className="mt-3 flex flex-col gap-1">
                                                {category?.children?.map(
                                                    (child) => (
                                                        <li key={child.id}>
                                                            <Link
                                                                href={route(
                                                                    "productListByCategory",
                                                                    child?.id
                                                                )}
                                                                className="pl-3 inline-block w-full font-bold bg-[#f5f5f5] mb-2 rounded-lg"
                                                            >
                                                                {child?.name}
                                                            </Link>
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        )}
                                    </div>
                                )}
                                <Link
                                    href={route(
                                        "productListByCategory",
                                        category?.id
                                    )}
                                    className="p-2 inline-block w-full font-bold bg-[#f5f5f5] mb-2 rounded-lg"
                                >
                                    {category?.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavCateMobile;
