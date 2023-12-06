import React from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer>
        <div id="footer-container">
          <div id="footer-upper" className="row">
            <div className="col-md-6"></div>
            <div className="col-md-5">
              <h2>Get in touch with me</h2>
            </div>
          </div>
          <div id="footer-up" className="row">
            <div className="col-md-4 text-center" id="footer-first">
              <ul>
                <li>
                  <Link to="https://anh-truong-portfolio.netlify.app/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/aboutMe">About me</Link>
                </li>
                <li>
                  <Link to="/works">Works</Link>
                </li>
              </ul>
            </div>
            <div id="footer-second" className="col-md-3">
              <h3>Email</h3>
              <div id="icon-text">
                <div id="only-icon">
                  <a
                    href="#"
                    className="fa fa-envelope"
                    style={{ color: "white" }}
                  />
                  <a
                    href="#"
                    className="fa fa-phone"
                    style={{ color: "white" }}
                  />
                </div>
                <div id="only-text">
                  <ul>
                    <li>phuonganhtruong22593@gmail.com</li>
                    <li>015258445740</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center" id="footer-third">
              <h3>Social Media</h3>
              <div id="social">
                <ul>
                  <li>
                    <a
                      href="https://github.com/anhtruong225"
                      className="fa fa-github"
                    />
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/anhtruong225/"
                      className="fa fa-linkedin"
                    />
                  </li>
                  <li>
                    <a
                      href="https://www.anh-truong-portfolio.netlify.app"
                      className="fa fa-earth-americas"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div id="footer-down" className="row">
            <p>© 2023 Anh Truong</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
