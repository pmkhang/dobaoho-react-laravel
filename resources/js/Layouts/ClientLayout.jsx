import React from "react";
import Footer from "@/Components/client/partials/Footer";
import Header from "@/Components/client/partials/Header";
import { Head } from "@inertiajs/react";

const ClientLayout = ({ children, title }) => {
    return (
        <div className="bg-gray-200">
            <Head title={title} />

            <div className="w-full bg-blue-500 h-[40px] flex items-center justify-center text-white font-bold">
                Something content
            </div>
            <Header />
            <main className="max-w-dt my-0 mx-auto p-2 h-fit mt-2 mb-10">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default ClientLayout;
