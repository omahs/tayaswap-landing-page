import { useState } from "react";
import cn from "classnames";
import styles from "./Login.module.sass";
import Field from "@/components/Field";

type LoginProps = {};

const Login = ({}: LoginProps) => {
    const [value1, setValue1] = useState<string>("");
    const [value2, setValue2] = useState<string>("");

    return (
        <form
            className={styles.form}
            action=""
            onSubmit={() => console.log("Submit")}
        >
            <Field
                className={styles.field}
                placeholder="Input label"
                icon="mail"
                value={value1}
                onChange={(e: any) => setValue1(e.target.value)}
                required
            />
            <Field
                className={styles.field}
                placeholder="Input label"
                icon="mail"
                value={value2}
                onChange={(e: any) => setValue2(e.target.value)}
                required
            />
            <button className={styles.link}>Forgot password?</button>
            <button className={cn("button-wide", styles.button)}>
                Sign in
            </button>
        </form>
    );
};

export default Login;
