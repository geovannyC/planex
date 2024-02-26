import React from 'react'
import styles from "./index.module.scss";
const Sphere = ({ size = "small" || "medium" || "large", shadow, light = "left" || "middle" || "right" }) => {
  return <div className={`${styles[size] || styles.small} ${styles.ball} ${shadow && styles.shadow} ${styles[light + "Light"] || styles.leftLight}`} />
}

export default Sphere