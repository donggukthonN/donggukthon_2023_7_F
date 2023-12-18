import styles from "./select.module.css";

const Select = ({ title }) => {
  return (
    <div className={styles.frame}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.radioBox}>
        <label htmlFor={"author"}>
          <input
            type="radio"
            id={"author"}
            name={"search"}
            defaultChecked={"checked"}
          />
          작가 이름
        </label>
        <label htmlFor={"title"}>
          <input type="radio" id={"title"} name={"search"} />
          작품 제목
        </label>

        <label htmlFor={"location"}>
          <input type="radio" id={"location"} name={"search"} />
          위치
        </label>
      </div>
    </div>
  );
};

export default Select;
