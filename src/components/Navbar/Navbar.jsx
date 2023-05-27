import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

import images from "../../constants/images";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav class="navbar">
      <div class="navbar-container">
        <div class="navbar-brand">
          <a href="#" class="brand-name">
            troubles
          </a>
          <img src={images.gericht} alt="Logo" class="brand-logo" />
        </div>
        <ul class="navbar-items">
          <li class="navbar-item">
            <a class="navbar-link" href="#home">
              Home
            </a>
          </li>
          <li class="navbar-item">
            <a class="navbar-link" href="#about">
              Who Are We
            </a>
          </li>
          <li class="navbar-item">
            <a class="navbar-link" href="#menu">
              Our Speciality
            </a>
          </li>
          <li class="navbar-item">
            <a class="navbar-link" href="#award">
              Be a Careless
            </a>
          </li>
          <li class="navbar-item">
            <a class="navbar-link" href="#contact">
              Find Us
            </a>
          </li>
          <li class="navbar-item" style={{ marginLeft: "100px" }}>
            <a class="navbar-link" href="#login">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
