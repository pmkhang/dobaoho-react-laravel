import Button from "@/Components/Button";
import InputText from "@/Components/InputText";
import ClientLayout from "@/Layouts/ClientLayout";
import { useForm } from "@inertiajs/react";
import { Textarea } from "flowbite-react";
import { toast } from "react-toastify";
import axios from "axios";
const Contact = () => {
    const { data, setData, post, reset } = useForm({
        name: "",
        email: "",
        phone: "",
        title: "",
        message: "",
    });
    const submit = async (e) => {
        e.preventDefault();
        const res = await axios.post(route("sendContact"), data);
        console.log(res);
        if (res?.data?.status) {
            reset();
            toast.success("Đã gửi liên hệ thành công");
        }
        if (!res.data.status) {
            res.data.errors.forEach((err) => toast.error(err));
        }
    };
    return (
        <ClientLayout title={"Liên hệ"}>
            <div className="min-h-[500px]">
                <div className="flex gap-4 items-start max-tl:flex-col">
                    <div className="w-1/3 bg-white py-4 px-6 rounded-lg max-tl:w-full">
                        <h3 className="text-xl font-bold uppercase mt-2 ">
                            công ty TNHH Quang Trường Thịnh
                        </h3>
                        <ul className="flex flex-col gap-3 mt-3">
                            <li>
                                BPGĐ: 12/1/22/22 Đường số 10m Phường 9, Quận Gò
                                Vấp, Tp. HCM
                            </li>
                            <li>MST: 015404888</li>
                            <li className="font-bold">SĐT: 0938505459</li>
                            <li className="font-bold">
                                Email: quangtruongthinh79@gmail.com
                            </li>
                        </ul>
                    </div>
                    <form
                        onSubmit={submit}
                        className="w-2/3 flex flex-col gap-3 pt-4 pb-6 px-6 bg-white rounded-lg max-tl:w-full"
                    >
                        <h3 className="text-lg font-bold uppercase mt-2">
                            Thông tin liên hệ của bạn
                        </h3>
                        <InputText
                            label={"Họ và tên"}
                            name={"name"}
                            id={"name"}
                            value={data?.name}
                            onChange={(e) => setData("name", e.target.value)}
                            req={true}
                        />
                        <InputText
                            label={"Email"}
                            name={"email"}
                            id={"email"}
                            value={data?.email}
                            onChange={(e) => setData("email", e.target.value)}
                            req={true}
                        />
                        <InputText
                            label={"Số điện thoại"}
                            name={"phone"}
                            id={"phone"}
                            value={data?.phone}
                            onChange={(e) => setData("phone", e.target.value)}
                            req={true}
                        />
                        <InputText
                            label={"Tiêu đề"}
                            name={"title"}
                            id={"title"}
                            value={data?.title}
                            onChange={(e) => setData("title", e.target.value)}
                            req={true}
                        />
                        <div className="">
                            <div className="mb-2 block">
                                <label
                                    htmlFor="content"
                                    className="block font-bold text-gray-900"
                                >
                                    Lời nhắn
                                </label>
                            </div>
                            <Textarea
                                id="content"
                                required
                                rows={4}
                                className="outline-none focus:ring-blue-600 focus:border-blue-600"
                                value={data.message}
                                onChange={(e) =>
                                    setData("message", e.target.value)
                                }
                            />
                        </div>
                        <Button text={"Gửi yêu cầu"} />
                    </form>
                </div>
            </div>
        </ClientLayout>
    );
};

export default Contact;
