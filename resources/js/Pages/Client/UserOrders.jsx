import OrdersDetail from "@/Components/client/User/OrdersDetail";
import UserSibar from "@/Components/client/User/UserSibar";
import ClientLayout from "@/Layouts/ClientLayout";
import { usePage, Link } from "@inertiajs/react";

const UserOrders = ({ invoices }) => {
    const user = usePage().props.auth.user;
    return (
        <ClientLayout title={"Đơn mua hàng"}>
            <div className="w-full grid grid-cols-4 gap-4 max-tl:grid-cols-1 max-tl:gap-0 max-tl:px-4 items-start">
                <UserSibar user={user} active={"order"} />
                <OrdersDetail invoices={invoices} />
            </div>
        </ClientLayout>
    );
};

export default UserOrders;
