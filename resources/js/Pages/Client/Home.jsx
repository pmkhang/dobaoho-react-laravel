import ClientLayout from "@/Layouts/ClientLayout";
import React from "react";
import { Head } from "@inertiajs/react";
import NavCategory from "@/Components/NavCategory";
import HomeGridProduct from "@/Components/HomeGridProduct";
import SliderImages from "@/Components/SliderImages";

const Home = () => {
    return (
        <ClientLayout>
            <Head title="Trang chủ" />
            
            <div className="w-full grid grid-cols-4 gap-4 items-start">
                <NavCategory isHide={false} />
                <SliderImages />
            </div>
            {/* service */}
            <div className="w-full mt-10 grid grid-cols-4 gap-4">
                {[...Array(4)].map((_, i) => (
                    <div className="w-full bg-blue-800 min-h-[150px] rounded-lg flex flex-col items-center justify-center text-2xl font-bold text-white">
                        <h2>Tên dịch vụ</h2>
                    </div>
                ))}
            </div>
            <HomeGridProduct title={"Hàng bán chạy !!"} />
            <HomeGridProduct title={"Sản phẩm nổi bật !!"} />

            <div className="w-full mt-12 min-h-[200px]">
                <div className="flex items-center justify-between">
                    <h2 className="uppercase font-bold text-3xl">
                        Những ưu đãi !!!
                    </h2>
                </div>
                <div className="w-full mt-4 grid grid-cols-3 gap-4">
                    {[...Array(6)].map((_, i) => (
                        <div className="w-full bg-blue-800 min-h-[250px] rounded-lg flex flex-col items-center justify-center text-4xl font-bold text-white">
                            <h2>Giảm giá </h2>
                            <span>{(i + 1) * 10}%</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-full mt-12 min-h-[200px]">
                <div className="flex items-center justify-between">
                    <h2 className="uppercase font-bold text-3xl">
                        Đơn vị cung cấp
                    </h2>
                </div>
                <div className="w-full mt-4 grid grid-cols-6 gap-4 ">
                    {[...Array(6)].map((_, i) => (
                        <div className="w-full bg-blue-800 min-h-[150px] rounded-lg flex flex-col items-center justify-center text-2xl font-bold text-white">
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
