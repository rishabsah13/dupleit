import "./App.css";
import axios from "axios";

import React, { useState } from "react";
import ShowTemp from "./ShowTemp";

export default function Weatherstack()
 {
  const [city, setCity] = useState("");
  const [data, setData] = useState({
    weather_descriptions: "",
    temp: 0,
    feelslike: 0,
    observation_time: 0,
    humidity: 0,
    visibility: 0,
    cloudcover: 0,
    country: "",
  });
  const handleClick = () => {
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=6e87092af4da672a185aaf18dae8eac4&query=${city}`
      )
      .then((response) => {
        console.log(response);
        setData({
          weather_descriptions: response.data.current.weather_descriptions[0],
          temp: response.data.current.temperature,
          feelslike: response.data.current.feelslike,
          observation_time: new Date().toLocaleTimeString(),
          humidity: response.data.current.humidity,
          visibility: response.data.current.visibility,
          cloudcover: response.data.current.cloudcover,
          country: response.data.location.country,
        });
      });
  };

  return (
    <>
      <div className="container text-center my-2">
     
        <h1 className="toy">Weather App</h1>
        <br /> <br />
        <input
          className="design"
          type="text"
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
          placeholder="ex. delhi"
        />
        <button
          className="btn btn-info mx-2"
          type="submit"
          onClick={handleClick}
        >
          find
        </button>
        <ShowTemp text={data} />
      </div>
    </>
  );
}
