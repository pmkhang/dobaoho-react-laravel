import Button from "@/Components/admin/components/Button";
import InputText from "@/Components/admin/components/InputText";
import Selector from "@/Components/admin/components/Selector";
import AdminLayout from "@/Layouts/AdminLayout";
import RecursiveCategory from "@/Utils/RecursiveCategory";
import { Link, useForm } from "@inertiajs/react";
import { useEffect, useState, useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const UserCreate = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        phone: "",
        address: "",
        password: "",
        password_confirmation: "",
        avatar: [],
        status: "",
    });
    const roleUser = [
        {
            id: 1,
            name: "Quản trị viên",
        },
        {
            id: 2,
            name: "Khách hàng",
        },
    ];
    const statusUser = [
        { id: 1, name: "Hoạt động" },
        { id: 2, name: "Không hoạt động" },
    ];
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setData((prevData) => ({
            ...prevData,
            avatar: [file],
        }));
    };

    const handleRemoveImage = (indexToRemove) =>
        setData((prevData) => ({
            ...prevData,
            avatar: prevData.avatar.filter(
                (_, index) => index !== indexToRemove
            ),
        }));

    const submit = (e) => {
        e.preventDefault();
        post(route("storeUser"));
    };
    return (
        <AdminLayout title={"Thêm thành viên mới"}>
            <h3 className="text-3xl font-bold uppercase">
                Thêm thành viên mới
            </h3>
            <div className="mt-8">
                <Link
                    href={route("user")}
                    className="mt-3 py-2 px-4 bg-gray-700 text-white rounded-full "
                >
                    <i className="fa-solid fa-arrow-left mr-3"></i>
                    Quay lại
                </Link>
            </div>
            <form className="mt-8" onSubmit={submit}>
                <div className="flex items-center gap-4 mt-4">
                    <InputText
                        label="Tên thành viên"
                        id="name"
                        name="name"
                        value={data.name}
                        required
                        className="mt-1 block w-full"
                        onChange={(e) => setData("name", e.target.value)}
                        message={errors.name}
                    />
                    <InputText
                        label="Email"
                        id="email"
                        name="email"
                        value={data.email}
                        required
                        className="mt-1 block w-full"
                        onChange={(e) => setData("email", e.target.value)}
                        message={errors.email}
                    />
                </div>
                <div className="flex items-center gap-4 mt-8">
                    <InputText
                        label="Số điện thoại"
                        id="phone"
                        name="phone"
                        value={data.phone}
                        required
                        className="mt-1 block w-full"
                        onChange={(e) => setData("phone", e.target.value)}
                        message={errors.phone}
                    />
                    <InputText
                        label="Địa chỉ"
                        id="address"
                        name="address"
                        value={data.address}
                        required
                        className="mt-1 block w-full"
                        onChange={(e) => setData("address", e.target.value)}
                        message={errors.address}
                    />
                </div>
                <div className="flex items-center gap-4 mt-8">
                    <Selector
                        label={"Cấp thành viên"}
                        name="role"
                        optionPlaceHolder="Cấp thành viên"
                        value={data.role}
                        required
                        onChange={(e) => setData("role", e.target.value)}
                        message={errors.role}
                        options={roleUser}
                    />
                    <Selector
                        label={"Trạng thái"}
                        name="status"
                        optionPlaceHolder="Trạng thái"
                        value={data.status}
                        required
                        onChange={(e) => setData("status", e.target.value)}
                        message={errors.status}
                        options={statusUser}
                    />
                </div>
                <div className="flex items-center gap-4 mt-8">
                    <InputText
                        label="Password"
                        id="password"
                        name="password"
                        type="password"
                        value={data.password}
                        required
                        className="mt-1 block w-full"
                        onChange={(e) => setData("password", e.target.value)}
                        message={errors.password}
                    />
                    <InputText
                        label="Xác nhận password"
                        id="password_confirmation"
                        name="password_confirmation"
                        type="password"
                        value={data.password_confirmation}
                        required
                        className="mt-1 block w-full"
                        onChange={(e) =>
                            setData("password_confirmation", e.target.value)
                        }
                        message={errors.password_confirmation}
                    />
                </div>

                <div className="mt-8 flex flex-col gap-3">
                    <div className="flex flex-col gap-3 w-full relative">
                        <label
                            htmlFor="dropzone-file"
                            className="block font-bold text-gray-900"
                        >
                            Avatar
                        </label>
                        <label
                            htmlFor="dropzone-file"
                            className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 "
                        >
                            <div className="flex flex-col items-center justify-center">
                                <i className="fa-solid fa-cloud-arrow-up text-3xl text-gray-800"></i>
                                <p className="mb-2 text-sm text-gray-500 ">
                                    <span className="font-semibold">
                                        Click to upload
                                    </span>
                                </p>
                                <p className="text-xs text-gray-500 ">
                                    PNG, JPG or JPEG
                                </p>
                            </div>
                            <input
                                id="dropzone-file"
                                type="file"
                                className="hidden"
                                accept="image/png, image/jpeg, image/jpg"
                                onChange={handleFileChange}
                            />
                        </label>
                        <span className="absolute text-base text-red-500 bottom-[-24px]">
                            {errors.avatar}
                        </span>
                    </div>
                    {data.avatar && data.avatar.length > 0 && (
                        <div className="flex flex-col gap-3 mt-6">
                            <h2 className="block font-bold text-gray-900">
                                Avatar đã chọn:
                            </h2>
                            <div className="grid grid-cols-7 gap-3">
                                {data.avatar.map((file, index) => (
                                    <div key={index} className="relative">
                                        <span
                                            onClick={() =>
                                                handleRemoveImage(index)
                                            }
                                            className="absolute right-0 top-0 flex items-center justify-center  cursor-pointer w-[30px] h-[30px] bg-white"
                                        >
                                            <i className="fa-solid fa-xmark text-lg"></i>
                                        </span>
                                        <img
                                            src={URL.createObjectURL(file)}
                                            alt={`Image ${index}`}
                                            className="w-[200px] h-[200px] object-cover rounded-lg"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
                <Button
                    text={"Thêm thành viên mới"}
                    className={"mt-8"}
                    disabled={processing}
                />
            </form>
        </AdminLayout>
    );
};

export default UserCreate;
