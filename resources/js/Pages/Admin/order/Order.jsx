import Button from "@/Components/Button";
import InputText from "@/Components/InputText";
import Selector from "@/Components/Selector";
import AdminLayout from "@/Layouts/AdminLayout";
import convertToVietnamTime from "@/Utils/convertToVietnamTime";
import formatCurrency from "@/Utils/formatCurrency";
import paginationTheme from "@/Utils/paginationTheme";
import { Link, useForm } from "@inertiajs/react";
import { Pagination, Table } from "flowbite-react";
import { useEffect, useRef, useState } from "react";

const tableColumns = [
    {
        label: "Stt",
        className: "bg-gray-500 text-white",
    },
    {
        label: "Mã đơn hàng",
        className: "bg-gray-500 text-white",
    },
    {
        label: "Tên người nhận",
        className: "bg-gray-500 text-white",
    },
    {
        label: "Email",
        className: "bg-gray-500 text-white",
    },
    {
        label: "Số điện thoại",
        className: "bg-gray-500 text-white",
    },
    {
        label: "Tổng đơn hàng",
        className: "bg-gray-500 text-white",
    },
    {
        label: "Trạng thái",
        className: "bg-gray-500 text-white",
    },
    {
        label: "Ngày đặt hàng",
        className: "bg-gray-500 text-white",
    },
    {
        label: "Xem chi tiết",
        className: "bg-gray-500 text-white",
    },
];

const dataStatus = [
    {
        id: "",
        name: "Tất cả",
    },
    {
        id: "1",
        name: "Đơn hàng chờ kiểm tra",
    },
    {
        id: "2",
        name: "Đơn hàng đang giao",
    },
    {
        id: "3",
        name: "Đơn hàng đã giao",
    },
    {
        id: "4",
        name: "Đơn hàng đã huỷ",
    },
];
const limitOrder = [
    { id: 10, name: 10 },
    { id: 20, name: 20 },
    { id: 30, name: 30 },
    { id: 50, name: 50 },
    { id: 100, name: 100 },
    { id: 200, name: 200 },
    { id: 500, name: 500 },
];
const Order = ({ invoices, queries }) => {
    const { limit, status, search } = queries;
    const [startIndex] = useState((invoices.current_page - 1) * limit + 1);
    const { get } = useForm();
    const [dataQuery, setDataQuery] = useState({
        page: invoices.current_page,
        search: search,
        status,
        limit,
    });
    const searchInputRef = useRef(null);

    const onPageChange = (page) => {
        get(route("order", { ...dataQuery, page }));
    };
    const selectors = [
        {
            label: "SL",
            value: dataQuery.limit,
            onChange: (e) => {
                get(route("order", { ...dataQuery, limit: e.target.value }));
            },
            options: limitOrder,
        },
        {
            label: "Trạng thái",
            value: dataQuery.status,
            onChange: (e) => {
                get(route("order", { ...dataQuery, status: e.target.value }));
            },
            options: dataStatus,
        },
    ];
    useEffect(() => {
        searchInputRef.current.focus();
    }, []);
    const handleInputChange = (event) => {
        setDataQuery((prev) => ({ ...prev, search: event.target.value }));
    };
    const submit = (e) => {
        e.preventDefault();
        get(route("order", dataQuery));
    };

    return (
        <AdminLayout title="Đơn hàng">
            <div className="flex flex-col">
                <h3 className="text-3xl font-bold uppercase">
                    Quản lý đơn hàng
                </h3>
                <form
                    className="w-1/3 flex items-center gap-3 mt-4"
                    onSubmit={submit}
                >
                    <InputText
                        label="Tìm đơn hàng"
                        placeholder="Id đơn hàng"
                        id="name"
                        name="name"
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
                <div className="w-2/5 flex items-center gap-4 mt-4">
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
                            get(route("order"));
                        }}
                    />
                </div>
                <div className="overflow-x-auto mt-8">
                    <Table striped hoverable>
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
                            {invoices?.data?.map((i, index) => (
                                <Table.Row key={i.id}>
                                    <Table.Cell>
                                        {startIndex + index < 10
                                            ? `0${startIndex + index}`
                                            : startIndex + index}
                                    </Table.Cell>
                                    <Table.Cell>{i?.id}</Table.Cell>
                                    <Table.Cell>{i?.name}</Table.Cell>
                                    <Table.Cell>{i?.email}</Table.Cell>
                                    <Table.Cell>{i?.phone}</Table.Cell>
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
                                        {convertToVietnamTime(i?.created_at)}
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Link
                                            href={route("orderDetail", i?.id)}
                                            className="text-blue-600 underline"
                                        >
                                            Xem chi tiết
                                        </Link>
                                    </Table.Cell>
                                </Table.Row>
                            ))}
                        </Table.Body>
                    </Table>
                    <div className="w-full flex items-center justify-center mt-4">
                        {invoices?.last_page > 1 && (
                            <Pagination
                                layout="pagination"
                                currentPage={dataQuery?.page}
                                totalPages={invoices?.last_page}
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
        </AdminLayout>
    );
};

export default Order;
