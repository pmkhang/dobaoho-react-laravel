import ClientLayout from "@/Layouts/ClientLayout";
import { Table, Checkbox } from "flowbite-react";
import { Link, useForm } from "@inertiajs/react";
import { useEffect, useState } from "react";
import Button from "@/Components/Button";
import formatCurrency from "@/Utils/formatCurrency";

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
        cartProducts.map((product) => product.quantity)
    );
    const { post, get } = useForm();

    const handleQuantityChange = (index, event) => {
        const newQuantityItems = [...quantityItems];
        const parsedValue = parseInt(event.target.value);
        newQuantityItems[index] = isNaN(parsedValue)
            ? 0
            : Math.max(parsedValue, 0);
        setQuantityItems(newQuantityItems);
    };
    const handleClickQuantityChange = (index, operation, id) => {
        const newQuantityItems = [...quantityItems];
        const prevNumber = newQuantityItems[index];
        const newValue = operation == "plus" ? prevNumber + 1 : prevNumber - 1;
        newQuantityItems[index] = newValue < 0 ? 0 : newValue;
        setQuantityItems(newQuantityItems);
        post(
            route("updateQuantity", {
                id,
                [operation]: newValue,
            })
        );
    };

    const updateQuantity = (e, id, quantity) => {
        e.preventDefault();
        if (quantity == 0) {
            post(
                route("updateQuantity", {
                    id,
                    minus: quantity,
                })
            );
        } else {
            post(route("updateQuantity", { id, quantity }));
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
                        <Table striped hoverable>
                            <Table.Head>
                                {tableColumns.map((i) => (
                                    <Table.HeadCell
                                        key={i.label}
                                        className={i.className}
                                    >
                                        {i.label}
                                    </Table.HeadCell>
                                ))}
                            </Table.Head>
                            <Table.Body>
                                {cartProducts.map((i, index) => (
                                    <Table.Row key={i?.product_id}>
                                        <Table.Cell>{index + 1}</Table.Cell>
                                        <Table.Cell>
                                            <img
                                                src={
                                                    i?.products[0]
                                                        ?.product_images[0]
                                                        ?.image
                                                }
                                                alt={
                                                    "image" + i?.products[0]?.id
                                                }
                                                className="w-16 h-16 object-cover rounded-lg"
                                            />
                                        </Table.Cell>
                                        <Table.Cell>
                                            {i?.products[0]?.name}
                                        </Table.Cell>
                                        <Table.Cell>
                                            <div className="flex items-center gap-3">
                                                <span
                                                    className="flex items-center justify-center p-1.5 border rounded-lg cursor-pointer"
                                                    onClick={() => {
                                                        handleClickQuantityChange(
                                                            index,
                                                            "minus",
                                                            i?.id
                                                        );
                                                    }}
                                                >
                                                    <i className="fa-solid fa-minus"></i>
                                                </span>
                                                <form
                                                    onSubmit={(e) => {
                                                        updateQuantity(
                                                            e,
                                                            i?.id,
                                                            quantityItems[index]
                                                        );
                                                    }}
                                                >
                                                    <input
                                                        type="text"
                                                        value={
                                                            quantityItems[index]
                                                        }
                                                        onChange={(event) => {
                                                            handleQuantityChange(
                                                                index,
                                                                event
                                                            );
                                                        }}
                                                        className="flex items-center justify-center max-w-16 border-gray-300 rounded-md bg-none"
                                                        onBlur={(e) => {
                                                            updateQuantity(
                                                                e,
                                                                i?.id,
                                                                quantityItems[
                                                                    index
                                                                ]
                                                            );
                                                            if (
                                                                quantityItems[
                                                                    index
                                                                ] == 0
                                                            ) {
                                                                post(
                                                                    route(
                                                                        "updateQuantity",
                                                                        {
                                                                            id: i?.id,
                                                                            minus: quantityItems[
                                                                                index
                                                                            ],
                                                                        }
                                                                    )
                                                                );
                                                            }
                                                        }}
                                                    />
                                                </form>
                                                <span
                                                    className="flex items-center justify-center p-1.5 border rounded-lg cursor-pointer"
                                                    onClick={() => {
                                                        handleClickQuantityChange(
                                                            index,
                                                            "plus",
                                                            i?.id
                                                        );
                                                    }}
                                                >
                                                    <i className="fa-solid fa-plus"></i>
                                                </span>
                                            </div>
                                        </Table.Cell>
                                        <Table.Cell>
                                            {formatCurrency(
                                                +i?.products[0]?.price
                                            )}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {formatCurrency(
                                                i?.quantity *
                                                    +i?.products[0]?.price
                                            )}
                                        </Table.Cell>
                                        <Table.Cell>
                                            <span
                                                className="text-red-500 font-bold cursor-pointer"
                                                onClick={() => {
                                                    post(
                                                        route(
                                                            "updateQuantity",
                                                            {
                                                                id: i?.id,
                                                                minus: 0,
                                                            }
                                                        )
                                                    );
                                                }}
                                            >
                                                Xoá
                                            </span>
                                        </Table.Cell>
                                    </Table.Row>
                                ))}
                            </Table.Body>
                        </Table>
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
