import React from "react";
import Button from "./Button";
import { Link, useForm } from "@inertiajs/react";

const ModalDelConfirm = ({ content, delRoute, setDelCategoryData }) => {
    const { get } = useForm();
    const submitDel = (e) => {
        e.preventDefault();
        get(delRoute);
    };
    return (
        <div
            className="absolute h-[100vh] top-0  right-0 left-0 bg-black bg-opacity-40 flex items-center justify-center"
            onClick={() => {
                setDelCategoryData({
                    showModal: false,
                });
            }}
        >
            <div
                className="w-1/4 min-h-[200px] bg-white rounded-lg p-4 mb-[100px]"
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <h3 className="text-center text-2xl mt-4 font-bold uppercase text-red-800">
                    Bạn có chắc muốn xoá ?
                </h3>
                <h3 className="text-center text-xl mt-4 font-bold">
                    {content} ?
                </h3>
                <div className="flex items-center gap-3 mt-8">
                    <Button
                        text={"Huỷ"}
                        className={"bg-gray-500"}
                        onClick={(e) => {
                            e.stopPropagation();
                            setDelCategoryData({
                                showModal: false,
                            });
                        }}
                    />
                    <Button
                        text={"Xoá"}
                        className={"bg-red-800"}
                        onClick={submitDel}
                    />
                </div>
            </div>
        </div>
    );
};

export default ModalDelConfirm;
