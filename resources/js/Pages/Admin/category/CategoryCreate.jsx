import Button from "@/Components/admin/components/Button";
import InputText from "@/Components/admin/components/InputText";
import Selector from "@/Components/admin/components/Selector";
import AdminLayout from "@/Layouts/AdminLayout";
import RecursiveCategory from "@/Utils/RecursiveCategory";
import { Link, useForm } from "@inertiajs/react";
import { useEffect } from "react";

const CategoryCreate = ({ categories }) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        parent_id: "",
        status: "",
    });

    const recurCategories =
        categories.length > 0 ? RecursiveCategory(categories) : [];

    const status = [
        { id: 1, name: "Hoạt động" },
        { id: 2, name: "Không hoạt động" },
    ];

    useEffect(() => {
        return () => {
            Object.keys(data).forEach((key) => reset(key));
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route("storeCategory"));
    };

    return (
        <AdminLayout title="Thêm thể loại mới">
            <h3 className="text-3xl font-bold uppercase">
                Thêm thể loại sản phẩm mới
            </h3>
            <div className="mt-8">
                <Link
                    href={route("category")}
                    className="mt-3 py-2 px-4 bg-gray-700 text-white rounded-full "
                >
                    <i className="fa-solid fa-arrow-left mr-3"></i>
                    Quay lại
                </Link>
            </div>
            <form className="mt-8" onSubmit={submit}>
                <div className="flex items-center gap-4 mt-4">
                    <InputText
                        label="Tên thể loại"
                        id="name"
                        name="name"
                        value={data.name}
                        required
                        className="mt-1 block w-full"
                        onChange={(e) => setData("name", e.target.value)}
                        message={errors.name}
                    />
                    <Selector
                        label={"Trạng thái"}
                        name="status"
                        optionPlaceHolder="Trạng thái"
                        options={status}
                        value={data.status}
                        required
                        onChange={(e) => setData("status", e.target.value)}
                        message={errors.status}
                    />
                </div>
                <div className="flex items-center gap-4 mt-8">
                    <Selector
                        label={"Thể loại cấp trên"}
                        name="parent_id"
                        optionPlaceHolder="Thể loại cấp trên"
                        value={data.parent_id}
                        onChange={(e) => setData("parent_id", e.target.value)}
                        message={errors.parent_id}
                        options={recurCategories}
                    />
                </div>
                <Button
                    text={"Thêm mới"}
                    className={"mt-8"}
                    disabled={processing}
                />
            </form>
        </AdminLayout>
    );
};

export default CategoryCreate;
