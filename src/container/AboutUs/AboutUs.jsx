import React from "react";

import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div className="about-page" id="about">
    <div className="about-box">
      <div className="text-container">
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
      <div className="image-container">
        <img className="about-image" src={images.img4} />
      </div>
    </div>
    <div className="stat-contaiiner">
      <div className="stat-count">
        <img className="stat-icon" src={images.mealIcon} />
        <p className="stat-text">
          500+
          <br /> Order Placed
        </p>
      </div>
      <div className="stat-count">
        <img className="stat-icon" src={images.customerIcon} />
        <p className="stat-text">
          100+
          <br /> Customer joined
        </p>
      </div>
      <div className="stat-count">
        <img className="stat-icon" src={images.starIcon} />
        <p className="stat-text">
          50+
          <br /> Five Star reviews
        </p>
      </div>
    </div>
  </div>
);

export default AboutUs;
