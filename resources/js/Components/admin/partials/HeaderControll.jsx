import React from "react";
import { usePage, Link, useForm } from "@inertiajs/react";
import { Dropdown } from "flowbite-react";
const HeaderControll = () => {
    const user = usePage().props.auth.user;
    const { post } = useForm();
    const logout = () => {
        post(route("logout"));
    };
    return (
        <ul className="flex items-center gap-6 text-white text-xl">
            <li className="flex items-center gap-3 relative">
                <input
                    type="search"
                    id="first_name"
                    className="text-gray-900 text-sm rounded-full outline-none block min-w-[300px] p-2.5"
                    placeholder="Tìm kiếm ..."
                    required
                />
            </li>
            <li className="relative cursor-pointer">
                <i className="fa-solid fa-bell"></i>
                {/* <span className="absolute top-[-10px] right-[-16px] text-[14px] bg-red-500 text-white rounded-full flex items-center justify-center min-w-[20px] h-[20px] text-center p-2">
                    1
                </span> */}
            </li>

            <Dropdown
                label={""}
                dismissOnClick={true}
                size="sm"
                renderTrigger={() => (
                    <li className="flex gap-3 items-center py-2 px-4 rounded-full bg-white text-gray-700 cursor-pointer">
                        <i className="fa-solid fa-user"></i>
                        <span className="text-base">{user.name}</span>
                    </li>
                )}
            >
                <Dropdown.Item>
                    <Link href="/">Ra trang chủ</Link>
                </Dropdown.Item>
                <Dropdown.Item onClick={logout}>Đăng xuất</Dropdown.Item>
            </Dropdown>
        </ul>
    );
};

export default HeaderControll;
