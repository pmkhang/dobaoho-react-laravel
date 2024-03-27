import formatCurrency from "@/Utils/formatCurrency";
import { Table } from "flowbite-react";
import { Link } from "@inertiajs/react";

const CartTable = ({
    cartProducts,
    tableColumns,
    handleClickQuantityChange,
    updateQuantity,
    handleQuantityChange,
    quantityItems,
    post,
}) => {
    return (
        <Table striped hoverable>
            <Table.Head>
                {tableColumns.map((i) => (
                    <Table.HeadCell key={i?.label} className={i?.className}>
                        {i?.label}
                    </Table.HeadCell>
                ))}
            </Table.Head>
            <Table.Body>
                {cartProducts.map((i, index) => (
                    <Table.Row key={i?.id}>
                        <Table.Cell>{index + 1}</Table.Cell>
                        <Table.Cell>
                            <Link href={route("product-detail", i?.product_id)}>
                                <img
                                    loading="lazy"
                                    src={
                                        i?.products[0]?.product_images[0]?.image
                                    }
                                    alt={"image" + i?.products[0]?.id}
                                    className="w-16 h-16 object-cover rounded-lg"
                                />
                            </Link>
                        </Table.Cell>
                        <Table.Cell>
                            <p className="flex flex-col gap-3">
                                <Link
                                    href={route(
                                        "product-detail",
                                        i?.product_id
                                    )}
                                    className="text-base font-bold underline text-blue-600"
                                >
                                    {i?.products[0]?.name}
                                </Link>
                                {i?.classify && (
                                    <span>Phân loại: {i?.classify}</span>
                                )}
                            </p>
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
                                        value={+quantityItems[index]}
                                        onChange={(event) => {
                                            handleQuantityChange(index, event);
                                        }}
                                        className="flex items-center justify-center max-w-16 border-gray-300 rounded-md bg-none"
                                        onBlur={(e) => {
                                            updateQuantity(
                                                e,
                                                i?.id,
                                                +quantityItems[index]
                                            );
                                            if (+quantityItems[index] == 0) {
                                                post(
                                                    route("updateQuantity", {
                                                        id: i?.id,
                                                        minus: +quantityItems[
                                                            index
                                                        ],
                                                    })
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
                            {formatCurrency(+i?.products[0]?.price)}
                        </Table.Cell>
                        <Table.Cell>
                            {formatCurrency(
                                i?.quantity * +i?.products[0]?.price
                            )}
                        </Table.Cell>
                        <Table.Cell>
                            <span
                                className="text-red-500 font-bold cursor-pointer"
                                onClick={() => {
                                    post(
                                        route("updateQuantity", {
                                            id: i?.id,
                                            minus: 0,
                                        })
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
    );
};

export default CartTable;
