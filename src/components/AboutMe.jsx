import React from "react";

function AboutMe() {
  return (
    <div id="aboutme">
      <div id="aboutme-title">
        <h1>Skills</h1>
        {/* <div id="linebreak1"></div> */}
      </div>
      <div id="aboutme-body">
        <div id="aboutme-first">
          <div id="aboutme-text1">
            <h4>Frontend</h4>
            <i class="fa-solid fa-desktop"></i>
            <ul>
              <li>Javascript, React, Angular</li>
              <li>HTML, CSS</li>
              <li>Tools: Bootstrap, Tailwind CSS, Netlify</li>
            </ul>
          </div>
          <div id="aboutme-linebreak1"></div>
          <div id="aboutme-text1">
            <h4>Backend</h4>
            <i class="fa-solid fa-database"></i>
            <ul>
              <li>SQL: PostgreSQL, NoSQL: MongoDB</li>
              <li>Node.js: Express.js</li>
              <li>Tools: Render, Isomia, REST API, Docker</li>
            </ul>
          </div>
        </div>
        <div id="linebreak-central"></div>
        <div id="aboutme-second">
          <div id="aboutme-text3">
            <h4>Project Management</h4>
            <i class="fa-solid fa-list-check"></i>
            <ul>
              <li>Agile, SCRUM</li>
              <li>Tools: Contentful, Trello, Discord</li>
            </ul>
          </div>
          <div id="aboutme-linebreak2"></div>
          <div id="aboutme-text4">
            <h4>Performance Marketing & UX-UI</h4>
            <i class="fa-solid fa-bullhorn"></i>
            <ul>
              <li>SEO, Automation Marketing</li>
              <li>Tools: GG Tags Manager, GG Search Analytics</li>
              <li>Hubspot, Sprinkler, Figma, Excalidraw</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
