import React from 'react'
import styles from "./index.module.scss";
import Sphere from "../../ui/sphere/index";
const BackSide = () => {
    return (
        <div className={styles.containerBackSide}>
            <div className={styles.floorObjects}>
                <Sphere shadow light='right' />
            </div>
            <div className={styles.floorObjects}>
                <Sphere shadow light='right' />
            </div>
            <div className={styles.floorObjects}>
                <Sphere shadow light='middle' />
            </div>
            <div className={styles.floorObjects}>
                <Sphere shadow light='middle' />
            </div>
            <div className={styles.floorObjects}>
                <Sphere shadow light='middle' />
            </div>
            <div className={styles.floorObjects}>
                <Sphere shadow light='middle' />
            </div>
            <div className={styles.floorObjects}>
                <Sphere shadow light='left' />
            </div>
            <div className={styles.floorObjects}>
                <Sphere shadow light='left' />
            </div>
        </div>
    )
}

export default BackSide