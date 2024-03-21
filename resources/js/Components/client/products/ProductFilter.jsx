import React from "react";
import { useForm } from "@inertiajs/react";
import Selector from "@/Components/Selector";

const orderBy = [
    { id: "1", name: "Giá thấp đến cao" },
    { id: "2", name: "Giá cao đến thấp" },
    { id: "3", name: "Đánh giá cao đến thấp" },
    { id: "4", name: "Đánh giá cao đến thấp" },
];
const ProductFilter = ({ category }) => {
    const { data, setData, get } = useForm({
        filter: "",
    });

    return (
        <div className="col-span-4 ">
            <div className="w-[240px] flex gap-4 items-center rounded-xl bg-white">
                {/* {selectors.map((selector, index) => (
                    <Selector
                        key={index}
                        optionPlaceHolder={selector.optionPlaceHolder}
                        value={selector.value}
                        onChange={selector.onChange}
                        options={selector.options}
                        className={selector?.className}
                    />
                ))} */}
            </div>
        </div>
    );
};

export default ProductFilter;
