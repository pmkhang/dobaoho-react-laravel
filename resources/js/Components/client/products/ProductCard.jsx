import convertVietnameseString from "@/Utils/convertVietnameseString";
import { Link } from "@inertiajs/react";
import { Rating } from "flowbite-react";

const ProductCard = ({ id, img, rate_avg, name, price }) => {
    const productNameWithoutDiacritics = convertVietnameseString(name);
    return (
        <div className="w-full rounded-lg hover:translate-y-[-8px] shadow-primary-darker hover:shadow-xl transition-all">
            <div className="w-full bg-white border border-gray-200 rounded-lg shadow">
                <Link
                    href={route("product-detail", [
                        productNameWithoutDiacritics,
                        id,
                    ])}
                >
                    <img
                        loading="lazy"
                        className="w-full h-[200px] max-mb:h-[120px] object-cover max-mb:object-contain rounded-t-lg p-3 rounded-lg"
                        src={img}
                        alt={name}
                    />
                </Link>
                <div className="p-4 max-mb:p-3">
                    <div className="flex items-center">
                        <Rating size={"s"}>
                            {+rate_avg > 0 &&
                                Array.from({ length: +rate_avg }, (_, j) => (
                                    <Rating.Star key={j} />
                                ))}
                            {Array.from({ length: 5 - +rate_avg }, (_, j) => (
                                <Rating.Star filled={false} key={j} />
                            ))}
                        </Rating>
                        <span className="bg-blue-100 text-primary-darker text-xs font-semibold px-2  rounded  ms-3">
                            {rate_avg + ".0"}
                        </span>
                    </div>
                    <Link
                        href={route("product-detail", [
                            productNameWithoutDiacritics,
                            id,
                        ])}
                    >
                        <h5 className="min-h-[60px] max-mb:text-sm font-semibold tracking-tight text-gray-900 mt-4">
                            {`${name?.substring(0, 40)} ${
                                name?.length > 40 ? "..." : ""
                            }`}
                        </h5>
                    </Link>
                    <div className="flex flex-col items-start">
                        <p className="text-lg font-bold text-primary-darker">
                            {/* {+price == 0 ? (
                                <span>Liên hệ</span>
                            ) : (
                                <span>Giá: {formatCurrency(+price)}</span>
                            )} */}
                            Liên hệ
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
