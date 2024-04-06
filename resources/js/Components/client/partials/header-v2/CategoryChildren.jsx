import React, { useState, useEffect } from "react";
import { Dropdown } from "flowbite-react";

const CategoryChildren = ({ category, get }) => {
    const [isMobile, setIsMobile] = useState(false);
    const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
    };
    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (
        <Dropdown
            label=""
            renderTrigger={() => (
                <span className="w-full flex items-center justify-between">
                    <span>{category?.name}</span>
                    <i className="fa-solid fa-caret-right"></i>
                </span>
            )}
            placement={isMobile ? "bottom" : "right"}
            className="min-mb:!top-12 min-mb:!left-2 bg-[#d3d9d4] rounded-lg max-mb:!left-2 max-mb:!shadow-xl !border "
        >
            {category?.children?.map((child) => (
                <Dropdown.Item
                    key={child?.id}
                    onClick={() => {
                        get(route("productListByCategory", child?.id));
                    }}
                    className="border-t-2 text-base hover:!bg-primary-darker hover:!text-white"
                >
                    {child?.name}
                </Dropdown.Item>
            ))}
        </Dropdown>
    );
};

export default CategoryChildren;
