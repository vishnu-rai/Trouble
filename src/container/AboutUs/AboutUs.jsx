import React from "react";

import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div className="about-page" id="about">
    <div className="about-box">
      <div>
        <div className="about-heading">
          <p>ABOUT US</p>
        </div>
        <div className="about-content">
          <p>
            Welcome to Careless Foods, where cloud kitchen magic meets flavor 
            mayhem! We're the troublemakers of taste, concocting a whirlwind of
            Asian cuisines that'll ignite your cravings. Brace yourself for a
            culinary adventure that's bold, badass, and totally
            taste-tempting. Join us and unleash your inner food maverick!
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default AboutUs;

// <div
//     className="app__aboutus app__bg flex__center section__padding"
//     id="about"
//   >
//     <div className="app__aboutus-content ">
//       <div className="app__aboutus-content_about">
//         <h1 className="headtext__cormorant" style={{ color: "#f4e64c" }}>
//           About Us
//         </h1>
//         <p
//           className="p__opensans_1"
//           style={{
//             color: "#ffffff",
//             fontSize: "30px",
//             fontFamily: "revert",
//             padding: "10px 350px",
//             textAlign: "center",
//           }}
//         >
//           Welcome to Careless Foods, where cloud kitchen magic meets flavor
//           mayhem! We're the troublemakers of taste, concocting a whirlwind of
//           Asian cuisines that'll ignite your cravings. Brace yourself for a
//           culinary adventure that's bold, badass, and totally taste-tempting.
//           Join us and unleash your inner food maverick!{" "}
//         </p>
//       </div>

//       <div style={{ display: "flex", marginTop: "100px" }}>
//         <div style={{ flex: 1 }}>
//           <h4 style={{ color: "#f4e64c", fontSize: "50px" }}>troubles</h4>
//           <p
//             className="p__opensans_1"
//             style={{
//               color: "#ffffff",
//               fontSize: "30px",
//               fontFamily: "revert",
//               marginTop: "25px",
//             }}
//           >
//             We kicked off our wild ride with "Careless Foods," diving headfirst
//             into the cloud kitchen world. Our debut prototype, "Troubles,"
//             emerged as the rebellious pioneer, dishing out tantalizing
//             continental cuisines. Picture this: Thin crust pizzas that redefine
//             perfection and Asian curry bowls packed with flavors that'll blow
//             your mind. But here's the twist, our special sauce lies in Butter
//             Chicken and Chicken Tikka bowls that'll make you weak at the knees.
//             Brace yourself for a flavor frenzy like no other, brought to you by
//             "Troubles" from Careless Foods!
//           </p>
//         </div>
//         <div style={{ flex: 1, maxHeight: "500px", marginLeft: "15px  " }}>
//           <img
//             src={images.img2}
//             alt="header_img"
//             style={{
//               width: "100%",
//               height: "100%",
//               objectFit: "cover",
//               marginLeft: "55px",
//             }}
//           />
//         </div>
//       </div>
//     </div>
//   </div>
