import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { CSSTransition } from "react-transition-group";
import { useHotkeys } from "react-hotkeys-hook";
import cn from "classnames";
import styles from "./Modal.module.sass";
import Icon from "@/components/Icon";

type ModalProps = {
    className?: string;
    closeClassName?: string;
    containerClassName?: string;
    visible: boolean;
    onClose?: any;
    children: React.ReactNode;
    sidebar?: boolean;
    video?: boolean;
};

const Modal = ({
    className,
    containerClassName,
    closeClassName,
    visible,
    onClose,
    children,
    sidebar,
    video,
}: ModalProps) => {
    const [loaded, setLoaded] = useState<boolean>(false);

    useHotkeys("esc", onClose, { enableOnTags: ["INPUT", "TEXTAREA"] });

    const initialRender = useRef(true);
    useEffect(() => {
        if (initialRender.current) {
            initialRender.current = false;
        } else {
            visible ? disablePageScroll() : enablePageScroll();
        }
    }, [visible]);

    useEffect(() => setLoaded(true), []);

    const ref = useRef(null);

    return loaded
        ? createPortal(
              <CSSTransition
                  classNames={sidebar ? "sidebar" : "modal"}
                  in={visible}
                  timeout={400}
                  nodeRef={ref}
                  unmountOnExit
              >
                  <div
                      className={cn(
                          "rey-modal",
                          styles.modal,
                          { [styles.sidebar]: sidebar, [styles.video]: video },
                          className
                      )}
                      onClick={onClose}
                      data-scroll-lock-scrollable
                      data-scroll-lock-fill-gap
                      ref={ref}
                  >
                      <div
                          className={cn(
                              "modal-container",
                              styles.container,
                              containerClassName
                          )}
                          onClick={(e) => e.stopPropagation()}
                      >
                          {onClose && (
                              <button
                                  className={cn(styles.close, closeClassName)}
                                  onClick={onClose}
                              >
                                  <Icon name="close" size={sidebar ? 32 : 24} />
                              </button>
                          )}
                          {children}
                      </div>
                  </div>
              </CSSTransition>,
              document.body
          )
        : null;
};

export default Modal;
