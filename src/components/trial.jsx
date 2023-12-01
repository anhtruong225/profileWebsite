import React, { useState } from "react";
import Screenshot1 from "../assets/images/Screenshot1.1.png";
import Screenshot2 from "../assets/images/Screenshot1.2.png";
import Screenshot3 from "../assets/images/Screenshot1.3.png";

export const trial = () => {
  const [hiddenImage, setHiddenImage] = useState(null);
  const handleImageClick = (image) => {
    setHiddenImage(image);
  };

  const ImageDetails = () => (
    <div id="container">
      {hiddenImage === Screenshot1 ? (
        <>
          <div></div>
        </>
      ) : hiddenImage === Screenshot2 ? (
        <></>
      ) : hiddenImage === Screenshot3 ? (
        <></>
      ) : (
        <></>
      )}
    </div>
  );

  return <div></div>;
};
