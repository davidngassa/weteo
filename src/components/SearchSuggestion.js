import React from "react";

import "./SearchSuggestion.scss";

const SearchSuggestion = (props) => {
  const { id, name, country } = props;
  const url = `/forecast/${id}`;

  return (
    <button onClick={props.onCitySelect} to={url} className="search_suggestion">
      {name} <span>{country}</span>
    </button>
  );
};

export default SearchSuggestion;
