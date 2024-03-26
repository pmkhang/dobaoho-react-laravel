import Button from "@/Components/Button";
import InputText from "@/Components/InputText";
import Selector from "@/Components/Selector";
import AdminLayout from "@/Layouts/AdminLayout";
import RecursiveCategory from "@/Utils/RecursiveCategory";
import { Link, useForm } from "@inertiajs/react";
import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const ProductEdit = ({ product, categories }) => {
    const [dataDesc, setDataDesc] = useState(product?.desc);
    const recurCategories = RecursiveCategory(categories);
    const statusProduct = [
        { id: 1, name: "Hoạt động" },
        { id: 2, name: "Không hoạt động" },
    ];
    const { data, setData, post, get, processing, errors, reset } = useForm({
        name: product?.name,
        price: product?.price,
        category_id: product?.category_id,
        status: product?.status,
        images: product?.product_images,
        newImages: [],
        desc: dataDesc,
        classifys: product.product_classifys.map((i) => i?.name),
        newClassifys: [],
    });

    useEffect(() => {
        return () => {
            Object.keys(data).forEach((key) => reset(key));
        };
    }, []);
    const handleFileChange = (event) => {
        setData((prevData) => ({
            ...prevData,
            newImages: [
                ...prevData.newImages,
                ...Array.from(event.target.files),
            ],
        }));
    };
    const handleRemoveImage = (data, indexToRemove, id) => {
        setData((prevData) => ({
            ...prevData,
            [data]: prevData[data].filter(
                (_, index) => index !== indexToRemove
            ),
        }));
        if (data == "images") {
            get(route("deleteImage", id));
        }
    };

    useEffect(() => {
        setData("desc", dataDesc);
    }, [dataDesc]);

    useEffect(() => {
        if (data.desc == "<p><br></p>") {
            setData("desc", "");
        }
    }, [data.desc]);
    const [quantityClassify, setQuantityClassify] = useState(0);

    const handleSetClasstify = (event, index) => {
        const name = event.target.value;
        setData((prevData) => {
            const updatedClasstify = [...prevData.classifys];
            updatedClasstify[index] = name;
            return {
                ...prevData,
                classifys: updatedClasstify,
            };
        });
    };

    const handleSetNewClasstify = (event, index) => {
        const name = event.target.value;
        setData((prevData) => {
            const updatedClasstify = [...prevData.newClassifys];
            updatedClasstify[index] = name;
            return {
                ...prevData,
                newClassifys: updatedClasstify,
            };
        });
    };

    const handleDeleteNewClassify = (index) => {
        setData((prevData) => {
            const updatedClassifys = [...prevData.newClassifys];
            updatedClassifys.splice(index, 1);
            return {
                ...prevData,
                newClassifys: updatedClassifys,
            };
        });
        setQuantityClassify((prevQuantity) => prevQuantity - 1);
    };

    const handleDeleteClassify = (index) => {
        setData((prevData) => {
            const updatedClassifys = [...prevData.classifys];
            updatedClassifys.splice(index, 1);
            return {
                ...prevData,
                classifys: updatedClassifys,
            };
        });
    };

    const submit = (e) => {
        e.preventDefault();
        post(route("updateProduct", product?.id));
    };
    return (
        <AdminLayout title={"Chỉnh sửa sản phẩm " + product?.id}>
            <h3 className="text-3xl font-bold uppercase">Chỉnh sửa sản phẩm</h3>
            <div className="flex justify-start gap-3">
                <Link
                    href={route("product")}
                    className="mt-3 py-2 px-4 bg-gray-700 text-white rounded-full "
                >
                    <i className="fa-solid fa-arrow-left mr-3"></i>
                    Quay lại
                </Link>
            </div>
            <form className="mt-8" onSubmit={submit}>
                <div className="flex items-center gap-4 mt-4">
                    <InputText
                        label="Tên sản phẩm"
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
                        value={data.status}
                        required
                        onChange={(e) => setData("status", e.target.value)}
                        message={errors.status}
                        options={statusProduct}
                    />
                </div>
                <div className="flex items-center gap-4 mt-8">
                    <InputText
                        label="Giá sản phẩm"
                        id="price"
                        name="price"
                        value={data.price}
                        required
                        className="mt-1 block w-full"
                        onChange={(e) => setData("price", e.target.value)}
                        message={errors.price}
                    />
                    <Selector
                        label={"Thể loại sản phẩm"}
                        name="category_id"
                        optionPlaceHolder="Thể loại sản phẩm"
                        value={data.category_id}
                        onChange={(e) => setData("category_id", e.target.value)}
                        message={errors.category_id}
                        options={recurCategories}
                        required
                    />
                </div>
                <div className="mt-8 flex flex-col gap-3 relative">
                    <label className="block font-bold text-gray-900">
                        Thông tin mô tả <i className="text-red-500"> *</i>
                    </label>
                    <ReactQuill
                        theme="snow"
                        value={dataDesc}
                        onChange={setDataDesc}
                    />
                    <span className="absolute text-base text-red-500 bottom-[-24px]">
                        {errors.desc}
                    </span>
                </div>
                <div className="flex flex-col gap-4 mt-8">
                    <h3 className="block font-bold text-gray-900">
                        Phân loại sản phẩm
                    </h3>
                    <ul className="flex flex-col gap-4">
                        {data?.classifys?.map((i, index) => (
                            <li key={index} className="flex items-center gap-4">
                                <InputText
                                    label={`Tên phân loại (${index + 1})`}
                                    id={`old-${index}`}
                                    name={`old-${index}`}
                                    value={i}
                                    required
                                    className="mt-1 block w-full"
                                    onChange={(e) =>
                                        handleSetClasstify(e, index)
                                    }
                                />
                                <div className="mt-6">
                                    <Button
                                        text={"X"}
                                        type="button"
                                        onClick={() =>
                                            handleDeleteClassify(index)
                                        }
                                    />
                                </div>
                            </li>
                        ))}
                        {Array.from({ length: quantityClassify }, (_, j) => (
                            <li
                                key={j}
                                className="py-2 flex items-center gap-4"
                            >
                                <InputText
                                    label={`Tên phân loại (${
                                        j + 1 + data?.classifys?.length
                                    })`}
                                    id={`new-${j}`}
                                    name={`new-${j}`}
                                    value={data.newClassifys[j] || ""}
                                    onChange={(e) =>
                                        handleSetNewClasstify(e, j)
                                    }
                                />
                                <div className="mt-6">
                                    <Button
                                        text={"X"}
                                        type="button"
                                        onClick={() =>
                                            handleDeleteNewClassify(j)
                                        }
                                    />
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="w-1/4">
                        <Button
                            text={
                                "Thêm phân loại mới cho sản phẩm (không bắc buộc)"
                            }
                            color="warning"
                            type="button"
                            className={"focus:ring-0"}
                            onClick={() => {
                                setQuantityClassify(quantityClassify + 1);
                            }}
                        />
                    </div>
                </div>

                <div className="mt-8 flex flex-col gap-3">
                    <div className="flex flex-col gap-3 w-full relative">
                        <label
                            htmlFor="dropzone-file"
                            className="block font-bold text-gray-900"
                        >
                            Hình <i className="text-red-500"> *</i>
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
                                multiple
                                accept="image/png, image/jpeg, image/jpg"
                                onChange={handleFileChange}
                            />
                        </label>
                        <span className="absolute text-base text-red-500 bottom-[-24px]">
                            {errors.images}
                        </span>
                    </div>
                    {data.images && data.images.length > 0 && (
                        <div className="flex flex-col gap-3 mt-6">
                            <h2 className="block font-bold text-gray-900">
                                Các hình ảnh cũ đã đăng:
                            </h2>
                            <div className="grid grid-cols-7 gap-3">
                                {data.images.map((i, index) => (
                                    <div key={index} className="relative">
                                        <span
                                            onClick={() =>
                                                handleRemoveImage(
                                                    "images",
                                                    index,
                                                    i?.id
                                                )
                                            }
                                            className="absolute right-0 top-0 flex items-center justify-center  cursor-pointer w-[30px] h-[30px] bg-white"
                                        >
                                            <i className="fa-solid fa-xmark text-lg"></i>
                                        </span>
                                        <img
                                            src={i?.image}
                                            alt={`Image ${index}`}
                                            className="w-[200px] h-[200px] object-cover rounded-lg"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                    {data.newImages && data.newImages.length > 0 && (
                        <div className="flex flex-col gap-3 mt-6">
                            <h2 className="block font-bold text-gray-900">
                                Các hình ảnh đã chọn:
                            </h2>
                            <div className="grid grid-cols-7 gap-3">
                                {data.newImages.map((file, index) => (
                                    <div key={index} className="relative">
                                        <span
                                            onClick={() =>
                                                handleRemoveImage(
                                                    "newImages",
                                                    index
                                                )
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
                    text={"Cập nhật"}
                    className={"mt-8"}
                    disabled={processing}
                />
            </form>
        </AdminLayout>
    );
};

export default ProductEdit;
