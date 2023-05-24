import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      {/* <SubHeading title="Contact" /> */}
      <h1
        className="headtext__cormorant"
        style={{ marginBottom: "3rem", color: "#f4e64c" }}
      >
        Find Us
      </h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">
          <a
            href="https://tinyurl.com/ypfb8b2e"
            style={{ color: "#cb202d", fontSize: "30px", fontWeight: "bold" }}
          >
            Zomato
          </a>
          <span
            style={{
              borderLeft: "1px solid white",
              height: "35px",
              margin: "0 10px",
            }}
          ></span>
          <a
            href="https://tinyurl.com/mr2zdxbx"
            style={{ color: "#fc8019", fontSize: "30px", fontWeight: "bold" }}
          >
            Swiggy
          </a>
          <span
            style={{
              borderLeft: "1px solid white",
              height: "35px",
              margin: "0 10px",
            }}
          ></span>
          <a
            href="https://www.instagram.com/heymr.trouble/"
            style={{ color: "#feda75", fontSize: "30px", fontWeight: "bold" }}
          >
            Instagram
          </a>
        </p>
        <p
          className="p__cormorant"
          style={{ color: "#f4e64c", margin: "2rem 0", fontSize: "30px" }}
        >
          Opening Hours
        </p>
        <p className="p__opensans" style={{ fontSize: "20px" }}>
          Mon - Sun: 12:00 am - 11:00 pm
        </p>
        <p
          className="p__cormorant"
          style={{ color: "#f4e64c", margin: "2rem 0", fontSize: "30px" }}
        >
          Contact Us
        </p>
        <p className="p__opensans" style={{ fontSize: "20px" }}>
          Mohaddipur, Gorakhpur
        </p>
        <p className="p__opensans" style={{ fontSize: "20px" }}>
          +91 7272825616
        </p>
      </div>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="finus_img" />
    </div>
  </div>
);

export default FindUs;
