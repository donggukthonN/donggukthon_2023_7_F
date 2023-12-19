import React from "react";
import { SnowmanList, SearchButton, HeartButton } from "../../components/Button/Button";
import styles from "./Home.module.css";
import { FRAME_DATA, HomeDeco, dummy } from "../../assets";
import Photoframe from "./Photoframe";
import { xmas } from "../../components/Button/image"

function Home() {
  // const FRAME_DATA = [/* your image URLs or data here */];

  return (
    <div className={styles.frame}>
      <div className={styles.back}>
        <div className={styles.HomeTop}>
        <img src={HomeDeco} alt= "장식" className={styles.HomeDeco}></img>
        <SearchButton className={styles.SearchButton} />
        </div>
        <div className={styles.BestImg}>
        <div><img src={dummy} alt="first" className={styles.Best} /><HeartButton /></div>
        <div><img src={dummy} alt="first" className={styles.Second} /><HeartButton /></div>
        </div>
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

export default Home;


/**
 * 우선은 눈 내리는 효과는 img 태그로 바꿔서 애니메이션 효과 줘야함
 */
