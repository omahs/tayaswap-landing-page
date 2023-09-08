import cn from "classnames";
import styles from "./Design.module.sass";
import Image from "@/components/Image";
import Animation from "@/components/Animation";

type DesignProps = {};

const Design = ({}: DesignProps) => (
    <div className={styles.design}>
        <div className={cn("container", styles.container)}>
            <div className={cn("h2", styles.title)}>
                Simple And Easy Swap 
            </div>
            <div className={styles.preview}>
                <Image
                    src="/images/design.jpg"
                    width={1184}
                    height={737}
                    alt="Design"
                />
                <div className={styles.circles}>
                    {Array.from(Array(4).keys()).map((x) => (
                        <Animation
                            className={styles.circle}
                            animateIn="fadeIn"
                            speed={-4}
                            key={x}
                        >
                            <span></span>
                        </Animation>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

export default Design;
