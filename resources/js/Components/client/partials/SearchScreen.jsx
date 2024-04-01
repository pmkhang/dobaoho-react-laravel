import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useForm } from "@inertiajs/react";
import ItemSearch from "@/Components/client/partials/ItemSearch";

const SearchScreen = ({ setIsShowSearch }) => {
    const [dataSearch, setDataSearch] = useState([]);
    const [search, setSearch] = useState("");
    const debounce = (callback, delay) => {
        let timer;
        return (data) => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                callback(data);
            }, delay);
        };
    };

    const debounceSearch = useCallback(
        debounce((data) => {
            if (data.length >= 2) {
                fetchDataSearch(data);
            }
        }, 300),
        []
    );

    const handleInputChange = (e) => {
        const { value } = e.target;
        setSearch(value);
    };

    useEffect(() => {
        if (search != "") {
            debounceSearch(search);
        }
    }, [search]);

    useEffect(() => {
        if (search == "") {
            setDataSearch([]);
        }
    }, [search]);

    const fetchDataSearch = async (data) => {
        try {
            const res = await axios.post(
                route("searchProducts", { search: data })
            );
            if (res?.status) {
                setDataSearch(res?.data?.products);
            }
        } catch (error) {
            setDataSearch([]);
        }
    };
    const { get } = useForm();
    const submit = (e) => {
        e.preventDefault();
        get(route("searchProductPage", { search }));
    };

    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 backdrop-blur p-4 bg-gray-900 bg-opacity-90 z-50">
            <div
                className="w-full flex justify-end px-4"
                onClick={(e) => {
                    e.stopPropagation();
                    setIsShowSearch(false);
                }}
            >
                <span className="text-end text-xl text-white">
                    <i className="fa-solid fa-xmark"></i>
                </span>
            </div>
            <div
                className="flex flex-col mt-10"
                onClick={(e) => {
                    e.stopPropagation();
                    setIsShowSearch(true);
                }}
            >
                <form className="flex items-center gap-3" onSubmit={submit}>
                    <input
                        type="search"
                        className="inline-block w-full rounded-lg ring-1 ring-gray-300 outline-none border-none"
                        placeholder="Tìm kiếm ..."
                        value={search}
                        onChange={handleInputChange}
                        required
                        onFocus={() => {
                            debounceSearch(search);
                        }}
                    />
                    <button
                        type="submit"
                        className="py-2 bg-blue-600 text-white px-3 rounded-xl ring-2 ring-white"
                    >
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </form>
                {dataSearch.length > 0 && (
                    <ul className="py-2 px-3 bg-white mt-4 rounded-lg ring-2 ring-blue-500 max-h-[500px] overflow-y-scroll">
                        {dataSearch?.map((i) => (
                            <ItemSearch
                                key={i?.id}
                                product={i}
                                isMobile={true}
                                onClick={() => {
                                    setIsShowSearch(false);
                                }}
                            />
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default SearchScreen;
