import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "../styles/Header2.css";
import background from "../assets/background.jpg";

const Header2 = () => {
  return (
    <header2 className="header2">
      <div className="jumbotron">
        <img src={background} alt="Jumbotron" className="jumbotron-image" />
        <div className="overlay">
          <h1 className="jumbotron-title">Uang indonesia</h1>
          <p className="jumbotron-subtitle">Cerdas Mengenali Rupiah, Akurat dan Cepat!</p>
          <button className="cta-button">jelajahi</button>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="icon" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="icon" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="icon" />
            </a>
          </div>
        </div>
      </div>
    </header2>
  );
};

export default Header2;
