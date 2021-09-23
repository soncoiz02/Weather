import React, { useState, useEffect } from "react";
import Location from "./components/Location/Location";
import './App.scss'
import Search from "./components/Search/Search";
import Detail from "./components/Detail/Detail";


const App = () => {
  const [weatherData, setWeatherData] = useState()
  const [location, setLocation] = useState('')

  useEffect(() => {
    const apiUrl = 'https://api.openweathermap.org/data/2.5/'
    const apiKey = "de2ea27ceb5ff8f00850e7a7e17020c6"
    const getWeatherData = async () => {
      try {
        const response = await fetch(`${apiUrl}weather?q=${location}&units=metric&APPID=${apiKey}`)
        const data = await response.json()
        setWeatherData(data)
        console.log(weatherData)
      } catch (error) {
        console.log(error)
      }
    }
    getWeatherData()
  }, [location])

  const handleCityName = (name) => {
    setLocation(name)
  }

  const handleBackground = (type) => {
    if (type === 'n') {
      return 'night'
    }
    else {
      return ''
    }
  }

  const weatherCondition = typeof weatherData?.main !== "undefined"
  const weatherDetail = weatherCondition ? weatherData?.weather[0] : ''
  return (
    <div className={`App ${weatherCondition ? handleBackground(weatherDetail?.icon.slice(-1)) : ''}`}>
      <div className="container">
        <div className="top">
          <Search getCityName={handleCityName} />
          {
            weatherCondition ?
              <Location
                city={weatherData?.name}
                country={weatherData?.sys?.country}
                icon={weatherDetail?.icon}
              /> : ''
          }
        </div>
        {
          weatherCondition ?
            <Detail
              temp={weatherData?.main?.temp}
              weather={weatherDetail?.main}
              dsc={weatherDetail?.description}
              wind={weatherData?.wind?.speed}
            /> : ''
        }
      </div>
    </div>
  );
}

export default App;
