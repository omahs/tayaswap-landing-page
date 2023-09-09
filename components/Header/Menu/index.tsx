import { useState } from "react";
import cn from "classnames";
import styles from "./Menu.module.sass";
import Modal from "@/components/Modal";
import Logo from "@/components/Logo";
import NavLink from "@/components/NavLink";
import Icon from "@/components/Icon";

type NavigationType = {
    title: string;
    url: string;
    external?: boolean;
};

type MenuProps = {
    navigation: NavigationType[];
};

const Menu = ({ navigation }: MenuProps) => {
    const [visibleMenu, setVisibleMenu] = useState<boolean>(false);

    return (
        <>
            <button
                className={styles.burger}
                onClick={() => setVisibleMenu(true)}
            ></button>
            <Modal
                containerClassName={styles.container}
                visible={visibleMenu}
                onClose={() => setVisibleMenu(false)}
                sidebar
            >
                <Logo
                    className={styles.logo}
                    black
                    onClick={() => setVisibleMenu(false)}
                />
                <nav className={styles.navigation}>
                    {navigation.map((link, index) =>
                        link.external ? (
                            <a
                                className={cn("h5M", styles.link)}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                key={index}
                            >
                                {link.title}
                                <Icon name="external-link" />
                            </a>
                        ) : (
                            <NavLink
                                className={cn("h5M", styles.link)}
                                activeClassName={styles.active}
                                href={link.url}
                                key={index}
                            >
                                {link.title}
                            </NavLink>
                        )
                    )}
                </nav>
                <div className={styles.line}>
                    <div className={styles.details}>
                        <div className={styles.text}>Contact Us</div>
                        <a
                            href="mailto:contact@tayaswap.xyz"
                            className={cn("h6", styles.mail)}
                            target="_blank"
                            rel="noreferrer"
                        >
                            contact@tayaswap.xyz
                        </a>
                    </div>
                    <button className={styles.chat}>
                        <Icon name="chat" />
                    </button>
                </div>
            </Modal>
        </>
    );
};

export default Menu;
