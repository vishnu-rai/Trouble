import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

import images from "../../constants/images";

import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app__navbar">
      <div
        className="app__navbar-logo"
        style={{ display: "flex", alignItems: "center" }}
      >
        <p
          style={{
            fontSize: "35px",
            color: "#4a7f9c",
            fontWeight: "bold",
            fontFamily: "revert-layer",
            margin: "0",
          }}
        >
          troubles
        </p>
        <img
          src={images.gericht}
          alt="app logo"
          style={{ marginLeft: "-35px" }}
        />
      </div>

      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a
            href="#home"
            style={{ color: "#4a7f9c", fontSize: "25px", fontWeight: "bold" }}
          >
            Home
          </a>{" "}
        </li>
        <li className="p__opensans">
          <a
            href="#about"
            style={{ color: "#4a7f9c", fontSize: "25px", fontWeight: "bold" }}
          >
            Who we are
          </a>{" "}
        </li>
        <li className="p__opensans">
          <a
            href="#menu"
            style={{ color: "#4a7f9c", fontSize: "25px", fontWeight: "bold" }}
          >
            Our Speciality
          </a>{" "}
        </li>
        <li className="p__opensans">
          <a
            href="#award"
            style={{ color: "#4a7f9c", fontSize: "25px", fontWeight: "bold" }}
          >
            Be a Careless{" "}
          </a>{" "}
        </li>
        <li className="p__opensans">
          <a
            href="#contact"
            style={{ color: "#4a7f9c", fontSize: "25px", fontWeight: "bold" }}
          >
            Find Us
          </a>{" "}
        </li>
      </ul>
      <div className="app__navbar-login">
        <a
          href="#login"
          className="p__opensans"
          style={{ color: "#4a7f9c", fontSize: "25px", fontWeight: "bold" }}
        >
          Contact Us{" "}
        </a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />

        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay_close"
              onClick={() => setToggleMenu(false)}
            />

            <ul className="app__navbar-smallscreen_links">
              <li>
                <a href="#home" onClick={() => setToggleMenu(false)}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={() => setToggleMenu(false)}>
                  Who we are
                </a>
              </li>
              <li>
                <a href="#menu" onClick={() => setToggleMenu(false)}>
                  Our Speciality
                </a>
              </li>
              <li>
                <a href="#about" onClick={() => setToggleMenu(false)}>
                  Be a Careless
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => setToggleMenu(false)}>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
