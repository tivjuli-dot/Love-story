import React from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import MyLoveEnglish from "./pages/MyLoveEnglish";
import MyLoveHindi from "./pages/MyLoveHindi";
import MyLoveBangla from "./pages/MyLoveBangla";
import MyHeart from "./pages/MyHeart";
import AnswerQuestion from "./pages/AnswerQuestion";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="nav-bar">
          <Link to="/">Home</Link>
          <Link to="/english">My Love (English)</Link>
          <Link to="/hindi">My Love (Hindi)</Link>
          <Link to="/bangla">My Love (Bangla)</Link>
          <Link to="/myheart">My Heart</Link>
          <Link to="/answer">Answer my Question</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/english" element={<MyLoveEnglish />} />
          <Route path="/hindi" element={<MyLoveHindi />} />
          <Route path="/bangla" element={<MyLoveBangla />} />
          <Route path="/myheart" element={<MyHeart />} />
          <Route path="/answer" element={<AnswerQuestion />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
