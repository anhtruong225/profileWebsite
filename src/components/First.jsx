import React from "react";
import "../components/First.css";
import MouseIcon from "../assets/images/mouse-icon.png";
import AboutMe from "./AboutMe";
import Project from "./Project";
import { Link } from "react-router-dom";

const First = () => {
  return (
    <div>
      <div id="first-container">
        <nav>
          <ul>
            <Link to="https://anh-truong-portfolio.netlify.app/">Home</Link>
            <Link to="/aboutMe">About me</Link>
            <Link to="/works">Works</Link>
            <Link to="https://www.linkedin.com/in/anhtruong225/">
              Contact me
            </Link>
          </ul>
        </nav>
        <div id="first-leftside">
          <div>
            <p>
              👋 Hi there, here is <b>Anh Truong</b>
            </p>
            <h1>I'm a full stack developer</h1>
          </div>
          <h5>
            My mission is making your website beautiful, fully functional and
            responsive. <br /> It is not only my work, it is my passion!
          </h5>
          <div id="download-CV">
            <a href="/Anh Truong_Fullstack Entwicklerin.pdf" download>
              Download My CV{" "}
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          </div>
        </div>
      </div>
      <AboutMe />
      <Project />
    </div>
  );
};

export default First;
