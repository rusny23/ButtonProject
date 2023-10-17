import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react'

function App() {
  const [data, setData] = useState(null);
  function weather() {
    const url = "https://api.weatherbit.io/v2.0/current?postal_code=02155&country=US&units=I&key=e821bf599e214b95a722c26486d73b6c"
    fetch(url)
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error))
  }

  
  let temperature_html = null
  let time_html = null

  if (data && data.data) {
    const weather_data = JSON.stringify(data.data)
    const data_array = JSON.parse(weather_data)
    const temperature = data_array[0].app_temp
    const time = data_array[0].ob_time

    temperature_html = <h3>Temperature: {temperature}&deg;F</h3>
    time_html = <h3>Time: {time}</h3>

  }

  return (
    <div className="Weather">
      <br></br>
        <div className="Title">
        <h1>Weather in Medford, Massaschusetts</h1>
      </div>

      <br></br>
      <button onClick={weather}>Click Here for the Weather</button>
      {temperature_html}
      {time_html}
    </div>
      
  
  );
}



export default App;
