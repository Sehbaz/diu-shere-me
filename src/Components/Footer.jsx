import React from "react";
import "./Footer.css";
import "../App.css";
function Footer() {
  return (
    <div className="main-container">
      <div className="about">
        <h1 className="Footer-heading"> About Us</h1>
        <p>
          Diu town sits at the eastern end of the island. The northern side of
          the island, facing Gujarat, is tidal marsh and salt pans, while the
          southern coast alternates between limestone cliffs, rocky coves and
          sandy beaches, better for people-watching than sun worshipping.
        </p>
        <p>Wedding Photographer and Cinematographer in Diu.</p>
        <p>
          We specialised in Gujarati, Sikh, Hindu Panjabi, Islamic and English
          Wedding Photography and Cinematography.
        </p>
        <p>
          Also specialised in Commercial Photography and Video, Corporate
          Headshots, Business Advert Video.
        </p>
        <p>
          Contact us to discuss more about your photo & video requirements, We
          would love to hear from you. Give us a call.
        </p>
        <div className="social">
          {" "}
          <a href="https://www.instagram.com/diuseherme/">Instagram</a>
          <a href="https://www.facebook.com/diuseherme/">FaceBook</a>
        </div>
        <button class="button button1">0123456789</button>
      </div>
      <div className="copyright">
        <p>Copyright © 2020. All rights reserved.</p>
        <p className="social">
          Developed by{" "}
          <a href="https://www.sehbaz.com/" className="social">
            Sehbaz Rafik
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
