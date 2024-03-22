import AdminLayout from "@/Layouts/AdminLayout";
import React from "react";
import { Table } from "flowbite-react";
import formatCurrency from "@/Utils/formatCurrency";
import { Link, useForm } from "@inertiajs/react";
import Selector from "@/Components/Selector";
import Button from "@/Components/Button";
import convertToVietnamTime from "@/Utils/convertToVietnamTime";

const UserDetail = ({ user, invoiceUser }) => {
    return (
        <AdminLayout title={"Hồ sơ người dùng " + user?.name}>
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
                                        Id
                                    </Table.Cell>
                                    <Table.Cell className="font-bold">
                                        {user?.id}
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell className="font-semibold">
                                        Tên người dùng
                                    </Table.Cell>
                                    <Table.Cell className="font-bold">
                                        {user?.name}
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell className="font-semibold">
                                        Email
                                    </Table.Cell>
                                    <Table.Cell className="font-bold">
                                        {user?.email}
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell className="font-semibold">
                                        Số điện thoại
                                    </Table.Cell>
                                    <Table.Cell className="font-bold">
                                        {user?.phone}
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell className="font-semibold">
                                        Địa chỉ
                                    </Table.Cell>
                                    <Table.Cell className="font-bold">
                                        {user?.address}
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell className="font-semibold">
                                        Cấp bậc thành viên
                                    </Table.Cell>
                                    <Table.Cell className="font-bold">
                                        {user?.role == 1 ? (
                                            <span className="font-semibold text-red-600">
                                                Admin
                                            </span>
                                        ) : (
                                            <span className="font-semibold text-blue-600">
                                                Người dùng
                                            </span>
                                        )}
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell className="font-semibold">
                                        Trạng thái
                                    </Table.Cell>
                                    <Table.Cell className="font-bold">
                                        {user?.status == 1 ? (
                                            <span className="font-semibold text-green-600">
                                                Đang hoạt động
                                            </span>
                                        ) : (
                                            <span className="font-semibold text-red-600">
                                                Không hoạt động
                                            </span>
                                        )}
                                    </Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </div>
                    <div className="w-1/3 flex flex-col items-center justify-between">
                        <img
                            src={user?.avatar}
                            alt={user?.name + user?.id}
                            className="block w-[200px] h-[200px] rounded-full object-cover shadow-xl mt-16"
                        />
                        <Link
                            href={route("editUser", user?.id)}
                        >
                            <Button text={"Chỉnh sửa thông tin"} />
                        </Link>
                    </div>
                </div>
                <div className="w-full mt-6 flex flex-col gap-4">
                    <h4 className="text-2xl font-bold">
                        Đơn hàng đã đặt của {user?.name}
                    </h4>
                    <div>
                        <Table striped hoverable>
                            <Table.Head>
                                <Table.HeadCell className="bg-gray-600 text-white">
                                    STT
                                </Table.HeadCell>
                                <Table.HeadCell className="bg-gray-600 text-white">
                                    Mã đơn hàng
                                </Table.HeadCell>
                                <Table.HeadCell className="bg-gray-600 text-white">
                                    Tên người nhận
                                </Table.HeadCell>
                                <Table.HeadCell className="bg-gray-600 text-white">
                                    Email
                                </Table.HeadCell>
                                <Table.HeadCell className="bg-gray-600 text-white">
                                    Số điện thoại
                                </Table.HeadCell>
                                <Table.HeadCell className="bg-gray-600 text-white">
                                    Tổng đơn hàng
                                </Table.HeadCell>
                                <Table.HeadCell className="bg-gray-600 text-white">
                                    Trạng thái
                                </Table.HeadCell>
                                <Table.HeadCell className="bg-gray-600 text-white">
                                    Ngày đặt hàng
                                </Table.HeadCell>
                                <Table.HeadCell className="bg-gray-600 text-white">
                                    Xem chi tiết
                                </Table.HeadCell>
                            </Table.Head>
                            <Table.Body>
                                {invoiceUser?.map((i, index) => (
                                    <Table.Row key={i.id}>
                                        <Table.Cell>{index + 1}</Table.Cell>
                                        <Table.Cell>{i.id}</Table.Cell>
                                        <Table.Cell>{i.name}</Table.Cell>
                                        <Table.Cell>{i.email}</Table.Cell>
                                        <Table.Cell>{i.phone}</Table.Cell>
                                        <Table.Cell>
                                            {formatCurrency(+i?.total_price)}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {i?.status == 1 ? (
                                                <span className="text-yellow-600 font-bold">
                                                    Đơn hàng chờ kiểm tra
                                                </span>
                                            ) : i?.status == 2 ? (
                                                <span className="text-blue-600 font-bold">
                                                    Đơn hàng đang giao
                                                </span>
                                            ) : i?.status == 3 ? (
                                                <span className="text-green-600 font-bold">
                                                    Đơn hàng đã giao
                                                </span>
                                            ) : (
                                                <span className="text-red-600 font-bold">
                                                    Đơn hàng đã huỷ
                                                </span>
                                            )}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {convertToVietnamTime(
                                                i?.created_at
                                            )}
                                        </Table.Cell>
                                        <Table.Cell>
                                            <Link
                                                href={route(
                                                    "orderDetail",
                                                    i?.id
                                                )}
                                                className="text-blue-600 underline"
                                            >
                                                Xem chi tiết
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

export default UserDetail;
