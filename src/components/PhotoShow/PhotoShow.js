import React from "react";
import styles from "./PhotoShow.module.css";
import { woodframephoto } from "../../assets";

function PhotoShow({ serverPhoto }) {
  return (
    <div className={styles.container}>
      <div
        className={styles.PhotoShow}
        style={{
          backgroundImage: `url(${serverPhoto})`,
          backgroundSize: "cover",
        }}
      >
        <img src={woodframephoto} alt="first" className={styles.photoImage} />
      </div>
    </div>
  );
}

export default PhotoShow;
