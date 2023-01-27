import React, { useEffect, useState } from "react";

function SpacePicture() {
  const apiKey = "8n75ETcRwS1mUgbtTF7tDwVvMWdO8wzYbVKZEupp";
  const [picture, setPicture] = useState(null);
  useEffect(() => {
    async function fetchPicture() {
      try {
        const picResonse = await fetch(
          `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
        );
        const pic = await picResonse.json();
        console.log(pic);
        setPicture(pic.hdurl);
      } catch {
        console.log("error");
      }
    }
    fetchPicture();
  }, []);
  return (
    <>
      <img src={picture} alt="daily picutre of space" className="img-fluid" />
    </>
  );
}

export default SpacePicture;
