import React from "react";
import animation from "../images/animation.jpg";
import baby from "../images/baby.jpg";
import documentery from "../images/documentery.jpg";
import fashion from "../images/fashion.jpg";
import hotel from "../images/hotel.jpg";
import prewedding from "../images/pre-wedding.jpg";
import wedding from "../images/wedding.jpg";
import "./Gallery.css";

function Gallery() {
  return (
    <div className="image-container">
      <div className="row">
        <div className="column">
          <div className="container">
            <img src={animation} alt="Animation" className="image"></img>
            <div className="overlay">
              <div className="text">
                <p>Editing</p>
                <p>and</p>
                <p>Animation</p>
              </div>
            </div>
          </div>
          <div className="container">
            <img src={baby} alt="Baby"></img>
            <div className="overlay">
              <div className="text">
                {" "}
                <p>Baby Shoot</p>
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="container">
            <img src={wedding} alt="Wedding" className="image"></img>
            <div className="overlay">
              <div className="text">
                <p>Wedding</p>
              </div>
            </div>
          </div>
          <div className="container">
            <img src={fashion} alt="Fashion"></img>
            <div className="overlay">
              <div className="text">
                {" "}
                <p>Fashion</p>
              </div>
            </div>
          </div>
          <div className="container">
            <img src={documentery} alt="Documentery"></img>
            <div className="overlay">
              <div className="text">
                {" "}
                <p>Documentery</p>
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="container">
            <img src={prewedding} alt="PreWedding" className="image"></img>
            <div className="overlay">
              <div className="text">
                <p>PreWedding</p>
              </div>
            </div>
          </div>
          <div className="container">
            <img src={hotel} alt="HotelBooking"></img>
            <div className="overlay">
              <div className="text">
                {" "}
                <p>Hotel Booking</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
