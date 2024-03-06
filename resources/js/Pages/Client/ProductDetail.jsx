import HomeGridProduct from "@/Components/HomeGridProduct";
import NavCategory from "@/Components/NavCategory";
import ProductDescDetail from "@/Components/ProductDescDetail";
import ProductImageDetail from "@/Components/ProductImageDetail";
import ProductInfoDetail from "@/Components/ProductInfoDetail";
import ProductRateDetail from "@/Components/ProductRateDetail";
import ClientLayout from "@/Layouts/ClientLayout";
import React from "react";
import { Head } from "@inertiajs/react";

const ProductDetail = () => {
    return (
        <ClientLayout>
            <Head title="Sản phẩm" />
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
