import ClientLayout from "@/Layouts/ClientLayout";
import React, { useEffect, useState } from "react";
import NavCategory from "@/Components/client/partials/NavCategory";
import HomeGridProduct from "@/Components/client/products/HomeGridProduct";
import SliderImages from "@/Components/client/partials/SliderImages";

const Home = ({ categories, products }) => {
    return (
        <ClientLayout title="Trang chủ">
            <div className="w-full grid grid-cols-5 gap-4 items-start">
                <NavCategory isHide={false} categories={categories} />
                <div className="col-span-4 max-tl:col-span-5">
                    <SliderImages />
                </div>
            </div>
            <div className="relative w-full grid grid-cols-4 gap-4 mb-4  max-tl:grid-cols-1 max-tl:gap-0 max-tl:px-1 items-start mt-6 max-mb:mt-2">
                <div className="col-span-4 py-4 px-6 flex flex-col gap-8 max-mb:gap-4 shadow-xl border rounded-xl bg-[#fafdfa] max-tl:mt-4 max-mb:mt-6 max-tl:p-2">
                    {products?.map((i) => (
                        <HomeGridProduct
                            key={i?.id}
                            title={i?.name}
                            id={i?.id}
                            products={i?.products}
                            cols={6}
                        />
                    ))}
                </div>
            </div>
        </ClientLayout>
    );
};

export default Home;
