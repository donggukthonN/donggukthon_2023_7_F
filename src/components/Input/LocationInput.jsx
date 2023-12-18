import styles from "./Input.module.css";
import { useNavigate } from "react-router-dom";

const LocationInput = ({ location }) => {
  const navigate = useNavigate();
  const handleLocation = () => {
    navigate("/location");
  };
  return (
    <div className={styles.locationInput} onClick={() => handleLocation()}>
      {location}
    </div>
  );
};

export default LocationInput;
