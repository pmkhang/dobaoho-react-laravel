import React from "react";
import { Dropdown } from "flowbite-react";
import { Link, useForm } from "@inertiajs/react";

const User = ({ user }) => {
    const { post } = useForm();
    const logout = () => {
        post(route("logout"));
    };
    return (
        <Dropdown
            label=""
            dismissOnClick={false}
            renderTrigger={() => (
                <span className="px-3 font-bold uppercase cursor-pointer">
                    {user.name}
                </span>
            )}
            className="!min-w-[200px] !text-end !top-10 !left-16"
            placement="left"
        >
            <Dropdown.Header>
                <span className="block text-sm">{user.name}</span>
                <span className="block truncate text-sm font-medium">
                    {user.email}
                </span>
            </Dropdown.Header>
            {user.role == 1 && (
                <Dropdown.Item className="flex justify-end">
                    <Link
                        href={route("admin")}
                        className="block w-full text-end"
                    >
                        Vào trang Admin
                    </Link>
                </Dropdown.Item>
            )}
            <Dropdown.Item className="flex justify-end">
                <Link
                    href={route("showProfile")}
                    className="block w-full text-end"
                >
                    Thông tin cá nhân
                </Link>
            </Dropdown.Item>
            <Dropdown.Item className="flex justify-end">
                <Link
                    // href={route("showOrders")}
                    className="block w-full text-end"
                >
                    Đơn mua
                </Link>
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item className="flex justify-end" onClick={logout}>
                Đăng xuất
            </Dropdown.Item>
        </Dropdown>
    );
};

export default User;
