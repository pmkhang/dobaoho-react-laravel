import React from "react";
import { Link } from "@inertiajs/react";
import { Rating } from "flowbite-react";
import convertVietnameseString from "@/Utils/convertVietnameseString";
const ItemSearch = ({ product, isMobile, onClick }) => {
    return (
        <li>
            <Link
                href={route("product-detail", [
                    convertVietnameseString(product?.name),
                    product?.id,
                ])}
                className="flex items-center justify-between  hover:bg-gray-200 p-2"
                onClick={onClick && onClick}
            >
                <div className="flex items-center gap-4">
                    <img
                        src={product?.product_images[0]?.image}
                        alt=""
                        className="w-12 h-12 object-cover rounded-full"
                    />
                    <p className="text-lg font-semibold max-mb:text-sm">
                        {product?.name}
                    </p>
                </div>
                {!isMobile && (
                    <Rating>
                        {Array.from({ length: product?.rate_avg }, (_, j) => (
                            <Rating.Star key={j} />
                        ))}
                        {Array.from(
                            { length: 5 - product?.rate_avg },
                            (_, j) => (
                                <Rating.Star filled={false} key={j} />
                            )
                        )}
                    </Rating>
                )}
            </Link>
        </li>
    );
};

export default ItemSearch;
