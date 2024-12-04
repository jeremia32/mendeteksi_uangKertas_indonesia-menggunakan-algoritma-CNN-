<<<<<<< HEAD
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage";
import Sejarah from "./pages/Sejarahpage";
import Sejarahpage from "./pages/Sejarahpage";
import Beritapage from "./pages/berita";
import DetailSejarah from "./pages/Detailsejarah";
import DetailDeveloper from "./pages/Detaildeveloper";

import Tentang from "./pages/Tentangpage";

function App() {
  return (
    <BrowserRouter future={{ v7_relativeSplatPath: true }}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Sejarah" element={<Sejarahpage />} />
        <Route path="/Tentangpage" element={<Tentang />} />
        <Route path="/Beritapage" element={<Beritapage />} />
        {/* Menambahkan rute baru untuk berita dengan ID */}
        <Route path="/berita/:id" element={<Beritapage />} />
        <Route path="/detail/:id" element={<DetailSejarah />} />
        <Route path="/developer/:id" element={<DetailDeveloper />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
=======
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
>>>>>>> 26d80ed39d52afadffaa585f9d0e7d235cf2a5ef
