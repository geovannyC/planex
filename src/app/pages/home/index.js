import React from "react";

import Details from "../../components/containers/details/details";
import BackWall from "../../components/containers/backWall";
import Footer from "../../components/containers/footer/footer";
import Header from "../../components/containers/header";
import Legal from "../../components/containers/legal";

import styles from "./index.module.scss";

const Home = () => {
  return (
    <div className={styles.containerHome}>
      <BackWall />
      <Header />
      <Details />
      <Footer />
      <Legal/>
    </div>
  );
};

export default Home;
