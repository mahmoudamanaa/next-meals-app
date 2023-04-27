import React from "react";
import classes from "./SearchBar.module.css";

const SearchBar: React.FC<{
  searchText: string;
  setSearchText: (text: string) => void;
}> = (props) => {
  const changeHandler = (event: { target: { value: string } }) => {
    props.setSearchText(event.target.value);
  };

  return (
    <input
      className={classes.input}
      value={props.searchText}
      onChange={changeHandler}
      placeholder="Search Meals"
    />
  );
};

export default SearchBar;
