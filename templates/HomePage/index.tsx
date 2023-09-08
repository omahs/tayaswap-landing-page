import { useRef } from "react";
import Layout from "@/components/Layout";
import Main from "./Main";
import Website from "./Website";
import Generation from "./Generation";
import Details from "./Details";
import Integration from "./Integration";
// import Discover from "./Discover";
// import Reviews from "./Reviews";
import Design from "./Design";
import JoinCommunity from "@/components/JoinCommunity";

const HomePage = () => {
    const scrollToRef = useRef(null);

    return (
        <Layout>
            <Main scrollToRef={scrollToRef} />
            <Website scrollToRef={scrollToRef} />
            <Generation />
            <Details />
            <Integration />
            {/* <Discover /> */}
            {/* <Reviews /> */}
            <Design />
            <JoinCommunity />
        </Layout>
    );
};

export default HomePage;
