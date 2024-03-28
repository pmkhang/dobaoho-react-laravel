import React, { useEffect, useState } from "react";
import { Button, Modal } from "flowbite-react";
import axios from "axios";

const ModalContact = ({ openModal, setOpenModal, contactId }) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(route("contactDetail", contactId));

                if (res.data.success) {
                    setData(res.data.contact);
                }
            } catch (error) {
                console.log(error);
            }
        };
        if (contactId) {
            fetchData();
        }
    }, [contactId]);
    return (
        <>
            {data && (
                <Modal show={openModal} onClose={() => setOpenModal(false)}>
                    <Modal.Header>
                        <div>
                            <p>Khách hàng tên: {data.name}</p>
                            <p className="text-base">Email: {data.email}</p>
                            <p className="text-base">SĐT: {data.phone}</p>
                        </div>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="space-y-6">
                            <p className="text-xl font-semibold leading-relaxed text-gray-500 dark:text-gray-400">
                                {data.title}
                            </p>
                            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                {data.message}
                            </p>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button
                            color="gray"
                            onClick={() => setOpenModal(false)}
                        >
                            Đóng
                        </Button>
                    </Modal.Footer>
                </Modal>
            )}
        </>
    );
};

export default ModalContact;
