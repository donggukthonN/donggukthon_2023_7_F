import { HeartButton, PhotoUpload, ShareButton, DeleteButton, PhotoDisplay } from "../../components/Button/Button";
import { Link } from "react-router-dom";
import styles from "../../pages/Complete/Complete.module.css"

const Complete = () => {
    return (
        <div className={styles.Completepage}>
        <div className={styles.Completecomponent}>
            <div className={styles.CompleteText}>작품이 전시되었습니다</div>
            <div className={styles.PhotoDisplay}><PhotoDisplay /></div>
            <Link to="/Home"><div className={styles.GoToHome}>홈으로</div></Link>
        </div>
        </div>
    );
};
export default Complete;