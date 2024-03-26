import Button from "@/Components/Button";
import CartTable from "@/Components/client/cart/CartTable";
import ClientLayout from "@/Layouts/ClientLayout";
import formatCurrency from "@/Utils/formatCurrency";
import { Link, useForm } from "@inertiajs/react";
import { useState } from "react";

const tableColumns = [
    {
        label: "Stt",
        className: "bg-blue-500 text-white",
    },
    { label: "Hình", className: "bg-blue-500 text-white" },
    {
        label: "Tên sản phẩm",
        className: "bg-blue-500 text-white",
    },
    {
        label: "Số lượng",
        className: "bg-blue-500 text-white",
    },
    {
        label: "Giá/sản phẩm",
        className: "bg-blue-500 text-white",
    },
    ,
    {
        label: "Giá tổng",
        className: "bg-blue-500 text-white",
    },
    {
        label: "",
        className: "bg-blue-500 text-white",
    },
];

const Cart = ({ cartProducts, total_price, user_id }) => {
    const [quantityItems, setQuantityItems] = useState(
        cartProducts.map((product) => +product.quantity)
    );
    const { post, get } = useForm();

    const handleQuantityChange = (index, event) => {
        const newQuantityItems = [...quantityItems];
        const parsedValue = parseInt(event.target.value);
        newQuantityItems[index] = isNaN(+parsedValue)
            ? 0
            : +Math.max(+parsedValue, 0);
        setQuantityItems(newQuantityItems);
    };
    const handleClickQuantityChange = (index, operation, id) => {
        const newQuantityItems = [...quantityItems];
        const prevNumber = +newQuantityItems[index];
        const newValue =
            operation == "plus" ? +prevNumber + 1 : +prevNumber - 1;
        newQuantityItems[index] = +newValue < 0 ? 0 : +newValue;
        setQuantityItems(newQuantityItems);
        post(
            route("updateQuantity", {
                id,
                [operation]: +newValue,
            })
        );
    };

    const updateQuantity = (e, id, quantity) => {
        e.preventDefault();
        if (+quantity == 0) {
            post(
                route("updateQuantity", {
                    id,
                    minus: +quantity,
                })
            );
        } else {
            post(route("updateQuantity", { id, quantity: +quantity }));
        }
    };

    const checkOut = (e) => {
        e.preventDefault();
        get(route("checkout", user_id));
    };

    return (
        <ClientLayout title={"Giỏ hàng"}>
            <div className="w-full h-fit min-h-[380px] bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-3xl font-bold mb-6 text-center">
                    Giỏ hàng của tôi
                </h3>
                {cartProducts.length <= 0 && (
                    <div className="flex items-center justify-center flex-col gap-4 mt-20">
                        <h4 className="text-3xl font-semibold">
                            Bạn chưa có thêm sản phẩm nào
                        </h4>
                        <Link className="text-blue-500 underline font-bold mt-8">
                            Danh sách sản phẩm
                        </Link>
                    </div>
                )}
                {cartProducts.length > 0 && (
                    <>
                        <CartTable
                            cartProducts={cartProducts}
                            tableColumns={tableColumns}
                            handleClickQuantityChange={
                                handleClickQuantityChange
                            }
                            updateQuantity={updateQuantity}
                            handleQuantityChange={handleQuantityChange}
                            quantityItems={quantityItems}
                            post={post}
                        />
                        <form
                            className="flex items-center justify-between mt-10"
                            onSubmit={checkOut}
                        >
                            <div className="w-[400%]">
                                <h3 className="text-xl font-bold">
                                    Tổng giá trị ước tính:{" "}
                                    <span className="text-blue-800 text-2xl ml-2">
                                        {formatCurrency(total_price)}
                                    </span>
                                </h3>
                            </div>
                            <Button text={"Tiến hành đặt hàng"} />
                        </form>
                    </>
                )}
            </div>
        </ClientLayout>
    );
};

export default Cart;
