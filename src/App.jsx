import React from "react";
import Navbar from "./components/Navbar";
import FirstPage from "./components/FirstPage";
import AboutMe from "./components/AboutMe";
import Project from "./components/Project";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <div>
      <Navbar />
      <FirstPage />
      <AboutMe />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
