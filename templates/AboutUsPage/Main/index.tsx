import cn from "classnames";
import styles from "./Main.module.sass";

type MainProps = {};

const Main = ({}: MainProps) => (
    <div className={cn("section", styles.main)}>
        <div className={cn("container", styles.container)}>
            <h1 className={cn("h1", styles.title)}>About us</h1>
            <div className={styles.row}>
                <div className={cn("h3", styles.subtitle)}>What is TayaSwap</div>
                <div className={styles.details}>
                    <div className={cn("h5M", styles.info)}>
                    TayaSwap is a type of decentralized exchange mechanism that enables the trading of assets without the need for traditional order books or intermediaries. AMMs rely on mathematical formulas and smart contracts to facilitate token swaps and determine prices and utilize smart contracts to enable peer-to-peer transactions.
                    </div>
                    <div className={styles.content}>
                        <p>
                            <a href="https://docs.tayaswap.xyz">docs</a>
                            <br />
                            <a href="https://docs.tayaswap.xyz/roadmap">Roadmap</a>
                            <br />
                            <a href="https://docs.tayaswap.xyz/sdk-api">Software Developer Kit</a>
                            <br />
<a href="https://docs.tayaswap.xyz/media-kit">Media KIT</a>
                        </p>
                        {/* <p>
                            Amet minim mollit non deserunt ullamco est sit
                            aliqua dolor do amet sint. Velit officia consequat
                            duis enim velit mollit. Exercitation veniam
                            consequat sunt nostrud amet.
                        </p> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Main;
