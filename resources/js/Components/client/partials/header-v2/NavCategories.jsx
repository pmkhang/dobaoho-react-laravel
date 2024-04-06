import { Dropdown } from "flowbite-react";
import RecursiveCategory2 from "@/Utils/RecursiveCategory2";
import { useForm } from "@inertiajs/react";
import { useEffect, useState } from "react";
import useSWR from "swr";
import CategoryChildren from "@/Components/client/partials/header-v2/CategoryChildren";

const NavCategories = () => {
    const [dbCategories, setDbCategories] = useState([]);
    const fetcheCategory = (...args) =>
        fetch(...args).then((res) => res.json());

    const { data } = useSWR(route("getCategories"), fetcheCategory, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    });
    const { get } = useForm();

    useEffect(() => {
        if (data?.status) {
            setDbCategories(RecursiveCategory2(data?.categories));
        }
    }, [data]);
    return (
        <Dropdown
            label=""
            dismissOnClick={false}
            renderTrigger={() => (
                <div className="flex items-center gap-2 px-3 py-2  uppercase bg-[#bdd1bf] rounded-lg max-mb:rounded-none">
                    <i className="fa-solid fa-bars"></i>
                    <span>Danh mục sản phẩm</span>
                </div>
            )}
            className="bg-[#bdd1bf] rounded-lg max-mb:!top-0 max-mb:!w-full max-mb:!left-[-4px]"
        >
            {dbCategories.map((category) => (
                <Dropdown.Item
                    key={category?.id}
                    className="border-t-2 hover:!bg-primary-darker hover:!text-white "
                    onClick={() => {
                        if (category?.children.length == 0) {
                            get(route("productListByCategory", category?.id));
                        }
                    }}
                >
                    <span className="w-full text-base text-start flex items-center justify-between">
                        {category?.children.length > 0 ? (
                            <CategoryChildren category={category} get={get} />
                        ) : (
                            <span>{category?.name}</span>
                        )}
                    </span>
                </Dropdown.Item>
            ))}
        </Dropdown>
    );
};

export default NavCategories;
