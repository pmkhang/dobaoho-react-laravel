import React from "react";
import { Link } from "@inertiajs/react";

const ProductCard = () => {
    return (
        <div className="w-full rounded-lg">
            <div className="w-full bg-white border border-gray-200 rounded-lg shadow">
                <Link href={route("product-detail")}>
                    <img
                        className="w-full h-[150px] p-4 object-contain rounded-t-lg"
                        src="https://img.lazcdn.com/g/p/a63e8931ab32a237f711c97e779fdae4.jpg_960x960q80.jpg_.webp"
                        alt="product image"
                    />
                </Link>
                <div className="px-5 pb-5 mt-4">
                    <div className="flex items-center mt-2.5 mb-5">
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
                    <a href="/san-pham/1">
                        <h5 className="min-h-[84px] font-semibold tracking-tight text-gray-900 ">
                            {`${"Phản quang Không thấm nước Trọng lượng nhẹ Đạp xe Cảnh báo Công việc ban đêm".substring(
                                0,
                                60
                            )}${
                                "Phản quang Không thấm nước Trọng lượng nhẹ Đạp xe Cảnh báo Công việc ban đêm"
                                    .length > 60
                                    ? "..."
                                    : ""
                            }`}
                        </h5>
                    </a>
                    <div className="flex flex-col gap-3 items-start">
                        <span className="text-xl font-bold text-gray-900">
                            Giá: 50.000 đ
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
