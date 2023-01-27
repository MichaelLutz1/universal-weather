import React, { useEffect } from "react";

function MarsWeather() {
  const apiKey = "8n75ETcRwS1mUgbtTF7tDwVvMWdO8wzYbVKZEupp";
  useEffect(() => {
    async function fetchWeather() {
      try {
        const weatherResponse = await fetch(
          `https://api.nasa.gov/insight_weather/?api_key=${apiKey}&feedtype=json&ver=1.0`,
          { mode: "cors" }
        );
        const weather = await weatherResponse.json();
        console.log(weather);
      } catch {
        console.log("error");
      }
    }
    fetchWeather();
  }, []);

  return (
    <>
      <div>Mars Weather</div>
    </>
  );
}

export default MarsWeather;
