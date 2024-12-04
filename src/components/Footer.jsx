import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Footer.css";
import emailjs from "@emailjs/browser";

function Footer() {
  return (
    <footer className="footer bg-dark text-white py-4">
      <Container>
        <Row className="mb-4">
          <Col md={6} className="footer-section">
            <h5 className="text-uppercase">Tentang Kami</h5>
            <p className="small">Kami adalah tim pengembang yang berkomitmen untuk memberikan solusi teknologi terbaik. Hubungi kami untuk informasi lebih lanjut!</p>
          </Col>

          <Col md={6} className="footer-section">
            <h5 className="text-uppercase">Ikuti Kami</h5>
            <div className="d-flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white">
                <FaFacebookF size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white">
                <FaTwitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white">
                <FaInstagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white">
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <ContactForm />
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md={12} className="text-center">
            <p className="small">&copy; 2024 Deteksi Uang Indonesia. Semua Hak Dilindungi.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Konfigurasi EmailJS
    const serviceID = "service_hopidqm";
    const templateID = "template_bat77qz";
    const publicKey = "RADdtPpiychQJM1eB";

    emailjs
      .send(
        serviceID,
        templateID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: "Pengaduan Deteksi Masalah Uang Deteksi",
        },
        publicKey
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setIsSent(true);
          // Tampilkan alert berhasil dan arahkan ke homepage
          window.alert("Pesan berhasil dikirim! Anda akan diarahkan ke halaman utama.");
          window.location.href = "/";
        },
        (err) => {
          console.error("FAILED...", err);
          alert("Pengiriman pesan gagal, silakan coba lagi.");
        }
      );
  };

  return (
    <div className="contact-form bg-light p-4 round">
      <h5 className="text-uppercase mb-3">Hubungi Kami</h5>
      {isSent ? (
        <div className="alert alert-success">Pesan berhasil dikirim! Kami akan menghubungi Anda segera.</div>
      ) : (
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Nama</Form.Label>
            <Form.Control type="text" placeholder="Masukkan nama Anda" name="name" value={formData.name} onChange={handleChange} required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Masukkan email Anda" name="email" value={formData.email} onChange={handleChange} required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formMessage">
            <Form.Label>Pesan</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Tulis pesan Anda di sini..." name="message" value={formData.message} onChange={handleChange} required />
          </Form.Group>
          <Button variant="dark" type="submit">
            Kirim Pesan
          </Button>
        </Form>
      )}
    </div>
  );
}

export default Footer;
