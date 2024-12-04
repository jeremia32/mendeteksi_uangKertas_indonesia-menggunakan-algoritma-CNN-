// Navbarhome.jsx
import { useState } from "react";
import "../styles/Navbar.css";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

function Navbarhome() {
  const [statusTampil, setStatusTampil] = useState(false);

  const toggleMenu = () => {
    setStatusTampil(!statusTampil);
  };

  return (
    <nav>
      <div className="wrapper">
        <div className="logo">
          <Link to="/">Indonesian Money</Link>
        </div>
        <button onClick={toggleMenu}>{statusTampil ? <IoMdClose /> : <FaBarsStaggered />}</button>
        <div className={`menu ${statusTampil ? "tampil" : ""}`} onClick={toggleMenu}>
          <ul>
            <li>
              <HashLink to="/Tentangpage">Tentang</HashLink>
            </li>
            <li>
              <HashLink to="/Sejarah">Sejarah</HashLink>
            </li>
            <li>
              <HashLink to="/Beritapage">Berita</HashLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbarhome;
