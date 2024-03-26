import NavCategory from "@/Components/client/partials/NavCategory";
import HomeGridProduct from "@/Components/client/products/HomeGridProduct";
import ProductDescDetail from "@/Components/client/products/ProductDescDetail";
import ProductFormFeedback from "@/Components/client/products/ProductFormFeedback";
import ProductImageDetail from "@/Components/client/products/ProductImageDetail";
import ProductInfoDetail from "@/Components/client/products/ProductInfoDetail";
import ProductRate from "@/Components/client/products/ProductRate";
import ProductRateDetail from "@/Components/client/products/ProductRateDetail";
import ClientLayout from "@/Layouts/ClientLayout";
import { useState } from "react";

const ProductDetail = ({ categories, product, productsByCategory }) => {
    const [isShowFormFeedBack, setisShowFormFeedBack] = useState(false);
    return (
        <ClientLayout title={product?.name}>
            <NavCategory isHide={true} categories={categories} />
            <div className="min-h-[1000px] bg-white mt-4 rounded-xl">
                <div className="grid grid-cols-5 gap-4 p-4 items-start">
                    <ProductImageDetail images={product?.product_images} />
                    <ProductInfoDetail
                        name={product?.name}
                        price={product?.price}
                        productId={product?.id}
                        rate_avg={product?.rate_avg}
                        classifys={product?.product_classifys}
                    />
                    <ProductDescDetail desc={product?.desc} />
                    <ProductRate rate_avg={product?.rate_avg} />
                    <div className="col-span-5 mt-4 px-4 flex gap-4">
                        <span
                            className={`p-3 border border-gray-200 border-t-4 rounded-xl cursor-pointer
                            ${!isShowFormFeedBack ? "border-t-blue-600" : ""}`}
                            onClick={() => setisShowFormFeedBack(false)}
                        >
                            Khách hàng đánh giá
                        </span>
                        <span
                            className={`p-3 border border-gray-200 border-t-4 rounded-xl cursor-pointer
                            ${isShowFormFeedBack ? "border-t-blue-600" : ""}`}
                            onClick={() => setisShowFormFeedBack(true)}
                        >
                            Hỏi đáp / Phản hồi
                        </span>
                    </div>
                    {isShowFormFeedBack ? (
                        <ProductFormFeedback productId={product?.id} />
                    ) : (
                        <ProductRateDetail
                            productFeedbacks={product?.product_feedbacks}
                        />
                    )}
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
