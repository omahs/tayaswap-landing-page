import Link from "next/link";
import cn from "classnames";
import styles from "./Footer.module.sass";
import Logo from "@/components/Logo";
import Item from "./Item";

import { footerNavigation } from "@/constants/navigation";

type FooterProps = {};

const Footer = ({}: FooterProps) => {
    return (
        <footer className={styles.footer}>
            <div className={styles.body}>
                <div className={cn("container", styles.container)}>
                    <div className={styles.group}>
                        {footerNavigation.map((item: any, index: number) => (
                            <Item
                                className={styles.item}
                                item={item}
                                key={index}
                            />
                        ))}
                    </div>
                    <div className={styles.details}>
                        <Logo
                            className={styles.logo}
                            titleClassName={styles.titleLogo}
                            title
                        />
                        <div className={styles.info}>
                        Decentralized Automated Market Maker on <a href="https://monad.xyz">MONAD</a>.
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.bottom}>
                <div className={cn("container", styles.container)}>
                    <div className={styles.copyright}>©2024 - Tayaswap.xyz.</div>
                    <div>Powred by <a href="https://x.com/sublabs_">SubLabs</a>.</div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
