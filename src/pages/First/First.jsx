import React from "react";
import styles from "./First.module.css";
import { LOGO, SNOWMAN_IMAGE, Santahat } from "../../assets";

const First = () => {
  return (
    <div className={styles.background}>
        <img src={Santahat} alt="santahat" className={styles.santahat}></img>
        <span className={styles.startguide}>눈사람에게 모자를 씌워주세요</span>
      <img src={SNOWMAN_IMAGE} alt="snowMan" className={styles.snowMan}></img>
    </div>
  );
};

export default First;
