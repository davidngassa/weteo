import React, { useState } from "react";

import "./HomePage.scss";
import citiesList from "../../data/cities.json";

import SearchBar from "../../components/SearchBar";
import SearchSuggestion from "../../components/SearchSuggestion";
import CityWeather from "../../components/CityWeather";
import LoadingAnimation from "../../components/LoadingAnimation";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

const HomePage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [selectedCityData, setselectedCityData] = useState();
  const [selectedCityName, setSelectedCityName] = useState("");
  const [selectedCityCountry, setSelectedCityCountry] = useState("");
  const [isResultsVisible, setResultsVisibility] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  // Filter through the list of cities to search result
  const Filter = (text) => {
    setResultsVisibility(true);
    if (text !== "") {
      const filterResult = citiesList
        .filter((city) => {
          const cityName = city.name.toLowerCase();
          const searchText = text.toLowerCase();

          return cityName.startsWith(searchText);
        })
        .slice(0, 5);

      setSearchResults(filterResult);
    } else {
      setSearchResults([]);
    }
  };

  const getCityWeather = async (coordinates, name, country) => {
    setResultsVisibility(false);
    setIsLoading(true);
    setSelectedCityName(name);
    setSelectedCityCountry(country);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&exclude=hourly,minutely&appid=${API_KEY}&units=metric`
      );

      const responseJson = await response.json();

      if (!response.ok) {
        throw new Error(responseJson.message); // Throw error if request not succesful
      } else {
        setselectedCityData(responseJson);
      }
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
  };

  let content;

  if (isLoading) {
    content = (
      <div className="animation_container">
        <LoadingAnimation />
      </div>
    );
  } else {
    if (isResultsVisible) {
      content = (
        <div className="search_results">
          {searchResults.length > 0 &&
            searchResults.map((city, i) => (
              <SearchSuggestion
                key={i}
                id={city.id}
                name={city.name}
                country={city.country}
                onCitySelect={() =>
                  getCityWeather(city.coord, city.name, city.country)
                }
              />
            ))}
        </div>
      );
    } else {
      content = (
        <CityWeather
          data={selectedCityData}
          name={selectedCityName}
          country={selectedCityCountry}
        />
      );
    }
  }

  return (
    <div className="home">
      <SearchBar onChangeText={(text) => Filter(text)} />
      {content}
    </div>
  );
};

export default HomePage;
