import React from "react";
import ProductCard from "./ProductCard";

const HomeGridProduct = ({ title, cols = 4 }) => {
    return (
        <div className="w-full min-h-[200px] max-tl:px-4 mb-8 max-tl:mt-8">
            <div className="flex items-center justify-between">
                <h2 className="uppercase font-bold text-3xl">{title}</h2>
                <a href="" className="underline max-mb:hidden">
                    Xem tất cả
                </a>
            </div>
            <div
                className={`w-full mt-4 grid grid-cols-${cols} gap-4 max-tl:grid-cols-3 max-mb:grid-cols-1`}
            >
                {[...Array(8)].map((_, i) => (
                    <ProductCard key={i} />
                ))}
            </div>
            <div className="mt-3 text-end">
                <a href="#" className="underline p-2 min-mb:hidden">
                    Xem tất cả
                </a>
            </div>
        </div>
    );
};

export default HomeGridProduct;
