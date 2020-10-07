import React from "react";

import "./CityNews.scss";
import Article from "./Article";

export default function CityNews(props) {
  return (
    <div className="city_news">
      {props.data ? (
        props.data.map((article, i) => <Article key={i} data={article} />)
      ) : (
        <p className="empty_state_message">
          No news at the moment. Try again later
        </p>
      )}
    </div>
  );
}
