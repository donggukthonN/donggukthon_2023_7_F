import React, { useEffect, useState } from "react";
import {
  SnowmanList,
  SearchButton,
  HomeHeartButton,
  Showoff,
} from "../../components/Button/Button";
import getPhotoAll from "../../apis/getPhotoAll";
import addPhotoLike from "../../apis/addPhotoLike";
import styles from "./Home.module.css";
import { FRAME_DATA, HomeDeco, First, Second } from "../../assets";
import Photoframe from "./Photoframe";

function Home() {
  const [imageData, setImageData] = useState([]);
  const [selectStatus, setSelectStatus] = useState("LIKES");
  useEffect(() => {
    try {
      const handlePhotoAll = async () => {
        const res = await getPhotoAll(selectStatus);
        const resp = await addPhotoLike();
        console.log(resp);
        setImageData(res);
        console.log(res);
      };
      handlePhotoAll();
    } catch (error) {
      console.log(error);
    }
  }, [selectStatus]);
  const getRandomIndex = () => {
    return Math.floor(Math.random() * FRAME_DATA.length);
  };
  const toggleSelect = (status) => {
    setSelectStatus(status);
  };
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
        <SnowmanList toggleStatus={toggleSelect} />
        <Showoff />
        <div className={styles.displayContainer}>
          {imageData &&
            imageData.map((data, index) => (
              <Photoframe
                key={index}
                data={FRAME_DATA[getRandomIndex()]}
                image={data.imageUrl}
                likes={data.likeCount}
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
