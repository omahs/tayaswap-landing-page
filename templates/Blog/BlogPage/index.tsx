import Layout from "@/components/Layout";
import BlogList from "./BlogList";
import JoinCommunity from "@/components/JoinCommunity";

const BlogPage = () => {
    return (
        <Layout>
            <BlogList />
            <JoinCommunity />
        </Layout>
    );
};

export default BlogPage;
