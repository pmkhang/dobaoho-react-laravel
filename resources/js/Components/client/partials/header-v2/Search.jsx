import { useForm } from "@inertiajs/react";
import { useState } from "react";
const Search = () => {
    const [search, setSearch] = useState("");
    const { get } = useForm();
    const submit = (e) => {
        e.preventDefault();
        get(route("searchProductPage", { search }));
    };

    return (
        <form className="relative px-2 flex items-center" onSubmit={submit}>
            <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Tìm kiếm sản phẩm"
                className="text-gray-900 text-sm rounded-lg focus:ring-0 outline-none block min-w-[300px] p-2.5"
                required
            />
            <button
                type="submit"
                className="absolute right-3 bg-primary hover:bg-primary-darker py-1 px-2 text-white rounded-md"
            >
                <i className="fa-solid fa-magnifying-glass"></i>
            </button>
        </form>
    );
};

export default Search;
