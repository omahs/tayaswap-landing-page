import Link from "next/link";
import cn from "classnames";
import styles from "./JoinCommunity.module.sass";
import Image from "@/components/Image";
// import Animation from "@/components/Animation";

// import { avatars, images } from "@/constants/joinCommunity";

type JoinCommunityProps = {};

const JoinCommunity = ({}: JoinCommunityProps) => (
    <div className={styles.join}>
        <div className={cn("container", styles.container)}>
            <div className={styles.wrap}>
                <div className={cn("h1", styles.title)}>
                    Ready to use TayaSwap?
                </div>
                <div className={cn("h4M", styles.info)}>
                    Join our community
                </div>
                {/* <div className={styles.avatars}>
                    {avatars.map((avatar, index) => (
                        <div className={styles.avatar} key={index}>
                            <Image
                                src={avatar}
                                layout="fill"
                                alt="Avatar"
                                priority
                            />
                        </div>
                    ))}
                </div> */}
                <Link href="https://discord.gg/ufbJHMzc">
                    <a className={cn("button", styles.button)}>Discord</a>
                </Link>
            </div>
            {/* <div className={styles.images}>
                {images.map((image, index) => (
                    <Animation
                        className={styles.image}
                        animateIn="fadeIn"
                        key={index}
                        speed={index < 4 ? -5 : 0}
                    >
                        <Image
                            src={image.src}
                            width={image.width}
                            height={image.height}
                            alt={image.alt}
                        />
                    </Animation>
                ))}
            </div> */}
        </div>
    </div>
);

export default JoinCommunity;
