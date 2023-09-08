import { useState } from "react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import cn from "classnames";
import styles from "./Header.module.sass";
import Logo from "@/components/Logo";
import SignIn from "@/components/SignIn";
import Menu from "./Menu";

import { headerNavigation } from "@/constants/navigation";

type HeaderProps = {};

const Header = ({}: HeaderProps) => {
    const [headerStyle, setHeaderStyle] = useState<boolean>(false);

    useScrollPosition(({ currPos }) => {
        setHeaderStyle(currPos.y <= -2);
    });

    return (
        <header
            className={cn(
                {
                    [styles.visible]: headerStyle,
                },
                styles.header
            )}
        >
            <div className={cn("container", styles.container)}>
                <Logo className={styles.logo} />
                <SignIn
                    className={cn("button-gray", styles.button)}
                    title="Join Testnet"
                />
                <Menu navigation={headerNavigation} />
            </div>
        </header>
    );
};

export default Header;
