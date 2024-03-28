import Button from "@/Components/Button";
import AdminLayout from "@/Layouts/AdminLayout";
import ModalContact from "@/Pages/Admin/dashboard/ModalContact";
import { Link } from "@inertiajs/react";
import { Table } from "flowbite-react";
import { useState } from "react";

const Dashboard = ({ invoices, contacts }) => {
    const [openModal, setOpenModal] = useState(false);
    const [contactId, setContactId] = useState("");
    return (
        <AdminLayout title="Dashboard">
            <div className="flex gap-8">
                <div className="w-full flex flex-col gap-4">
                    <p className="text-xl font-semibold">Khách hàng liên hệ:</p>
                    <div>
                        <Table>
                            <Table.Head>
                                <Table.HeadCell className="bg-blue-800 text-white">
                                    STT
                                </Table.HeadCell>
                                <Table.HeadCell className="bg-blue-800 text-white">
                                    Tên khách hàng
                                </Table.HeadCell>
                                <Table.HeadCell className="bg-blue-800 text-white">
                                    Email
                                </Table.HeadCell>
                                <Table.HeadCell className="bg-blue-800 text-white">
                                    Số điện thoại
                                </Table.HeadCell>
                                <Table.HeadCell className="bg-blue-800 text-white">
                                    Tiêu đề
                                </Table.HeadCell>
                                <Table.HeadCell className="bg-blue-800 text-white">
                                    Trạng thái
                                </Table.HeadCell>
                                <Table.HeadCell className="bg-blue-800 text-white"></Table.HeadCell>
                            </Table.Head>
                            <Table.Body>
                                {contacts?.data.map((i, index) => (
                                    <Table.Row key={i?.id}>
                                        <Table.Cell>{index + 1}</Table.Cell>
                                        <Table.Cell>{i?.name}</Table.Cell>
                                        <Table.Cell>{i?.email}</Table.Cell>
                                        <Table.Cell>{i?.phone}</Table.Cell>
                                        <Table.Cell>{i?.title}</Table.Cell>
                                        <Table.Cell>
                                            {i?.status == 0 ? (
                                                <span className="font-bold text-yellow-500">
                                                    Chờ kiểm duyệt
                                                </span>
                                            ) : (
                                                <span className="font-bold text-blue-500">
                                                    Đã xem
                                                </span>
                                            )}
                                        </Table.Cell>
                                        <Table.Cell className="flex items-center justify-center">
                                            <Button
                                                text={"Xem chi tiết"}
                                                onClick={() => {
                                                    setContactId(i?.id);
                                                    setOpenModal(true);
                                                }}
                                            />
                                        </Table.Cell>
                                    </Table.Row>
                                ))}
                                {contacts?.data.length == 0 && (
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
            <div className="flex gap-8 mt-10">
                <div className="w-full flex flex-col gap-4">
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
                                    Email
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
            <ModalContact
                openModal={openModal}
                setOpenModal={setOpenModal}
                contactId={contactId}
            />
        </AdminLayout>
    );
};

export default Dashboard;
