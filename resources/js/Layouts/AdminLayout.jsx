import Header from "@/Components/admin/partials/Header";
import React from "react";
import { Head } from "@inertiajs/react";
import Sidebar from "@/Components/admin/partials/Sidebar";

const AdminLayout = ({ children, title }) => {
    return (
        <>
            <Head title={title} />
            <Header />
            <div className="flex items-start gap-4 p-2">
                <Sidebar />
                <main className="h-[calc(100vh-120px)] rounded-xl flex-1 p-4 mr-2 overflow-y-scroll">
                    {children}
                </main>
            </div>
        </>
    );
};

export default AdminLayout;
