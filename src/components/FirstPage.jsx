import React from "react";
import CVImage from "../assets/images/CVImage_round.png";

function FirstPage() {
  return (
    <div className="row" id="first-page">
      <div className="col-md-4" id="firstpage-left">
        <img src={CVImage} alt="CVImage Anh Truong"></img>
        <a href="">Download CV</a>
      </div>
      <div className="col-md-8" id="firstpage-right">
        <div id="first-icon">
          <h4>👋 Hi there, I'm Anh</h4>
        </div>
        <h1>A Fullstack Web-Developer</h1>
        <p>
          While possessing hands-on experience in performance marketing, I find
          myself passionate about coding challenges and all intricate aspects of
          webdesign. In this continuously evolving industry, I am confident in
          my ability to thrive by staying abreast of emerging technologies and
          thus, bring your team more values.
        </p>
      </div>
    </div>
  );
}

export default FirstPage;
