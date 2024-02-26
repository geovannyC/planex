import React from 'react'
import styles from "./index.module.scss";
import logo from "../../../../../public/icons/logo.svg";
import Image from 'next/image';

const Header = () => {
    return (
        <div className={styles.containerheader}>
            <div className={styles.logo}>
                <Image
                    priority
                    src={logo}
                    alt="Follow us on Twitter"
                    width="0"
                    height="0"
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                />
            </div>
            <h3>PlanEx</h3>
        </div>
    )
}

export default Header