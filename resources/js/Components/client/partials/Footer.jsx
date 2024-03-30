import React from "react";
import { Link } from "@inertiajs/react";

const Footer = () => {
    return (
        <footer className="w-full min-h-fit bg-blue-700 text-white py-10 max-tl:px-4">
            <a
                href="#"
                className="block max-w-dt mx-auto my-0 px-2 font-bold text-4xl"
            >
                QUANG TRUONG THINH
            </a>
            <div className="max-w-dt mx-auto my-0 px-2 grid grid-cols-4 gap-4 max-tl:grid-cols-2 max-mb:grid-cols-1">
                <div className="flex flex-col">
                    <h3 className="font-bold uppercase text-2xl mt-10">
                        Thông tin liên lạc
                    </h3>
                    <ul className="flex flex-col text-lg mt-4">
                        <li className="flex items-center gap-2 my-2">
                            <span>
                                Địa chỉ: BPGĐ: 12/1/22/22 Đường số 10m Phường 9,
                                Quận Gò Vấp, Tp. HCM
                            </span>
                        </li>
                        <li className="flex items-center gap-2 my-2">
                            <a href="mailto:quangtruongthinh79@gmail.com">
                                Quangtruongthinh79@gmail.com
                            </a>
                        </li>
                        <li className="flex items-center gap-2 my-2">
                            <a
                                href="https://zalo.me/0938505459"
                                target="_blank"
                            >
                                SĐT: {" 0938505459"}
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="text-white flex flex-col">
                    <h3 className="font-bold uppercase text-2xl mt-10">
                        Công ty
                    </h3>
                    <ul className="flex flex-col text-lg mt-4">
                        <li className="flex items-center gap-2 my-2">
                            <Link href="/">Trang chủ</Link>
                        </li>
                        <li className="flex items-center gap-2 my-2">
                            Giới thiệu
                        </li>
                        <li className="flex items-center gap-2 my-2">
                            Chính sách bán hàng
                        </li>
                        <li className="flex items-center gap-2 my-2">
                            <Link href="/lien-he">Liên hệ</Link>
                        </li>
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
                                    placeholder="Email của bạn"
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
                                    <a href="">Zalo</a>
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
