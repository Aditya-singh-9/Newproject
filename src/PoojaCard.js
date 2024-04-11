import React from "react";
import './PoojaCard.css';

const PoojaCard = ({ poojaName, poojaDescription, imageUrl, onBookNow }) => {
  return (
    <div className="pooja-card">
      <h2>{poojaName}</h2>
      <p>{poojaDescription}</p>
      <div className="button-container">
        <img
          src={imageUrl}
          alt={`${poojaName} image`}
          className="pooja-image"
        />
        <button onClick={onBookNow} className="book-now-button">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default PoojaCard;
