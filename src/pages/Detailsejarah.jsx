import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import cardData from "../data/datacard";
import "../styles/DetailSejarah.css";

const DetailSejarah = () => {
  const { id } = useParams();
  const selectedData = cardData.find((card) => card.id === parseInt(id));

  if (!selectedData) {
    return <h2>Data tidak ditemukan</h2>;
  }

  return (
    <motion.div className="detail-container" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
      <motion.h2 className="detail-title" initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
        {selectedData.caption}
      </motion.h2>
      <motion.img src={selectedData.image} alt={selectedData.caption} className="detail-image" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} />
      <motion.table className="detail-table" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.6 }}>
        <tbody>
          <tr>
            <th>Judul</th>
            <td>{selectedData.caption}</td>
          </tr>
          <tr>
            <th>Deskripsi</th>
            <td>{selectedData.description}</td>
          </tr>
          <tr>
            <th>Bagian Depan</th>
            <td>
              <strong>{selectedData.judula}</strong>: {selectedData.deskripsia}
            </td>
          </tr>
          <tr>
            <th>Bagian Belakang</th>
            <td>
              <strong>{selectedData.judulb}</strong>: {selectedData.deskripsib}
            </td>
          </tr>
          <tr>
            <th>Tanggal Penerbitan</th>
            <td>{selectedData.tanggalPenerbitan}</td>
          </tr>
          <tr>
            <th>Penanda Tangan</th>
            <td>{selectedData.penandaTangan}</td>
          </tr>
          <tr>
            <th>Tanda Air</th>
            <td>{selectedData.tandaAir}</td>
          </tr>
          <tr>
            <th>Bahan</th>
            <td>{selectedData.bahan}</td>
          </tr>
          <tr>
            <th>Ukuran</th>
            <td>{selectedData.ukuran}</td>
          </tr>
        </tbody>
      </motion.table>
    </motion.div>
  );
};

export default DetailSejarah;
