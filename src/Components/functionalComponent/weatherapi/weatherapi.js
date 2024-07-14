import React, { useState } from 'react';
import axios from 'axios';
import CustomSpinner from '../../../bootstrap/spinners/spinner';

function WeatherApi() {
  const [city, setCity] = useState('');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeatherData = () => {
    const apiKey = '80910612dcf7b8881a64531ad282247c';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    setLoading(true);
    setError(null);

    axios.get(apiUrl)
      .then(response => {
        console.log(response)
        setData(response.data);
      })
      .catch(error => {
        setError(error);
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const handleFetchClick = () => {
    if (city) {
      fetchWeatherData();
    }
  };

  return (
    <div>
      <input 
        type="text" 
        value={city} 
        onChange={handleInputChange} 
        placeholder="Enter city" 
      />
      <button onClick={handleFetchClick}>Get Weather</button>
      
      {loading && <div><CustomSpinner/></div>}
      {error && <div>Error: {error.message}</div>}
      {data && (
        <div>
          <h1>{data.name}</h1>
          
          <p>Temperature: {Math.round(data.main.temp - 273.15)}°C</p> {/* Converting from Kelvin to Celsius */}
          <p>Weather: {data.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default WeatherApi;