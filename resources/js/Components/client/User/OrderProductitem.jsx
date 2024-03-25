import React from "react";
import formatCurrency from "@/Utils/formatCurrency";

const OrderProductitem = ({ products, quantity, price }) => {
    return (
        <li className="flex items-center justify-between">
            <div className="flex items-center gap-4">
                <img
                    src={products?.product_images[0]?.image}
                    alt={products?.id}
                    className="block w-16 h-16 p-1 object-cover border-2 rounded-full"
                />
                <div className="flex flex-col gap-2">
                    <p className="text-xl font-bold">{products?.name}</p>
                    <span>Số lượng: {quantity}</span>
                </div>
            </div>
            <div className="flex flex-col gap-1 text-end">
                <p>Giá: {formatCurrency(+price)}/1sp</p>
                <p className="text-lg font-bold">
                    Giá tổng: {formatCurrency(+price * +quantity)}
                </p>
            </div>
        </li>
    );
};

export default OrderProductitem;
