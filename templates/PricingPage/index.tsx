import Layout from "@/components/Layout";
import Main from "./Main";
import Plugins from "./Plugins";
import Faq from "./Faq";
import JoinCommunity from "@/components/JoinCommunity";

const PricingPage = () => {
    return (
        <Layout>
            <Main />
            <Plugins />
            <Faq />
            <JoinCommunity />
        </Layout>
    );
};

export default PricingPage;
