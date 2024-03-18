import React from "react";
import InputText from "@/Components/InputText";
import Selector from "@/Components/Selector";

const requsetInvoice = [
    {
        id: 1,
        name: "Có",
    },
    {
        id: 2,
        name: "Không",
    },
];
const CheckoutInfoCustomer = ({ data, setData }) => {
    return (
        <div className="flex flex-col gap-4">
            <h4 className="text-xl font-bold mb-2">Thông tin khách hàng</h4>
            <InputText
                label={"Địa chỉ email"}
                id="email"
                name="email"
                value={data.email}
                onChange={(e) => setData("email", e.target.value)}
            />
            <InputText
                label={"Họ và tên"}
                id="name"
                name="name"
                value={data.name}
                onChange={(e) => setData("name", e.target.value)}
            />
            <InputText
                label={"Số điện thoại"}
                id="phone"
                name="phone"
                value={data.phone}
                onChange={(e) => setData("phone", e.target.value)}
            />
            <InputText
                label={"Địa chỉ nơi nhận"}
                id="address"
                name="address"
                value={data.address}
                onChange={(e) => setData("address", e.target.value)}
            />
            <Selector
                label={"Yêu cầu xuất hoá đơn"}
                name="request_invoice"
                value={data.request_invoice}
                onChange={(e) => setData("request_invoice", e.target.value)}
                options={requsetInvoice}
            />
        </div>
    );
};

export default CheckoutInfoCustomer;
