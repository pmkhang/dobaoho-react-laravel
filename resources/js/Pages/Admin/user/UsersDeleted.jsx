import ModalDelConfirm from "@/Components/ModalDelConfirm";
import AdminLayout from "@/Layouts/AdminLayout";
import { Link, useForm } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Table } from "flowbite-react";

const UsersDeleted = ({ users, status, message }) => {
    const tableColumns = [
        { label: "STT", className: "bg-gray-500 text-white" },
        { label: "Id", className: "bg-gray-500 text-white" },
        { label: "Tên thành viên", className: "bg-gray-500 text-white" },
        { label: "Email", className: "bg-gray-500 text-white" },
        { label: "Số điện thoại", className: "bg-gray-500 text-white" },
        { label: "Hành động", className: "bg-gray-500 text-white" },
    ];
    const { get } = useForm();

    useEffect(() => {
        if (status) {
            toast.success(message);
        } else {
            toast.error(message);
        }
    }, []);
    return (
        <AdminLayout title={"Thành vien đã xoá"}>
            <div className="flex flex-col">
                <h3 className="text-3xl font-bold uppercase">
                    Thành viên đã xoá
                </h3>
                <div className="flex justify-start gap-3">
                    <Link
                        href={route("user")}
                        className="mt-3 py-2 px-4 bg-gray-700 text-white rounded-full "
                    >
                        <i className="fa-solid fa-arrow-left mr-3"></i>
                        Quay lại
                    </Link>
                </div>
                <div className="overflow-x-auto mt-8">
                    <Table>
                        <Table.Head>
                            {tableColumns.map((i) => (
                                <Table.HeadCell
                                    key={i.label}
                                    className={i.className}
                                >
                                    {i.label}
                                </Table.HeadCell>
                            ))}
                        </Table.Head>
                        <Table.Body>
                            {users.map((i, index) => (
                                <Table.Row key={i.id}>
                                    <Table.Cell>{index + 1}</Table.Cell>
                                    <Table.Cell>{i.id}</Table.Cell>
                                    <Table.Cell>{i.name}</Table.Cell>
                                    <Table.Cell>{i.email}</Table.Cell>
                                    <Table.Cell>{i.phone}</Table.Cell>
                                    <Table.Cell>
                                        <button
                                            className="text-blue-500"
                                            onClick={() =>
                                                get(route("restoreUser", i?.id))
                                            }
                                        >
                                            Khôi phục
                                        </button>
                                    </Table.Cell>
                                </Table.Row>
                            ))}
                        </Table.Body>
                    </Table>
                </div>
            </div>
        </AdminLayout>
    );
};

export default UsersDeleted;
