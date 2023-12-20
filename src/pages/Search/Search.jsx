import React, { useState, useEffect } from "react";
import styles from "./Search.module.css";
import { SearchInput, Select } from "../../components/index";
import Photoframe from "../Home/Photoframe";
import photoSearch from "../../apis/photoSearch";

const Search = ({ initialSearchType = "TITLE", initialSearchValue = "example title" }) => {
  const [searchType, setSearchType] = useState(initialSearchType);
  const [searchValue, setSearchValue] = useState(initialSearchValue);
  const [imageData, setImageData] = useState(null);

  const handleSearchInputChange = (value) => {
    setSearchValue(value);
  };

  const handleSelectChange = (selectedType) => {
    setSearchType(selectedType);
  };

  const getInfo = async () => {
    if (searchType && searchValue) {
      try {
        const res = await photoSearch(searchType, searchValue);
        setImageData(res);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  };

  useEffect(() => {
    // Perform the initial data fetch when the component mounts
    getInfo();
  }, []);

  return (
    <div className={styles.frame}>
      <SearchInput
        onSearchInputChange={handleSearchInputChange}
        onClick={getInfo}
      />
      <hr />
      <Select title={"카테고리"} onSelectChange={handleSelectChange} />
      {/* Display fetched data in a container */}
      <div className={styles.displayContainer}>
        {imageData &&
          imageData.map((data, index) => (
            <Photoframe
              key={index}
              data={data}
            />
          ))}
      </div>
    </div>
  );
};

export default Search;
