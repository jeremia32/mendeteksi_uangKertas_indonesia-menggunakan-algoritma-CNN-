import React from "react";
import { useParams } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import developers from "../data/datadeveloper";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import "../styles/DetailDeveloper.css";
import "bootstrap/dist/css/bootstrap.min.css";

function DetailDeveloper() {
  const { id } = useParams();
  const developer = developers.find((dev) => dev.id === parseInt(id));

  if (!developer) {
    return <h2>Developer not found!</h2>;
  }

  return (
    <div className="detail-developer-container">
      <h2 className="developer-title">{developer.name}</h2>
      <h4 className="developer-role">{developer.role}</h4>

      {/* Carousel */}
      <div className="carousel-container">
        <Carousel>
          {developer.images.map((image, index) => (
            <Carousel.Item key={index}>
              <img className="d-block w-100" src={image} alt={`Slide ${index + 1}`} />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      {/* Bio Section */}
      <div className="developer-bio">
        <p>{developer.bio}</p>
      </div>

      {/* Developer Info */}
      <ul>
        <li>
          <strong>NIM:</strong> {developer.Nim}
        </li>
        <li>
          <strong>Fakultas:</strong> {developer.Fakultas}
        </li>
        <li>
          <strong>Prodi:</strong> {developer.Prodi}
        </li>
        <li>
          <strong>Hobi:</strong> {developer.Hobi}
        </li>
        <li>
          <strong>Email:</strong> <a href={`mailto:${developer.email}`}>{developer.email}</a>
        </li>
        <li>
          <strong>Pacar:</strong> {developer.pacar}
        </li>
      </ul>

      {/* Social Links */}
      <div className="social-links">
        <a href={developer.github} target="_blank" rel="noopener noreferrer">
          <FaGithub className="social-icon" />
        </a>
        <a href={developer.linkedin} target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="social-icon" />
        </a>
        <a href={developer.twitter} target="_blank" rel="noopener noreferrer">
          <FaTwitter className="social-icon" />
        </a>
      </div>
    </div>
  );
}

export default DetailDeveloper;
