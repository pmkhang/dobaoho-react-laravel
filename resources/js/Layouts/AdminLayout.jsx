import Footer from "@/Components/admin/partials/Footer";
import Header from "@/Components/admin/partials/Header";
import React from "react";
import { Head } from "@inertiajs/react";

const AdminLayout = ({ children, title }) => {
    return (
        <>
            <Head title={title} />
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default AdminLayout;
