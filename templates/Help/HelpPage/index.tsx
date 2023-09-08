import Layout from "@/components/Layout";
import Main from "./Main";
import HelpList from "./HelpList";
import Subscription from "@/components/Subscription";

const BlogPage = () => {
    return (
        <Layout>
            <Main />
            <HelpList />
            <Subscription />
        </Layout>
    );
};

export default BlogPage;
