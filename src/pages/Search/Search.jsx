import React, { useState, useEffect } from "react";
import styles from "./Search.module.css";
import { SearchInput, Select } from "../../components/index";
import photoSearch from "../../apis/photoSearch";

const Search = ({ initialSearchType = "TITLE", initialSearchValue = "example title" }) => {
  const [searchType, setSearchType] = useState(initialSearchType);
  const [searchValue, setSearchValue] = useState(initialSearchValue);


  const handleSearchInputChange = (value) => {
    setSearchValue(value);
  };

  const handleSelectChange = (selectedType) => {
    setSearchType(selectedType);
  };

  const getInfo = async () => {
    if (searchType && searchValue) {
      const res = await photoSearch(searchType, searchValue);
      console.log(res)
    }

  }

  return (
    <div className={styles.frame}>
      <SearchInput
        onSearchInputChange={handleSearchInputChange}
        onClick={getInfo}
      />
      <hr />
      <Select title={"카테고리"} onSelectChange={handleSelectChange} />
    </div>
  );
};

export default Search;
