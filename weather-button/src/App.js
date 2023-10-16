import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


const api = {
  key: "be0a323b0288b7ed598ed777dc4575a5",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const [weather, setWeather] = useState({});

  const searchPressed = () => {
    fetch(`${api.base}weather?q=${"Boston"}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        // console.log(result)
        setWeather(result);
      });
  };

  return (
    <div>
      <h1>Click below to see weather in Medford</h1>
      <button onClick={searchPressed}>See Weather</button>
      {typeof weather.main !== "undefined" ? (
          <div>        
            <p>Medford, MA</p>
            <p>{weather.main.temp}°C</p>
            <p>{weather.weather[0].main}</p>
            <p>({weather.weather[0].description})</p>
          </div>
        ) : (
          ""
        )}
    </div>
  );
}

export default App;