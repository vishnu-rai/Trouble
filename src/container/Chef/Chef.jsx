import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    {/* <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div> */}
    <div className="app__wrapper_info">
      <SubHeading title="Franchise" />
      {/* <h1 className="headtext__cormorant" style={{ color: "#f4e64c" }}>
        What we believe in
      </h1> */}

      <div className="Content">
        <div className="app__chef-content_quote">
          {/* <img src={images.quote} alt="quote_image" /> */}
          <p className="p__opensans">
          </p>
        </div>
        {/* <p className="p__opensans">
          {" "}
          We're all about that loving, family vibe! Our hearts overflow with joy
          as we do what we do best. If you've got dreams of starting a food
          franchise that's all about building strong relationships, Careless
          Foods is the ultimate match for you. We're all about expanding our fam
          and spreading the love, which is why we're stoked to offer you a
          franchise opportunity. If you're ready to jump on board and become
          part of our tight-knit crew, reach out to us today! Let's create a
          family united by passion and mouthwatering eats!{" "}
        </p> */}
      </div>
    </div>
  </div>
);

export default Chef;
