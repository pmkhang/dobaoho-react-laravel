import { Table } from "flowbite-react";
import { FloatingLabel } from "flowbite-react";
import { useForm } from "@inertiajs/react";
import { useState } from "react";
import Button from "@/Components/Button";
import formatCurrency from "@/Utils/formatCurrency";

const FormInfo = ({ user }) => {
    const { data, setData, post, processing } = useForm({
        name: user?.name,
        email: user?.email,
        phone: user?.phone,
        address: user?.address,
        avatar: null,
    });

    const [selectedImage, setSelectedImage] = useState(null);
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        const imageUrl = URL.createObjectURL(file);
        setSelectedImage(imageUrl);
        setData("avatar", file);
    };

    const submit = (e) => {
        e.preventDefault();
        post(route("editProfile", user?.id));
    };

    return (
        <form className="flex" onSubmit={submit}>
            <div className="w-3/5">
                <Table>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell className="text-end font-bold">
                                Tên
                            </Table.Cell>
                            <Table.Cell>
                                <FloatingLabel
                                    variant="standard"
                                    label={data?.name ? "" : "Nhập tên"}
                                    value={data?.name}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                    required
                                />
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell className="text-end font-bold">
                                Email
                            </Table.Cell>
                            <Table.Cell>
                                <FloatingLabel
                                    variant="filled"
                                    label={data?.email ? "" : "Nhập email"}
                                    value={data?.email}
                                    readOnly
                                    disabled
                                />
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell className="text-end font-bold">
                                Số điện thoại
                            </Table.Cell>
                            <Table.Cell>
                                <FloatingLabel
                                    variant="standard"
                                    label={
                                        data?.phone ? "" : "Nhập số điện thoại"
                                    }
                                    value={data?.phone}
                                    onChange={(e) =>
                                        setData("phone", e.target.value)
                                    }
                                    required
                                />
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell className="text-end font-bold">
                                Địa chỉ
                            </Table.Cell>
                            <Table.Cell>
                                <FloatingLabel
                                    variant="standard"
                                    label={data?.address ? "" : "Nhập địa chỉ"}
                                    value={data?.address}
                                    onChange={(e) =>
                                        setData("address", e.target.value)
                                    }
                                    required
                                />
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
                <div className="px-4 mt-4">
                    <Button text={"Lưu"} disabled={processing} />
                </div>
            </div>
            <div className="w-2/5 flex flex-col items-center gap-6 border-l-2 mt-4">
                {selectedImage ? (
                    <img
                        loading="lazy"
                        src={selectedImage}
                        alt="Selected"
                        className="w-40 h-40 object-cover rounded-full mt-4"
                    />
                ) : (
                    <img
                        loading="lazy"
                        src={user?.avatar}
                        alt={user?.id}
                        className="w-40 h-40 object-cover rounded-full mt-4"
                    />
                )}
                <div className="mt-4">
                    <label
                        htmlFor="img"
                        className="cursor-pointer  px-3 py-2 border rounded-md"
                    >
                        Chọn ảnh mới
                    </label>
                    <input
                        type="file"
                        hidden
                        id="img"
                        accept="image/jpg, image/jpeg, image/png"
                        onChange={handleImageChange}
                    />
                </div>
            </div>
        </form>
    );
};

export default FormInfo;
