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

function SearchButton() {
  return (
    <button className={styles.SearchButton}>
      <div className={styles.searchicon}>
        <img
          src={searchicon}
          alt="search-icon"
          style={{ width: "0.6rem", height: "0.6rem", padding: "auto" }}
        />
      </div>
    </button>
  );
}

function DeleteButton() {
  return (
    <button className={styles.DeleteButton}>
      <div className={styles.Deleteproperty}>
        <img
          src={trashcan}
          alt="Trashcan"
          style={{ width: "0.4rem", height: "0.4rem", padding: "auto" }}
        />
        <span className={styles.Delete - Text}> 삭제하기</span>
      </div>
    </button>
  );
}

function ShareButton() {
  return (
    <button className={styles.ShareButton}>
      <div className={styles.Shareeproperty}>
        <img
          src={instagram}
          alt="Instagram"
          style={{ width: "0.4rem", height: "0.4rem", padding: "auto" }}
        />
        <span className={styles.Share - Text}> 공유하기</span>
      </div>
    </button>
  );
}

const HeartButton = () => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const handleLikeToggle = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  return (
    <div className={styles.heartbuttonposition}>
      <button
        onClick={handleLikeToggle}
        style={{ background: "none", border: "none", cursor: "pointer" }}
      >
        {liked ? (
          <img
            src={fullheart}
            alt="Heart"
            style={{ width: "2rem", height: "2rem" }}
          />
        ) : (
          <img
            src={emptyheart}
            alt="Heart"
            style={{ width: "2rem", height: "2rem" }}
          />
        )}
      </button>
      <span style={{ marginLeft: "0.2rem", fontSize: "2rem" }}>
        {likeCount}
      </span>
    </div>
  );
};

function PhotoUpload() {
  return (
    <div>
      <button className={styles.PhotoUpload}>
        <span className={styles.Phototext}>작품 업로드</span>
      </button>
    </div>
  );
}

function PhotoDisplay() {
  return (
    <div>
      <button className={styles.PhotoDisplay}>
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

// function ShareButton() {
//   return (
//     <button className="Share-Button">
//       <div className="Sharee-property">
//         <img
//           src={instagram}
//           alt="Instagram"
//           style={{ width: "0.2rem", height: "0.2rem", padding: "auto" }}
//         />
//         <span className="Share-Text"> 공유하기</span>
//       </div>
//     </button>
//   );
// }

// function PhotoUpload() {
//   return (
//     <div>
//       <button className="Photo-Upload">
//         <span className="Photo-text">작품 업로드</span>
//       </button>
//     </div>
//   );
// }

// function Showoff() {
//   return (
//     <div>
//       <button className="Showoff-Button">
//         <span className="Showoff-Text">내 눈사람 자랑하기</span>
//       </button>
//     </div>
//   );
// }

function SnowmanList() {
  const [selectedButton, setSelectedButton] = useState("LikeList");

  const handleButtonClick = (buttonType) => {
    setSelectedButton(buttonType);
  };

  return (
    <div className={styles.SnowmanList}>
      {" "}
      {/* Use styles.SnowmanList instead of "SnowmanList" */}
      <hr className={styles.Listline}></hr>{" "}
      {/* Use styles.Listline instead of "Listline" */}
      <button
        className={
          selectedButton === "LikeList"
            ? `${styles.LikeList} ${styles.selected}`
            : styles.LikeList
        }
        onClick={() => handleButtonClick("LikeList")}
      >
        좋아요순
      </button>
      <button
        className={
          selectedButton === "NewList"
            ? `${styles.NewList} ${styles.selected}`
            : styles.NewList
        }
        onClick={() => handleButtonClick("NewList")}
      >
        최신순
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
  SearchButton,
  DeleteButton,
  ShareButton,
  HeartButton,
  PhotoUpload,
  PhotoDisplay,
  Showoff,
  SnowmanList,
  UploadButton,
};
