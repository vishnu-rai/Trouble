import React from "react";

import { SubHeading } from "../../components";
import { images, data } from "../../constants";
import "../AboutUs/AboutUs.css";

const Laurels = () => (
  <div
    className="app__aboutus app__bg section__padding"
    id="award"
  >
    <div>
      <div style={{ width: "900px" }}>
        <h1 className="headtext__cormorant" style={{ color: "#f4e64c" }}>
          Franchise with Careless foods
        </h1>
        <p
          style={{
            color: "#ffffff",
            fontSize: "30px",
            fontFamily: "revert",
            padding: "10px 0",
            textAlign: "left",
          }}
        >
          We're all about that loving, family vibe! Our hearts overflow with joy
          as we do what we do best. If you've got dreams of starting a food
          franchise that's all about building strong relationships, Careless
          Foods is the ultimate match for you. We're all about expanding our fam
          and spreading the love, which is why we're stoked to offer you a
          franchise opportunity. If you're ready to jump on board and become
          part of our tight-knit crew, reach out to us today! Let's create a
          family united by passion and mouthwatering eats!{" "}
        </p>
      </div>
    </div>
  </div>
);

export default Laurels;
