import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./First.module.css";
import { LOGO, SNOWMAN_IMAGE, Santahat } from "../../assets";

const First = () => {
  const [touchFlag, setTouchFlag] = useState(false);
  const navigate = useNavigate();
  const handleTouch = () => {
    setTouchFlag(true);
  };
  const movePage = () => {
    const timeoutId = setTimeout(() => {
      // 1초 후 '/target-page'로 이동
      navigate("/location");
    }, 500);
    return () => clearTimeout(timeoutId);
  };
  return (
    <div className={styles.background} onClick={handleTouch}>
      <div className={styles.hatBox}>
        <div className="title">
          <img
            src={LOGO}
            alt="snowManHouse"
            className={touchFlag ? styles.afterLogo : styles.logo}
            onAnimationEnd={movePage}
          />
        </div>
        <img
          src={Santahat}
          alt="santahat"
          className={touchFlag ? styles.moveHat : styles.santahat}
        ></img>
        <span className={touchFlag ? styles.guideOff : styles.startguide}>
          눈사람에게 모자를 씌워주세요
        </span>
      </div>
      <div className={styles.snowManBox}>
        <img src={SNOWMAN_IMAGE} alt="snowMan" className={styles.snowMan}></img>
      </div>
    </div>
  );
};

export default First;
