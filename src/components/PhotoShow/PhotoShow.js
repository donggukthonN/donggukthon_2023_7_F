import React from "react";
import styles from "./PhotoShow.module.css";
import { woodframephoto } from "../../assets";
import { woodframe } from "../Button/image";

function PhotoShow({ serverPhoto }) {
  return (
    <div className={styles.container}>
      <div
        className={styles.PhotoShow}
        style={{
          backgroundImage: `url(${serverPhoto})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <img src={woodframe} alt="woodframe" className={styles.photoImage} />
      </div>
    </div>
  );
}

export default PhotoShow;
