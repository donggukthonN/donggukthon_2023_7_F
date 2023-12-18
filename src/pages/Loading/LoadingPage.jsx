import { Loading } from "../../components/Loading/Loading";
import styles from "./Loading.module.css";
const LoadingPage = ({ title }) => {
  return (
    <div className={styles.frame}>
      <Loading></Loading>
      <h2>{title}</h2>
    </div>
  );
};

export default LoadingPage;
