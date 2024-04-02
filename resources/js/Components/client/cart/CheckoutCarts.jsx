import React from "react";
import formatCurrency from "@/Utils/formatCurrency";
import Button from "@/Components/Button";
import { Link } from "@inertiajs/react";

const CheckoutCarts = ({ cartProducts, total_price, post, processing }) => {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
                <h4 className="text-xl font-bold">Xem lại đơn hàng</h4>
                <Link
                    href={route("clientCart")}
                    className="text-primary underline"
                >
                    Chỉnh sửa đơn hàng
                </Link>
            </div>
            <div className="flex flex-col gap-4">
                {cartProducts.map((i) => (
                    <div
                        key={i?.id}
                        className="flex gap-4 p-2 bg-gray-100 rounded-lg"
                    >
                        <img
                            loading="lazy"
                            src={i?.products[0]?.product_images[0]?.image}
                            alt={"image" + i?.products[0]?.id}
                            className="block w-20 h-20 p-1 object-cover rounded-lg"
                        />
                        <div className="flex-1 flex flex-col py-2">
                            <p className="flex items-center gap-3">
                                <span className="text-lg font-medium">
                                    {i?.products[0]?.name}
                                </span>
                                {i?.classify && (
                                    <span>Phân loại: {i?.classify}</span>
                                )}
                            </p>
                            <p className="font-medium">
                                Số lượng: <b>{i?.quantity}</b>
                            </p>
                        </div>
                        <div className="flex items-center p-2 gap-3">
                            <span>
                                Giá:{"  "}
                                <b>
                                    {formatCurrency(
                                        i?.quantity * +i?.products[0]?.price
                                    )}
                                </b>
                            </span>
                            <span
                                className="cursor-pointer"
                                onClick={() => {
                                    post(
                                        route("updateQuantity", {
                                            id: i?.id,
                                            minus: 0,
                                        })
                                    );
                                }}
                            >
                                <i className="fa-solid fa-x p-2 text-red-600"></i>
                            </span>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-between mt-4">
                <h4 className="text-2xl font-bold mb-2 ">Tổng đơn đặt hàng</h4>
                <strong className="text-primary-darker text-2xl">
                    {formatCurrency(total_price)}
                </strong>
            </div>
            <Button
                className="bg-primary hover:!bg-primary-darker"
                text={"Đặt hàng"}
                disabled={processing}
            />
        </div>
    );
};

export default CheckoutCarts;
