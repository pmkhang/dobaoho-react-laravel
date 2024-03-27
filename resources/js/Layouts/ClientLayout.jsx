import React, { useEffect, useState } from "react";
import Footer from "@/Components/client/partials/Footer";
import Header from "@/Components/client/partials/Header";
import { Head } from "@inertiajs/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ClientLayout = ({ children, title }) => {
    const [isVisible, setIsVisible] = useState(false);
    const handleScroll = () => {
        if (window.scrollY > 200) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <div className="bg-gray-200  relative">
            <Head title={title} />
            <div className="w-full bg-blue-500 h-[40px] flex items-center justify-center text-white font-bold">
                Something content
            </div>
            <Header />
            <main className="max-w-dt min-h-[calc(100vh-536px)] mx-auto p-2 h-fit my-4 relative">
                {children}
            </main>
            <div className="fixed w-full bottom-8 right-8 flex flex-col items-end gap-4">
                <a href="https://zalo.me/0938505459" target="_blank">
                    <img
                        loading="lazy"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Icon_of_Zalo.svg/1024px-Icon_of_Zalo.svg.png"
                        alt="zalo"
                        className="w-[50px] h-[50px] cursor-pointer"
                    />
                </a>
                {isVisible && (
                    <span
                        className="cursor-pointer w-7 h-7 pt-3 mr-3 flex items-center justify-center ring-2 ring-gray-400  text-gray-400 rounded-lg"
                        onClick={() => {
                            window.scrollTo({
                                top: 0,
                                behavior: "smooth",
                            });
                        }}
                    >
                        <i className="fa-solid fa-sort-up text-xl"></i>
                    </span>
                )}
            </div>
            <Footer />
            <ToastContainer position="bottom-right" />
        </div>
    );
};

export default ClientLayout;
