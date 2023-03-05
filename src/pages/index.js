import Head from 'next/head';
import { useState } from 'react';
import axios from 'axios';
import ForecastCard from '../components/ForecastCard';
import WeatherCard from '../components/WeatherCard';
import CitySearch from '../components/CitySearch';
import styles from '../styles/Home.module.css';

export default function IndexPage() {
  const [selectedCity, setSelectedCity] = useState('Rome');
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);

  const handleSearch = async (query) => {
    try {
      const [weather, forecast] = await Promise.all([
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY}`),
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${query}&units=metric&appid=${process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY}`),
      ]);
      setSelectedCity(query);
      setWeatherData(weather.data); 
      setForecastData(forecast.data.list.filter((item) => item.dt_txt.includes('12:00:00')));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ 
      backgroundImage: "url('sfondo.jpg')",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: -1
    }}>
      <div className={styles.container}>
        <Head>
          <title>Soli Weather</title>
          <meta name="description" content="Weather App" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>Soli Weather</h1>
          <CitySearch onSearch={handleSearch} />
          {weatherData && <WeatherCard weatherData={weatherData} />} {/* Update prop name */}
          {forecastData && <ForecastCard forecastData={forecastData} />}
        </main>
      </div>
    </div>
  );
}

