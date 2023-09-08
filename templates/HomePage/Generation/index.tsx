import { useMediaQuery } from "react-responsive";
import cn from "classnames";
import styles from "./Generation.module.sass";
import Image from "@/components/Image";
import Animation from "@/components/Animation";

import { generation } from "@/mocks/generation";

type GenerationProps = {};

const Generation = ({}: GenerationProps) => {
    const isMobile = useMediaQuery({
        query: "(max-width: 767px)",
    });

    return (
        <div className={cn("section-border", styles.generation)}>
            <div className={cn("container", styles.container)}>
                <h2 className={cn("h2", styles.title)}>
                Your On-Chain Liquidity.
                </h2>
                <div className={styles.list}>
                    {generation.map((item, index) => (
                        <Animation
                            className={styles.item}
                            animateIn="fadeInDown"
                            key={index}
                            delay={isMobile ? 0 : item.delay}
                        >
                            <div
                                className={styles.preview}
                                style={{ backgroundColor: item.color }}
                            >
                                <div className={styles.image}>
                                    <Image
                                        src={item.image}
                                        width={160}
                                        height={64}
                                        alt="Generation"
                                        priority
                                    />
                                </div>
                            </div>
                            <div className={cn("h5", styles.subtitle)}>
                                {item.title}
                            </div>
                            <div className={styles.content}>{item.content}</div>
                        </Animation>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Generation;
