import React, {useState} from "react"
import "../src/App.css"

function App() {
  const apiKey = 'b8629fa7461ac57cacb05c136539d6b5'
  const [weatherData, setWeatherData] = useState ([{}])
  const [city, setCity] = useState("")
 
    
 
  const getWeather=(event)=>{
    if (event.key == "Enter"){
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`).then(
        response => response.json()
      ).then(
        data => {
          setWeatherData(data)
          setCity("")
          
        }
      )
    }
  }
 
 
 
  return (
  <div className="container">
    <input className="input" 
           placeholder="Search City"
           onChange={e => setCity(e.target.value)}
           value={city}
           onKeyPress={getWeather}
           />
  {typeof weatherData.main === 'undefined' ?(
    <div>
      <p className="welcome">Welcome to BACS Weather App. Please input a city name.</p>
    </div>
  ):
    
    <div className="weather-data">
        <p className="city">{weatherData.name}</p>
        <p className="temp">{Math.round(weatherData.main.temp)}°F</p>
        <p className="weather">{weatherData.weather[0].main}</p>

    </div>
  }


  </div>
  )
}


export default App
