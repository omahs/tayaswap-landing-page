import { useState } from "react";
import cn from "classnames";
import styles from "./Website.module.sass";
import Form from "@/components/Form";
import Image from "@/components/Image";

type WebsiteProps = {
    scrollToRef: any;
};

const Website = ({ scrollToRef }: WebsiteProps) => {
    const [email, setEmail] = useState<string>("");

    return (
        <div className={cn("section-border", styles.website)}>
            <div className={styles.anchor} ref={scrollToRef}></div>
            <div className={cn("container", styles.container)}>
                <div className={styles.wrap}>
                    <h2 className={cn("h2", styles.title)}>
                    Buy and Sell Tokens <br />at the Best Prices.
                    </h2>
                    <div className={cn("h5M", styles.info)}>
                    join waitlist now!
                    </div>
                    function SandboxExample() return (
    <div>
        <iframe src="https://paragraph.xyz/@tayaswap/embed?minimal=true" width="480" height="45" style="border:1px solid #EEE; background:white;" frameborder="0" scrolling="no"></iframe>
             </div>
  );
                    
                    </div>
                {/* <div className={styles.previewMobile}>
                    <Image
                        src="/images/website-pic-mobile.png"
                        width={400}
                        height={1101}
                        alt="Hero"
                    />
                </div> */}
                {/* <div className={styles.previewDesktop}>
                    <Image
                        src="/images/website-pic-desktop.png"
                        width={864}
                        height={500}
                        alt="Hero"
                    />
                </div> */}
                {/* <div className={styles.preview}>
                    <Image
                        src="/images/website-pic.png"
                        width={720}
                        height={500}
                        alt="Hero"
                    />
                </div> */}
            </div>
        </div>
        
    );
};

export default Website;
