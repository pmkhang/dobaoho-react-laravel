import HomeGridProduct from "@/Components/client/products/HomeGridProduct";
import NavCategory from "@/Components/client/partials/NavCategory";
import ProductDescDetail from "@/Components/client/products/ProductDescDetail";
import ProductImageDetail from "@/Components/client/products/ProductImageDetail";
import ProductInfoDetail from "@/Components/client/products/ProductInfoDetail";
import ProductRateDetail from "@/Components/client/products/ProductRateDetail";
import ClientLayout from "@/Layouts/ClientLayout";
import React from "react";
import { Head } from "@inertiajs/react";

const ProductDetail = () => {
    return (
        <ClientLayout title="Sản phẩm">
            <NavCategory isHide={true} />
            <div className="min-h-[1000px] bg-white mt-4 rounded-xl">
                <div className="grid grid-cols-5 gap-4 p-4 items-start">
                    <ProductImageDetail />
                    <ProductInfoDetail />
                    <ProductDescDetail />
                    <ProductRateDetail />
                </div>
            </div>
            <HomeGridProduct title={"Sản phẩm liên quan"} />
        </ClientLayout>
    );
};

export default ProductDetail;
