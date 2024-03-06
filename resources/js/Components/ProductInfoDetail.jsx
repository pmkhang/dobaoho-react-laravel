import React, { useState } from "react";

const ProductInfoDetail = () => {
    const [activeButton, setActiveButton] = useState(null);
    const [quantity, setQuantity] = useState(1);

    const handleClick = (index) => {
        setActiveButton(index);
    };
    return (
        <div className="w-full min-h-[480px] col-span-3 max-tl:col-span-5 border-l-2 max-tl:border-l-0 p-4">
            <h5 className="font-semibold tracking-tight text-gray-900 text-3xl">
                Phản quang Không thấm nước Trọng lượng nhẹ Đạp xe Cảnh báo Công
                việc ban đêm
            </h5>
            <div className="flex items-center gap-3 mt-2.5 mb-5">
                <div className="flex items-center ">
                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                        <i className="fa-solid fa-star text-yellow-500"></i>
                        <i className="fa-solid fa-star text-yellow-500"></i>
                        <i className="fa-solid fa-star text-yellow-500"></i>
                        <i className="fa-solid fa-star text-yellow-500"></i>
                        <i className="fa-solid fa-star"></i>
                    </div>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded  ms-3">
                        4.0
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
                    Giá: 50.000 đ
                </strong>
            </div>
            <div className="mt-5">
                <strong className="text-xl">Phân loại:</strong>
                <div className="grid grid-cols-6 max-mb:grid-cols-3 mt-2 gap-3">
                    {[...Array(10)].map((_, i) => (
                        <button
                            key={i}
                            className={`w-full h-10 bg-blue-500 flex items-center cursor-pointer justify-center text-white rounded-lg ${
                                activeButton === i
                                    ? "ring-4 ring-orange-400"
                                    : ""
                            }`}
                            onClick={() => handleClick(i)}
                        >
                            Loại {i + 1}
                        </button>
                    ))}
                </div>
            </div>
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
                <button className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center">
                    Thêm vào giỏ hàng
                </button>
                <button className="w-full text-white border-2 border-blue-600 bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                    Mua ngay
                </button>
            </div>
        </div>
    );
};

export default ProductInfoDetail;
