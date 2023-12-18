import React, { useState } from "react";
import {
  emptyheart,
  fullheart,
  instagram,
  searchicon,
  trashcan,
} from "./image.jsx";

import styles from "./Buttonstyle.module.css";

function Button() {
  return <button className={styles.button_sample}></button>;
}

function PhotoUpload() {
  return (
    <div>
      <button className={styles.PhotoUpload}>
        <span className={styles.Phototext}>작품 업로드</span>
      </button>
    </div>
  );
}

function Showoff() {
  return (
    <div>
      <button className={styles.ShowoffButton}>
        <span className={styles.ShowoffText}>내 눈사람 자랑하기</span>
      </button>
    </div>
  );
}

function UploadButton() {
  return (
    <div>
      <button className={styles.UploadButton}>
        <p className={styles.UploadText}>전시하기</p>
      </button>
    </div>
  );
}

export {
  Button,
  PhotoUpload,
  Showoff,
  UploadButton,
};
