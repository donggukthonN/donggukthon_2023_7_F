import React, { useEffect, useState } from "react";
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
  const [imageData, setImageData] = useState([]);
  useEffect(() => {
    try {
      const handlePhotoAll = async () => {
        const res = await getPhotoAll("LIKES");
        setImageData(res);
        console.log(res);
      };
      handlePhotoAll();
    } catch (error) {
      console.log(error);
    }
  }, []);
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
          {imageData &&
            imageData.map((image, index) => (
              <Photoframe
                key={index}
                data={FRAME_DATA[index]}
                image={image.imageUrl}
              />
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
