import Button from "@/Components/Button";
import InputText from "@/Components/InputText";
import ModalDelConfirm from "@/Components/ModalDelConfirm";
import Selector from "@/Components/Selector";
import AdminLayout from "@/Layouts/AdminLayout";
import paginationTheme from "@/Utils/paginationTheme";
import { Link, useForm } from "@inertiajs/react";
import { Pagination, Table } from "flowbite-react";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

const tableColumns = [
    { label: "No.", className: "bg-gray-500 text-white" },
    { label: "Id", className: "bg-gray-500 text-white" },
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

const dataStatusUser = [
    { id: "", name: "Tất cả" },
    { id: 1, name: "Hoạt động" },
    { id: 2, name: "Không hoạt động" },
];
const dataRoleUser = [
    { id: "", name: "Tất cả" },
    { id: 1, name: "Admin" },
    { id: 2, name: "Người dùng" },
];

const limitUser = [
    { id: 10, name: 10 },
    { id: 20, name: 20 },
    { id: 30, name: 30 },
    { id: 50, name: 50 },
    { id: 100, name: 100 },
    { id: 200, name: 200 },
    { id: 500, name: 500 },
];

const User = ({ status, message, users, queries }) => {
    const [openModal, setOpentModal] = useState({
        name: "",
        delRoute: null,
        showModal: false,
    });
    const searchInputRef = useRef(null);
    useEffect(() => {
        if (status) {
            toast.success(message);
        } else {
            toast.error(message);
        }
    }, []);

    useEffect(() => {
        searchInputRef.current.focus();
    }, []);

    const { limit, role, statusUser, search } = queries;
    const [dataQuery, setDataQuery] = useState({
        limit,
        role,
        statusUser,
        search,
        page: users?.current_page,
    });

    const { get } = useForm();

    const selectors = [
        {
            label: "SL",
            value: dataQuery.limit,
            onChange: (e) => {
                get(
                    route("user", {
                        ...dataQuery,
                        limit: e.target.value,
                    })
                );
            },
            options: limitUser,
        },
        {
            label: "Cấp thành viên",
            value: dataQuery.role,
            onChange: (e) => {
                get(
                    route("user", {
                        ...dataQuery,
                        role: e.target.value,
                    })
                );
            },
            options: dataRoleUser,
        },
        {
            label: "Trạng thái",
            value: dataQuery.statusUser,
            onChange: (e) => {
                get(
                    route("user", {
                        ...dataQuery,
                        statusUser: e.target.value,
                    })
                );
            },
            options: dataStatusUser,
        },
    ];

    const handleInputChange = (event) => {
        setDataQuery((prev) => ({ ...prev, search: event.target.value }));
    };

    const onPageChange = (page) => {
        get(route("user", { ...dataQuery, page }));
    };

    const submit = (e) => {
        e.preventDefault();
        get(route("user", dataQuery));
    };

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
                <form
                    className="w-1/3 flex items-center gap-3 mt-3"
                    onSubmit={submit}
                >
                    <InputText
                        label="Tìm thành viên"
                        placeholder="Email, số điện thoại, tên hoặc Id người dùng"
                        id="search"
                        name="search"
                        value={dataQuery?.search}
                        className="mt-1 outline-none"
                        onChange={handleInputChange}
                        inputRef={searchInputRef}
                        req={true}
                    />
                    <Button
                        text={<i className="fa-solid fa-magnifying-glass"></i>}
                        className={"mt-8 w-[50px] py-1 bg-blue-900"}
                    />
                </form>
                <div className="w-1/2 flex items-center gap-4 mt-8">
                    {selectors.map((selector, index) => (
                        <Selector
                            key={index}
                            label={selector.label}
                            optionPlaceHolder={selector.optionPlaceHolder}
                            value={selector.value}
                            onChange={selector.onChange}
                            options={selector.options}
                            className={selector?.className}
                        />
                    ))}
                    <Button
                        text={<i className="fa-solid fa-x"></i>}
                        className={"mt-8 w-[50px] py-1 bg-gray-900"}
                        onClick={() => {
                            get(route("user"));
                        }}
                    />
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
                            {users?.data?.map((i, index) => (
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
                                    <Table.Cell>{i?.id}</Table.Cell>
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
                    <div className="w-full flex items-center justify-center mt-4">
                        {users?.last_page > 1 && (
                            <Pagination
                                layout="pagination"
                                currentPage={dataQuery?.page}
                                totalPages={users?.last_page}
                                onPageChange={onPageChange}
                                previousLabel={""}
                                nextLabel={""}
                                showIcons
                                theme={paginationTheme}
                            />
                        )}
                    </div>
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
