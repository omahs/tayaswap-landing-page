import Layout from "@/components/Layout";
import Main from "./Main";
import BlogList from "./BlogList";
import JoinCommunity from "@/components/JoinCommunity";

const ArticlePage = () => {
    return (
        <Layout>
            <Main />
            <BlogList />
            <JoinCommunity />
        </Layout>
    );
};

export default ArticlePage;
