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
          <img src={animation} style={{ width: "100%" }} className="pic"></img>
          <h3>Animation and Editing</h3>

          <img src={baby} style={{ width: "100%" }}></img>
          <h3>Baby Shoot</h3>
        </div>
        <div className="column">
          <img src={hotel} style={{ width: "100%" }}></img>
          <h3>Hotel Booking</h3>
          <img src={documentery} style={{ width: "100%" }}></img>
          <h3>Shoot a Documentary</h3>
        </div>
        <div className="column">
          <img src={wedding} style={{ width: "100%" }}></img>
          <h3>Wedding</h3>
          <img src={fashion} style={{ width: "100%" }}></img>
          <h3>Fashion</h3>
          <img src={prewedding} style={{ width: "100%" }}></img>
          <h3>Pre-Wedding Shoot</h3>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
