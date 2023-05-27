import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

import images from "../../constants/images";

import "./Navbar.css";

const Navbar = () => {
  window.addEventListener("scroll", function () {
    var navbar = document.querySelector(".navbar");
    var navbarItems = document.querySelectorAll(".navbar-link");
    var brandName = document.querySelector(".brand-name");
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;

    if (scrolled > 0) {
      navbar.classList.add("navbar-scrolled");
      brandName.classList.add("brand-name-scrolled");
      navbarItems.forEach(function (item) {
        item.classList.add("navbar-item-scrolled");
      });
    } else {
      navbar.classList.remove("navbar-scrolled");
      brandName.classList.remove("brand-name-scrolled");
      navbarItems.forEach(function (item) {
        item.classList.remove("navbar-item-scrolled");
      });
    }
  });

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
          <li>
            <a class="navbar-link" href="#home">
              Home
            </a>
          </li>
          <li>
            <a class="navbar-link" href="#about">
              Who Are We
            </a>
          </li>
          <li>
            <a class="navbar-link" href="#menu">
              Our Speciality
            </a>
          </li>
          <li>
            <a class="navbar-link" href="#award">
              Be a Careless
            </a>
          </li>
          <li>
            <a class="navbar-link" href="#findUs">
              Find Us
            </a>
          </li>
        </ul>
        <div>
          <a class="navbar-link" href="#contact">
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
