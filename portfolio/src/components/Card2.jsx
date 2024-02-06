// CardWithFlip.js

import { useState } from "react";
import "../styling/card.css";

// eslint-disable-next-line react/prop-types
const MyCard = ({ frontImage, backDescription }) => {
  const [isFlipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!isFlipped);
  };

  return (
    <div className={`card ${isFlipped ? "flipped" : ""}`} onClick={handleClick}>
      <div className="card-inner">
        <div className="card-front">
          <img src={frontImage} alt="Card Front" />
        </div>
        <div className="card-back">
          <p>{backDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default MyCard;
