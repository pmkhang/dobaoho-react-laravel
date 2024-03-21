import AdminLayout from "@/Layouts/AdminLayout";
import React from "react";
import { Table } from "flowbite-react";
import formatCurrency from "@/Utils/formatCurrency";
import { Link, useForm } from "@inertiajs/react";
import Selector from "@/Components/Selector";
import Button from "@/Components/Button";

const optionStatus = [
    {
        id: 1,
        name: "Đơn hàng chờ kiểm tra",
    },
    {
        id: 2,
        name: "Đơn hàng đang giao",
    },
    {
        id: 3,
        name: "Đơn hàng đã giao",
    },
    {
        id: 4,
        name: "Huỷ đơn hàng",
    },
];

const OrderDetail = ({ invoice, carts }) => {
    const { data, post, setData } = useForm({
        status: invoice?.status,
    });
    const submit = (e) => {
        e.preventDefault();
        post(route("updateStatus", invoice.id));
    };
    return (
        <AdminLayout title={"Chi tiết đơn hàng " + invoice?.id}>
            <div className="flex flex-col">
                <div className="w-full mt-4 flex gap-4">
                    <div className="w-2/3">
                        <Table striped hoverable>
                            <Table.Head>
                                <Table.HeadCell className="bg-gray-600 text-white">
                                    Tiêu đề
                                </Table.HeadCell>
                                <Table.HeadCell className="bg-gray-600 text-white">
                                    Nội dung
                                </Table.HeadCell>
                            </Table.Head>
                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell className="font-semibold">
                                        Mã đơn hàng
                                    </Table.Cell>
                                    <Table.Cell className="font-bold">
                                        {invoice?.id}
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell className="font-semibold">
                                        Tên người nhận
                                    </Table.Cell>
                                    <Table.Cell className="font-semibold">
                                        {invoice?.name}
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell className="font-semibold">
                                        Email
                                    </Table.Cell>
                                    <Table.Cell className="font-semibold">
                                        {invoice?.email}
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell className="font-semibold">
                                        Số điện thoại
                                    </Table.Cell>
                                    <Table.Cell className="font-semibold">
                                        {invoice?.phone}
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell className="font-semibold">
                                        Địa chỉ
                                    </Table.Cell>
                                    <Table.Cell className="font-semibold">
                                        {invoice?.address}
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell className="font-semibold">
                                        Người dùng đặt hàng
                                    </Table.Cell>
                                    <Table.Cell className="font-semibold">
                                        {invoice?.user_id}
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell className="font-semibold">
                                        Tổng đơn hàng
                                    </Table.Cell>
                                    <Table.Cell className="font-bold text-blue-600 text-lg">
                                        {formatCurrency(+invoice?.total_price)}
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell className="font-semibold">
                                        Trang thái đơn hàng
                                    </Table.Cell>
                                    <Table.Cell className="font-semibold text-lg">
                                        {invoice?.status == 1 ? (
                                            <span className="text-yellow-600 font-bold">
                                                Đơn hàng chờ kiểm tra
                                            </span>
                                        ) : invoice?.status == 2 ? (
                                            <span className="text-blue-600 font-bold">
                                                Đơn hàng đang giao
                                            </span>
                                        ) : invoice?.status == 3 ? (
                                            <span className="text-green-600 font-bold">
                                                Đơn hàng đã giao
                                            </span>
                                        ) : (
                                            <span className="text-red-600 font-bold">
                                                Đơn hàng đã huỷ
                                            </span>
                                        )}
                                    </Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </div>
                    {invoice?.status <= 2 && (
                        <form
                            className="w-1/3 flex flex-col gap-4"
                            onSubmit={submit}
                        >
                            <Selector
                                label={"Cập nhật trạng thái đơn hàng"}
                                value={data?.status}
                                onChange={(e) => {
                                    setData("status", e.target.value);
                                }}
                                options={optionStatus}
                            />
                            <Button type={"submit"} text={"Cập nhật"} />
                        </form>
                    )}
                </div>
                <div className="w-full mt-6 flex flex-col gap-4">
                    <h4 className="text-2xl font-bold">
                        Sản phẩm của đơn hàng
                    </h4>
                    <div>
                        <Table striped hoverable>
                            <Table.Head>
                                <Table.HeadCell className="bg-gray-600 text-white">
                                    STT
                                </Table.HeadCell>
                                <Table.HeadCell className="bg-gray-600 text-white">
                                    Mã sản phẩm
                                </Table.HeadCell>
                                <Table.HeadCell className="bg-gray-600 text-white">
                                    Tên sản phẩm
                                </Table.HeadCell>
                                <Table.HeadCell className="bg-gray-600 text-white">
                                    Thể loại
                                </Table.HeadCell>
                                <Table.HeadCell className="bg-gray-600 text-white">
                                    Số lượng
                                </Table.HeadCell>
                                <Table.HeadCell className="bg-gray-600 text-white">
                                    Giá trên 1 sp
                                </Table.HeadCell>
                                <Table.HeadCell className="bg-gray-600 text-white">
                                    Giá tổng
                                </Table.HeadCell>
                                <Table.HeadCell className="bg-gray-600 text-white">
                                    Xem chi tiết sản phẩm
                                </Table.HeadCell>
                            </Table.Head>
                            <Table.Body>
                                {carts.map((i, index) => (
                                    <Table.Row key={i.id}>
                                        <Table.Cell>{++index}</Table.Cell>
                                        <Table.Cell>
                                            {i.products[0]?.id}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {i.products[0]?.name}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {i.products[0]?.category?.name}
                                        </Table.Cell>
                                        <Table.Cell>{i.quantity}</Table.Cell>
                                        <Table.Cell>
                                            {formatCurrency(+i.price_per_1)}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {formatCurrency(
                                                +i.price_per_1 * +i.quantity
                                            )}
                                        </Table.Cell>
                                        <Table.Cell>
                                            <Link className="text-blue-600 underline">
                                                Xem chi tiết sản phẩm
                                            </Link>
                                        </Table.Cell>
                                    </Table.Row>
                                ))}
                            </Table.Body>
                        </Table>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default OrderDetail;
