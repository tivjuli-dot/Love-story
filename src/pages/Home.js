import React from "react";
import "./Home.css";

function Home() {
  return (
    <div
      className="home-container"
      style={{
        backgroundImage:
          "url('https://i.imgur.com/8sdznQ1.jpeg'), url('https://i.imgur.com/OGgciNc.png')",
        backgroundSize: "cover, cover",
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundPosition: "center, center",
      }}
    >
      <h1>Welcome to Our Love Story 💖</h1>
      <p>
        Supto & Shiropa 💑<br />
        Our journey began in 2023 and blossomed in 2024.
      </p>
    </div>
  );
}

export default Home;
