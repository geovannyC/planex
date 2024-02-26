"use client"
import React, { useEffect } from "react";

import { ObjAppearsProps } from "@/redux/schemmas/detailsSchemma";

import styles from "./index.module.scss";

const ObjAppears = ({ active, children, delay, parentStyles }: ObjAppearsProps) => {
    useEffect(() => {
        delay && document.documentElement.style.setProperty("--delay", `${delay}ms`);
    }, [delay]);

    return (
        <div className={`${styles.container} ${active && styles.actived} ${parentStyles}`}>
            {children}
        </div>
    );
};

export default ObjAppears;