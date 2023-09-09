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
                    <br />
                    <br />
                    <br />
                </div>
           
           
            </div>
            <div className={styles.row}>
                <div className={cn("h3", styles.subtitle)}>Our Mission</div>
                <div className={styles.details}>
                    <div className={cn("h5M", styles.info)}>
                    Decentralized Swap: In blockchain, a swap refers to the exchange of one cryptocurrency for another. It can be done directly between two parties or through a decentralized exchange (DEX) platform. It's important to note that swaps can be executed using different protocols or mechanisms depending on the blockchain platform being used.
                    <br />
                    <br />
                    Liquidity Provider: At our decentralized swap, one of our core missions is to provide liquidity for swaps using our proprietary algorithm. Liquidity is a critical aspect of any trading platform as it ensures that there are enough buyers and sellers to facilitate smooth and efficient transactions.
                    <br />
                    <br />
                    Own Stablecoin: Built on a foundation of simplicity, our stable coin provides stability and value preservation, eliminating the need for complex algorithms. The 1:1 pairing with USDC ensures that every unit of our stable coin is backed by an equivalent reserve of US dollars. This direct linkage to USDC, a reputable stable coin in the market, further enhances the trustworthiness and credibility of our stable coin.
                    
                    </div>
                    
                    
                </div>
           
           
            </div>
          
         
        </div>
    </div>
);

export default Main;
