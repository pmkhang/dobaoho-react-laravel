import React, { useEffect, useState } from "react";
import { Link, useForm } from "@inertiajs/react";
import Button from "@/Components/Button";
import { toast } from "react-toastify";
import formatCurrency from "@/Utils/formatCurrency";
import { Pagination, Rating, Table } from "flowbite-react";

const ProductInfoDetail = ({ name, price, productId, rate_avg }) => {
    const [quantity, setQuantity] = useState(1);
    const { data, post, setData } = useForm({
        product_id: productId,
        quantity: 1,
    });
    const addToCart = () => {
        post(route("addProductToCart"));
        toast.success("Thêm vào giỏ hàng thành công");
    };
    useEffect(() => {
        setData("quantity", quantity);
    }, [quantity]);

    return (
        <div className="w-full min-h-[480px] col-span-3 max-tl:col-span-5 border-l-2 max-tl:border-l-0 p-4">
            <h5 className="font-semibold tracking-tight text-gray-900 text-3xl">
                {name}
            </h5>
            <div className="flex items-center gap-3 mt-2.5 mb-5">
                <div className="flex items-center ">
                    <Rating>
                        {+rate_avg > 0 &&
                            Array.from({ length: +rate_avg }, (_, j) => (
                                <Rating.Star key={j} />
                            ))}
                        {Array.from({ length: 5 - +rate_avg }, (_, j) => (
                            <Rating.Star filled={false} key={j} />
                        ))}
                    </Rating>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded  ms-3">
                        {rate_avg}
                    </span>
                </div>
                <div className="border-l-2 px-2">
                    <strong className="underline">100</strong>
                    <span> Đánh giá</span>
                </div>
                <div className="border-l-2 px-2">
                    <strong className="underline">500</strong>
                    <span> Đã bán</span>
                </div>
            </div>
            <div className=" p-3 bg-gray-100">
                <strong className="text-3xl text-blue-600">
                    Giá: {formatCurrency(+price)}
                </strong>
            </div>
            {/* <div className="mt-5">
                <strong className="text-xl">Phân loại:</strong>
                <div className="grid grid-cols-6 max-mb:grid-cols-3 mt-2 gap-3">
                    {[...Array(10)].map((_, i) => (
                        <Button
                            key={i}
                            className={`focus:ring-4 focus:ring-orange-400 ${
                                activeButton == i
                                    ? "ring-4 ring-orange-400"
                                    : ""
                            }`}
                            onClick={() => {
                                handleClick(i);
                            }}
                            text={"Loại " + (i + 1)}
                        />
                    ))}
                </div>
            </div> */}
            <div className="mt-5">
                <strong className="text-xl">Số lượng:</strong>
                <div className="flex items-center mt-3">
                    <button
                        id="minus"
                        className="w-10 h-10 flex  items-center justify-center border"
                        onClick={() =>
                            setQuantity(quantity > 1 ? quantity - 1 : 1)
                        }
                    >
                        <i className="fa-solid fa-minus"></i>
                    </button>
                    <span className="min-w-10 max-h-10 h-10 px-2 flex  items-center justify-center border">
                        {quantity}
                    </span>
                    <button
                        id="plus"
                        className="w-10 h-10 flex  items-center justify-center border"
                        onClick={() => setQuantity(quantity + 1)}
                    >
                        <i className="fa-solid fa-plus"></i>
                    </button>
                </div>
            </div>
            <div className="mt-5 flex gap-4 max-mb:flex-col">
                <Button
                    onClick={addToCart}
                    text={"Thêm vào giỏ hàng"}
                    outline
                />
                <Button text={"Mua ngay"} />
            </div>
        </div>
    );
};

export default ProductInfoDetail;
