import React from 'react'
import classes from "./TopSearchBar.module.css"
import search from "../assets/search.svg";
import Input from './Input';


const SearchBar = () => {
  return (
    <div
      className={classes["search__bar"]}
    >
      <button className={classes["search__logo"]}>
        <img src={search} alt="Search-logo" />
      </button>
      <Input
        placeholder="Search..."
        className={classes["top__bar-input"]}
        // onClick={() => setInputModal(true)}
      />
    </div>
  );
}

export default SearchBar