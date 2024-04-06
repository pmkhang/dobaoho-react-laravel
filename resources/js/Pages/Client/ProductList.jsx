import NavCategory from "@/Components/client/partials/header-v1/NavCategory";
import ProductCard from "@/Components/client/products/ProductCard";
import ClientLayout from "@/Layouts/ClientLayout";
import { Link } from "@inertiajs/react";
import { useEffect, useState } from "react";

const ProductList = ({ products, categories, category }) => {
    const [price, setPrice] = useState("");
    const urlParams = new URLSearchParams(window.location.search);
    const priceParam = urlParams.get("price");

    useEffect(() => {
        setPrice(priceParam);
    }, [priceParam]);

    return (
        <ClientLayout
            title={category?.name}
            breadcrumb={category?.name}
            breadcrumbLink={route("productListByCategory", category?.id)}
        >
            <div className="w-full min-h-[632px] grid grid-cols-5 gap-4 max-tl:grid-cols-1  max-tl:gap-0 max-tl:px-4 items-start ">
                <div className="col-span-1">
                    <NavCategory isHide={false} categories={categories} />
                </div>
                <div className="col-span-4 max-tl:mt-4 mb-4">
                    <div className="w-full p-4 grid grid-cols-4 gap-4 rounded-xl bg-white">
                        <div className="col-span-4 px-2 flex items-center justify-between">
                            <h3 className="text-2xl font-semibold">
                                {category?.name}
                            </h3>
                        </div>
                        <div className="grid grid-cols-5 max-tl:grid-cols-3 max-mb:grid-cols-1 gap-4 col-span-4">
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
                </div>
            </div>
        </ClientLayout>
    );
};

export default ProductList;
{
    /* <div className="flex items-center gap-2">
                                <Link
                                    href={`/san-pham/the-loai/${category?.id}?price=asc`}
                                    className={`p-2 border rounded-lg text-sm ${
                                        price == "asc" && "ring-2 ring-primary"
                                    } focus:ring-2 focus:ring-primary`}
                                >
                                    Giá thấp tới cao
                                </Link>
                                <Link
                                    href={`/san-pham/the-loai/${category?.id}?price=desc`}
                                    className={`p-2 border rounded-lg text-sm ${
                                        price == "desc" &&
                                        "ring-2 ring-primary"
                                    } focus:ring-2 focus:ring-primary`}
                                >
                                    Giá cao tới thấp
                                </Link>
                            </div> */
}
