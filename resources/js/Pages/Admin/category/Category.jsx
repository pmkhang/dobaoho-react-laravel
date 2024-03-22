import ModalDelConfirm from "@/Components/ModalDelConfirm";
import AdminLayout from "@/Layouts/AdminLayout";
import { Link } from "@inertiajs/react";
import { Table } from "flowbite-react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Category = ({ categories, message, status }) => {
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
        { label: "Tên thể loại", className: "bg-gray-500 text-white" },
        { label: "Thể loại cấp trên", className: "bg-gray-500 text-white" },
        { label: "Trạng thái", className: "bg-gray-500 text-white" },
        { label: "Hành động", className: "bg-gray-500 text-white" },
    ];
    return (
        <AdminLayout title={"Thể loại sản phẩm"}>
            <div className="flex flex-col">
                <h2 className="text-3xl font-bold uppercase">
                    Thể loại sản phẩm
                </h2>
                <div className="flex justify-end">
                    <Link
                        href={route("createCategory")}
                        className="mt-3 py-2 px-4 bg-green-700 text-white rounded-full "
                    >
                        <i className="fa-solid fa-plus mr-2"></i>
                        Thêm thể loại mới
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
                        <Table.Body className="divide-y">
                            {categories?.map((i, index) => (
                                <Table.Row key={i?.id} className="bg-white">
                                    <Table.Cell>
                                        {index + 1 < 10
                                            ? `0${index + 1}.`
                                            : `${index + 1}.`}
                                    </Table.Cell>
                                    <Table.Cell>{i?.name}</Table.Cell>
                                    <Table.Cell>
                                        {categories?.find(
                                            (j) => j?.id == i?.parent_id
                                        )?.name || "--"}
                                    </Table.Cell>
                                    <Table.Cell>
                                        <span
                                            className={`flex-1 px-6 py-2 font-bold ${
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
                                                href={route(
                                                    "editCategory",
                                                    i?.id
                                                )}
                                                className="text-blue-500 px-2 py-1"
                                            >
                                                Sửa
                                            </Link>
                                            <button
                                                onClick={() => {
                                                    setOpentModal({
                                                        name: i?.name,
                                                        delRoute: route(
                                                            "destroyCategory",
                                                            i?.id
                                                        ),
                                                        showModal: true,
                                                    });
                                                }}
                                                className="text-red-500 px-2 py-1"
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
                content={"Thể loại " + openModal.name + " này"}
                delRoute={openModal?.delRoute}
                openModal={openModal?.showModal}
                setOpentModal={setOpentModal}
            />
        </AdminLayout>
    );
};

export default Category;
