import InputText from "@/Components/InputText";
import ClientLayout from "@/Layouts/ClientLayout";
import { useEffect, useState } from "react";
import Button from "@/Components/Button";
import Checkbox from "@/Components/Checkbox";
import { Link, useForm } from "@inertiajs/react";
import { toast } from "react-toastify";

const Login = ({ status, message }) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });


    useEffect(() => {
        return () => {
            Object.keys(data).forEach((key) => reset(key));
        };
    }, []);

    useEffect(() => {
        if (status) {
            toast.success(message);
        } else if (errors.status) {
            toast.error(errors.message);
        } else {
            toast.error(message);
        }
    }, [errors.status, errors.message, status, message]);

    const submit = (e) => {
        e.preventDefault();
        post(route("login"));
    };

    return (
        <ClientLayout title="Đăng nhập">
            <div className=" min-h-[500px] bg-white rounded-lg shadow-lg py-8 px-6">
                <h3 className="text-2xl font-bold uppercase text-center">
                    Đăng nhập
                </h3>
                <form
                    className="w-1/3 flex flex-col mx-auto gap-6 mt-8"
                    onSubmit={submit}
                >
                    {errors.message && (
                        <span className="text-base text-red-500 font-bold text-center">
                            {errors.message}
                        </span>
                    )}
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
                    <div className="flex items-center justify-between">
                        <Checkbox
                            id="remember"
                            label="Ghi nhớ đăng nhập"
                            checked={data.remember}
                            onChange={(e) =>
                                setData("remember", e.target.checked)
                            }
                        />
                        <Link className="text-sm text-blue-600 hover:underline">
                            Bạn quên mật khẩu ?
                        </Link>
                    </div>

                    <Button text={"Đăng nhập"} className={"mt-3"} />
                </form>
                <div className="w-full flex gap-3 items-center justify-center mt-4">
                    <h3 className="text-center">Bạn chưa có tài khoản ?</h3>
                    <Link
                        href={route("register")}
                        className="text-sm text-blue-600 hover:underline"
                        disabled={processing}
                    >
                        Đăng ký tại đây
                    </Link>
                </div>
            </div>
        </ClientLayout>
    );
};

export default Login;
