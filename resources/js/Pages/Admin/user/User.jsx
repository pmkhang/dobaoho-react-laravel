import AdminLayout from "@/Layouts/AdminLayout";
import React, { useEffect, useState } from "react";
import { Link } from "@inertiajs/react";
import { toast } from "react-toastify";
import ModalDelConfirm from "@/Components/ModalDelConfirm";

const User = ({ status, message, users }) => {
    const [delUserData, setDelUserData] = useState({
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
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-8">
                    <table className="w-full text-sm text-left text-gray-500">
                        <thead className="text-base text-white uppercase bg-gray-700 ">
                            <tr className="flex items-center">
                                <th scope="col" className="w-16 px-6 py-3">
                                    No.
                                </th>
                                <th
                                    scope="col"
                                    className="w-28 text-center px-6 py-3"
                                >
                                    Avatar
                                </th>
                                <th scope="col" className="flex-1 px-6 py-3">
                                    Tên thành viên
                                </th>
                                <th scope="col" className="flex-1 px-6 py-3">
                                    Email
                                </th>
                                <th scope="col" className="flex-1 px-6 py-3">
                                    Số điện thoại
                                </th>
                                <th scope="col" className="flex-1 px-6 py-3">
                                    Cấp thành viên
                                </th>
                                <th scope="col" className="flex-1 px-6 py-3">
                                    Trạng thái
                                </th>
                                <th scope="col" className="flex-1 px-6 py-3">
                                    Hành động
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((i, index) => (
                                <tr
                                    key={i?.id}
                                    className={`flex items-center text-base ${
                                        index % 2 == 0 ? "" : "bg-gray-300"
                                    }`}
                                >
                                    <th
                                        scope="col"
                                        className="w-16 px-6 py-2 font-bold whitespace-nowrap "
                                    >
                                        {index + 1 < 10
                                            ? `0${index + 1}.`
                                            : `${index + 1}.`}
                                    </th>
                                    <td
                                        scope="col"
                                        className="w-28  px-6 py-2 "
                                    >
                                        <img
                                            src={i?.avatar}
                                            alt={i?.avatar}
                                            className="block w-[60px] h-[60px] object-cover rounded-xl"
                                        />
                                    </td>
                                    <td
                                        scope="col"
                                        className="flex-1 px-6 py-2  font-bold"
                                    >
                                        {i?.name}
                                    </td>
                                    <td
                                        scope="col"
                                        className="flex-1 px-6 py-2  font-bold"
                                    >
                                        {`${i?.email.substring(0, 17)}${
                                            i?.email.length > 17 ? "..." : ""
                                        }`}
                                    </td>
                                    <td
                                        scope="col"
                                        className="flex-1 px-6 py-2  font-bold"
                                    >
                                        {i?.phone}
                                    </td>
                                    <td
                                        scope="col"
                                        className={`flex-1 px-6 py-2  font-bold ${
                                            i?.role === 1
                                                ? "text-red-600"
                                                : "text-blue-600"
                                        }`}
                                    >
                                        {i?.role === 1 ? "Admin" : "Người dùng"}
                                    </td>
                                    <td
                                        scope="col"
                                        className={`flex-1 px-6 py-2 font-bold ${
                                            i?.status === 1
                                                ? "text-green-600"
                                                : "text-red-600"
                                        }`}
                                    >
                                        {i?.status === 1
                                            ? "Đang hoạt động"
                                            : "Không hoạt động"}
                                    </td>
                                    <td
                                        scope="col"
                                        className="flex-1 px-6 py-2 flex items-center gap-4"
                                    >
                                        <Link
                                            href={route("editUser", i?.id)}
                                            className="text-blue-500"
                                        >
                                            Sửa
                                        </Link>
                                        <button
                                            onClick={() => {
                                                setDelUserData({
                                                    name: i?.name,
                                                    delRoute: route(
                                                        "destroyUser",
                                                        i?.id
                                                    ),
                                                    showModal: true,
                                                });
                                            }}
                                            className="text-red-500 cursor-pointer"
                                        >
                                            Xoá
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot className="text-base bg-gray-500 text-white">
                            <tr className="flex items-center">
                                <th scope="col" className="w-16 px-6 py-3">
                                    No.
                                </th>
                                <th
                                    scope="col"
                                    className="w-28 text-center px-6 py-3"
                                >
                                    Avatar
                                </th>
                                <th scope="col" className="flex-1 px-6 py-3">
                                    Tên thành viên
                                </th>
                                <th scope="col" className="flex-1 px-6 py-3">
                                    Email
                                </th>
                                <th scope="col" className="flex-1 px-6 py-3">
                                    Số điện thoại
                                </th>
                                <th scope="col" className="flex-1 px-6 py-3">
                                    Cấp thành viên
                                </th>
                                <th scope="col" className="flex-1 px-6 py-3">
                                    Trạng thái
                                </th>
                                <th scope="col" className="flex-1 px-6 py-3">
                                    Hành động
                                </th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
            {delUserData?.showModal && (
                <ModalDelConfirm
                    content={"Sản phẩm " + delUserData.name + " này"}
                    delRoute={delUserData?.delRoute}
                    setDelCategoryData={setDelUserData}
                />
            )}
        </AdminLayout>
    );
};

export default User;
