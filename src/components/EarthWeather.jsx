import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";

function EarthWeather() {
  const [city, setCity] = useState("New York");
  const [weather, setWeather] = useState(null);
  const apiKey = "27447ca21d92d7fec85b3deadb996969";
  useEffect(() => {
    async function fetchWeather(city) {
      try {
        const cityResponse = await fetch(
          `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`,
          { mode: "cors" }
        );
        const cords = await cityResponse.json();
        const lon = cords[0].lon;
        const lat = cords[0].lat;
        const weatherResponse = await fetch(
          `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=${apiKey}`,
          { mode: "cors" }
        );
        const weather = await weatherResponse.json();
        setCity(cords[0].name);
        setWeather(weather);
      } catch {
        console.log("error");
      }
    }
    fetchWeather(city);
  }, [city]);
  return (
    <>
      <SearchBar setCity={setCity} />
      <div>{city}</div>
      <pre>{JSON.stringify(weather, null, 2)}</pre>
    </>
  );
}

export default EarthWeather;
