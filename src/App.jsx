import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import First from "./components/First";
import AboutMe from "./components/AboutMe";
import Project from "./components/Project";
import Footer2 from "./components/Footer2";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<First />} />
          <Route path="/aboutMe" element={<AboutMe />} />
          <Route path="/works" element={<Project />} />
          <Route path="/contactMe" element={<Footer2 />} />
        </Routes>
        <Footer2 />
      </div>
    </Router>
  );
}

export default App;
