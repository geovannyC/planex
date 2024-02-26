import React from 'react'
import styles from "./index.module.scss";
import Sphere from "../../ui/sphere/index";
const BackWall = () => {
    return (
        <div className={styles.containerBackWall}>
            <div className={styles.wallObjects}>
                <Sphere light='right' />
            </div>
            <div className={styles.wallObjects}>
                <Sphere light='right' />
            </div>
            <div className={styles.wallObjects}>
                <Sphere light='left' />
            </div>
            <div className={styles.wallObjects}>
                <Sphere light='left' />
            </div>
            <div className={styles.wallObjects}>
                <Sphere light='left' />
            </div>
        </div>
    )
}

export default BackWall