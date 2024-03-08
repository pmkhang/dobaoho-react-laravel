import ModalDelConfirm from "@/Components/admin/components/ModalDelConfirm";
import AdminLayout from "@/Layouts/AdminLayout";
import { Link } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Category = ({ categories, message, status }) => {
    const [delCategoryData, setDelCategoryData] = useState({
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
        <AdminLayout title={"Thể loại sản phẩm"}>
            <div className="flex flex-col">
                <h3 className="text-3xl font-bold uppercase">
                    Thể loại sản phẩm
                </h3>
                <div className="flex justify-end">
                    <Link
                        href={route("createCategory")}
                        className="mt-3 py-2 px-4 bg-green-700 text-white rounded-full "
                    >
                        <i className="fa-solid fa-plus mr-2"></i>
                        Thêm thể loại mới
                    </Link>
                </div>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-8">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                        <thead className="text-base text-white uppercase bg-gray-700 ">
                            <tr className="flex items-center">
                                <th scope="col" className="flex-1 px-6 py-3">
                                    No.
                                </th>
                                <th scope="col" className="flex-1 px-6 py-3">
                                    Tên thể loại
                                </th>
                                <th scope="col" className="flex-1 px-6 py-3">
                                    Thể loại cấp trên
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
                            {categories?.map((i, index) => (
                                <tr
                                    key={i?.id}
                                    className={`flex items-center text-base ${
                                        index % 2 == 0 ? "" : "bg-gray-300"
                                    }`}
                                >
                                    <th className="flex-1 px-6 py-2 font-bold whitespace-nowrap ">
                                        {index + 1 < 10
                                            ? `0${index + 1}.`
                                            : `${index + 1}.`}
                                    </th>
                                    <td className="flex-1 px-6 py-2  font-bold">
                                        {i?.name}
                                    </td>
                                    <td className="flex-1 px-6 py-2  font-bold">
                                        {categories?.find(
                                            (j) => j?.id === i?.parent_id
                                        )?.name || "--"}
                                    </td>
                                    <td
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
                                    <td className="flex-1 px-6 py-2 flex items-center gap-4">
                                        <Link
                                            href={route("editCategory", i?.id)}
                                            className="text-blue-500"
                                        >
                                            Sửa
                                        </Link>
                                        <button
                                            onClick={() => {
                                                setDelCategoryData({
                                                    name: i?.name,
                                                    delRoute: route(
                                                        "destroyCategory",
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
                                <th scope="col" className="flex-1 px-6 py-3">
                                    No.
                                </th>
                                <th scope="col" className="flex-1 px-6 py-3">
                                    Tên thể loại
                                </th>
                                <th scope="col" className="flex-1 px-6 py-3">
                                    Thể loại cấp trên
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
            {delCategoryData?.showModal && (
                <ModalDelConfirm
                    content={"Thể loại " + delCategoryData.name + " này"}
                    delRoute={delCategoryData?.delRoute}
                    setDelCategoryData={setDelCategoryData}
                />
            )}
        </AdminLayout>
    );
};

export default Category;
