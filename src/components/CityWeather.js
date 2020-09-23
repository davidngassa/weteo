import React from "react";

import "./CityWeather.scss";
import DayForecast from "./DayForecast";

const CityWeather = (props) => {
  console.log(props.data);

  const current = props.data.current;
  const currentWeatherIcon = current.weather[0].icon;

  const forecast = props.data.daily;

  return (
    <div className="city_weather">
      <div className="current_weather_container">
        <div className="current_weather_details">
          <p className="city_name">
            {props.name}, {props.country}
          </p>
          <div className="current_weather_description">
            <p>Currently</p>
            <p className="current_weather_mood">
              {current.weather[0].description}
            </p>
          </div>
        </div>
        <div className="current_weather_visual">
          <img
            className="current_weather_icon"
            src={`http://openweathermap.org/img/wn/${currentWeatherIcon}@4x.png`}
            alt="current_weather_icon"
          />
          <p className="current_weather_temperature">
            {Math.round(current.temp)}°C
          </p>
        </div>
      </div>
      <div className="forecast_container">
        {forecast.slice(0, 5).map((day, i) => (
          <DayForecast key={i} data={day} index={i} />
        ))}
      </div>
    </div>
  );
};

export default CityWeather;
