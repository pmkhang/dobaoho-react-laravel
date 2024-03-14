import HomeGridProduct from "@/Components/client/products/HomeGridProduct";
import NavCategory from "@/Components/client/partials/NavCategory";
import ProductDescDetail from "@/Components/client/products/ProductDescDetail";
import ProductImageDetail from "@/Components/client/products/ProductImageDetail";
import ProductInfoDetail from "@/Components/client/products/ProductInfoDetail";
import ProductRateDetail from "@/Components/client/products/ProductRateDetail";
import ClientLayout from "@/Layouts/ClientLayout";
import React from "react";
import ProductRate from "@/Components/client/products/ProductRate";

const ProductDetail = ({ categories, product, productsByCategory }) => {
    return (
        <ClientLayout title={product?.name}>
            <NavCategory isHide={true} categories={categories} />
            <div className="min-h-[1000px] bg-white mt-4 rounded-xl">
                <div className="grid grid-cols-5 gap-4 p-4 items-start">
                    <ProductImageDetail images={product?.product_images} />
                    <ProductInfoDetail
                        name={product?.name}
                        price={product?.price}
                    />
                    <ProductDescDetail desc={product?.desc} />
                    <ProductRate rate_avg={product?.rate_avg} />
                    <ProductRateDetail
                        productFeedbacks={product?.product_feedbacks}
                    />
                </div>
            </div>
            <div className="mt-10">
                <HomeGridProduct
                    key={productsByCategory?.id}
                    title={"Sản phẩm liên quan"}
                    id={productsByCategory?.id}
                    products={productsByCategory?.products}
                    cols={5}
                />
            </div>
        </ClientLayout>
    );
};

export default ProductDetail;
