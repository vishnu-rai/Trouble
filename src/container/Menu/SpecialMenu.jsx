import React, { Component, useState } from "react";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import { v4 as uuidv4 } from "uuid";
import specials from "../../constants/data";
import "./SpecialMenu.css";

const SpecialMenu = () => {
  const [goToSlide, setGoToSlide] = useState(0);
  const [offsetRadius, setOffsetRadius] = useState(1);

  const handleLeftArrowClick = () => {
    setGoToSlide(goToSlide - 1);
  };
  const handleRightArrowClick = () => {
    setGoToSlide(goToSlide + 1);
  };

  return (
    <div className="menus-page" id="menu">
      <h2 className="specials-heading">Our Specials</h2>
      <div className="corousel-container">
        <div className="carousel-wrapper">
          <Carousel
            slides={specials.map((item) => ({
              key: uuidv4(),
              content: (
                <div style={{ textAlign: "center" }}>
                  <img
                    src={item.photo}
                    alt={item.name}
                    style={{ width: "100%", maxHeight: "400px" }}
                  />
                  <h3 style={{ marginTop: "1rem", fontSize: "3rem" }}>
                    {item.name}
                  </h3>
                  <p style={{ fontSize: "2rem" }}>{item.description}</p>
                </div>
              ),
            }))}
            goToSlide={goToSlide}
            offsetRadius={offsetRadius}
            animationConfig={config}
          />
          <div className="carousel-buttons">
            <button className="left" onClick={handleLeftArrowClick}></button>
            <button className="right" onClick={handleRightArrowClick}></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialMenu;
