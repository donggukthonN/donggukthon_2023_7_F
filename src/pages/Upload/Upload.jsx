import React, { useState, useEffect } from "react";
import { useReverseGeocoding } from "../../hooks/useReverseGeocoding";
import { LocationInput } from "../../components/index";
import { PhotoUpload, UploadButton } from "../../components/Button/Button";
import { Name, PasswordInput, TitleInput } from "../../components/Input/Input";
import LoadingPage from "../Loading/LoadingPage";
import styles from "../../pages/Upload/Upload.module.css";

const Upload = () => {
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [address, setAddress] = useState();
  useEffect(() => {
    if (localStorage.getItem("lat") && localStorage.getItem("lng")) {
      setLat(localStorage.getItem("lat"));
      setLng(localStorage.getItem("lng"));
    }
  }, []);
  const data = useReverseGeocoding(lat, lng);

  useEffect(() => {
    setAddress(data);
    if (data) {
      setLng(localStorage.setItem("address", data));
    }
  }, [data]);

  return (
    <div className={styles.Uploadback}>
      <div className={styles.Uploadpage}>
        <div>
          <div className={styles.PhotoUpload}>
            < TitleInput />
          </div>
          <div className={styles.PhotoUpload}>
            <PhotoUpload />
          </div>
        </div>
        <div className={styles.UploadInput}>
          {" "}
          <Name /> <PasswordInput />{" "}
        </div>
        <div className={styles.UploadButton}>
          <UploadButton />
        </div>
      </div>
    </div>
  );
};

export default Upload;
