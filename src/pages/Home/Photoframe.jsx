import React, { useState } from "react";
import { fullheart, emptyheart } from "../../components/Button/image";

import styles from "./Photoframe.module.css";

function Photoframe({ data, image }) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const handleLikeToggle = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  return (
    <div
      className={styles.Photoframe}
      style={{
        backgroundImage: `url("https://donggukthon-seven-bucket.s3.ap-northeast-2.amazonaws.com/${image}")`,
        backgroundSize: "cover",
      }}
    >
      <img src={data} alt="액자" className={styles.image} />
      <div className={styles.heartbuttonposition}>
        <button
          onClick={handleLikeToggle}
          style={{ background: "none", border: "none", cursor: "pointer" }}
        >
          {liked ? (
            <img
              src={fullheart}
              alt="Heart"
              style={{ width: "1.5rem", height: "1.5rem" }}
            />
          ) : (
            <img
              src={emptyheart}
              alt="Heart"
              style={{ width: "1.5rem", height: "1.5rem" }}
            />
          )}
        </button>
        <span style={{ marginLeft: "0.2rem", fontSize: "1.5rem" }}>
          {likeCount}
        </span>
      </div>
    </div>
  );
}

export default Photoframe;
