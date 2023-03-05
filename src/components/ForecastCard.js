import React from 'react';

function ForecastCard({ forecastData }) {
  return (
    <div className="forecast-container">
      {forecastData.map((forecast, index) => (
        <div key={index} className="forecast-card">
          <p>{forecast.dt_txt.slice(0, 10)}</p>
          <p>{forecast.main.temp}°C</p>
          {forecast.weather && forecast.weather.length > 0 && <p>{forecast.weather[0].description}</p>}
        </div>
      ))}
    </div>
  );
}

export default ForecastCard;
