import Link from "next/link";
import cn from "classnames";
import styles from "./Main.module.sass";
import Image from "@/components/Image";
import Scroll from "@/components/Scroll";
import Animation from "@/components/Animation";
import css from "./style.module.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type MainProps = {
  scrollToRef: any;
};
const notify = () => {
  toast("gmonad 🙌💜 Testnet Coming Soon!", {
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
const Main = ({ scrollToRef }: MainProps) => (
  <div className={cn("section", styles.main)}>
    <div className={cn(css.container)}>
      <div className={css.wrapper}>
        <div className={styles.wrap}>
          <h1 className={cn("hero", styles.title)}>TA⅄Aˢʷᵃᵖ</h1>
          <div className={cn("h4M", styles.info)}>
            Decentralized Automated Market Maker on{" "}
            <a href="https://monad.xyz">MONAD</a>.
          </div>
          <div className={styles.btns}>
            <button
              onClick={notify}
              className={cn("button", styles.button)}
              // href="https://app.tayaswap.xyz"
              // target="_blank"
              // rel="noreferrer"
            >
              Join Testnet
            </button>
            <ToastContainer />
            <Link href="/about-us">
              <a className={cn("button-gray", styles.button)}>Learn more</a>
            </Link>
          </div>
        </div>
        <div className={css['img-wrapper']}>
          <img src="/images/tay-hero.jpg" alt="Hero" className={css.image} />
        </div>
      </div>
      {/* <div className={styles.ball}></div> */}
      {/* <div className={styles.circles}>
                    {Array.from(Array(4).keys()).map((x) => (
                        <Animation
                            className={styles.circle}
                            animateIn="fadeAlways"
                            speed={-4}
                            key={x}
                            initiallyVisible={true}
                        >
                            <span></span>
                        </Animation>
                    ))}
                </div> */}
      <Scroll
        title="Scroll down"
        onScroll={() =>
          scrollToRef.current.scrollIntoView({
            behavior: "smooth",
          })
        }
      />
    </div>
  </div>
);

export default Main;
