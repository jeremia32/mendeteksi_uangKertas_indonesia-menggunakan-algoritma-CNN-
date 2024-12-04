import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import "../styles/berita.css"; // Pastikan gaya CSS untuk komponen ini sudah benar
import data_berita from "../data/data_berita"; // Mengimpor data berita

const Berita = () => {
  return (
    <div className="berita-list">
      {/* Tambahkan Judul di atas */}
      <h2 className="text-center mb-4" style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#333" }}>
        Berita Terbaru
      </h2>
      <Row>
        {data_berita.map((berita) => (
          <Col key={berita.id} md={3} className="mb-4">
            <Card className="news-card shadow-lg rounded-3 h-100">
              {/* Gambar */}
              <Card.Img variant="top" src={berita.image} alt={berita.title} className="news-image" />

              {/* Konten Berita */}
              <Card.Body className="d-flex flex-column">
                <Card.Title className="news-title mb-3">{berita.title}</Card.Title>
                <Card.Text className="news-caption text-muted">{berita.caption}</Card.Text>
                <div className="d-flex justify-content-between align-items-center mt-auto">
                  <span className="news-date text-muted">{berita.date}</span>
                  <Button href={berita.link} target="_blank" rel="noopener noreferrer" variant="outline-primary" className="read-more-button rounded-pill px-4">
                    Selengkapnya
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Berita;
