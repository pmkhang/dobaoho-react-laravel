import React from "react";
import Footer from "@/Components/client/partials/Footer";
import Header from "@/Components/client/partials/Header";
import { Head } from "@inertiajs/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ClientLayout = ({ children, title }) => {
    return (
        <div className="bg-gray-200  relative">
            <Head title={title} />
            <div className="w-full bg-blue-500 h-[40px] flex items-center justify-center text-white font-bold">
                Something content
            </div>
            <Header />
            <main className="max-w-dt mx-auto p-2 h-fit my-4">{children}</main>
            <ToastContainer position="bottom-right" />
            <div className="fixed w-full bottom-8 right-8 flex justify-end">
                <a href="https://zalo.me/0938505459" target="_blank">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Icon_of_Zalo.svg/1024px-Icon_of_Zalo.svg.png"
                        alt="zalo"
                        className="w-[50px] h-[50px] cursor-pointer"
                    />
                </a>
            </div>
            <Footer />
        </div>
    );
};

export default ClientLayout;
