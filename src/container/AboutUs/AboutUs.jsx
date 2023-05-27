import React from "react";

import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div className="about-page" id="about">
    <div className="about-box">
      <div className="xyz">
        <div className="about-heading">
          <p>ABOUT US</p>
        </div>
        <div className="about-content">
          <p>
            Welcome to Careless Foods, where cloud kitchen magic meets flavor
            mayhem! We're the troublemakers of taste, concocting a whirlwind of
            Asian cuisines that'll ignite your cravings. Brace yourself for a
            culinary adventure that's bold, badass, and totally taste-tempting.
            Join us and unleash your inner food maverick!
          </p>
        </div>
      </div>
      <div className="imgcon">
        <img className="about-image"
          src={images.gallery02}
        />
      </div>
    </div>
  </div>
);

export default AboutUs;