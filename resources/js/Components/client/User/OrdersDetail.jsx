import React from "react";
import OrderItem from "./OrderItem";

const OrdersDetail = ({ invoices }) => {
    return (
        <div className="col-span-3 flex flex-col gap-4">
            {invoices?.map((i) => (
                <OrderItem key={i?.id} invoice={i} />
            ))}
        </div>
    );
};

export default OrdersDetail;
