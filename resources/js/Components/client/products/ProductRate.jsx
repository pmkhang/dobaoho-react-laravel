import React from "react";
import { Rating } from "flowbite-react";
const ProductRate = () => {
    return (
        <div className="col-span-5 mt-10 px-4">
            <h3 className="text-3xl font-bold mb-10">Đánh giá sản phẩm:</h3>

            <Rating className="mb-2">
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <Rating.Star filled={false} />
                <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                    4.95 trên 5
                </p>
            </Rating>
            <p className="mb-4 text-sm font-medium text-gray-500 dark:text-gray-400">
                1,745 tổng số đánh giá
            </p>
            <Rating.Advanced percentFilled={70} className="mb-2">
                5 sao
            </Rating.Advanced>
            <Rating.Advanced percentFilled={17} className="mb-2">
                4 sao
            </Rating.Advanced>
            <Rating.Advanced percentFilled={8} className="mb-2">
                3 sao
            </Rating.Advanced>
            <Rating.Advanced percentFilled={4} className="mb-2">
                2 sao
            </Rating.Advanced>
            <Rating.Advanced percentFilled={1}>1 sao</Rating.Advanced>
        </div>
    );
};

export default ProductRate;
