import React, { useEffect, useState } from "react";
import {
  SnowmanList,
  SearchButton,
  HomeHeartButton,
  Showoff,
} from "../../components/Button/Button";
import getPhotoAll from "../../apis/getPhotoAll";
import addPhotoLike from "../../apis/addPhotoLike";
import styles from "./Home.module.css";
import { FRAME_DATA, HomeDeco, First, Second } from "../../assets";
import Photoframe from "./Photoframe";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [imageData, setImageData] = useState(null);
  const [BestData, setBestData] = useState(null);
  const [selectStatus, setSelectStatus] = useState("LIKES");
  useEffect(() => {
    try {
      const handlePhotoAll = async () => {
        const res = await getPhotoAll("LIKES");
        setBestData([res[0], res[1]]);
        setImageData(res.slice(2));
      };
      handlePhotoAll();
    } catch (err) {
      console.log(err);
    }
  }, []);
  useEffect(() => {
    try {
      const handlePhotoAll = async () => {
        const res = await getPhotoAll(selectStatus);
        // console.log(res);
        if (selectStatus === "LIKES") {
          setImageData(res.slice(2));
        } else {
          setImageData(res);
        }
      };
      handlePhotoAll();
    } catch (error) {
      console.log(error);
    }
  }, [selectStatus]);
  const getRandomIndex = () => {
    return Math.floor(Math.random() * FRAME_DATA.length);
  };
  const toggleSelect = (status) => {
    setSelectStatus(status);
  };

  const moveDetail = (photoID) => {
    navigate(`/detail/${photoID}`);
  };
  return (
    <div className={styles.frame}>
      <div className={styles.back}>
        <div className={styles.HomeTop}>
          <img src={HomeDeco} alt="장식" className={styles.HomeDeco}></img>
          <SearchButton className={styles.SearchButton} />
        </div>
        <div className={styles.BestImg}>
          {BestData && (
            <>
              <div className={styles.bestContainer}>
                <div
                  style={{
                    backgroundImage: `url("https://donggukthon-seven-bucket.s3.ap-northeast-2.amazonaws.com/${BestData[0].imageUrl}")`,
                    backgroundSize: "cover",
                  }}
                >
                  <img
                    src={First}
                    alt="first"
                    className={styles.Best}
                    onClick={() => {
                      moveDetail(BestData[0].id);
                    }}
                  />
                </div>
                <HomeHeartButton likes={BestData[0].likeCount} />
              </div>
              <div className={styles.bestContainer}>
                <div
                  style={{
                    backgroundImage: `url("https://donggukthon-seven-bucket.s3.ap-northeast-2.amazonaws.com/${BestData[1].imageUrl}")`,
                    backgroundSize: "cover",
                  }}
                >
                  <img
                    src={Second}
                    alt="first"
                    className={styles.Second}
                    onClick={() => {
                      moveDetail(BestData[1].id);
                    }}
                  />
                </div>
                <HomeHeartButton likes={BestData[1].likeCount} />
              </div>
            </>
          )}
        </div>
        <hr className={styles.line} />
        <SnowmanList toggleStatus={toggleSelect} />
        <Showoff />
        <div className={styles.displayContainer}>
          {imageData &&
            imageData.map((data, index) => (
              <Photoframe
                key={index}
                data={FRAME_DATA[getRandomIndex()]}
                image={data.imageUrl}
                likes={data.likeCount}
                photoID={data.id}
                moveDetail={moveDetail}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

/**
 * 우선은 눈 내리는 효과는 img 태그로 바꿔서 애니메이션 효과 줘야함
 */
