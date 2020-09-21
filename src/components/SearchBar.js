import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { IconContext } from "react-icons";

import "./SearchBar.scss";

const SearchBar = (props) => {
  const [query, setQuery] = useState("");
  return (
    <div className="search_bar">
      <IconContext.Provider
        value={{ color: "#9e9e9e ", size: "2em", className: "search_icon" }}
      >
        <IoIosSearch />
      </IconContext.Provider>

      <input
        id="search_input"
        autoComplete="off"
        spellCheck="false"
        placeholder="Search for a city"
        autoFocus
        value={query}
        onChange={(text) => setQuery(text.target.value)}
      ></input>
    </div>
  );
};

export default SearchBar;
