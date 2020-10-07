import React from "react";

import "./Article.scss";

import { timeDifference } from "../utils/timeDifferenceCalculator";

export default function Article(props) {
  const { published_date, link, media, summary, title, rights } = props.data;

  var published_date_timestamp = new Date(published_date).getTime();
  var currentDate_timestamp = new Date().getTime();

  return (
    <a
      rel="noopener noreferrer"
      target="_blank"
      href={link}
      className="article"
    >
      <div className="article_details">
        <p className="article_source">{rights}</p>
        <p className="article_title">{title}</p>
        <p className="article_summary">{summary}</p>
        <p className="article_date">
          {timeDifference(currentDate_timestamp, published_date_timestamp)}
        </p>
      </div>
      <div className="article_image">
        {media && <img className="article_image" src={media} alt={title} />}
      </div>
    </a>
  );
}
