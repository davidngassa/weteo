import React from "react";

import "./DayForecast.scss";

const DayForecast = (props) => {
  let weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const dayOfTheWeek =
    new Date().getDay() + props.index >= weekdays.length
      ? weekdays[Math.abs(new Date().getDay() + props.index - 7)]
      : weekdays[new Date().getDay() + props.index];
  const weatherIcon = props.data.weather[0].icon;
  const temperatures = props.data.temp;

  return (
    <div className="day_forecast">
      <p>{dayOfTheWeek}</p>
      <div>
        <img
          className="forecast_icon"
          src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
          alt="day_weather_icon"
        />
        <div className="forecast_temp_container">
          <p className="forecast_temp_max">{Math.round(temperatures.max)}</p>
          <p className="forecast_temp_min">{Math.round(temperatures.min)}</p>
        </div>
      </div>
    </div>
  );
};

export default DayForecast;
