import React, { useState } from "react";
import Screenshot1 from "../assets/images/Screenshot1.1.png";
import Screenshot2 from "../assets/images/Screenshot1.2.png";
import Screenshot3 from "../assets/images/Screenshot1.3.png";
import Screenshot4 from "../assets/images/Screenshot2.1.png";
import Screenshot5 from "../assets/images/Screenshot2.2.png";
import Screenshot6 from "../assets/images/Screenshot2.3.png";

function Project() {
  const [hiddenImage, setHiddenImage] = useState(null);
  const [visibleBlock, setVisibleBlock] = useState("ImageDetails");

  const handleImageClick = (image) => {
    setHiddenImage(image);
  };

  const handleTextClick = () => {
    setHiddenImage(null);
  };

  const ImageDetails = () => (
    <div id="project-images">
      {hiddenImage === Screenshot1 ? (
        <>
          <div onClick={handleTextClick} id="upper-image">
            <div id="upper-text">
              <h4>Final Project - MERN Stack Project</h4>
              <br />
              <div className="upper-text-p">
                <p>
                  A final project of web development course offers the users an
                  exceptional tool to take care of their lovely indoor-plants
                  (AI Image Identifier, plantcare details).
                </p>
              </div>
              <div className="project-description">
                <div className="project-technical">
                  <p>
                    <i
                      className="fa-solid fa-desktop"
                      style={{ marginRight: "10px" }}
                    ></i>{" "}
                    React, CSS, Bootstrap
                  </p>
                  <p>
                    <i
                      className="fa-solid fa-database"
                      style={{ marginRight: "10px" }}
                    ></i>{" "}
                    Node.js, MongoDB, NoSQL
                  </p>
                </div>
                <div className="project-button">
                  <a href="https://greendiary.netlify.app">Visit Website</a>
                  <a href="https://github.com/anhtruong225/Green_Diary_final">
                    Visit Github
                  </a>
                </div>
              </div>
              <div id="note">
                (* Due to the limitation of the free account,{" "}
                <a href="https://greendiary-server.onrender.com/">
                  backend loading
                </a>{" "}
                must take a while. I am sorry for this inconvenience)
              </div>
            </div>
          </div>
          <div id="lower-image">
            <div id="first-lower-image">
              <img
                src={Screenshot2}
                alt="Website2"
                onClick={() => handleImageClick(Screenshot2)}
              ></img>
            </div>
            <div id="second-lower-image">
              <img
                src={Screenshot3}
                alt="Website3"
                onClick={() => handleImageClick(Screenshot3)}
              ></img>
            </div>
          </div>
        </>
      ) : hiddenImage === Screenshot2 ? (
        <>
          <div id="upper-image">
            <img
              src={Screenshot1}
              alt="Website1"
              onClick={() => handleImageClick(Screenshot1)}
            ></img>
          </div>
          <div id="lower-image">
            <div id="first-lower-text" onClick={handleTextClick}>
              <h5>Weekly Group Project</h5>
              <br />
              <div className="lower-text-p">
                <p>
                  A website introduces the best travelling destinations around
                  the world
                </p>
              </div>
              <div className="project-description-lower">
                <div className="project-technical-lower">
                  <p>
                    <i
                      className="fa-solid fa-desktop"
                      style={{ marginRight: "10px" }}
                    ></i>{" "}
                    React, CSS, Bootstrap
                  </p>
                  <p>
                    <i
                      className="fa-solid fa-database"
                      style={{ marginRight: "10px" }}
                    ></i>{" "}
                    Contentful
                  </p>
                </div>
                <div className="project-button-lower">
                  <a href="https://contentful-magical-places.netlify.app">
                    Visit Website
                  </a>
                  <a href="https://github.com/anhtruong225/contentful_magicalPlaces">
                    Visit Website
                  </a>
                </div>
              </div>
            </div>
            <div id="second-lower-image">
              <img
                src={Screenshot3}
                alt="Website3"
                onClick={() => handleImageClick(Screenshot3)}
              ></img>
            </div>
          </div>
        </>
      ) : hiddenImage === Screenshot3 ? (
        <>
          <div id="upper-image">
            <img
              src={Screenshot1}
              alt="Website1"
              onClick={() => handleImageClick(Screenshot1)}
            ></img>
          </div>
          <div id="lower-image">
            <div id="first-lower-image">
              <img
                src={Screenshot2}
                alt="Website2"
                onClick={() => handleImageClick(Screenshot2)}
              ></img>
            </div>
            <div onClick={handleTextClick} id="second-lower-text">
              <h5>Solo Project - API</h5>
              <br />
              <div className="lower-text-p">
                <p>
                  This website is a clone version of legend HackerNews, helping
                  people to update all latest news
                </p>
              </div>
              <div className="project-description-lower">
                <div className="project-technical-lower">
                  <p>
                    <i
                      className="fa-solid fa-desktop"
                      style={{ marginRight: "10px" }}
                    ></i>{" "}
                    React, CSS, Bootstrap
                  </p>
                  <p>
                    <i
                      className="fa-solid fa-database"
                      style={{ marginRight: "10px" }}
                    ></i>{" "}
                    REST API
                  </p>
                </div>
                <div className="project-button-lower">
                  <a href="https://hackernews-api-fetch.netlify.app">
                    Visit Website
                  </a>
                  <a href="https://github.com/anhtruong225/hackernews-fetch-api">
                    Visit Website
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div id="upper-image">
            <img
              src={Screenshot1}
              alt="Website1"
              onClick={() => handleImageClick(Screenshot1)}
            ></img>
          </div>
          <div id="lower-image">
            <div id="first-lower-image">
              <img
                src={Screenshot2}
                alt="Website2"
                onClick={() => handleImageClick(Screenshot2)}
              ></img>
            </div>
            <div id="second-lower-image">
              <img
                src={Screenshot3}
                alt="Website3"
                onClick={() => handleImageClick(Screenshot3)}
              ></img>
            </div>
          </div>
        </>
      )}
    </div>
  );

  const ImageDetailsMore = () => (
    <div id="project-images2">
      {hiddenImage === Screenshot4 ? (
        <>
          <div onClick={handleTextClick} id="upper-image2">
            <div id="upper-text2">
              <h5>Weekly Group Project - Webdesign</h5>
              <br />
              <div className="upper-text-p">
                <p>
                  A cookbook suggests the best recipes for the busy young people
                </p>
              </div>
              <div className="project-description">
                <div className="project-technical">
                  <p>
                    <i
                      className="fa-solid fa-desktop"
                      style={{ marginRight: "10px" }}
                    ></i>{" "}
                    HTML, CSS, Bootstrap
                  </p>
                </div>
                <div className="project-button">
                  <a href="https://freudinsky.github.io/cookbook/index.html">
                    Visit Website
                  </a>
                  <a href="https://github.com/anhtruong225/cookbook">
                    Visit Website
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div id="lower-image2">
            <div id="first-lower-image2">
              <img
                src={Screenshot5}
                alt="Website5"
                onClick={() => handleImageClick(Screenshot5)}
              ></img>
            </div>
            <div id="second-lower-image2">
              <img
                src={Screenshot6}
                alt="Website6"
                onClick={() => handleImageClick(Screenshot6)}
              ></img>
            </div>
          </div>
        </>
      ) : hiddenImage === Screenshot5 ? (
        <>
          <div id="upper-image2">
            <img
              src={Screenshot4}
              alt="Website4"
              onClick={() => handleImageClick(Screenshot4)}
            ></img>
          </div>
          <div id="lower-image2">
            <div id="first-lower-text2" onClick={handleTextClick}>
              <h5>Solo Project</h5>
              <br />
              <div className="lower-text-p">
                <p>
                  A Webdesign project about meditation, yoga, and mental health
                </p>
              </div>
              <div className="project-description-lower">
                <div className="project-technical-lower">
                  <p>
                    {" "}
                    <i
                      className="fa-solid fa-desktop"
                      style={{ marginRight: "10px" }}
                    ></i>{" "}
                    React, CSS, Bootstrap
                  </p>
                </div>
                <div className="project-button-lower">
                  <a href="https://balance-mind.netlify.app">Visit Website</a>
                  <a href="https://github.com/anhtruong225/balanceMindProject">
                    Visit Website
                  </a>
                </div>
              </div>
            </div>
            <div id="second-lower-image2">
              <img
                src={Screenshot6}
                alt="Website6"
                onClick={() => handleImageClick(Screenshot6)}
              ></img>
            </div>
          </div>
        </>
      ) : hiddenImage === Screenshot6 ? (
        <>
          <div id="upper-image2">
            <img
              src={Screenshot4}
              alt="Website4"
              onClick={() => handleImageClick(Screenshot4)}
            ></img>
          </div>
          <div id="lower-image2">
            <div id="first-lower-image2">
              <img
                src={Screenshot5}
                alt="Website5"
                onClick={() => handleImageClick(Screenshot5)}
              ></img>
            </div>
            <div onClick={handleTextClick} id="second-lower-text2">
              <h5>Solo Project - Javascript Basic</h5>
              <br />
              <div className="lower-text-p">
                <p>
                  A small solo project after 1 week learning Javascript, basic
                  but efficient
                </p>
              </div>
              <div className="project-description-lower">
                <div className="project-technical-lower">
                  <p>
                    {" "}
                    <i
                      className="fa-solid fa-desktop"
                      style={{ marginRight: "10px" }}
                    ></i>{" "}
                    Javascript, CSS, HTML
                  </p>
                </div>
                <div className="project-button-lower">
                  <a href="https://inpocket-todolist.netlify.app">
                    Visit Website
                  </a>
                  <a href="https://github.com/anhtruong225/todolist-Inpocket">
                    Visit Website
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div id="upper-image2">
            <img
              src={Screenshot4}
              alt="Website4"
              onClick={() => handleImageClick(Screenshot4)}
            ></img>
          </div>
          <div id="lower-image2">
            <div id="first-lower-image2">
              <img
                src={Screenshot5}
                alt="Website5"
                onClick={() => handleImageClick(Screenshot5)}
              ></img>
            </div>
            <div id="second-lower-image2">
              <img
                src={Screenshot6}
                alt="Website6"
                onClick={() => handleImageClick(Screenshot6)}
              ></img>
            </div>
          </div>
        </>
      )}
    </div>
  );

  const handleChevronClick = () => {
    setVisibleBlock((prevBlock) =>
      prevBlock === "ImageDetails" ? "ImageDetailsMore" : "ImageDetails"
    );
  };

  return (
    <div id="project-container">
      <div id="project-container-title">
        <h1>Projects</h1>
        <div id="linedeco"></div>
      </div>
      <div id="project-body">
        <i
          id="first-chevron"
          className="fa-solid fa-chevron-left fa-2xl"
          onClick={handleChevronClick}
        ></i>
        {visibleBlock === "ImageDetails" ? (
          <ImageDetails />
        ) : (
          <ImageDetailsMore />
        )}
        <i
          id="second-chevron"
          className="fa-solid fa-chevron-right fa-2xl"
          onClick={handleChevronClick}
        ></i>
      </div>
    </div>
  );
}

export default Project;
