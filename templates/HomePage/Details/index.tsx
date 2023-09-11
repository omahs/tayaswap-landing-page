import { useState } from "react";
import cn from "classnames";
import styles from "./Details.module.sass";
import Tabs from "@/components/Tabs";
import Image from "@/components/Image";
import Modal from "@/components/Modal";
import Select from "@/components/Select";

import { details } from "@/constants/details";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type DetailsProps = {};

const Details = ({}: DetailsProps) => {
    const [sorting, setSorting] = useState<string>("render-faster");
    const [visibleModal, setVisibleModal] = useState<boolean>(false);

    const handleChange = (value: string) => setSorting(value);

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


    return (
        <div className={cn("section", styles.details)}>
            <div className={cn("container", styles.container)}>
                <div className={styles.head}>
                    <Tabs
                        className={styles.tabs}
                        items={details}
                        value={sorting}
                        setValue={setSorting}
                    />
                    <Select
                        className={styles.select}
                        value={sorting}
                        onChange={handleChange}
                        options={details}
                        small
                    />
                </div>
                <div className={styles.list}>
                    {details
                        .filter((item) => item.value === sorting)
                        .map((item, index) => (
                            <div
                                className={cn(styles.item, {
                                    [styles.item1]:
                                        item.value === "render-faster",
                                    [styles.item2]:
                                        item.value === "realistic-materials",
                                    [styles.item3]:
                                        item.value === "live-interaction",
                                })}
                                key={index}
                            >
                                <div className={styles.wrap}>
                                    <div className={cn("h2", styles.title)}>
                                        {item.info}
                                    </div>
                                    <div className={cn("h5M", styles.content)}>
                                        {item.content}
                                    </div>
                                    {/* <button
                                        className={cn("button", styles.button)}
                                        onClick={() => setVisibleModal(true)}
                                    >
                                    Testnet
                                    </button> */}

<button onClick={notify}
                        className={cn("button", styles.button)}
                       
                    >
                        Testnet
                    </button>

                                    {/* <Modal
                                        visible={visibleModal}
                                        onClose={() => setVisibleModal(false)}
                                        video
                                    >
                                        <div className={styles.video}>
                                            <iframe
                                                width="560"
                                                height="315"
                                                src={`https://www.youtube.com/embed/${item.video}?autoplay=1`}
                                                title="YouTube video player"
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            ></iframe>
                                        </div>
                                    </Modal> */}
                                </div>
                                <div className={styles.preview}>
                                    <div className={styles.image}>
                                        <Image
                                            src={item.image.src}
                                            width={item.image.width}
                                            height={item.image.height}
                                            alt={item.image.alt}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Details;
