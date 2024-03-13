import React from "react";
import { Dropdown } from "flowbite-react";
import { HiCog, HiCurrencyDollar, HiLogout, HiViewGrid } from "react-icons/hi";
import { Link, useForm } from "@inertiajs/react";

const UserNav = ({ user }) => {
    const { post } = useForm();
    const logout = () => {
        post(route("logout"));
    };
    return (
        <li className="px-2 hover:text-blue-700 transition-all cursor-pointer flex items-center gap-1">
            <Dropdown
                label=""
                dismissOnClick={false}
                renderTrigger={() => (
                    <i className="fa-solid fa-circle-user text-xl text-blue-600"></i>
                )}
            >
                <Dropdown.Header>
                    <span className="block text-sm">{user?.name}</span>
                    <span className="block truncate text-sm font-medium">
                        {user?.email}
                    </span>
                </Dropdown.Header>
                {user?.role === 1 && (
                    <Dropdown.Item icon={HiViewGrid}>
                        <Link href={route("admin")}>Vào trang Admin</Link>
                    </Dropdown.Item>
                )}
                <Dropdown.Item icon={HiCog}>
                    <Link href="#">Thông tin cá nhân</Link>
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
