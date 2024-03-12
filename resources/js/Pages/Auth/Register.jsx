import InputText from "@/Components/InputText";
import ClientLayout from "@/Layouts/ClientLayout";
import { useEffect, useState, useRef } from "react";

import { Link, useForm } from "@inertiajs/react";
import Button from "@/Components/Button";
import Checkbox from "@/Components/Checkbox";

const Register = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        phone: "",
        email: "",
        address: "",
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            Object.keys(data).forEach((key) => reset(key));
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        console.log(data);
        post(route("register"));
    };

    return (
        <ClientLayout title="Đăng nhập">
            <div className=" min-h-[500px] bg-white rounded-lg shadow-lg py-8 px-6">
                <h3 className="text-2xl font-bold uppercase text-center">
                    Đăng ký
                </h3>
                <form
                    className="w-1/2 flex flex-col mx-auto gap-6 mt-8"
                    onSubmit={submit}
                >
                    <div className="flex items-center gap-3">
                        <InputText
                            label="Họ và tên"
                            id="name"
                            name="name"
                            value={data.name}
                            required
                            className="mt-1 block w-full"
                            onChange={(e) => setData("name", e.target.value)}
                            message={errors.name}
                        />
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
                    </div>
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
                    <InputText
                        label="Mật khẩu"
                        id="password"
                        name="password"
                        value={data.password}
                        type="password"
                        required
                        className="mt-1 block w-full"
                        onChange={(e) => setData("password", e.target.value)}
                        message={errors.password}
                    />
                    <InputText
                        label="Xác nhận mật khẩu"
                        id="password_confirmation"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        type="password"
                        required
                        className="mt-1 block w-full"
                        onChange={(e) =>
                            setData("password_confirmation", e.target.value)
                        }
                        message={errors.password_confirmation}
                    />

                    <Button text={"Đăng ký"} className={"mt-3"} />
                </form>
                <div className="w-full flex gap-3 items-center justify-center mt-4">
                    <h3 className="text-center">Bạn đã có tài khoản ?</h3>
                    <Link
                        href={route("login")}
                        className="text-sm text-blue-600 hover:underline"
                    >
                        Đăng nhập tại đây
                    </Link>
                </div>
            </div>
        </ClientLayout>
    );
};

export default Register;
