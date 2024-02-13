import React from "react";
import styles from "./page.module.scss";
import Image from "next/image";
import trex from "../../../../../public/images/trex2.png";
import circle from "../../../../../public/icons/circle.svg";
import teal from "../../../../../public/images/teal.png";
import leafteal from "../../../../../public/images/leaf.png";
import leafteal2 from "../../../../../public/images/leaf2.png";
import branch from "../../../../../public/images/branch.png";
import brings from "../../../../../public/icons/brings.svg";
import circular from "../../../../../public/icons/circular-back.svg";
import {treximage} from "./trex.json";
const Preview = () => {
  return (
    <div className={styles.containerPreview}>
      <div className={styles.containerMiddle}>
        <div className={styles.image}>
          <Image
            src={treximage}
            width={380}
            height={380}
            alt="previewImage"
            loading="lazy"
            quality={0}
          />
        </div>
      </div>
      {/* <div className={styles.leaf}>
        <Image src={teal} className={` ${styles.containerleaf}`} />
        <Image src={leafteal2} className={` ${styles.containerleaf}`} />
        <Image src={branch} className={` ${styles.containerleaf}`} /> */}
      {/* <Image
            src={leaft}
            className={`${styles.leaft2} ${styles.containerleaf}`}
            />
            <Image
            src={leaft}
            className={`${styles.leaft3} ${styles.containerleaf}`}
          /> */}
      {/* </div> */}
      {/* <div className={styles.containerBack}>
        <Image src={circular} className={` ${styles.back}`} />
      </div> */}
      <div className={styles.shadow}></div>
    </div>
  );
};

export default Preview;
