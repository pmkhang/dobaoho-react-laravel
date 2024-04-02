import formatCurrency from "@/Utils/formatCurrency";
import formatDateVN from "@/Utils/formatDateVn";
import OrderProductitem from "./OrderProductitem";

const OrderItem = ({ invoice }) => {
    const statusInfo = {
        1: { text: "Chờ xác nhận", className: "text-yellow-700" },
        2: {
            text: "Đã xác nhận và đang giao hàng",
            className: "text-primary-darker",
        },
        3: { text: "Đã giao hàng", className: "text-green-700" },
        4: { text: "Đơn huỷ", className: "text-red-700" },
    };
    const status = statusInfo[invoice?.status] || {
        text: "...",
        className: "text-gray-700",
    };

    return (
        <div className="p-8 flex flex-col gap-4 bg-white rounded-lg shadow-lg">
            <div className="flex items-center justify-between ">
                <p className=" flex flex-col gap-1">
                    <span className="text-xl font-bold">
                        Mã đơn hàng: {invoice?.id}
                    </span>
                    <span className="text-sm">
                        Đặt hàng vào lúc: {formatDateVN(invoice?.created_at)}
                    </span>
                </p>
                <p className="font-semibold">
                    Trạng thái:{" "}
                    <span className={`font-bold text-xl ${status.className}`}>
                        {status.text}
                    </span>
                </p>
            </div>
            <ul className="flex flex-col gap-6 border-y-2 py-4">
                {invoice?.invoice_details?.map((i) => (
                    <OrderProductitem
                        key={i?.id}
                        products={i?.carts[0]?.products[0]}
                        quantity={i?.carts[0]?.quantity}
                        price={i?.carts[0]?.price_per_1}
                    />
                ))}
            </ul>
            <p className="text-2xl font-bold text-end  text-primary">
                Tổng đơn hàng: {formatCurrency(+invoice?.total_price)}
            </p>
        </div>
    );
};

export default OrderItem;
