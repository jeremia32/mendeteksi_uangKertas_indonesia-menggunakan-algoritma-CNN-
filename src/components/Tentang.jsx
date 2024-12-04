import React from "react";
import "../styles/tentang.css";
import profilePic from "../assets/profile.png"; // Ganti dengan path gambar Anda

const Tentang = () => {
  return (
    <div className="tentang-container">
      {/* Content Section */}
      <section className="tentang-content">
        {/* Profile Image */}
        <div className="tentang-image-wrapper">
          <img src={profilePic} alt="Profile" className="tentang-image" />
        </div>

        {/* Description */}
        <div className="tentang-description">
          <h2 className="tentang-section-title">Siapa Kami?</h2>
          <p className="tentang-text">
            Kami adalah pengembang yang bersemangat menciptakan pengalaman digital yang luar biasa. Dengan latar belakang di teknologi informasi dan desain kreatif, kami terus berinovasi untuk memberikan hasil terbaik bagi klien kami.
          </p>
          <ul className="tentang-list">
            <li>🌐 Pengembangan aplikasi web dan mobile.</li>
            <li>🎨 Desain UI/UX yang menarik dan responsif.</li>
            <li>📊 Solusi berbasis data dan analitik.</li>
          </ul>
        </div>
      </section>

      {/* New Section with Three Columns */}
      <section className="tentang-grid-section">
        <h2 className="tentang-grid-title">Kelebihan Kami</h2>
        <div className="tentang-grid">
          <div className="tentang-grid-item">
            <h3 className="tentang-grid-item-title">Inovasi</h3>
            <p className="tentang-grid-item-text">Kami selalu menggunakan teknologi terkini untuk memastikan solusi yang inovatif dan relevan dengan kebutuhan Anda.</p>
          </div>
          <div className="tentang-grid-item">
            <h3 className="tentang-grid-item-title">Kualitas</h3>
            <p className="tentang-grid-item-text">Kualitas adalah prioritas utama kami. Kami memastikan setiap produk yang kami hasilkan memenuhi standar tertinggi.</p>
          </div>
          <div className="tentang-grid-item">
            <h3 className="tentang-grid-item-title">Komitmen</h3>
            <p className="tentang-grid-item-text">Kami berdedikasi untuk memberikan layanan terbaik, menjalin hubungan jangka panjang, dan membantu Anda mencapai tujuan.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tentang;
