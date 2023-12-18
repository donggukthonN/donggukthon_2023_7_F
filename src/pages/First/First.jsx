import React from "react";
import styles from "./First.module.css";
import { LOGO, SNOWMAN_IMAGE } from "../../assets";

const First = () => {
  return (
    <div className={styles.background}>
      <img src={SNOWMAN_IMAGE} alt="snowMan" className={styles.snowMan} />
    </div>
  );
};

export default First;
