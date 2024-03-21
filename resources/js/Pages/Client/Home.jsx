import ClientLayout from "@/Layouts/ClientLayout";
import React, { useEffect, useState } from "react";
import NavCategory from "@/Components/client/partials/NavCategory";
import HomeGridProduct from "@/Components/client/products/HomeGridProduct";
import SliderImages from "@/Components/client/partials/SliderImages";

const Home = ({ categories, products }) => {
    return (
        <ClientLayout title="Trang chủ">
            <SliderImages />
            <div className="w-full mt-6 grid grid-cols-4 gap-4 max-tl:px-4 max-mb:grid-cols-1">
                {[...Array(4)].map((_, i) => (
                    <div
                        key={i}
                        className="w-full bg-blue-800 min-h-[150px] rounded-lg flex flex-col items-center justify-center text-2xl font-bold text-white"
                    >
                        <h2>Tên dịch vụ</h2>
                    </div>
                ))}
            </div>
            <div className="w-full grid grid-cols-4 gap-4 max-tl:grid-cols-1 max-tl:gap-0 max-tl:px-4 items-start mt-6">
                <div className="col-span-1">
                    <NavCategory isHide={false} categories={categories} />
                </div>
                <div className="col-span-3 p-8 flex flex-col gap-6 rounded-xl bg-white">
                    {products?.map((i) => (
                        <HomeGridProduct
                            key={i?.id}
                            title={i?.name}
                            id={i?.id}
                            products={i?.products}
                        />
                    ))}
                </div>
            </div>

            <div className="w-full mt-12 min-h-[200px] max-tl:px-4">
                <div className="flex items-center justify-between">
                    <h2 className="uppercase font-bold text-3xl">
                        Những ưu đãi !!!
                    </h2>
                </div>
                <div className="w-full mt-4 grid grid-cols-3 gap-4 max-tl:grid-cols-2 max-mb:grid-cols-1">
                    {[...Array(6)].map((_, i) => (
                        <div
                            key={i}
                            className="w-full bg-blue-800 min-h-[250px] rounded-lg flex flex-col items-center justify-center text-4xl font-bold text-white"
                        >
                            <h2>Giảm giá </h2>
                            <span>{(i + 1) * 10}%</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="w-full mt-12 min-h-[200px] max-tl:px-4">
                <div className="flex items-center justify-between">
                    <h2 className="uppercase font-bold text-3xl">
                        Đơn vị cung cấp
                    </h2>
                </div>
                <div className="w-full mt-4 grid grid-cols-6 gap-4 max-tl:grid-cols-3 max-mb:grid-cols-2">
                    {[...Array(6)].map((_, i) => (
                        <div
                            key={i}
                            className="w-full bg-blue-800 min-h-[150px] rounded-lg flex flex-col items-center justify-center text-2xl font-bold text-white"
                        >
                            <h2>Tên công ty</h2>
                            <span></span>
                        </div>
                    ))}
                </div>
            </div>
        </ClientLayout>
    );
};

export default Home;
