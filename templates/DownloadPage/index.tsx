import { useRef } from "react";
import Layout from "@/components/Layout";
import Main from "@/templates/DownloadPage/Main";
import Downloads from "@/templates/DownloadPage/Downloads";
import Subscription from "@/components/Subscription";

const ContactUsPage = () => {
    const scrollToRef = useRef(null);

    return (
        <Layout>
            <Main scrollToRef={scrollToRef} />
            <Downloads scrollToRef={scrollToRef} />
            <Subscription />
        </Layout>
    );
};

export default ContactUsPage;
