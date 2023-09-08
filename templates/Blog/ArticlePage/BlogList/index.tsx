import Link from "next/link";
import cn from "classnames";
import styles from "./BlogList.module.sass";
import Image from "@/components/Image";

import { blog } from "@/mocks/blog";

type BlogListProps = {};

const BlogList = ({}: BlogListProps) => {
    return (
        <div className={cn("section", styles.blog)}>
            <div className={cn("container", styles.container)}>
                <h2 className={cn("h2", styles.title)}>You may also like</h2>
                <div className={styles.list}>
                    {blog.slice(0, 3).map((item, index) => (
                        <Link href={item.url} key={index}>
                            <a className={styles.item}>
                                <div className={styles.preview}>
                                    <Image
                                        src={item.image}
                                        layout="fill"
                                        objectFit="cover"
                                        alt="Blog"
                                    />
                                </div>
                                <div className={styles.date}>{item.date}</div>
                                <div className={cn("h5M", styles.subtitle)}>
                                    {item.title}
                                </div>
                            </a>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogList;
