import React from "react";
import { Link } from "@inertiajs/react";

const UserSibar = ({ user, active }) => {
    return (
        <div className="col-span-1 p-4 bg-white rounded-xl">
            <div className="flex items-center gap-4">
                <img
                    loading="lazy"
                    src={user?.avatar}
                    alt={user?.name}
                    className="w-16 h-16 rounded-full"
                />
                <div className="flex flex-col gap-1">
                    <span className="text-xl font-bold">{user?.name}</span>
                    <span className="font-bold text-gray-500">
                        {user?.email}
                    </span>
                </div>
            </div>
            <div className="mt-8">
                <ul className="flex flex-col gap-3">
                    <li className="w-full">
                        <Link
                            className={`block w-full px-2 rounded-lg ${
                                active == "info" ? "text-primary font-bold" : ""
                            }
                            `}
                            href={route("showProfile")}
                        >
                            <i className="fa-regular fa-pen-to-square pr-2"></i>
                            Thông tin cá nhân
                        </Link>
                    </li>
                    <li className="w-full">
                        <Link
                            href={active == "order" ? "#" : route("showOrders")}
                            className={`block w-full px-2 rounded-lg ${
                                active == "order"
                                    ? "text-primary font-bold"
                                    : ""
                            }
                            `}
                        >
                            <i className="fa-solid fa-box-tissue pr-2"></i>
                            Đơn mua
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default UserSibar;
