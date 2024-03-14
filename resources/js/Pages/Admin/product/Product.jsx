import ModalDelConfirm from "@/Components/ModalDelConfirm";
import AdminLayout from "@/Layouts/AdminLayout";
import { Link } from "@inertiajs/react";
import { Table } from "flowbite-react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Rating } from "flowbite-react";

const Product = ({ status, message, products, categories }) => {
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
        { label: "Hình", className: "bg-gray-500 text-white" },
        { label: "Tên sản phẩm", className: "bg-gray-500 text-white" },
        { label: "Thể loại", className: "bg-gray-500 text-white" },
        { label: "Giá", className: "bg-gray-500 text-white" },
        { label: "Đánh giá", className: "bg-gray-500 text-white" },
        { label: "Trạng thái", className: "bg-gray-500 text-white" },
        {
            label: "Hành động",
            className: "bg-gray-500 text-white text-center pr-24",
        },
    ];

    return (
        <AdminLayout title="Sản phẩm">
            <div className="flex flex-col">
                <h3 className="text-3xl font-bold uppercase">
                    Quản lý sản phẩm
                </h3>
                <div className="flex justify-end gap-3">
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
                            {products.map((i, index) => (
                                <Table.Row key={i.id} className="bg-white">
                                    <Table.Cell>
                                        {index + 1 < 10
                                            ? `0${index + 1}.`
                                            : `${index + 1}.`}
                                    </Table.Cell>
                                    <Table.Cell>
                                        <img
                                            src={i?.product_images[0]?.image}
                                            alt={i?.product_images[0]?.id}
                                            className="block w-[40px] h-[40px] object-cover rounded-xl"
                                        />
                                    </Table.Cell>
                                    <Table.Cell>{i?.name}</Table.Cell>
                                    <Table.Cell>
                                        {categories?.find(
                                            (j) => j?.id === i?.category_id
                                        )?.name || "--"}
                                    </Table.Cell>
                                    <Table.Cell>{i?.price}</Table.Cell>
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
