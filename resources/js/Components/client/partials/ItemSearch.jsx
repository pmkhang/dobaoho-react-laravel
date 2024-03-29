import React from "react";
import { Link } from "@inertiajs/react";
import { Rating } from "flowbite-react";
const ItemSearch = ({ product }) => {
    return (
        <li>
            <Link
                href={route("product-detail", product.id)}
                className="flex items-center justify-between hover:bg-gray-200 p-2"
            >
                <div className="flex items-center gap-4">
                    <img
                        src={product?.product_images[0]?.image}
                        alt=""
                        className="w-12 h-12 object-cover rounded-full"
                    />
                    <p className="text-lg font-semibold">{product?.name}</p>
                </div>
                <Rating>
                    {Array.from({ length: product?.rate_avg }, (_, j) => (
                        <Rating.Star key={j} />
                    ))}
                    {Array.from({ length: 5 - product?.rate_avg }, (_, j) => (
                        <Rating.Star filled={false} key={j} />
                    ))}
                </Rating>
            </Link>
        </li>
    );
};

export default ItemSearch;
