import curtain from "../../assets/curtain.svg";
import styles from "../../pages/End/End.module.css";

const End = () => {
  return (
    <div className={styles.Endpage}>
      <div className={styles.Endcomponent}>
        <div className={styles.Endtext}>작품 전시가 종료되었습니다</div>
        <div>
          {" "}
          <img
            src={curtain}
            alt="Curtain"
            className={styles.CurtainImage}
          ></img>
          <div className={styles.EndHome}>홈으로</div>{" "}
        </div>
      </div>
    </div>
  );
};
export default End;
