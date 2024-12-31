import React from "react";
import "./footer.css";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>
          &copy; 2025 Your E-Learning Platform, KakshaDev. All rights reserved. <br /> Made
          by <a href="https://github.com/hsd1807/Kaksha-Dev">Harinder Singh Dhanoa</a>
        </p>
        <div className="social-links">
          <a href="https://kaksha-dev.github.io/">
            <AiFillFacebook />
          </a>
          <a href="https://kaksha-dev.github.io/">
            <AiFillTwitterSquare />
          </a>
          <a href="https://kaksha-dev.github.io/">
            <AiFillInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;