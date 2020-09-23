import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { MdClear } from "react-icons/md";
import { IconContext } from "react-icons";

import "./SearchBar.scss";

const SearchBar = (props) => {
  const [isClearButtonVisible, setClearButtonVisibility] = useState(false);
  const [query, setQuery] = useState("");

  const clearInput = () => {
    setQuery("");
    props.onChangeText("");
  };

  const handleInputChange = (text) => {
    setQuery(text);
    props.onChangeText(text);
  };

  return (
    <div className="search_bar">
      <IconContext.Provider
        value={{
          color: "#9e9e9e ",
          size: "1.8em",
          className: "search_icon",
          title: "search_icon",
        }}
      >
        <IoIosSearch />
      </IconContext.Provider>

      <input
        value={query}
        id="search_input"
        autoComplete="off"
        spellCheck="false"
        placeholder="Search for a city"
        autoFocus
        onChange={(text) => handleInputChange(text.target.value)}
        onFocus={() => setClearButtonVisibility(true)}
      ></input>

      {isClearButtonVisible && (
        <IconContext.Provider
          value={{
            color: "#9e9e9e ",
            size: "1.8em",
            title: "search_icon",
          }}
        >
          <button onClick={() => clearInput()} id="clear_button">
            <MdClear />
          </button>
        </IconContext.Provider>
      )}
    </div>
  );
};

export default SearchBar;
