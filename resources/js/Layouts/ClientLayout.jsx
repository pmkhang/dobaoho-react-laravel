import React from "react";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";

const ClientLayout = ({ children }) => {
    return (
        <>
            <Header />
            <main className="max-w-dt my-0 mx-auto p-2 h-fit mt-2 mb-10">
                {children}
            </main>
            <Footer />
        </>
    );
};

export default ClientLayout;
