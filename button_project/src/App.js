import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Button Project</h1>
        <button id="weather_button" onClick={weather}>Click for Weather</button>
        <p id="weather_data"></p>
      </header>
    </div>
  );
}

function weather() {
        fetch("https://api.openweathermap.org/data/2.5/weather?lat=42.41&lon=-71.12&appid=f2275472cfa016a24a31cf5bd2d7a576&units=imperial")
        .then(response => response.json())
        .then(responseJson => {
                document.getElementById('weather_data').innerHTML = "The weather in Medford, MA is " + 
                                                                    responseJson['main']['feels_like'] + " &#8457 and " + 
                                                                    responseJson['weather'][0]['description'] 
                document.getElementById('weather_button').style.display = "none"
        }) 

}
export default App;
