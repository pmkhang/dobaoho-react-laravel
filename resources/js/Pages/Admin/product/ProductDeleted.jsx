import AdminLayout from "@/Layouts/AdminLayout";
import { Link, useForm } from "@inertiajs/react";
import { Table } from "flowbite-react";
import { useEffect } from "react";
import { toast } from "react-toastify";

const ProductDeleted = ({ products, categories, status, message }) => {
    const { get } = useForm();
    useEffect(() => {
        if (status) {
            toast.success(message);
        } else {
            toast.error(message);
        }
    }, [status, message]);

    const tableColumns = [
        { label: "No.", className: "bg-gray-500 text-white" },
        { label: "Hình", className: "bg-gray-500 text-white" },
        { label: "Tên sản phẩm", className: "bg-gray-500 text-white" },
        { label: "Thể loại", className: "bg-gray-500 text-white" },
        { label: "Giá", className: "bg-gray-500 text-white" },
        { label: "Đánh giá", className: "bg-gray-500 text-white" },
        { label: "Hành động", className: "bg-gray-500 text-white" },
    ];
    return (
        <AdminLayout title="Sản phẩm đã xoá">
            <div className="flex flex-col">
                <h3 className="text-3xl font-bold uppercase">
                    Sản phẩm đã xoá
                </h3>
                <div className="flex justify-start gap-3">
                    <Link
                        href={route("product")}
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
                                    key={i?.label}
                                    className={i?.className}
                                >
                                    {i?.label}
                                </Table.HeadCell>
                            ))}
                        </Table.Head>
                        <Table.Body>
                            {products.map((i, index) => (
                                <Table.Row key={i?.id} className="bg-white">
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
                                            (j) => j?.id == i?.category_id
                                        )?.name || "--"}
                                    </Table.Cell>
                                    <Table.Cell>{i?.price}</Table.Cell>
                                    <Table.Cell>
                                        {[...Array(i?.rate_avg)].map((_, j) => (
                                            <i
                                                key={j}
                                                className="fa-solid fa-star text-yellow-500"
                                            ></i>
                                        ))}
                                        {[...Array(5 - i?.rate_avg)].map(
                                            (_, j) => (
                                                <i
                                                    key={j}
                                                    className="fa-solid fa-star text-black-500"
                                                ></i>
                                            )
                                        )}
                                    </Table.Cell>

                                    <Table.Cell>
                                        <button
                                            className="text-blue-500"
                                            onClick={() =>
                                                get(
                                                    route(
                                                        "restoreProduct",
                                                        i?.id
                                                    )
                                                )
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

export default ProductDeleted;
