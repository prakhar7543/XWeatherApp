import React, { useState } from "react";
import './weatherCards.css';

export default function WeatherCards({ weatherData }) {
  // let [data, setData] = useState([]);

  return (
    <div className="weather-cards">
      <div className="weather-card">
        <p style={{fontSize: 'large', fontWeight: '500'}}>Temperature</p>
        <p>{weatherData.temp_c}°C</p>
      </div>
      <div className="weather-card">
        <p style={{fontSize: 'large', fontWeight: '500'}}>Humidity</p>
        <p>{weatherData.humidity}%</p>
      </div>
      <div className="weather-card">
        <p style={{fontSize: 'large', fontWeight: '500'}}>Condition</p>
        <p>{weatherData.condition.text}</p>
      </div>
      <div className="weather-card">
        <p style={{fontSize: 'large', fontWeight: '500'}}>Wind Speed</p>
        <p>{weatherData.wind_kph} kph</p>
      </div>
    </div>
  );
}
