import { LocationInput } from "../../components/index";
import { useGeoLocation } from "../../hooks/useGeoLocation";
import {
  HeartButton,
  PhotoUpload,
  ShareButton,
  DeleteButton,
} from "../../components/Button/Button";

import styles from "../../pages/Detail/Detail.module.css";

const Detail = () => {
  const { loc } = useGeoLocation();
  return (
    <div className={styles.Detailpage}>
      <div className={styles.Detailcomponent}>
        <div className={styles.LocationInput}>
          <LocationInput
            location={
              loc
                ? `lat : ${loc.latitude} lng : ${loc.longitude}`
                : "현재 위치 로딩중"
            }
          />
        </div>
        <div className={styles.PhotoUpload}>
          <PhotoUpload />
        </div>
        <div className={styles.DetailButtons}>
          <HeartButton />
          <ShareButton />
          <DeleteButton />
        </div>
      </div>
    </div>
  );
};
export default Detail;
