import React from "react";
import "./Footer.css";
import footerLogo from "../../../Machine Test/footer.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footerLogo} alt="footerLogo"></img>
      </div>
      <div className="footer-social-media-links">
        <a href='/'>FB</a>
        <div className="rectangle-footer"></div>
        <a href='/'>TT</a>
        <div className="rectangle-footer"></div>
        <a href='/'>YT</a>
        <div className="rectangle-footer"></div>
        <a href='/'>IG</a>
        <div className="rectangle-footer"></div>
      </div>
      <ul className="footer-links">
          <li>Investors</li>
          <li>Support</li>
          <li>News</li>
      </ul>
    </div>
  );
};

export default Footer;
