import styles from "./Models.module.sass";
import Image from "@/components/Image";
import Animation from "@/components/Animation";

type ModelsProps = {};

const Models = ({}: ModelsProps) => {
    return (
        <div className={styles.preview}>
            <div className={styles.image}>
                <Image
                    src="/images/models/model-blue.png"
                    width={1093}
                    height={797}
                    alt="Model"
                />
            </div>
            <div className={styles.circles}>
                {Array.from(Array(3).keys()).map((x) => (
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
    );
};

export default Models;
