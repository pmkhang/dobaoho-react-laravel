import React, { useState, useEffect } from "react";

const NavCategory = ({ isHide }) => {
    const [isHideNav, setIsHideNav] = useState(isHide);

    useEffect(() => {
        if (!isHide) {
            window.addEventListener("resize", () =>
                setIsHideNav(window.innerWidth < 1024)
            );

            return () => {
                window.removeEventListener("resize", () =>
                    setIsHideNav(window.innerWidth < 1024)
                );
            };
        }
    }, []);

    return (
        <div className="py-2 rounded-xl shadow-lg bg-blue-600">
            <h2
                className="flex items-center px-4 py-2 cursor-pointer gap-3 text-md text-white font-semibold uppercase"
                onClick={() => setIsHideNav(!isHideNav)}
            >
                <i className="fa-solid fa-bars"></i>
                <span>Danh mục sản phẩm</span>
            </h2>
            {!isHideNav && (
                <ul className="dropdown flex flex-col text-white">
                    {[...Array(10)].map((_, i) => (
                        <li key={i}>
                            <a
                                href="#"
                                className="px-4 py-2 w-full flex items-center gap-2 hover:bg-white hover:text-blue-500 transition-all"
                            >
                                <i className="fa-solid fa-pen-nib"></i>
                                <span>Thể loại {i + 1}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default NavCategory;
