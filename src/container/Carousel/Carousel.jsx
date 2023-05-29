import "./Carousel.css";
import React, { Component, useState } from "react";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import { v4 as uuidv4 } from "uuid";

const CarouselCom = ({ items }) => {
  const [goToSlide, setGoToSlide] = useState(0);
  const [offsetRadius, setOffsetRadius] = useState(2);
  const [showNavigation, setShowNavigation] = useState(true);
  const [animationConfig, setAnimationConfig] = useState(config.gentle);

  const handleLeftArrowClick = () => {
    setGoToSlide(goToSlide - 1);
  };
  const handleRightArrowClick = () => {
    setGoToSlide(goToSlide + 1);
  };
  return (
    <div>
      <Carousel
        slides={items.map((item) => ({
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
      <div
        style={{
          width: "50%",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <button onClick={handleLeftArrowClick}>Left Arrow</button>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <button onClick={handleRightArrowClick}>Right Arrow</button>
      </div>
    </div>
  );
};

export default CarouselCom;
