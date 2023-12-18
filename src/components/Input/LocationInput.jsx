import styles from "./Input.module.css";

const LocationInput = ({ location }) => {
  const handleLocation = () => {
    console.log(location);
  };
  return (
    <div className={styles.locationInput} onClick={() => handleLocation()}>
      {location}
    </div>
  );
};

export default LocationInput;
