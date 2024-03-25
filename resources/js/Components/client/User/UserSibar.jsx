import React from "react";
import { Link } from "@inertiajs/react";

const UserSibar = ({ user, active }) => {
    return (
        <div className="col-span-1 p-4 bg-white rounded-xl">
            <div className="flex items-center gap-4">
                <img
                    src={user?.avatar}
                    alt={user?.name}
                    className="w-16 h-16 rounded-full"
                />
                <div className="flex flex-col gap-1">
                    <span className="text-xl font-bold">{user?.name}</span>
                    <Link href="#">
                        <i className="fa-regular fa-pen-to-square pr-2"></i>
                        Sửa hồ sơ
                    </Link>
                </div>
            </div>
            <div className="mt-8">
                <ul className="flex flex-col gap-3">
                    <li className="w-full">
                        <Link
                            className={`block w-full px-2 rounded-lg ${
                                active == "info"
                                    ? "text-blue-500 font-bold"
                                    : ""
                            }
                            `}
                        >
                            Thông tin cá nhân
                        </Link>
                    </li>
                    <li className="w-full">
                        <Link
                            href={
                                active == "order" ? "#" : route("showOrders")
                            }
                            className={`block w-full px-2 rounded-lg ${
                                active == "order"
                                    ? "text-blue-500 font-bold"
                                    : ""
                            }
                            `}
                        >
                            Đơn mua
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default UserSibar;
