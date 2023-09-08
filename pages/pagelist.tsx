import Link from "next/link";
import type { NextPage } from "next";

const Home: NextPage = () => {
    return (
        <div style={{ padding: 40 }}>
            <Link href="/">
                <a>Home</a>
            </Link>
            <br></br>
            <Link href="/about-us">
                <a>About us</a>
            </Link>
            <br></br>
            <Link href="/pricing">
                <a>Pricing</a>
            </Link>
            <br></br>
            <Link href="/contact">
                <a>Contact us</a>
            </Link>
            <br></br>
            <Link href="/download">
                <a>Download</a>
            </Link>
            <br></br>
            <Link href="/blog">
                <a>Blog</a>
            </Link>
            <br></br>
            <Link href="/blog/article">
                <a>Blog article</a>
            </Link>
            <br></br>
            <Link href="/help">
                <a>Help center</a>
            </Link>
            <br></br>
            <Link href="/help/article">
                <a>Help center article</a>
            </Link>
            <br></br>
            <Link href="/404">
                <a>404</a>
            </Link>
        </div>
    );
};

export default Home;
