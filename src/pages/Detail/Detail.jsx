import { LocationInput } from "../../components/index";
import {
  HeartButton,
  PhotoUpload,
  ShareButton,
  DeleteButton,
} from "../../components/Button/Button";

import styles from "../../pages/Detail/Detail.module.css";

const Detail = () => {
  return (
    <div className={styles.Detailpage}>
      <div className={styles.Detailcomponent}>
        <div className={styles.LocationInput}>
          <LocationInput location={"test"} />
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
