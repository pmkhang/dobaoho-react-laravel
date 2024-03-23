import AdminLayout from "@/Layouts/AdminLayout";
import { Table } from "flowbite-react";
import { Link } from "@inertiajs/react";
const Dashboard = ({ invoices }) => {
    return (
        <AdminLayout title="Dashboard">
            <div className="flex gap-8">
                <div className="w-1/2 flex flex-col gap-4">
                    <p className="text-xl font-semibold">
                        Đơn đặt hàng đang chờ kiểm duyệt:
                    </p>
                    <div>
                        <Table>
                            <Table.Head>
                                <Table.HeadCell className="bg-blue-800 text-white">
                                    STT
                                </Table.HeadCell>
                                <Table.HeadCell className="bg-blue-800 text-white">
                                    Mã đơn hàng
                                </Table.HeadCell>
                                <Table.HeadCell className="bg-blue-800 text-white">
                                    Tên người nhận
                                </Table.HeadCell>
                                <Table.HeadCell className="bg-blue-800 text-white">
                                    Số điện thoại
                                </Table.HeadCell>
                                <Table.HeadCell className="bg-blue-800 text-white">
                                    xem chi tiết
                                </Table.HeadCell>
                            </Table.Head>
                            <Table.Body>
                                {invoices?.map((i, index) => (
                                    <Table.Row key={i?.id}>
                                        <Table.Cell>{index + 1}</Table.Cell>
                                        <Table.Cell>{i?.id}</Table.Cell>
                                        <Table.Cell>{i?.name}</Table.Cell>
                                        <Table.Cell>{i?.phone}</Table.Cell>
                                        <Table.Cell>{i?.email}</Table.Cell>
                                        <Table.Cell>
                                            <Link
                                                href={route(
                                                    "orderDetail",
                                                    i?.id
                                                )}
                                                className="text-blue-500 underline"
                                            >
                                                Xem chi tiết
                                            </Link>
                                        </Table.Cell>
                                    </Table.Row>
                                ))}
                                {invoices?.length == 0 && (
                                    <Table.Row>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell className="py-4">
                                            Hiện chưa có đơn hàng nào
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                    </Table.Row>
                                )}
                            </Table.Body>
                        </Table>
                    </div>
                </div>
                
            </div>
        </AdminLayout>
    );
};

export default Dashboard;
