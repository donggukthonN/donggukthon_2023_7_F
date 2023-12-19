import React,{useEffect} from "react";
import {
  SnowmanList,
  SearchButton,
  HomeHeartButton,
  Showoff,
} from "../../components/Button/Button";
import getPhotoAll from "../../apis/getPhotoAll";
import styles from "./Home.module.css";
import { FRAME_DATA, HomeDeco, First, Second } from "../../assets";
import Photoframe from "./Photoframe";

function Home() {
  // const FRAME_DATA = [/* your image URLs or data here */];
  useEffect(()=>{
    getPhotoAll("LIKES")
  },[])
  return (
    <div className={styles.frame}>
      <div className={styles.back}>
        <div className={styles.HomeTop}>
          <img src={HomeDeco} alt="장식" className={styles.HomeDeco}></img>
          <SearchButton className={styles.SearchButton} />
        </div>
        <div className={styles.BestImg}>
          <div>
            <img src={First} alt="first" className={styles.Best} />
            <HomeHeartButton />
          </div>
          <div>
            <img src={Second} alt="first" className={styles.Second} />
            <HomeHeartButton />
          </div>
        </div>
        <hr className={styles.line} />
        <SnowmanList />
        <Showoff />
        <div className={styles.displayContainer}>
          {FRAME_DATA &&
            FRAME_DATA.map((data, index) => (
              <Photoframe key={index} data={data} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Home;

/**
 * 우선은 눈 내리는 효과는 img 태그로 바꿔서 애니메이션 효과 줘야함
 */
