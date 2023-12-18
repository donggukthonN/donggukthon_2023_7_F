import React from "react";
import styles from "./Exhibition.module.css";
import { FRAME_DATA } from "../../assets";
const Exhibition = () => {
  return (
    <div className={styles.frame}>
      <div className={styles.back}>
        
        <hr className={styles.line} />
        <div className={styles.displayContainer}>
          {FRAME_DATA &&
            FRAME_DATA.map((data, index) => (
              // 액자 컴포넌트 하나 만들어서 해야할듯
              <img src={data} alt="액자" className={styles.image} />
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
