import React, { useState, useEffect } from "react";
import { fullheart, emptyheart } from "../../components/Button/image";
import addPhotoLike from "../../apis/addPhotoLike";

import styles from "./Photoframe.module.css";

function Photoframe({ data, image, likes, photoID, moveDetail }) {
  const [isClicked, setIsClicked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);
  useEffect(() => {
    // localStorage에서 값을 읽어와서 isClicked 상태를 설정
    const localStorageValue = localStorage.getItem(photoID);
    setIsClicked(localStorageValue === "1");
  }, [photoID, likeCount]);

  const plusLike = async () => {
    const res = await addPhotoLike(parseInt(photoID, 10));
    setLikeCount(res.likeCount);
  };

  const handleMove = () => {
    moveDetail(photoID);
  };

  const handleClick = () => {
    if (!isClicked) {
      plusLike();
      setIsClicked(true);
      localStorage.setItem(photoID, "1");
    }
  };

  return (
    <div className={styles.Photoframe}>
      <div
        style={{
          backgroundImage: `url("https://donggukthon-seven-bucket.s3.ap-northeast-2.amazonaws.com/${image}")`,
          backgroundSize: "cover",
          marginBottom: "0.5vh",
        }}
      >
        <img
          src={data}
          alt="액자"
          className={styles.image}
          onClick={handleMove}
        />
      </div>
      <div className={styles.heartContainer}>
        <div
          style={{ background: "none", border: "none", cursor: "pointer" }}
          className={styles.heartCenter}
        >
          {isClicked ? (
            <img src={fullheart} alt="Heart" className={styles.heart} />
          ) : (
            <img
              src={emptyheart}
              alt="Heart"
              className={styles.heart}
              onClick={handleClick}
            />
          )}
        </div>
        <span>{likeCount}</span>
      </div>
    </div>
  );
}

export default Photoframe;
