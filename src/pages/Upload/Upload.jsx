import React, { useState, useEffect } from "react";
import { useReverseGeocoding } from "../../hooks/useReverseGeocoding";
import { PhotoUpload, UploadButton } from "../../components/Button/Button";
import { Name, PasswordInput, TitleInput } from "../../components/Input/Input";
import { photoAdd } from "../../apis";
import styles from "../../pages/Upload/Upload.module.css";

const Upload = () => {
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [address, setAddress] = useState();
  const [title, setTitle] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [photo, setPhoto] = useState();

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
  const handleTitleChange = (newTitle) => {
    setTitle(newTitle);
    console.log(title);
  };
  const handleUsernameChange = (newUsername) => {
    setUsername(newUsername);
    console.log(username);
  };
  const handlePasswordChange = (newPassword) => {
    setPassword(newPassword);
    console.log(password);
  };
  const handlePhoto = (file) => {
    setPhoto(file);
  };
  const handleAddPhoto = async () => {
    try {
      const result = await photoAdd(
        photo,
        {
          title: title,
          username: username,
          password: password,
        },
        {
          lotNumber: localStorage.getItem("address"),
          latitude: localStorage.getItem("lat"),
          longitude: localStorage.getItem("lng"),
        }
      );
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.Uploadback}>
      <div className={styles.Uploadpage}>
        <div>
          <div className={styles.PhotoUpload}>
            <TitleInput onTitleChange={handleTitleChange} />
          </div>
          <div className={styles.PhotoUpload}>
            <PhotoUpload onSuccessPhoto={handlePhoto} />
          </div>
        </div>
        <div className={styles.UploadInput}>
          <Name onUsernameChange={handleUsernameChange} />
          <PasswordInput onPasswordChange={handlePasswordChange} />
        </div>
        <div className={styles.UploadButton}>
          <UploadButton onClick={handleAddPhoto} />
        </div>
      </div>
    </div>
  );
};

export default Upload;
