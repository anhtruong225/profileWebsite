import React from "react";
import "./Footer2.css";
import { Link } from "react-router-dom";

const Footer2 = () => {
  return (
    <footer>
      <div id="footer-container">
        <div id="footer-menu">
          <ul>
            <Link to="https://anh-truong-portfolio.netlify.app/">Home</Link>
            <Link to="/aboutMe">About me</Link>
            <Link to="/works">Works</Link>
          </ul>
        </div>
        <div id="footer-body">
          <h1>Get in touch with me</h1>
          <div id="footer-first">
            <div id="icon-text">
              <div id="only-icon">
                <a
                  href="#"
                  className="fa fa-envelope fa-2xl"
                  style={{ color: "black" }}
                />
                <a
                  href="#"
                  className="fa fa-phone fa-2xl"
                  style={{ color: "black" }}
                />
              </div>
              <div id="only-text">
                <ul>
                  <li>phuonganhtruong22593@gmail.com</li>
                  <li>(+49) 15258445740</li>
                </ul>
              </div>
            </div>
            <div id="social">
              <ul>
                <li>
                  <a
                    href="https://github.com/anhtruong225"
                    className="fa fa-github fa-xl "
                  />
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/anhtruong225/"
                    className="fa fa-linkedin fa-xl"
                  />
                </li>
                <li>
                  <a
                    href="https://www.anh-truong-portfolio.netlify.app"
                    className="fa fa-earth-americas fa-xl"
                  />
                </li>
              </ul>
            </div>
          </div>
          <div id="copywright">
            <p>© 2023 Anh Truong</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
