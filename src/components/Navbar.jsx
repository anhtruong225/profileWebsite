import React from "react";
import CVLogo from "../assets/images/AnhLogo.png";

function Navbar() {
  return (
    <div>
      <nav>
        <div className="row">
          <div className="col-md-2" id="name-logo">
            <img src={CVLogo} alt="CVLogo_AnhTruong"></img>
          </div>
          <div className="col-md-9" id="my-navi">
            <ul>
              <li>SKILLS</li>
              <li>PROJECTS</li>
              <li>CONTACT</li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
