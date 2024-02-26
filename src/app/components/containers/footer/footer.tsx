import React from "react";

import { useAppSelector } from "@/redux/hooks";

import Slider from "../../ui/slider/index";
import styles from "./index.module.scss";

const Footer = () => {
  const data = useAppSelector((state) => state.appReducer.data);
  return (
    <div className={styles.containerSlider}>
      <Slider data={data} />
    </div>

  );
};

export default Footer;