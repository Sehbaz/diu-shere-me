import React from "react";
import img1 from "../images/img-1.jpg";
import img2 from "../images/img-2.jpg";
import img3 from "../images/img-3.jpg";
import img4 from "../images/img-4.jpg";
import img5 from "../images/img-5.jpg";
import img6 from "../images/img-6.jpg";
import "./Gallery.css";
function Gallery() {
  return (
    <div>
      <div className="row">
        <div className="column">
          <div className="img-container">
            <img src={img1} style={{ width: "100%" }} className="image"></img>
            <div className="overlay">
              <div className="text">John Doe</div>
            </div>
          </div>

          <img src={img2} style={{ width: "100%" }}></img>
        </div>
        <div className="column">
          <img src={img3} style={{ width: "100%" }}></img>
          <img src={img4} style={{ width: "100%" }}></img>
        </div>
        <div className="column">
          <img src={img5} style={{ width: "100%" }}></img>
          <img src={img6} style={{ width: "100%" }}></img>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
