import React, { useState, useEffect } from "react";
import "../styles/Header.css";
import profile from "../assets/profile.png";
import bankindonesia from "../assets/bankindonesia.png";
import garuda from "../assets/garuda.png";
import kominfo from "../assets/kominfo.png";
import itdel from "../assets/ITDEL.png";

function Header() {
  const [typedText, setTypedText] = useState("");
  const fullText = "Kenali Uang Indonesia dengan Teknologi Terbaik";

  useEffect(() => {
    let index = 0;

    const typeText = () => {
      const typeInterval = setInterval(() => {
        setTypedText(fullText.slice(0, index));
        index++;
        if (index > fullText.length) {
          clearInterval(typeInterval);
          setTimeout(() => {
            index = 0;
            typeText();
          }, 10000); // Wait for 5 seconds before restarting the animation
        }
      }, 100); // Adjust the speed of typing here
    };

    typeText();

    return () => clearInterval(typeText);
  }, [fullText]);

  return (
    <header>
      <div className="header-jumbotron">
        <img src={profile} alt="logo" />
        <h3>Indonesia Money Detection</h3>
        <p className="typing-animation">{typedText}</p>
        <div className="socialMedia">
          <a href="https://www.bi.go.id/id/rupiah/gambar-uang/default.aspx" aria-label="Bank Indonesia">
            <img src={bankindonesia} alt="Bank Indonesia" style={{ width: "40px", height: "auto" }} />
          </a>
          <a href="https://indonesia.go.id/" aria-label="Garuda Indonesia">
            <img src={garuda} alt="Garuda Indonesia" style={{ width: "40px", height: "auto" }} />
          </a>
          <a href="https://layanan.kominfo.go.id/" aria-label="Kominfo">
            <img src={kominfo} alt="Kominfo" style={{ width: "40px", height: "auto" }} />
          </a>
          <a href="https://www.del.ac.id/" aria-label="Institut Teknologi Del">
            <img src={itdel} alt="Institut Teknologi Del" style={{ width: "40px", height: "auto" }} />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
