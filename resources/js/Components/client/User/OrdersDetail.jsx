import React from "react";
import OrderItem from "./OrderItem";

const OrdersDetail = ({ invoices }) => {
    return (
        <div className="col-span-3 p-4 flex flex-col gap-8 rounded-xl bg-white">
            {invoices?.map((i) => (
                <OrderItem key={i?.id} invoice={i} />
            ))}
        </div>
    );
};

export default OrdersDetail;
