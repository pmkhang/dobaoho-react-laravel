import ItemSearch from "@/Components/client/partials/ItemSearch";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useForm } from "@inertiajs/react";

const SearchHeader = () => {
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
        <form className="w-3/5 max-mb:hidden relative" onSubmit={submit}>
            <div className="flex gap-2 max-tl:px-4">
                <input
                    type="search"
                    id="search"
                    className="block w-full p-3 text-sm text-gray-900 border-2 border-blue-600 rounded-lg shadow-md bg-gray-50 outline-none"
                    placeholder="Tìm kiếm"
                    value={search}
                    onChange={handleInputChange}
                    required
                    onFocus={() => {
                        debounceSearch(search);
                    }}
                />
                <button className="flex items-center justify-center w-[55px] text-white bg-blue-700 hover:bg-blue-800 transition-all focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 ">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </div>
            {dataSearch.length > 0 && (
                <div
                    className="absolute w-[calc(100%-63px)] top-14"
                >
                    <ul className="max-h-[300px] overflow-y-scroll flex flex-col  gap-2 ring-1 py-2 ring-gray-300 shadow-lg bg-white rounded-lg">
                        {dataSearch?.map((i) => (
                            <ItemSearch key={i?.id} product={i} />
                        ))}
                    </ul>
                </div>
            )}
        </form>
    );
};

export default SearchHeader;
