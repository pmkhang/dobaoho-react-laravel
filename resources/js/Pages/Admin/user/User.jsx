import ModalDelConfirm from "@/Components/ModalDelConfirm";
import AdminLayout from "@/Layouts/AdminLayout";
import { Link } from "@inertiajs/react";
import { Table } from "flowbite-react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const User = ({ status, message, users }) => {
    const [openModal, setOpentModal] = useState({
        name: "",
        delRoute: null,
        showModal: false,
    });
    useEffect(() => {
        if (status) {
            toast.success(message);
        } else {
            toast.error(message);
        }
    }, []);

    const tableColumns = [
        { label: "No.", className: "bg-gray-500 text-white" },
        { label: "Avatar", className: "bg-gray-500 text-white" },
        { label: "Tên thành viên", className: "bg-gray-500 text-white" },
        { label: "Email", className: "bg-gray-500 text-white" },
        { label: "Số điện thoại", className: "bg-gray-500 text-white" },
        { label: "Cấp thành viên", className: "bg-gray-500 text-white" },
        { label: "Trạng thái", className: "bg-gray-500 text-white" },
        {
            label: "Hành động",
            className: "bg-gray-500 text-white text-center pr-20",
        },
    ];

    return (
        <AdminLayout title="Thành viên">
            <div className="flex flex-col">
                <h3 className="text-3xl font-bold uppercase">
                    Quản lý thành viên
                </h3>
                <div className="flex justify-end gap-3">
                    <Link
                        href={route("createUser")}
                        className="mt-3 py-2 px-4 bg-green-700 text-white rounded-full "
                    >
                        <i className="fa-solid fa-plus mr-2"></i>
                        Thêm thành viên mới
                    </Link>
                </div>
                <div className="overflow-x-auto mt-8">
                    <Table hoverable>
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
                        <Table.Body className="divide-y">
                            {users.map((i, index) => (
                                <Table.Row
                                    key={i.id}
                                    className={`${
                                        index % 2 == 0
                                            ? "bg-white"
                                            : "bg-slate-200"
                                    }`}
                                >
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 ">
                                        {index + 1 < 10
                                            ? `0${index + 1}.`
                                            : `${index + 1}.`}
                                    </Table.Cell>
                                    <Table.Cell>
                                        <img
                                            src={i?.avatar}
                                            alt={i?.avatar}
                                            className="block w-[30px] h-[30px] object-cover rounded-xl"
                                        />
                                    </Table.Cell>
                                    <Table.Cell className="font-bold">
                                        {i?.name}
                                    </Table.Cell>
                                    <Table.Cell className="font-bold">
                                        {`${i?.email.substring(0, 17)}${
                                            i?.email.length > 17 ? "..." : ""
                                        }`}
                                    </Table.Cell>
                                    <Table.Cell>{i?.phone}</Table.Cell>
                                    <Table.Cell>
                                        <span
                                            className={`${
                                                i?.role == 1
                                                    ? "text-red-600"
                                                    : "text-blue-600"
                                            }`}
                                        >
                                            {i?.role == 1
                                                ? "Admin"
                                                : "Người dùng"}
                                        </span>
                                    </Table.Cell>
                                    <Table.Cell>
                                        <span
                                            className={`${
                                                i?.status == 1
                                                    ? "text-green-600"
                                                    : "text-red-600"
                                            }`}
                                        >
                                            {i?.status == 1
                                                ? "Đang hoạt động"
                                                : "Không hoạt động"}
                                        </span>
                                    </Table.Cell>
                                    <Table.Cell>
                                        <div className="flex items-center gap-4">
                                            <Link
                                                // href={route("editUser", i?.id)}
                                                className="text-blue-500 px-2 py-1 underline"
                                            >
                                                Chi tiết
                                            </Link>
                                            <Link
                                                href={route("editUser", i?.id)}
                                                className="text-blue-500 px-2 py-1 underline"
                                            >
                                                Sửa
                                            </Link>
                                            <button
                                                onClick={() => {
                                                    setOpentModal({
                                                        name: i?.name,
                                                        delRoute: route(
                                                            "destroyUser",
                                                            i?.id
                                                        ),
                                                        showModal: true,
                                                    });
                                                }}
                                                className="text-red-500 px-2 py-1 underline"
                                            >
                                                Xoá
                                            </button>
                                        </div>
                                    </Table.Cell>
                                </Table.Row>
                            ))}
                        </Table.Body>
                    </Table>
                </div>
            </div>
            <ModalDelConfirm
                content={"Thành viên " + openModal.name}
                delRoute={openModal?.delRoute}
                openModal={openModal?.showModal}
                setOpentModal={setOpentModal}
            />
        </AdminLayout>
    );
};

export default User;
