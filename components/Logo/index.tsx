import Link from "next/link";
import cn from "classnames";
import styles from "./Logo.module.sass";
import Image from "@/components/Image";

type LogoProps = {
    className?: string;
    titleClassName?: string;
    black?: boolean;
    onClick?: () => void;
    title?: boolean;
};

const Logo = ({
    className,
    titleClassName,
    black,
    onClick,
    title,
}: LogoProps) => (
    <Link href="/">
        <a className={cn(styles.logo, className)} onClick={onClick}>
            <Image
                src={`/images/logo${black ? "-black" : ""}.svg`}
                width={black ? 52 : 40}
                height={black ? 52 : 40}
                alt="Tayaswap"
                priority
            />
            {title && (
                <div className={cn("h5M", styles.title, titleClassName)}>
                    TA⅄Aˢʷᵃᵖ
                </div>
            )}
        </a>
    </Link>
);

export default Logo;
