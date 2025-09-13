import React, { useState } from "react";

export default function AnswerQuestion() {
  const [answer, setAnswer] = useState(null);
  const [noPos, setNoPos] = useState({ top: 0, left: 0 });

  const moveNo = () => {
    setNoPos({
      top: Math.random() * 140 - 60 + "px",
      left: Math.random() * 220 - 110 + "px",
    });
  };

  return (
    <section className="page">
      <h2>Will you stay forever with me? 💍</h2>

      <div className="question-area" style={{ position: "relative" }}>
        <div style={{ zIndex: 2 }}>
          <button className="action" onClick={() => setAnswer("yes")}>Yes</button>
        </div>

        <div className="btn-row" aria-hidden="false">
          <button
            className="no-btn"
            style={{ top: noPos.top, left: noPos.left }}
            onMouseEnter={moveNo}
            onClick={() => setAnswer("no")}
            aria-label="No button"
          >
            No
          </button>
        </div>

        {answer === "yes" && (
          <div className="popup" role="status" aria-live="polite">
            I love you baby ❤️
            <div style={{ marginTop: 10 }}>
              <img src="https://i.ibb.co/5FSp4Jb/dudu-happy.png" alt="Dudu happy" width="120"/>
            </div>
          </div>
        )}

        {answer === "no" && (
          <div style={{ marginTop: 12 }}>
            <img src="https://i.ibb.co/ZGrzV7p/dudu-cry.png" alt="Dudu crying" width="140"/>
            <div style={{ color: "#fff", marginTop: 8, fontWeight:700 }}>Dudu is sad 😢</div>
          </div>
        )}
      </div>
    </section>
  );
    }
