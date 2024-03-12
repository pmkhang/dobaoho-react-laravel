import ModalDelConfirm from "@/Components/ModalDelConfirm";
import AdminLayout from "@/Layouts/AdminLayout";
import { Link, useForm } from "@inertiajs/react";
import { useEffect, useState } from "react";
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
                                    Hình
                                </th>
                                <th scope="col" className="flex-1 px-6 py-3">
                                    Tên sản phẩm
                                </th>
                                <th scope="col" className="flex-1 px-6 py-3">
                                    Thể loại
                                </th>
                                <th scope="col" className="flex-1 px-6 py-3">
                                    Giá
                                </th>
                                <th scope="col" className="flex-1 px-6 py-3">
                                    Đánh giá sao
                                </th>
                                {/* <th scope="col" className="flex-1 px-6 py-3">
                                    Trạng thái
                                </th> */}
                                <th scope="col" className="flex-1 px-6 py-3">
                                    Hành động
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((i, index) => (
                                <tr
                                    key={i?.id}
                                    className={`flex items-center text-base ${
                                        index % 2 == 0 ? "" : "bg-gray-300"
                                    }`}
                                >
                                    <th className="w-16 px-6 py-2 font-bold whitespace-nowrap ">
                                        {index + 1 < 10
                                            ? `0${index + 1}.`
                                            : `${index + 1}.`}
                                    </th>
                                    <td className="w-28  px-6 py-2 ">
                                        <img
                                            src={i?.product_images[0]?.image}
                                            alt={i?.product_images[0]?.id}
                                            className="block w-[60px] h-[60px] object-cover rounded-xl"
                                        />
                                    </td>
                                    <td className="flex-1 px-6 py-2  font-bold">
                                        {i?.name}
                                    </td>
                                    <td className="flex-1 px-6 py-2  font-bold">
                                        {categories?.find(
                                            (j) => j?.id === i?.category_id
                                        )?.name || "--"}
                                    </td>
                                    <td className="flex-1 px-6 py-2  font-bold">
                                        {i?.price}
                                    </td>
                                    <td className="flex-1 px-6 py-2  font-bold">
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
                                    </td>
                                    {/* <td
                                        className={`flex-1 px-6 py-2 font-bold ${
                                            i?.status === 1
                                                ? "text-green-600"
                                                : "text-red-600"
                                        }`}
                                    >
                                        {i?.status === 1
                                            ? "Đang hoạt động"
                                            : "Không hoạt động"}
                                    </td> */}
                                    <td className="flex-1 px-6 py-2 flex items-center gap-4">
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
                                    Hình
                                </th>
                                <th scope="col" className="flex-1 px-6 py-3">
                                    Tên sản phẩm
                                </th>
                                <th scope="col" className="flex-1 px-6 py-3">
                                    Thể loại
                                </th>
                                <th scope="col" className="flex-1 px-6 py-3">
                                    Giá
                                </th>
                                <th scope="col" className="flex-1 px-6 py-3">
                                    Đánh giá sao
                                </th>
                                {/* <th scope="col" className="flex-1 px-6 py-3">
                                    Trạng thái
                                </th> */}
                                <th scope="col" className="flex-1 px-6 py-3">
                                    Hành động
                                </th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </AdminLayout>
    );
};

export default ProductDeleted;
