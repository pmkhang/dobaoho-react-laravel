import { Link, useForm } from "@inertiajs/react";
import { Dropdown } from "flowbite-react";
import { HiLogout } from "react-icons/hi";

const UserNav = ({ user }) => {
    const { post } = useForm();
    const logout = () => {
        post(route("logout"));
    };
    return (
        <li className=" transition-all cursor-pointer text-white flex items-center gap-2 rounded-lg bg-blue-600">
            <Dropdown
                dismissOnClick={false}
                renderTrigger={() => (
                    <i className="fa-solid fa-user text-lg py-2 px-4"></i>
                )}
            >
                <Dropdown.Header>
                    <span className="block text-sm">{user?.name}</span>
                    <span className="block truncate text-sm font-medium">
                        {user?.email}
                    </span>
                </Dropdown.Header>
                {user?.role == 1 && (
                    <Dropdown.Item>
                        <Link
                            href={route("admin")}
                            className="block w-full text-start"
                        >
                            Vào trang Admin
                        </Link>
                    </Dropdown.Item>
                )}
                <Dropdown.Item>
                    <Link
                        href={route("showProfile")}
                        className="block w-full text-start"
                    >
                        Thông tin cá nhân
                    </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                    <Link
                        // href={route("showOrders")}
                        className="block w-full text-start"
                    >
                        Đơn mua
                    </Link>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item icon={HiLogout} onClick={logout}>
                    Đăng xuất
                </Dropdown.Item>
            </Dropdown>
        </li>
    );
};

export default UserNav;
