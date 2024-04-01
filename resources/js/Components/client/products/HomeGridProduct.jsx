import React from "react";
import ProductCard from "./ProductCard";
import { Link } from "@inertiajs/react";

const HomeGridProduct = ({ title, cols = 4, id, products }) => {
    return (
        <div className="w-full min-h-[200px] max-tl:px-4 max-tl:mt-2">
            <div className="flex items-center justify-between">
                <h2 className="uppercase font-bold text-xl border-l-[4px] pl-4 py-2 border-blue-600">{title}</h2>
                <Link
                    href={route("productListByCategory", id)}
                    className="underline max-mb:hidden"
                >
                    Xem tất cả
                </Link>
            </div>
            <div
                className={`w-full mt-4 grid grid-cols-${cols} gap-4 max-tl:grid-cols-3 max-mb:grid-cols-1`}
            >
                {products?.map((i) => (
                    <ProductCard
                        key={i?.id}
                        id={i?.id}
                        rate_avg={i?.rate_avg}
                        name={i?.name}
                        price={i?.price}
                        img={i?.product_images[0]?.image}
                    />
                ))}
            </div>
            <div className="text-end min-mb:hidden mt-3">
                <Link
                    href={route("productListByCategory", id)}
                    className="underline p-2"
                >
                    Xem tất cả {title}
                </Link>
            </div>
        </div>
    );
};

export default HomeGridProduct;
