import "./App.css";
import { BsSearch } from "react-icons/bs";
import React, { useState } from "react";

import { fetchWeather } from "./api/fetchWeather";

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState("");

  const search = async (e) => {
    if (e.key === "Enter") {
      const data = await fetchWeather(query);

      setWeather(data);

      //reset input
      setQuery("");
    }
  };

  return (
    <>
      <div className="bg-blur" />
      <div className="main">
        <div className="left-content">
          <h2 className="title">Weather App</h2>
          {weather.main && (
            <div className="info">
              <div className="city-temp">
                <h1 className="temp">{Math.round(weather.main.temp)}</h1>
                <sup>&deg;C</sup>
              </div>
              <div className="start mr-4">
                <h2 className="city">{weather.name}</h2>
                <p>06:09-monday, 9 sep 19</p>
              </div>
              <div className="cloud-weather-info start">
                <img
                  src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                  alt={weather.weather[0].description}
                />
                <p className="cloud-info">{weather.weather[0].description}</p>
              </div>
            </div>
          )}
        </div>
        <div className="right-content">
          <div className="searching">
            <input
              name="search"
              type="text"
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={search}
            />
            <BsSearch size={28} className="search-icon" color="white" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
