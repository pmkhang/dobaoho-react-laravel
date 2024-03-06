import React from "react";
import ProductCard from "./ProductCard";

const HomeGridProduct = ({ title }) => {
    return (
        <div className="w-full mt-12 min-h-[200px]">
            <div className="flex items-center justify-between">
                <h2 className="uppercase font-bold text-3xl">{title}</h2>
                <a href="" className="underline">
                    Xem tất cả
                </a>
            </div>
            <div className="w-full mt-4 grid grid-cols-5 gap-4">
                {[...Array(10)].map((_, i) => (
                    <ProductCard key={i} />
                ))}
            </div>
        </div>
    );
};

export default HomeGridProduct;
