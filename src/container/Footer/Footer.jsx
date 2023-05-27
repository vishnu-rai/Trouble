import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="contact">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer_logo" />
        <p className="p__opensans">
          &quot;The best way to find yourself is to lose yourself in the service
          of others.&quot;
        </p>
        <div className="app__footer-links_icons">
          {/* <FiFacebook />
          <FiTwitter /> */}
          <a href="https://www.instagram.com/heymr.trouble/">
            <FiInstagram />
          </a>
        </div>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2023 troubles. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
