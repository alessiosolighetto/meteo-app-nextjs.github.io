import React from 'react';

function WeatherCard({ weatherData }) {
  if (!weatherData) return null; // Controllo se weatherData è undefined

  const { name, main, weather } = weatherData;

  return (
    <div className="weather-card">
      <h2>{name}</h2>
      <p>{weather[0].description}</p>
      <p>Temperature: {Math.round(main.temp)}°C</p>
      <p>Feels like: {Math.round(main.feels_like)}°C</p>
      <p>Humidity: {main.humidity}%</p>
    </div>
  );
}


export default WeatherCard;
