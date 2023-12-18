import React from "react";
import { SnowmanList } from "../../components/Button/Button";
import styles from "./Exhibition.module.css";
import { FRAME_DATA } from "../../assets";
import Photoframe from "./Photoframe";
import { xmas } from "../../components/Button/image"

const Exhibition = () => {
  return (
    <div className={styles.frame}>
      <div className={styles.back}>
      <img src={xmas} alt="액자" className={styles.Best}></img>
      <img src={xmas} alt="액자" className={styles.Best} />
        <hr className={styles.line} />
        <SnowmanList />
        <div className={styles.displayContainer}>
          {FRAME_DATA &&
            FRAME_DATA.map((data, index) => (
              <Photoframe key={index} data={data} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Exhibition;


/**
 * 우선은 눈 내리는 효과는 img 태그로 바꿔서 애니메이션 효과 줘야함
 */
