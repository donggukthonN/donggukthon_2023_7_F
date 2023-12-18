import styles from "./input.module.css";

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
