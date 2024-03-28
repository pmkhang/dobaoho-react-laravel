import Button from "@/Components/Button";
import InputText from "@/Components/InputText";
import ClientLayout from "@/Layouts/ClientLayout";
import { useForm } from "@inertiajs/react";

const Contact = () => {
    const { data, setData, post } = useForm({
        name: "",
        email: "",
        phone: "",
        title: "",
        message: "",
    });
    return (
        <ClientLayout title={"Liên hệ"}>
            <div className="min-h-[500px]">
                <div className="flex gap-4 items-start">
                    <div className="w-1/3 bg-white py-4 px-6 rounded-lg">
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
                    <form className="w-2/3 flex flex-col gap-3 pt-4 pb-6 px-6 bg-white rounded-lg">
                        <h3 className="text-lg font-bold uppercase mt-2">
                            Thông tin liên hệ của bạn
                        </h3>
                        <InputText
                            label={"Họ và tên"}
                            name={"name"}
                            id={"name"}
                            value={data?.name}
                            onChange={(e) => setData("name", e.target.value)}
                        />
                        <InputText
                            label={"Email"}
                            name={"email"}
                            id={"email"}
                            value={data?.email}
                            onChange={(e) => setData("email", e.target.value)}
                        />
                        <InputText
                            label={"Số điện thoại"}
                            name={"phone"}
                            id={"phone"}
                            value={data?.phone}
                            onChange={(e) => setData("phone", e.target.value)}
                        />
                        <InputText
                            label={"Tiêu đề"}
                            name={"title"}
                            id={"title"}
                            value={data?.title}
                            onChange={(e) => setData("title", e.target.value)}
                        />
                        <InputText
                            label={"Lời nhắn"}
                            name={"message"}
                            id={"message"}
                        />
                        <Button text={"Gửi yêu cầu"} />
                    </form>
                </div>
            </div>
        </ClientLayout>
    );
};

export default Contact;
