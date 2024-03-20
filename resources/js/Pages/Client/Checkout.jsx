import CheckoutCarts from "@/Components/client/cart/CheckoutCarts";
import CheckoutInfoCustomer from "@/Components/client/cart/CheckoutInfoCustomer";
import ClientLayout from "@/Layouts/ClientLayout";
import { useForm } from "@inertiajs/react";
const Checkout = ({ cartProducts, total_price, auth }) => {
    const { data, setData, post } = useForm({
        email: auth?.user?.email,
        name: auth?.user?.name,
        phone: auth?.user?.phone,
        address: auth?.user?.address,
        request_invoice: 2,
    });

    return (
        <ClientLayout title={"Thanh toán"}>
            <div className="w-full h-fit min-h-[380px] bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-3xl font-bold mb-6 text-center">
                    Thanh toán
                </h3>
                <form className="min-h-32 p-4 flex gap-10">
                    <div className="w-2/5">
                        <CheckoutInfoCustomer data={data} setData={setData} />
                    </div>
                    <div className="flex-1">
                        <CheckoutCarts
                            cartProducts={cartProducts}
                            total_price={total_price}
                            post={post}
                        />
                    </div>
                </form>
            </div>
        </ClientLayout>
    );
};

export default Checkout;
