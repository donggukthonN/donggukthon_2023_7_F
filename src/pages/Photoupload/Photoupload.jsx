import React, { useState, useEffect } from "react";
import { useGeoLocation } from "../../hooks/useGeoLocation";
import { useReverseGeocoding } from "../../hooks/useReverseGeocoding";
import { LocationInput, LocationFirstButton } from "../../components/index";
import { PhotoUpload } from "../../components/Button/Button";
import { TitleInput } from "../../components/Input/Input";
import styles from "../../pages/Upload/Upload.module.css";

const Photoupload = () => {
  const [lat, setLat] = useState();
  const [lng, setLng] = useState();
  const [address, setAddress] = useState();
  const { loc } = useGeoLocation();
  useEffect(() => {
    if (loc) {
      setLat(loc.latitude);
      setLng(loc.longitude);
    }
  }, [loc]);
  const data = useReverseGeocoding(lat, lng);

  useEffect(() => {
    setAddress(data);
  }, [data]);

  return (
    <div className={styles.Uploadback}>
      <div className={styles.Uploadpage}>
        <div>
          <div className={styles.PhotoUpload}>
            <LocationInput location={address} />
          </div>
          <div className={styles.PhotoUpload}>
            <PhotoUpload />
          </div>
        </div>
        {/* <div className={styles.UploadTitle}>
          {" "}
          <TitleInput />{" "}
        </div> */}
        <div className={styles.UploadButton}>
          <LocationFirstButton />
        </div>
      </div>
    </div>
  );
};

export default Photoupload;
