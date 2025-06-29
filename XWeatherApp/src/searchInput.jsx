import React, { useEffect, useState } from "react";
import "./searchInput.css";
import axios from "axios";
import WeatherCards from "./weatherCards";

export default function Search() {
  let [city, setCity] = useState("");
  let [weatherData, setWeatherData] = useState([]);
  let [displayCards, setDisplayCards] = useState(false);
  let [loading, setLoading] = useState(false);

  let fetchData = async () => {
    let url = "https://api.weatherapi.com/v1/current.json";
    if (city) {
      try {
        setLoading(true);
        let res = await axios.get(url, {
          params: {
            Key: "c9b35781c79e4c8994c143815252906",
            q: city,
          },
        });
        console.log("weatherData", weatherData);
        setWeatherData(res.data);
        setDisplayCards(true);
      } catch (error) {
        console.error("error in fetching city data");
        alert("failed to fetch data");
      }
      finally{
        setLoading(false);
    }
    }
  };

  // useEffect(() => {
  //   fetchData();
  // }, [city]);

  let handleInputChange = (e) => {
    let inp = e.target.value;
    setCity(inp);
  };

  let handleClick = () => {
     if(city){
      fetchData();
     }
  };

  return (
   
      <div>
        <div className="inputBox">
          <input
            type="text"
            placeholder="Enter city name"
            onChange={handleInputChange}
          />
          <button onClick={handleClick}>Search</button>
        </div>
        {loading && <p>Loading data...</p>}
        
        {displayCards && (
          <div>{displayCards && <WeatherCards weatherData={weatherData.current} />}</div>
        )}
      </div>

  );
}
