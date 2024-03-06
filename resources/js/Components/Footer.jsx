import React from "react";

const Footer = () => {
    return (
        <footer className="w-full min-h-fit bg-blue-700 text-white py-10">
            <a
                href="#"
                className="block max-w-dt mx-auto my-0 px-2 font-bold text-4xl"
            >
                LOGO
            </a>
            <div className="max-w-dt mx-auto my-0 px-2 grid grid-cols-4 ">
                <div className="flex flex-col">
                    <h3 className="font-bold uppercase text-2xl mt-10">
                        Thông tin liên lạc
                    </h3>
                    <ul className="flex flex-col text-lg mt-4">
                        <li className="flex items-center gap-2 my-2">
                            <i className="fa-solid fa-envelope"></i>
                            <span>Email: abc@xyz</span>
                        </li>
                        <li className="flex items-center gap-2 my-2">
                            <i className="fa-solid fa-phone"></i>
                            <span>Hotline/Zalo: 0123456789</span>
                        </li>
                    </ul>
                </div>
                <div className="text-white flex flex-col">
                    <h3 className="font-bold uppercase text-2xl mt-10">Công ty</h3>
                    <ul className="flex flex-col text-lg mt-4">
                        <li className="flex items-center gap-2 my-2">Giới thiệu</li>
                        <li className="flex items-center gap-2 my-2">Khách hàng</li>
                        <li className="flex items-center gap-2 my-2">Tuyển dụng</li>
                        <li className="flex items-center gap-2 my-2">Liên hệ</li>
                    </ul>
                </div>
                <div className="text-white flex flex-col">
                    <h3 className="font-bold uppercase text-2xl mt-10">
                        Dịch vụ khách hàng
                    </h3>
                    <ul className="flex flex-col text-lg mt-4">
                        <li className="flex items-center gap-2 my-2">
                            Hướng dẫn mua hàng
                        </li>
                        <li className="flex items-center gap-2 my-2">
                            Giao & nhận hàng
                        </li>
                        <li className="flex items-center gap-2 my-2">
                            Chính sách bán hàng
                        </li>
                        <li className="flex items-center gap-2 my-2">
                            Trở thành nhà cung cấp
                        </li>
                    </ul>
                </div>
                <div className="text-white flex flex-col">
                    <h3 className="font-bold uppercase text-2xl mt-10">
                        Nhận tin khuyến mãi
                    </h3>
                    <ul className="flex flex-col text-lg mt-4">
                        <li className="flex items-center gap-2 mt-2">
                            <form className="flex items-center gap-2">
                                <input
                                    type="email"
                                    className="outline-none bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    placeholder="Example@xyz.com"
                                    required
                                />
                                <button
                                    type="button"
                                    className="text-white border-2 border-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 "
                                >
                                    <i className="fa-solid fa-envelope"></i>
                                </button>
                            </form>
                        </li>
                        <li className="flex flex-col gap-2">
                            <h3 className="font-bold uppercase text-2xl mt-10">
                                Kết nối
                            </h3>
                            <ul className="flex gap-2 items-center text-xl">
                                <li>
                                    <i className="fa-brands fa-facebook"></i>
                                </li>
                                <li>
                                    <span>Zalo</span>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
