import Footer from "@/Components/client/partials/Footer";
import Header from "@/Components/client/partials/Header";
import Navbar from "@/Components/client/partials/Navbar";
import NavbarHeader from "@/Components/client/partials/NavbarHeader";
import NavScreen from "@/Components/client/partials/NavScreen";
import SearchScreen from "@/Components/client/partials/SearchScreen";
import { Head } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ClientLayout = ({ children, title }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isShowNav, setIsShowNav] = useState(false);
    const [isShowSearch, setIsShowSearch] = useState(false);
    const [isShowNavHeader, setIsShowNavHeader] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 150) {
            setIsVisible(true);
            setIsShowNavHeader(true);
        } else {
            setIsVisible(false);
            setIsShowNavHeader(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="bg-gray-200 relative overflow-x-hidden">
            <Head title={title} />
            <Header
                setIsShowNav={setIsShowNav}
                setIsShowSearch={setIsShowSearch}
            />
            {isShowNavHeader && <NavbarHeader />}
            {isShowNav && <NavScreen setIsShowNav={setIsShowNav} />}
            {isShowSearch && <SearchScreen setIsShowSearch={setIsShowSearch} />}
            <div className="w-full bg-blue-800 max-tl:hidden">
                <Navbar isTablet={true} />
            </div>
            <main className="max-w-dt min-h-[calc(100vh-536px)] mx-auto p-2 h-fit mt-4 max-mb:mt-[72px]  relative">
                {children}
            </main>
            <div className="fixed  bottom-8 right-8 flex flex-col items-end gap-4">
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
