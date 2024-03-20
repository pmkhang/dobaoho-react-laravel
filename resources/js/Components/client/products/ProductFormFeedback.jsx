import Button from "@/Components/Button";
import InputText from "@/Components/InputText";
import { Link, useForm, usePage } from "@inertiajs/react";
import { Rating, Textarea } from "flowbite-react";
import { useEffect, useState } from "react";
const ProductFormFeedback = ({ productId }) => {
    const [filledStars, setFilledStars] = useState(Array(5).fill(false));
    const [countStar, setCountStar] = useState(0);
    const auth = usePage()?.props?.auth;
    const handleStarClick = (index) => {
        const newFilledStars = filledStars.map((_, i) =>
            i <= index ? true : false
        );
        setFilledStars(newFilledStars);
    };

    const { data, post, setData, reset } = useForm({
        rate: countStar,
        name: auth?.user?.name,
        title: "",
        content: "",
        product_id: productId,
        user_id: auth?.user?.id,
    });

    useEffect(() => {
        return () => {
            Object.keys(data).forEach((key) => reset(key));
        };
    }, []);

    useEffect(() => {
        setData("rate", countStar);
    }, [countStar]);

    const submit = (e) => {
        e.preventDefault();
        post(route("sendFeedback"));
        reset();
    };

    return (
        <>
            {!auth ? (
                <div className="col-span-5 px-4 flex flex-col gap-3 w-3/5 py-8">
                    <h3 className="text-xl flex gap-2">
                        <Link
                            className="text-blue-600 underline"
                            href={route("login")}
                        >
                            Đăng nhập
                        </Link>{" "}
                        để hỏi đáp / phản hồi{" "}
                    </h3>
                </div>
            ) : (
                <form
                    className="col-span-5 px-4 flex flex-col gap-3 w-3/5 py-8"
                    onSubmit={submit}
                >
                    <h3 className="text-xl flex gap-2">Đánh giá của bạn: </h3>

                    <Rating>
                        {filledStars.map((filled, index) => (
                            <Rating.Star
                                key={index}
                                className="cursor-pointer"
                                filled={filled}
                                onClick={() => {
                                    setCountStar(index + 1);
                                    handleStarClick(index);
                                }}
                            />
                        ))}
                        <span className="ml-2">{countStar} sao</span>
                    </Rating>
                    <InputText
                        label={"Họ và tên"}
                        id="name"
                        name="name"
                        req={true}
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                    />
                    <InputText
                        label={"Tóm tắt/ tiêu đề"}
                        id="title"
                        name="title"
                        req={true}
                        value={data.title}
                        onChange={(e) => setData("title", e.target.value)}
                    />
                    <div className="">
                        <div className="mb-2 block">
                            <label
                                htmlFor="content"
                                className="block font-bold text-gray-900"
                            >
                                Nội dung
                            </label>
                        </div>
                        <Textarea
                            id="content"
                            required
                            rows={4}
                            className="outline-none focus:ring-blue-600 focus:border-blue-600"
                            value={data.content}
                            onChange={(e) => setData("content", e.target.value)}
                        />
                    </div>
                    <Button
                        text={"Gửi đánh giá / phản hồi"}
                        className={"mt-3"}
                    />
                </form>
            )}
        </>
    );
};

export default ProductFormFeedback;
