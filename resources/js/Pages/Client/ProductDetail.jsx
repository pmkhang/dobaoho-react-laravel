import HomeGridProduct from "@/Components/client/products/HomeGridProduct";
import NavCategory from "@/Components/client/partials/NavCategory";
import ProductDescDetail from "@/Components/client/products/ProductDescDetail";
import ProductImageDetail from "@/Components/client/products/ProductImageDetail";
import ProductInfoDetail from "@/Components/client/products/ProductInfoDetail";
import ProductRateDetail from "@/Components/client/products/ProductRateDetail";
import ClientLayout from "@/Layouts/ClientLayout";
import React from "react";
import { usePage } from "@inertiajs/react";
import ProductRate from "@/Components/client/products/ProductRate";

const ProductDetail = ({ categories }) => {
    return (
        <ClientLayout title="Sản phẩm">
            <NavCategory isHide={true} categories={categories} />

            <div className="min-h-[1000px] bg-white mt-4 rounded-xl">
                <div className="grid grid-cols-5 gap-4 p-4 items-start">
                    <ProductImageDetail />
                    <ProductInfoDetail />
                    <ProductDescDetail />
                    <ProductRate />
                    <ProductRateDetail />
                </div>
            </div>
            <div className="mt-10">
                <HomeGridProduct title={"Sản phẩm liên quan"} cols="5" />
            </div>
        </ClientLayout>
    );
};

export default ProductDetail;
