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
import { Link } from "@inertiajs/react";

const ClientLayout = ({
    children,
    title,
    breadcrumb,
    breadcrumbLink,
    isHideBreadcrumb,
}) => {
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
        <div className="bg-[#f3faf4] relative overflow-x-hidden">
            <Head title={title + " | Quang Truong Thinh"} />
            <Header
                setIsShowNav={setIsShowNav}
                setIsShowSearch={setIsShowSearch}
            />
            {isShowNavHeader && <NavbarHeader />}
            {isShowNav && <NavScreen setIsShowNav={setIsShowNav} />}
            {isShowSearch && <SearchScreen setIsShowSearch={setIsShowSearch} />}
            <div className="w-full bg-primary-darker max-tl:hidden">
                <Navbar isTablet={true} />
            </div>
            <main className="max-w-dt min-h-[calc(100vh-536px)] mx-auto p-2 h-fit mt-4 max-mb:mt-[72px]  relative">
                {!isHideBreadcrumb && (
                    <ul className="flex items-center gap-4 mb-4 mt-[-10px] bg-white p-2 px-4 rounded-lg shadow-lg border">
                        <li>
                            <Link href="/" className="font-semibold">
                                Trang chủ
                            </Link>
                        </li>
                        <li>/</li>
                        <li>
                            <Link href={breadcrumbLink}>{breadcrumb}</Link>
                        </li>
                    </ul>
                )}
                {children}
            </main>
            <div className="fixed  bottom-8 right-8 flex flex-col items-end gap-4">
                <a href="mailto:quangtruongthinh79@gmail.com" target="_blank">
                    <img
                        loading="lazy"
                        src="/uploads/mail.png"
                        alt="zalo"
                        className="w-[40px] h-[40px] cursor-pointer animate-bounce animate-infinite animate-duration-[1500ms] animate-ease-linear "
                    />
                </a>
                <a href="tel:0938505459" target="_blank">
                    <img
                        loading="lazy"
                        src="/uploads/phone-icon-6753051_1280.png"
                        alt="pone"
                        className="w-[40px] h-[40px] cursor-pointer animate-jump animate-infinite animate-duration-[1500ms] animate-ease-linear"
                    />
                </a>
                <a href="https://zalo.me/0938505459" target="_blank">
                    <img
                        loading="lazy"
                        src="/uploads/zalo.png"
                        alt="zalo"
                        className="w-[40px] h-[40px] cursor-pointer animate-wiggle-more animate-infinite animate-duration-[1500ms] animate-ease-linear"
                    />
                </a>
                {isVisible && (
                    <span
                        className="cursor-pointer w-7 h-7 pt-3 mr-1 mt-4 flex items-center justify-center ring-2 ring-gray-400  text-gray-400 rounded-lg animate-bounce animate-infinite animate-duration-[1500ms] animate-ease-linear"
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
