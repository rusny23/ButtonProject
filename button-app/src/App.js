import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import MyButton from './button.js';



function App() {

    const [weatherData, setWeatherData] = useState(null);

    const onClickHandler = async () => {
        try {
            const apiUrl =
                'https://api.weatherapi.com/v1/current.json?key=e6055070c516483991714351231610&q=Boston&aqi=no';

            const response = await fetch(apiUrl);

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setWeatherData(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div className="App">
            <header className="App-header">
                <button onClick={onClickHandler}>Get students</button>
                    {weatherData && (
                        <div>
                            <h2>Weather Information for Medford</h2>
                            <p>Temperature: {weatherData.current.temp_f}°F</p>
                            <p>Condition: {weatherData.current.condition.text}</p>
                      </div>
                    )}
            </header>
        </div>
    );
}

export default App;
