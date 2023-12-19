import React, { useState, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import photoAnalize from "../../apis/photoAnalize.js";
import {
  emptyheart,
  fullheart,
  instagram,
  searchicon,
  trashcan,
} from "./image.jsx";

import Modal from '../Modal/Modal.jsx';
import LoadingPage from "../../pages/Loading/LoadingPage.jsx";
import styles from "./Buttonstyle.module.css";

function Button() {
  return <button className={styles.button_sample}></button>;
}

function SearchButton() {
  return (
    <Link to="/search" className={styles.SearchButton}>
      <div className={styles.searchicon}>
        <img
          src={searchicon}
          alt="search-icon"
          style={{ width: "0.6rem", height: "0.6rem", padding: "auto" }}
        />
      </div>
    </Link>
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
        <Link to="/delete" className={styles.DeleteText}> 삭제하기</Link>
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

const HomeHeartButton = () => {
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
  );
};

function PhotoUpload() {
  const [imageSrc, setImageSrc] = useState();
  const [snowFlag, setSnowFlag] = useState(false);
  const [lodaing, setLoading] = useState(false);
  const inputRef = useRef();

  const onUploadImage = useCallback(async (e) => {
    if (!e.target.files) {
      return;
    }
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    if (file) {
      setLoading(true);

      try {
        const result = await photoAnalize(file);
        if (result) {
          setSnowFlag(result);

          reader.readAsDataURL(file);
          reader.onload = () => {
            setImageSrc(reader.result); // 파일의 컨텐츠
          };
        }
      } catch (error) {
        console.error("Error uploading image:", error);
      } finally {
        setLoading(false);
      }
    }
  }, []);

  const onUploadImageButtonClick = useCallback(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.click();
  }, []);

  return (
    <div>
      {lodaing ? (
        <LoadingPage title={"사진을 분석중입니다."} />
      ) : (
        <>
          <input
            className={styles.imageInput}
            type="file"
            accept="image/*"
            ref={inputRef}
            onChange={onUploadImage}
          />

          <button
            className={styles.PhotoUpload}
            onClick={onUploadImageButtonClick}
          >
            {snowFlag ? (
              <img
                src={imageSrc && imageSrc}
                alt="upload"
                className={styles.uploadImage}
              />
            ) : (
              <span className={styles.Phototext}>작품 업로드</span>
            )}
          </button>
        </>
      )}
    </div>
  );
}

function PhotoDisplay() {
  return (
    <div>
      <button className={styles.PhotoDisplay}></button>
    </div>
  );
}

function Showoff() {
  return (
    <div>
      <Link to="/upload" className={styles.ShowoffButton}>
        <span className={styles.ShowoffText}>내 눈사람 자랑하기</span>
      </Link>
    </div>
  );
}

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
      <Link to="/Complete" className={styles.UploadButton}>
        <p className={styles.UploadText}>전시하기</p>
      </Link>
    </div>
  );
}

function LocationFirstButton() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <div>
      <button onClick={handleOpenModal} className={styles.UploadButton}><p className={styles.UploadText}>전시하기</p></button>
      <Modal show={showModal} handleClose={handleCloseModal}>
        {/* Add your modal content here */}
        <p>위치를 먼저 등록해주세요</p>
      </Modal>
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
  HomeHeartButton,
  LocationFirstButton
};
