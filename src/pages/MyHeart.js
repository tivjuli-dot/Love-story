import React, { useEffect, useRef } from "react";

export default function MyHeart() {
  const wrapRef = useRef();

  useEffect(() => {
    const container = wrapRef.current;
    // create many floating words
    const total = 50;
    for (let i = 0; i < total; i++) {
      const s = document.createElement("span");
      s.className = "shiropa-word";
      s.textContent = "Shiropa";
      const left = Math.random() * 90;
      const top = 60 + Math.random() * 200; // start lower
      const size = 12 + Math.random() * 20;
      s.style.left = left + "%";
      s.style.top = top + "px";
      s.style.fontSize = size + "px";
      s.style.animationDuration = (6 + Math.random() * 6) + "s";
      s.style.opacity = 0.85 - Math.random() * 0.3;
      container.appendChild(s);
      setTimeout(() => s.remove(), 14000); // cleanup after some time
    }
    // create continuous small waves
    const interval = setInterval(() => {
      const s = document.createElement("span");
      s.className = "shiropa-word";
      s.textContent = "Shiropa";
      const left = Math.random() * 90;
      const top = 320;
      const size = 12 + Math.random() * 18;
      s.style.left = left + "%";
      s.style.top = top + "px";
      s.style.fontSize = size + "px";
      s.style.animationDuration = (6 + Math.random() * 6) + "s";
      s.style.opacity = 0.9;
      container.appendChild(s);
      setTimeout(() => s.remove(), 12000);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="page" style={{ position: "relative", height: "520px", overflow: "hidden" }}>
      <h2>My Heart</h2>
      <div ref={wrapRef} style={{ position: "absolute", inset: 0 }} aria-hidden="true"></div>
      <p style={{ position: "relative", zIndex: 2, marginTop: 260 }}>
        My heart only says one name — Shiropa.
      </p>
    </section>
  );
    }
