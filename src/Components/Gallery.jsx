import React from "react";
import animation from "../images/animation.jpg";
import baby from "../images/baby.jpg";
import documentery from "../images/documentery.jpg";
import fashion from "../images/fashion.jpg";
import hotel from "../images/hotel.jpg";
import prewedding from "../images/pre-wedding.jpg";
import ImageContentHover from "react-image-hover";
import wedding from "../images/wedding.jpg";
import "./Gallery.css";

function Gallery() {
  return (
    <div className="image-container">
      <div className="row">
        <div className="column">
          <img src={animation} style={{ width: "100%" }}></img>
          <img src={baby} style={{ width: "100%" }}></img>
        </div>
        <div className="column">
          <img src={hotel} style={{ width: "100%" }}></img>
          <img src={documentery} style={{ width: "100%" }}></img>
        </div>
        <div className="column">
          <img src={wedding} style={{ width: "100%" }}></img>
          <img src={fashion} style={{ width: "100%" }}></img>
          <img src={prewedding} style={{ width: "100%" }}></img>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
