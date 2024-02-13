"use client";
import React from "react";
import Principal from "./pages/home/page.js";
import styles from "./page.module.scss";

import "../../styles/globals.css";
export default function Home() {
  return (
    <div className={styles.container}>
      <Principal />
      {/* <TestFetching />
      <TestStore /> */}
    </div>
  );
}
