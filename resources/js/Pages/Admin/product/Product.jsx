import Button from "@/Components/Button";
import InputText from "@/Components/InputText";
import ModalDelConfirm from "@/Components/ModalDelConfirm";
import Selector from "@/Components/Selector";
import AdminLayout from "@/Layouts/AdminLayout";
import recursiveCategory from "@/Utils/RecursiveCategory";
import formatCurrency from "@/Utils/formatCurrency";
import paginationTheme from "@/Utils/paginationTheme";
import { Link, useForm } from "@inertiajs/react";
import { Pagination, Rating, Table } from "flowbite-react";
import { useEffect, useState, useRef } from "react";
import { toast } from "react-toastify";

const tableColumns = [
    {
        label: "Stt",
        className: "bg-gray-500 text-white",
    },
    {
        label: "ID.",
        className: "bg-gray-500 text-white",
    },
    { label: "Hình", className: "bg-gray-500 text-white" },
    {
        label: "Tên sản phẩm",
        className: "bg-gray-500 text-white",
    },
    {
        label: "Thể loại",
        className: "bg-gray-500 text-white",
    },
    {
        label: "Giá",
        className: "bg-gray-500 text-white",
    },
    {
        label: "Đánh giá",
        className: "bg-gray-500 text-white",
    },
    {
        label: "Trạng thái",
        className: "bg-gray-500 text-white",
    },
    {
        label: "Hành động",
        className: "bg-gray-500 text-white text-center pr-24",
    },
];
const dataStatusProduct = [
    { id: 1, name: "Hoạt động" },
    { id: 2, name: "Không hoạt động" },
];
const orderBy = [
    { id: "ASC", name: "Thấp đến cao" },
    { id: "DESC", name: "Cao đến thấp" },
];
const limitProducts = [
    { id: 10, name: 10 },
    { id: 20, name: 20 },
    { id: 30, name: 30 },
    { id: 50, name: 50 },
    { id: 100, name: 100 },
    { id: 200, name: 200 },
    { id: 500, name: 500 },
];

