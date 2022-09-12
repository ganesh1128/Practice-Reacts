import axios from 'axios'
import React, { useEffect, useState } from 'react'


const fetchWeatherData = async (city, setData) => {
try {
     let weatherData = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8dee0dbf17f272e4fefa8df470a7aa56&units=metric`)
     const { temp, temp_max, temp_min } = weatherData.data.main;
     const { description } = weatherData.data.weather[0];   
    console.log('weatherData.data.main', weatherData.data);
    setData([temp,temp_max,temp_min, description])
    // setData(weatherData.data)
    return {
        temp,
        temp_max,
        temp_min,
        description,
      };
} catch (error) {
    console.log(error);
}

}

const cities = ['Hyderabad', 'Rajahmundry', 'Lucknow', 'Raipur', 'Visakhapatnam', 'Vijayawada'];

function Weather() {
const [city, setCity] = useState("Hyderabad")
const [data, setData] = useState("Hyderabad")

    useEffect(() => {
        
        fetchWeatherData(city, setData)

    },[city])

    console.log(city);
    console.log(data);
  return (
    <div>
    <select onChange={(e) => setCity(e.target.value)}>
     { cities.map((city) => {
      return <option>{city}</option>
      })}
    </select>
    <br />
    {/* {data['main'] && (<p>{data.name} {data['weather'][0]['description']} {data['main']['temp']} {data['main']['temp_max']} {data['main']['temp_min']}</p>)} */}
    {city} {data[0]} {data[1]} {data[2]} {data[3]}
  </div>
  )
}

export default Weather