import { useState } from "react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import cn from "classnames";
import styles from "./Header.module.sass";
import Logo from "@/components/Logo";
import SignIn from "@/components/SignIn";
import Menu from "./Menu";

import { headerNavigation } from "@/constants/navigation";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



type HeaderProps = {};

const notify = ()=> {  
    toast('gmonad 🙌💜 Testnet Coming Soon!', {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        }); 
  };

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
                {/* <SignIn
                    className={cn("button-gray", styles.button)}
                    title="Join Testnet"
                    
                /> */}
                 <button onClick={notify}
                        className={cn("button-gray", styles.button)}
                        // href="https://app.tayaswap.xyz"
                        // target="_blank"
                        // rel="noreferrer"
                    >
                        Join Testnet
                    </button>
                    {/* <ToastContainer
position="bottom-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/> */}
                <Menu navigation={headerNavigation} />
            </div>
        </header>
    );
};

export default Header;
