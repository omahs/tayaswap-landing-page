import { useMediaQuery } from "react-responsive";
import cn from "classnames";
import styles from "./Reviews.module.sass";
import Image from "@/components/Image";
import Animation from "@/components/Animation";

import { reviews } from "@/mocks/reviews";

type ReviewsProps = {};

const Reviews = ({}: ReviewsProps) => {
    const isMobile = useMediaQuery({
        query: "(max-width: 767px)",
    });

    return (
        <div className={cn("section-padding", styles.reviews)}>
            <div className={cn("container", styles.container)}>
                <div className={styles.head}>
                    <div className={cn("h2", styles.title)}>
                        OUR TEAM
                    </div>
                    {/* <div className={cn("h6", styles.info)}>
                        Amet minim mollit non deserunt ullamco est.
                    </div> */}
                </div>
                <div className={styles.list}>
                    {reviews.map((review: any, index: number) => (
                        <Animation
                            className={styles.item}
                            animateIn="fadeInDown"
                            key={index}
                            delay={isMobile ? 0 : review.delay}
                        >
                            <div className={styles.avatar}>
                                <Image
                                    src={review.avatar}
                                    layout="fill"
                                    alt="Avatar"
                                    priority
                                />
                            </div>
                            <div className={styles.content}>
                                {review.content}
                            </div>
                            <div className={styles.author}>{review.author}</div>
                            <div className={styles.position}>
                                {review.position}
                            </div>
                        </Animation>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Reviews;
