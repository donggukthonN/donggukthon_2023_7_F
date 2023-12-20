import React, { useState } from "react";
import { fullheart, emptyheart } from "../../components/Button/image";

import styles from "./Photoframe.module.css";

function Photoframe({ data, image, likes }) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const handleLikeToggle = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
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
        <img src={data} alt="액자" className={styles.image} />
      </div>
      <div className={styles.heartContainer}>
        <div
          onClick={handleLikeToggle}
          style={{ background: "none", border: "none", cursor: "pointer" }}
          className={styles.heartCenter}
        >
          {liked ? (
            <img src={fullheart} alt="Heart" className={styles.heart} />
          ) : (
            <img src={emptyheart} alt="Heart" className={styles.heart} />
          )}
        </div>
        <span>{likes}</span>
      </div>
    </div>
  );
}

export default Photoframe;
