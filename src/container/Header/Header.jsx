import React from "react";
import { images } from "../../constants";
import "./Header.css";

const Header = () => (
  <div
    id="home"
    style={{
      backgroundImage: `url(${images.tempheader})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      width:"100%",
      height: "100vh",
    }}
  ></div>
);

export default Header;
