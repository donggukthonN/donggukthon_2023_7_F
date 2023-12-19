import React from "react";
import styles from "./Search.module.css";
import { SearchInput, Select } from "../../components/index";
const Search = () => {
  return (
    <div className={styles.frame}>
      <SearchInput></SearchInput>
      <hr />
      <Select title={"카테고리"}></Select>
    </div>
  );
};

export default Search;
