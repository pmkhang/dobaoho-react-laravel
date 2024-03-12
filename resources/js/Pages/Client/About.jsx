import ClientLayout from "@/Layouts/ClientLayout";
import React from "react";

const About = ({ auth }) => {
    return (
        <ClientLayout title={"Về chúng tôi"} authen={auth.user}>
            About
        </ClientLayout>
    );
};

export default About;
