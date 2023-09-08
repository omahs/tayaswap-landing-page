import { useState } from "react";
import cn from "classnames";
import styles from "./FormContact.module.sass";
import Modal from "@/components/Modal";
import Field from "@/components/Field";
import Select from "@/components/Select";

type FormContactProps = {
    className?: string;
    title: string;
};

const FormContact = ({ className, title }: FormContactProps) => {
    const [visibleModal, setVisibleModal] = useState<boolean>(false);
    const [email, setEmail] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [company, setCompany] = useState<string>("");
    const [size, setSize] = useState<string>("");
    const [help, setHelp] = useState<string>("");
    const [topic, setTopic] = useState<string>("");

    const options = [
        {
            title: "Topic 1",
            value: "topic1",
        },
        {
            title: "Topic 2",
            value: "topic2",
        },
        {
            title: "Topic 3",
            value: "topic3",
        },
        {
            title: "Topic 4",
            value: "topic4",
        },
    ];

    const handleChangeTopic = (value: string) => setTopic(value);

    return (
        <>
            <button
                className={cn("button", className)}
                onClick={() => setVisibleModal(true)}
            >
                {title}
            </button>
            <Modal
                containerClassName={styles.container}
                visible={visibleModal}
                onClose={() => setVisibleModal(false)}
            >
                <form
                    className={styles.form}
                    action=""
                    onSubmit={() => console.log("Submit")}
                >
                    <div className={cn("h4M", styles.title)}>Contact us</div>
                    <div className={styles.info}>
                        Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint.
                    </div>
                    <Field
                        className={styles.field}
                        placeholder="Email address"
                        icon="mail"
                        type="email"
                        value={email}
                        onChange={(e: any) => setEmail(e.target.value)}
                        required
                    />
                    <Field
                        className={styles.field}
                        placeholder="Name"
                        icon="profile"
                        value={name}
                        onChange={(e: any) => setName(e.target.value)}
                        required
                    />
                    <Field
                        className={styles.field}
                        placeholder="Company name"
                        icon="home"
                        value={company}
                        onChange={(e: any) => setCompany(e.target.value)}
                        required
                    />
                    <Field
                        className={styles.field}
                        placeholder="Company size"
                        icon="size"
                        value={size}
                        onChange={(e: any) => setSize(e.target.value)}
                        required
                    />
                    <Select
                        className={styles.field}
                        title="Choose topic"
                        icon="chat"
                        value={topic}
                        onChange={handleChangeTopic}
                        options={options}
                    />
                    <Field
                        className={styles.field}
                        placeholder="How can we help you"
                        icon="pencil"
                        value={help}
                        onChange={(e: any) => setHelp(e.target.value)}
                        textarea
                        required
                    />
                    <div className={styles.foot}>
                        <button className={cn("button", styles.button)}>
                            Send now
                        </button>
                        <div className={styles.note}>
                            Amet minim mollit non deserunt ullamco est sit
                            aliqua.
                        </div>
                    </div>
                </form>
            </Modal>
        </>
    );
};

export default FormContact;
