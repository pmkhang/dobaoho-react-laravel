import React from "react";
import formatCurrency from "@/Utils/formatCurrency";
import OrderProductitem from "./OrderProductitem";
import convertToVietnamTime from "@/Utils/convertToVietnamTime";
import formatDateVN from "@/Utils/formatDateVn";

const OrderItem = ({ invoice }) => {
    return (
        <div className="border-y-2 p-2 px-4 flex flex-col gap-4">
            <div className="flex items-center justify-between">
                <p className=" flex flex-col gap-1">
                    <span className="text-xl font-bold">
                        Mã đơn hàng: {invoice?.id}
                    </span>
                    <span className="text-sm">
                        Đặt hàng vào lúc: {formatDateVN(invoice?.created_at)}
                    </span>
                </p>
                <p className="font-semibold">
                    Trạng thái:{" "}
                    {invoice?.status == 1 ? (
                        <span className="font-bold text-xl text-yellow-700">
                            Chờ xác nhận
                        </span>
                    ) : invoice?.status == 2 ? (
                        <span className="font-bold text-xl text-blue-700">
                            Đã xác nhận và đang giao hàng
                        </span>
                    ) : invoice?.status == 3 ? (
                        <span className="font-bold text-xl text-green-700">
                            Đã giao hàng
                        </span>
                    ) : (
                        <span className="font-bold text-xl text-red-700">
                            Đơn huỷ
                        </span>
                    )}
                </p>
            </div>
            <ul className="flex flex-col gap-6">
                {invoice?.invoice_details?.map((i) => (
                    <OrderProductitem
                        key={i?.id}
                        products={i?.carts[0].products[0]}
                        quantity={i?.carts[0].quantity}
                        price={i?.carts[0].price_per_1}
                    />
                ))}
            </ul>
            <p className="text-2xl font-bold text-end mt-6 text-blue-600">
                Tổng đơn hàng: {formatCurrency(+invoice?.total_price)}
            </p>
        </div>
    );
};

export default OrderItem;
