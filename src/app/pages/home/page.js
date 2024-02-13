import React from "react";
import styles from "./page.module.scss";
import Preview from "../../components/containers/preview/page";
const Home = () => {
  return (
    <div className={styles.containerHome}>
      <div className={styles.header}>hola</div>
      <div className={styles.body}>
        <div className={styles.details}>hola1</div>
        <div className={styles.preview}><Preview/></div>
      </div>
      <div className={styles.footer}>hola3</div>
    </div>
  );
};

export default Home;
