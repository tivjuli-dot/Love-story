import React, { useState, useEffect } from "react";
import "./AnswerQuestion.css";

function AnswerQuestion() {
  const [bgColor, setBgColor] = useState("#ffcccc");

  useEffect(() => {
    const colors = ["#ffcccc", "#ffe6cc", "#ccffcc", "#ccffff", "#ccccff", "#ffccff"];
    let i = 0;
    const interval = setInterval(() => {
      setBgColor(colors[i]);
      i = (i + 1) % colors.length;
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleNoClick = (e) => {
    const button = e.target;
    const x = Math.random() * (window.innerWidth - button.offsetWidth);
    const y = Math.random() * (window.innerHeight - button.offsetHeight);
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
    button.classList.add("shake");
    setTimeout(() => button.classList.remove("shake"), 500);

    const noPopup = document.createElement("img");
    noPopup.src = "https://i.imgur.com/tpIx24B.png";
    noPopup.style.position = "absolute";
    noPopup.style.width = "150px";
    noPopup.style.left = `${x}px`;
    noPopup.style.top = `${y - 150}px`;
    noPopup.style.zIndex = "999";
    document.body.appendChild(noPopup);
    setTimeout(() => noPopup.remove(), 1000);
  };

  const handleYesClick = () => {
    alert("I love you baby ❤️");

    const yesPopup = document.createElement("img");
    yesPopup.src = "https://i.imgur.com/nXvrTyh.jpeg";
    yesPopup.style.position = "absolute";
    yesPopup.style.width = "200px";
    yesPopup.style.left = "50%";
    yesPopup.style.top = "50%";
    yesPopup.style.transform = "translate(-50%, -50%)";
    yesPopup.style.zIndex = "999";
    document.body.appendChild(yesPopup);
    setTimeout(() => yesPopup.remove(), 2000);
  };

  return (
    <div
      className="answer-container"
      style={{
        backgroundColor: bgColor,
        backgroundImage:
          "url('https://i.imgur.com/8sdznQ1.jpeg'), url('https://i.imgur.com/OGgciNc.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <h2>Will you stay forever with me?</h2>
      <button id="yesBtn" onClick={handleYesClick}>
        Yes
      </button>
      <button id="noBtn" onClick={handleNoClick}>
        No
      </button>
    </div>
  );
}

export default AnswerQuestion;
