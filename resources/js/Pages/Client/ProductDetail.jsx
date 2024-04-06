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

const ProductDetail = ({ product, productsByCategory }) => {
    console.log(product);
    const [isShowFormFeedBack, setisShowFormFeedBack] = useState(false);
    return (
        <ClientLayout
            title={product?.name}
            breadcrumb={product?.name}
            breadcrumbLink={route("product-detail", product?.id)}
        >
            <div className="min-h-fit bg-white rounded-xl shadow-lg border">
                <div className="grid grid-cols-5 gap-4 p-4 items-start max-mb:p-0">
                    <ProductImageDetail images={product?.product_images} />
                    <ProductInfoDetail
                        name={product?.name}
                        price={product?.price}
                        productId={product?.id}
                        rate_avg={product?.rate_avg}
                        classifys={product?.product_classifys}
                        sub_desc={product?.sub_desc}
                    />
                    <ProductDescDetail desc={product?.desc} />
                    {/* <ProductRate rate_avg={product?.rate_avg} /> */}
                    <div className="col-span-5 mt-4 px-4 flex gap-4">
                        <span
                            className={`p-3 border border-gray-200 border-t-4 rounded-xl cursor-pointer
                            ${!isShowFormFeedBack ? "border-t-primary" : ""}`}
                            onClick={() => setisShowFormFeedBack(false)}
                        >
                            Khách hàng đánh giá
                        </span>
                        <span
                            className={`p-3 border border-gray-200 border-t-4 rounded-xl cursor-pointer
                            ${isShowFormFeedBack ? "border-t-primary" : ""}`}
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
            <div className="mt-6 bg-white p-8 rounded-xl shadow-lg border mb-4">
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
