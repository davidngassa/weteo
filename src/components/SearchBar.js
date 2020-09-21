import React, { useState } from "react";

import "./SearchBar.scss";

const SearchBar = (props) => {
  const [query, setQuery] = useState("");
  return (
    <div className="search_bar">
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
