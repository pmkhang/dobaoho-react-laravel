import React from "react";
import { useForm } from "@inertiajs/react";

import { Button, Modal } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

const ModalDelConfirm = ({ content, delRoute, setOpentModal, openModal }) => {
    const { get } = useForm();
    const submitDel = (e) => {
        e.preventDefault();
        get(delRoute);
    };
    return (
        <Modal
            show={openModal}
            size="md"
            onClose={() =>
                setOpentModal({
                    showModal: false,
                })
            }
            popup
        >
            <Modal.Header />
            <Modal.Body>
                <div className="text-center">
                    <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                    <h3 className="text-3xl font-bold mb-3 text-gray-500">
                        Bạn có chắc muốn xoá ?
                    </h3>
                    <p className="mb-5 text-xl font-normal text-gray-500">
                        {content}
                    </p>
                    <div className="flex justify-center gap-4">
                        <Button
                            color="failure"
                            onClick={(e) => {
                                submitDel(e);
                                setOpentModal({
                                    showModal: false,
                                });
                            }}
                            className="w-full"
                        >
                            Xoá
                        </Button>
                        <Button
                            color="gray"
                            onClick={() =>
                                setOpentModal({
                                    showModal: false,
                                })
                            }
                            className="w-full"
                        >
                            Huỷ
                        </Button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default ModalDelConfirm;
