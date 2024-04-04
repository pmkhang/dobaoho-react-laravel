import Button from "@/Components/Button";
import formatCurrency from "@/Utils/formatCurrency";
import { useForm, Link } from "@inertiajs/react";
import { Rating } from "flowbite-react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const ProductInfoDetail = ({ name, price, productId, rate_avg, classifys }) => {
    const [quantity, setQuantity] = useState(1);
    const [validate, setValidate] = useState(false);
    const [valdMessage, setValdMessage] = useState("");
    const { data, post, setData } = useForm({
        product_id: productId,
        quantity: 1,
        classify: "",
    });
    const [activeButton, setActiveButton] = useState(null);

    const setAcctive = (i) => {
        setActiveButton(i?.id);
        setData("classify", i?.name);
    };
    const addToCart = () => {
        if (validate) {
            post(route("addProductToCart"));
            toast.success("Thêm vào giỏ hàng thành công");
        } else {
            setValdMessage("Bạn chưa chọn phân loại sản phẩm");
        }
    };

    useEffect(() => {
        if (classifys.length > 0) {
            if (data.classify != "") {
                setValidate(true);
            } else {
                setValidate(false);
            }
        } else {
            setValidate(true);
        }
    }, [classifys, data.classify]);

    useEffect(() => {
        setData("quantity", quantity);
    }, [quantity]);

    return (
        <div className="w-full min-h-[480px] max-tl:min-h-fit col-span-3 max-tl:col-span-5 border-l-2 max-tl:border-l-0 p-4">
            <div className="flex flex-col justify-between max-tl:justify-start gap-4 min-h-[480px] max-tl:min-h-fit">
                <div>
                    <h5 className="font-semibold tracking-tight text-gray-900 text-3xl">
                        {name}
                    </h5>
                    <div className="flex items-center gap-3 mt-2.5 mb-5">
                        <div className="flex items-center ">
                            <Rating>
                                {+rate_avg > 0 &&
                                    Array.from(
                                        { length: +rate_avg },
                                        (_, j) => <Rating.Star key={j} />
                                    )}
                                {Array.from(
                                    { length: 5 - +rate_avg },
                                    (_, j) => (
                                        <Rating.Star filled={false} key={j} />
                                    )
                                )}
                            </Rating>
                            <span className="bg-blue-100 text-primary-darker text-xs font-semibold px-2.5 py-0.5 rounded  ms-3">
                                {rate_avg}
                            </span>
                        </div>
                        {/* <div className="border-l-2 px-2">
                            <strong className="underline">100</strong>
                            <span> Đánh giá</span>
                        </div>
                        <div className="border-l-2 px-2">
                            <strong className="underline">500</strong>
                            <span> Đã bán</span>
                        </div> */}
                    </div>
                    <div className=" p-3 bg-gray-100 rounded-lg border">
                        <strong className="text-xl text-primary">
                            {/* Giá: {formatCurrency(+price)} */}
                            Giá: Liên hệ
                        </strong>
                    </div>
                    {classifys.length > 0 && (
                        <div className="mt-5">
                            <strong className="text-xl">Phân loại: </strong>
                            <div className="grid grid-cols-6 max-mb:grid-cols-3 mt-2 gap-3">
                                {classifys?.map((i) => (
                                    <Button
                                        key={i?.id}
                                        text={i?.name}
                                        color={
                                            activeButton === i?.id
                                                ? "warning"
                                                : "light"
                                        }
                                        className={`focus:ring-0`}
                                        onClick={() => {
                                            setAcctive(i);
                                        }}
                                    />
                                ))}
                            </div>
                            {!validate && valdMessage && (
                                <p className="text-red-600 mt-3">
                                    {valdMessage}
                                </p>
                            )}
                        </div>
                    )}
                </div>
                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-4">
                        <a
                            href="mailto:quangtruongthinh79@gmail.com"
                            target="_blank"
                        >
                            <img
                                loading="lazy"
                                src="/uploads/mail.png"
                                alt="zalo"
                                className="w-[40px] h-[40px] cursor-pointer "
                            />
                        </a>
                        <a href="tel:0938505459" target="_blank">
                            <img
                                loading="lazy"
                                src="/uploads/phone-icon-6753051_1280.png"
                                alt="pone"
                                className="w-[40px] h-[40px] cursor-pointer"
                            />
                        </a>
                        <a href="https://zalo.me/0938505459" target="_blank">
                            <img
                                loading="lazy"
                                src="/uploads/zalo.png"
                                alt="zalo"
                                className="w-[40px] h-[40px] cursor-pointer"
                            />
                        </a>
                    </div>
                    <div className="flex flex-col gap-2">
                        <i className="text-gray-500">
                            Để được tư vấn cụ thể quý khách vui lòng gọi:
                        </i>
                        <a
                            href="tel:0938505459"
                            className="text-primary-darker text-2xl font-bold"
                        >
                            0938505459
                        </a>
                    </div>
                    <Link href="/lien-he">
                        <Button
                            className="bg-primary hover:!bg-primary-darker"
                            text={"Liên hệ để đặt hàng"}
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductInfoDetail;

{
    /* <div className="mt-5">
                <strong className="text-xl">Số lượng:</strong>
                <div className="flex items-center mt-3">
                    <button
                        id="minus"
                        className="w-10 h-10 flex  items-center justify-center border"
                        onClick={() =>
                            setQuantity(quantity > 1 ? quantity - 1 : 1)
                        }
                    >
                        <i className="fa-solid fa-minus"></i>
                    </button>
                    <span className="min-w-10 max-h-10 h-10 px-2 flex  items-center justify-center border">
                        {quantity}
                    </span>
                    <button
                        id="plus"
                        className="w-10 h-10 flex  items-center justify-center border"
                        onClick={() => setQuantity(quantity + 1)}
                    >
                        <i className="fa-solid fa-plus"></i>
                    </button>
                </div>
            </div>
            <div className="mt-5 flex gap-4 max-mb:flex-col">
                <Button
                    onClick={addToCart}
                    text={"Thêm vào giỏ hàng"}
                    outline
                />
                <Button className="bg-primary hover:!bg-primary-darker" text={"Mua ngay"} />
            </div> */
}
