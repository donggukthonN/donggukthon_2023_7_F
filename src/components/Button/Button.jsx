import React, { useState, useRef, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import photoAnalize from "../../apis/photoAnalize.js";
import {
  emptyheart,
  fullheart,
  instagram,
  searchicon,
  trashcan,
} from "./image.jsx";
import Modal from "../Modal/Modal.jsx";
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
          style={{ width: "0.6rem", padding: "auto" }}
        />
      </div>
    </Link>
  );
}

function DeleteButton({ id }) {
  return (
    <button className={styles.DeleteButton}>
      <div className={styles.Deleteproperty}>
        <img
          src={trashcan}
          alt="Trashcan"
          style={{ width: "0.4rem", height: "0.4rem", padding: "auto" }}
        />
        <Link to={`/delete/${id}`} className={styles.DeleteText}>
          삭제하기
        </Link>
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

const HeartButton = ({ photoId }) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  useEffect(() => {
    const likedStatus =
      JSON.parse(localStorage.getItem(`liked_${photoId}`)) || false;
    const likeCountValue =
      JSON.parse(localStorage.getItem(`likeCount_${photoId}`)) || 0;

    setLiked(likedStatus);
    setLikeCount(likeCountValue);
  }, [photoId]);

  const handleLikeToggle = () => {
    const newLikedStatus = !liked;

    localStorage.setItem(`liked_${photoId}`, JSON.stringify(newLikedStatus));

    setLikeCount((prevLikeCount) => {
      const updatedLikeCount = newLikedStatus
        ? prevLikeCount + 1
        : prevLikeCount - 1;
      localStorage.setItem(
        `likeCount_${photoId}`,
        JSON.stringify(updatedLikeCount)
      );
      return updatedLikeCount;
    });

    setLiked(newLikedStatus);
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

const HomeHeartButton = ({ photoId, likes }) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  useEffect(() => {
    const likedStatus =
      JSON.parse(localStorage.getItem(`liked_${photoId}`)) || false;
    const likeCountValue =
      JSON.parse(localStorage.getItem(`likeCount_${photoId}`)) || 0;

    setLiked(likedStatus);
    setLikeCount(likeCountValue);
  }, [photoId]);

  const handleLikeToggle = () => {
    const newLikedStatus = !liked;

    localStorage.setItem(`liked_${photoId}`, JSON.stringify(newLikedStatus));

    setLikeCount((prevLikeCount) => {
      const updatedLikeCount = newLikedStatus
        ? prevLikeCount + 1
        : prevLikeCount - 1;
      localStorage.setItem(
        `likeCount_${photoId}`,
        JSON.stringify(updatedLikeCount)
      );
      return updatedLikeCount;
    });

    setLiked(newLikedStatus);
  };

  return (
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
  );
};

function PhotoUpload({ onSuccessPhoto, serverPhoto }) {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };
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
          onSuccessPhoto(file);
          setSnowFlag(result);
          reader.readAsDataURL(file);
          reader.onload = () => {
            setImageSrc(reader.result); // 파일의 컨텐츠
          };
        } else {
          setShowModal(true);
        }
      } catch (error) {
        console.log(error);
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
    <>
      {lodaing ? (
        <LoadingPage title={"사진을 분석중입니다."} />
      ) : (
        <div>
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
          <Modal show={showModal} handleClose={handleCloseModal}>
            <p>눈사람을 올려주세요!</p>
          </Modal>
        </div>
      )}
    </>
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
    <div className={styles.ShowoffButton}>
      <Link to="/photoupload">
        <span className={styles.ShowoffText}>내 눈사람 자랑하기</span>
      </Link>
    </div>
  );
}

function SnowmanList({ toggleStatus }) {
  const [selectedButton, setSelectedButton] = useState("LIKES");
  const handleButtonClick = (type) => {
    setSelectedButton(type);
    toggleStatus(type);
  };

  return (
    <div className={styles.SnowmanList}>
      <button
        className={
          selectedButton === "LIKES"
            ? `${styles.LikeList} ${styles.selected}`
            : styles.LikeList
        }
        onClick={() => handleButtonClick("LIKES")}
      >
        좋아요순
      </button>
      <button
        className={
          selectedButton === "DATE"
            ? `${styles.NewList} ${styles.selected}`
            : styles.NewList
        }
        onClick={() => handleButtonClick("DATE")}
      >
        최신순
      </button>
    </div>
  );
}

function UploadButton({ onClick }) {
  const handleClick = () => {
    onClick();
  };
  return (
    <Link to="/complete" className={styles.UploadButton} onClick={handleClick}>
      <p className={styles.UploadText}>전시하기</p>
    </Link>
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
};
