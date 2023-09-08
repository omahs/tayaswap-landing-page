import Layout from "@/components/Layout";
import Main from "./Main";
import Subscription from "@/components/Subscription";

const ArticlePage = () => {
    return (
        <Layout layoutNoOverflow>
            <Main />
            <Subscription />
        </Layout>
    );
};

export default ArticlePage;
