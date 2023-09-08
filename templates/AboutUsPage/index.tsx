import Layout from "@/components/Layout";
import Main from "@/templates/AboutUsPage/Main";
import Photo from "@/templates/AboutUsPage/Photo";
import Team from "@/templates/AboutUsPage/Team";
import JoinCommunity from "@/components/JoinCommunity";

const AboutUsPage = () => {
    return (
        <Layout layoutNoOverflow>
            <Main />
            <Photo />
            <Team />
            <JoinCommunity />
        </Layout>
    );
};

export default AboutUsPage;
