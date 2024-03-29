import ProductCard from "@/Components/client/products/ProductCard";
import ClientLayout from "@/Layouts/ClientLayout";
import React from "react";

const SearchProducts = ({ products, keyword }) => {
    return (
        <ClientLayout title={"Tìm kiếm: " + keyword}>
            <div className="w-full h-fit min-h-[380px] bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-center">
                    Kết quả tìm kiếm: <i className="underline">{keyword}</i>
                </h3>
                <div
                    className={`w-full mt-4 grid grid-cols-5 gap-4 max-tl:grid-cols-3 max-mb:grid-cols-1`}
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
            </div>
        </ClientLayout>
    );
};

export default SearchProducts;
