import formatCurrency from "@/Utils/formatCurrency";
import { Link } from "@inertiajs/react";
import { Rating } from "flowbite-react";

const ProductCard = ({ id, img, rate_avg, name, price }) => {
    return (
        <div className="w-full rounded-lg">
            <div className="w-full bg-white border border-gray-200 rounded-lg shadow">
                <Link href={route("product-detail", id)}>
                    <img
                        loading="lazy"
                        className="w-full h-[200px] object-cover rounded-t-lg"
                        src={img}
                        alt={name}
                    />
                </Link>
                <div className="p-4">
                    <div className="flex items-center">
                        <Rating>
                            {+rate_avg > 0 &&
                                Array.from({ length: +rate_avg }, (_, j) => (
                                    <Rating.Star key={j} />
                                ))}
                            {Array.from({ length: 5 - +rate_avg }, (_, j) => (
                                <Rating.Star filled={false} key={j} />
                            ))}
                        </Rating>
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2  rounded  ms-3">
                            {rate_avg + ".0"}
                        </span>
                    </div>
                    <Link href={route("product-detail", id)}>
                        <h5 className="min-h-[36px] font-semibold tracking-tight text-gray-900 mt-4">
                            {`${name?.substring(0, 30)}${
                                name?.length > 30 ? "..." : ""
                            }`}
                        </h5>
                    </Link>
                    <div className="flex flex-col gap-3 items-start">
                        <span className="text-lg font-bold text-blue-800">
                            Giá: {formatCurrency(+price)}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
