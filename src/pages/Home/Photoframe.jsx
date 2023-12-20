import React, { useState } from "react";
import { fullheart, emptyheart } from "../../components/Button/image";
import addPhotoLike from "../../apis/addPhotoLike";

import styles from "./Photoframe.module.css";

function Photoframe({ data, image, likes, photoID, moveDetail }) {
  localStorage.setItem(photoID, false);
  const plusLike = async () => {
    const res = await addPhotoLike(parseInt(photoID, 10));
    console.log(res);
  };
  const handleLikeToggle = () => {
    const status = localStorage.getItem(photoID);
    localStorage.setItem(photoID, !status);
    if (localStorage.getItem(photoID) === true) {
      plusLike();
    }
  };

  const handleClick = () => {
    return moveDetail(photoID);
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
          onClick={handleClick}
        />
      </div>
      <div className={styles.heartContainer}>
        <div
          style={{ background: "none", border: "none", cursor: "pointer" }}
          className={styles.heartCenter}
        >
          {localStorage.getItem(photoID) ? (
            <img
              src={fullheart}
              alt="Heart"
              className={styles.heart}
              onClick={handleLikeToggle}
            />
          ) : (
            <img
              src={emptyheart}
              alt="Heart"
              className={styles.heart}
              onClick={handleLikeToggle}
            />
          )}
        </div>
        <span>{localStorage.getItem(photoID) ? likes + 1 : likes}</span>
      </div>
    </div>
  );
}

export default Photoframe;
