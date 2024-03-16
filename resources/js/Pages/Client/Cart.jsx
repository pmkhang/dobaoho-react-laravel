import ClientLayout from "@/Layouts/ClientLayout";
import { Table, Checkbox } from "flowbite-react";
import { Link, useForm } from "@inertiajs/react";
import { useEffect, useState } from "react";
import Button from "@/Components/Button";

const getAllIdCart = (cartProducts) => {
    const arrID = cartProducts.map((item) => item.id);
    return arrID;
};

const Cart = ({ cartProducts }) => {
    const [isCheckedAll, setIsCheckedAll] = useState(false);
    const [checkedItems, setCheckedItems] = useState(
        Array(cartProducts.length).fill({ checked: false })
    );
    const allCartId = getAllIdCart(cartProducts);
    const { data, post, setData } = useForm({
        cartId: [],
    });
    
    const handleAllCheckboxChange = (event) => {
        const { checked } = event.target;
        setIsCheckedAll(checked);
        const newCheckedItems = checkedItems.map((item) => ({
            ...item,
            checked,
        }));
        setCheckedItems(newCheckedItems);
        const cartId = checked ? allCartId : [];
        setData({ cartId });
    };

    const handleCheckboxChange = (index, id, event) => {
        const newCheckedItems = checkedItems.map((item, i) => ({
            ...item,
            checked: i === index ? !item.checked : item.checked,
        }));
        const allChecked = newCheckedItems.every(({ checked }) => checked);
        setIsCheckedAll(allChecked);
        setCheckedItems(newCheckedItems);
        const { checked } = event.target;
        setData(
            "cartId",
            checked
                ? [...data.cartId, id || null]
                : data.cartId.filter((itemId) => itemId !== id)
        );
    };

    const checkOut = (e) => {
        e.preventDefault();
        console.log(data.cartId);
    };
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
            label: (
                <Checkbox
                    checked={isCheckedAll}
                    color={"blue"}
                    onChange={handleAllCheckboxChange}
                />
            ),
            className: "bg-blue-500 text-white",
        },
    ];
    return (
        <ClientLayout title={"Giỏ hàng"}>
            <div className="w-full min-h-[500px] bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-3xl font-bold mb-6 text-center">
                    Giỏ hàng của tôi
                </h3>
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
                                            i?.products[0]?.product_images[0]
                                                ?.image
                                        }
                                        className="w-16 h-16 object-cover rounded-lg"
                                    />
                                </Table.Cell>
                                <Table.Cell>{i?.products[0]?.name}</Table.Cell>
                                <Table.Cell>{i?.quantity}</Table.Cell>
                                <Table.Cell>{i?.products[0]?.price}</Table.Cell>
                                <Table.Cell>
                                    {i?.quantity * i?.products[0]?.price}
                                </Table.Cell>
                                <Table.Cell>
                                    <Checkbox
                                        color={"blue"}
                                        checked={checkedItems[index].checked}
                                        onChange={(event) => {
                                            handleCheckboxChange(
                                                index,
                                                i?.id,
                                                event
                                            );
                                        }}
                                    />
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
                        <h3 className="text-xl font-bold">Tổng số tiền: </h3>
                    </div>
                    <Button text={"Thanh toán"} />
                </form>
            </div>
        </ClientLayout>
    );
};

export default Cart;
