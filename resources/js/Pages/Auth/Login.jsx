import Button from "@/Components/Button";
import Checkbox from "@/Components/Checkbox";
import InputText from "@/Components/InputText";
import ClientLayout from "@/Layouts/ClientLayout";
import { Link, useForm } from "@inertiajs/react";
import { useEffect } from "react";
import { toast } from "react-toastify";

const Login = ({ status, message }) => {
    const { data, setData, post, processing, errors, reset, get } = useForm({
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
        <ClientLayout
            title="Đăng nhập"
            breadcrumb="Đăng nhập"
            breadcrumbLink="/login"
        >
            <div className="bg-white rounded-lg shadow-lg py-8 px-6 mb-4">
                <h3 className="text-2xl font-bold uppercase text-center">
                    Đăng nhập
                </h3>
                <form
                    className="w-1/3 max-tl:w-full flex flex-col mx-auto gap-6 mt-8"
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
                        <Link className="text-sm text-primary hover:underline">
                            Bạn quên mật khẩu ?
                        </Link>
                    </div>

                    <Button
                        className="bg-primary hover:!bg-primary-darker mt-3"
                        text={"Đăng nhập"}
                    />
                </form>
                <div className="w-full flex gap-3 items-center justify-center mt-4">
                    <h3 className="text-center">Bạn chưa có tài khoản ?</h3>
                    <Link
                        href={route("register")}
                        className="text-sm text-primary hover:underline"
                        disabled={processing}
                    >
                        Đăng ký tại đây
                    </Link>
                </div>
                <div className="w-1/3 max-tl:w-full mx-auto flex flex-col gap-3 items-center justify-center mt-4">
                    <h3 className="text-center">Hoặc</h3>
                    <a
                        href={route("login.google")}
                        className="w-full flex items-center font-semibold justify-center gap-3 focus:ring-2 focus:ring-blue-300 text-primary border-2 border-primary py-2 px-3 rounded-lg"
                    >
                        <i className="fa-brands fa-google"></i>
                        <span>Đăng nhập bằng tài khoản Google</span>
                    </a>
                </div>
            </div>
        </ClientLayout>
    );
};

export default Login;
