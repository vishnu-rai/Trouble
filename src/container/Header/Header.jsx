import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Header.css";

const Header = () => (
  <div
    id="home"
    style={{
      backgroundImage: `url(${images.tempheader})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "100vh",
      width: "99vw",
    }}
  >
  </div>
);


export default Header;
