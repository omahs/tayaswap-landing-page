import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,
} from "next/document";

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html>
                <Head>
                    <meta
                        content="The type of decentralized exchange mechanism that enables the trading of assets without the need for traditional order books or intermediaries."
                        name="TayaSwap – Decentralized Automated Market Maker on MONAD."
                    />
                    <meta
                        content="TayaSwap – Decentralized Automated Market Maker on MONAD."
                        property="og:title"
                    />
                    <meta
                        content="The type of decentralized exchange mechanism that enables the trading of assets without the need for traditional order books or intermediaries."
                        property="og:description"
                    />
                    <meta
                        content="https://i.postimg.cc/rFMxsjPN/intro.png"
                        property="og:image"
                    />
                    <meta
                        property="og:url"
                        content="https://tayaswap.xyz"
                    />
                    <meta
                        property="og:site_name"
                        content="TayaSwap – Decentralized Automated Market Maker on MONAD."
                    />
                    <meta
                        content="TayaSwap – Decentralized Automated Market Maker on MONAD."
                        property="twitter:title"
                    />
                    <meta
                        content="TayaSwap – Decentralized Automated Market Maker on MONAD."
                        property="twitter:description"
                    />
                    <meta
                        content="https://i.postimg.cc/rFMxsjPN/intro.png"
                        property="twitter:image"
                    />
                    <meta property="og:type" content="Article" />
                    <meta content="summary" name="twitter:card" />
                    <meta name="twitter:site" content="@tayaswap" />
                    <meta name="twitter:creator" content="@tayaswap" />
                    {/* <meta property="fb:admins" content="132951670226590" /> */}
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                    />
                    <meta name="theme-color" content="#000000" />
                    <meta name="msapplication-TileColor" content="#da532c" />
                    <meta name="theme-color" content="#ffffff" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
                        rel="stylesheet"
                    ></link>
                </Head>
                <body className="app">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