const Product = ({ status, message, products, queries, categories }) => {
    const nameInputRef = useRef(null);
    const { statusProduct, category_id, rate_avg, price, limit, name } =
        queries;
    const [openModal, setOpentModal] = useState({
        name: "",
        delRoute: null,
        showModal: false,
    });
    const [dataQuery, setDataQuery] = useState({
        limit,
        page: products?.current_page,
        status: statusProduct,
        category_id,
        rate_avg,
        price,
        name,
    });
    const selectors = [
        {
            label: "SL",
            value: dataQuery.limit,
            onChange: (e) => {
                get(
                    route("product", {
                        ...dataQuery,
                        limit: e.target.value,
                    })
                );
            },
            options: limitProducts,
        },
        {
            label: "Thể loại",
            optionPlaceHolder: "Thể loại",
            value: dataQuery.category_id,
            onChange: (e) => {
                get(
                    route("product", {
                        ...dataQuery,
                        category_id: e.target.value,
                    })
                );
            },
            options: recursiveCategory(categories),
        },
        {
            label: "Giá sản phẩm",
            optionPlaceHolder: "Giá",
            value: dataQuery.price,
            onChange: (e) => {
                get(
                    route("product", {
                        ...dataQuery,
                        price: e.target.value,
                    })
                );
            },
            options: orderBy,
        },
        {
            label: "Đánh giá sản phẩm",
            optionPlaceHolder: "Đánh giá sp",
            value: dataQuery.rate_avg,
            onChange: (e) => {
                get(
                    route("product", {
                        ...dataQuery,
                        rate_avg: e.target.value,
                    })
                );
            },
            options: orderBy,
        },
        {
            label: "Trạng thái",
            optionPlaceHolder: "Trạng thái",
            value: dataQuery.status,
            onChange: (e) => {
                get(
                    route("product", {
                        ...dataQuery,
                        status: e.target.value,
                    })
                );
            },
            options: dataStatusProduct,
        },
    ];
    useEffect(() => {
        nameInputRef.current.focus();
    }, []);
    const [startIndex] = useState((products.current_page - 1) * limit + 1);

    const { get } = useForm();

    const onPageChange = (page) => {
        get(route("product", { ...dataQuery, page }));
    };

    useEffect(() => {
        if (status) {
            toast.success(message);
        } else {
            toast.error(message);
        }
    }, []);

    const handleInputChange = (event) => {
        setDataQuery((prev) => ({ ...prev, name: event.target.value }));
    };
    const submit = (e) => {
        e.preventDefault();
        get(route("product", dataQuery));
    };

    return (
        <AdminLayout title="Sản phẩm">
            <div className="flex flex-col">
                <h3 className="text-3xl font-bold uppercase">
                    Quản lý sản phẩm
                </h3>
                <div className="flex items-center justify-between gap-3">
                    <div className="flex-1 mt-3 py-2 px-4 flex items-center gap-4"></div>
                    <div className="flex items-center gap-3 mt-8">
                        <Link
                            href={route("productsDeleted")}
                            className="mt-3 py-2 px-4 bg-gray-700 text-white rounded-full "
                        >
                            Xem sản phẩm đã xoá
                        </Link>
                        <Link
                            href={route("createProduct")}
                            className="mt-3 py-2 px-4 bg-green-700 text-white rounded-full "
                        >
                            <i className="fa-solid fa-plus mr-2"></i>
                            Thêm sản phẩm mới
                        </Link>
                    </div>
                </div>
                <form
                    className="w-1/3 flex items-center gap-3 mt-3"
                    onSubmit={submit}
                >
                    <InputText
                        label="Tìm tên hoặc Id sản phẩm"
                        placeholder="Nhập tên hoặc ID"
                        id="name"
                        name="name"
                        value={dataQuery?.name}
                        className="mt-1 outline-none"
                        onChange={handleInputChange}
                        inputRef={nameInputRef}
                        req={true}
                    />
                    <Button
                        text={<i className="fa-solid fa-magnifying-glass"></i>}
                        className={"mt-8 w-[50px] py-1 bg-blue-900"}
                    />
                </form>
                <div className="flex items-center gap-4 mt-8">
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
                            get(route("product", { ...dataQuery, name: "" }));
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
                            {products?.data?.map((i, index) => (
                                <Table.Row key={i?.id} className="bg-white">
                                    <Table.Cell>
                                        {startIndex + index < 10
                                            ? `0${startIndex + index}`
                                            : startIndex + index}
                                        {/* {i?.id} */}
                                    </Table.Cell>
                                    <Table.Cell>{i?.id}</Table.Cell>
                                    <Table.Cell>
                                        <img
                                            src={i?.product_images[0]?.image}
                                            alt={i?.product_images[0]?.id}
                                            className="block w-[40px] h-[40px] object-cover rounded-xl"
                                        />
                                    </Table.Cell>
                                    <Table.Cell>{i?.name}</Table.Cell>
                                    <Table.Cell>{i?.category?.name}</Table.Cell>
                                    <Table.Cell>
                                        {formatCurrency(+i?.price)}
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Rating>
                                            {[...Array(i?.rate_avg)].map(
                                                (_, j) => (
                                                    <Rating.Star key={j} />
                                                )
                                            )}
                                            {[...Array(5 - i?.rate_avg)].map(
                                                (_, j) => (
                                                    <Rating.Star
                                                        filled={false}
                                                        key={j}
                                                    />
                                                )
                                            )}
                                        </Rating>
                                    </Table.Cell>
                                    <Table.Cell>
                                        <span
                                            className={`${
                                                i?.status === 1
                                                    ? "text-green-600"
                                                    : "text-red-600"
                                            }`}
                                        >
                                            {i?.status === 1
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
                                                href={route(
                                                    "editProduct",
                                                    i?.id
                                                )}
                                                className="text-blue-500 px-2 py-1 underline"
                                            >
                                                Sửa
                                            </Link>
                                            <button
                                                onClick={() => {
                                                    setOpentModal({
                                                        name: i?.name,
                                                        delRoute: route(
                                                            "destroyProduct",
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
                        {products?.last_page > 1 && (
                            <Pagination
                                layout="pagination"
                                currentPage={dataQuery?.page}
                                totalPages={products?.last_page}
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
                content={"Sản phẩm " + openModal.name + " này"}
                delRoute={openModal?.delRoute}
                openModal={openModal?.showModal}
                setOpentModal={setOpentModal}
            />
        </AdminLayout>
    );
};

export default Product;
