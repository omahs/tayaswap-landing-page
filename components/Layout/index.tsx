import { useEffect } from "react";
import { useRouter } from "next/router";
import { enablePageScroll, clearQueueScrollLocks } from "scroll-lock";
import Head from "next/head";
import cn from "classnames";
import styles from "./Layout.module.sass";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type LayoutProps = {
    layoutNoOverflow?: boolean;
    children: React.ReactNode;
    footerHide?: boolean;
};

const Layout = ({ layoutNoOverflow, children, footerHide }: LayoutProps) => {
    const { pathname } = useRouter();

    useEffect(() => {
        clearQueueScrollLocks();
        enablePageScroll();
    }, [pathname]);

    return (
        <>
            <Head>
                <title>TayaSWAP</title>
            </Head>
            <div
                className={cn(styles.layout, {
                    [styles.layoutNoOverflow]: layoutNoOverflow,
                })}
            >
                <Header />
                {children}
                {!footerHide && <Footer />}
            </div>
        </>
    );
};

export default Layout;
