import React, { useState, useRef } from "react";
import "../styles/Deteksi.css";

function Deteksi() {
  const [isScanning, setIsScanning] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [predictionResult, setPredictionResult] = useState(null);
  const [isFrontCamera, setIsFrontCamera] = useState(true);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const startScan = () => {
    setIsScanning(true);
    openCamera();
  };

  const stopScan = () => {
    setIsScanning(false);
    const stream = videoRef.current.srcObject;
    if (stream) {
      const tracks = stream.getTracks();
      tracks.forEach((track) => track.stop());
    }
  };

  const openCamera = async () => {
    try {
      const constraints = {
        video: {
          facingMode: isFrontCamera ? "user" : "environment",
        },
      };
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      videoRef.current.srcObject = stream;
      videoRef.current.play();
    } catch (error) {
      console.error("Error accessing camera:", error);
      alert("Tidak dapat mengakses kamera.");
    }
  };

  const toggleCamera = () => {
    setIsFrontCamera((prevMode) => !prevMode);
    stopScan();
    setTimeout(startScan, 500);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setUploadedImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const sendImageToBackend = async (imageBlob) => {
    const formData = new FormData();
    formData.append("file", imageBlob, "image.jpg");

    try {
      const response = await fetch("http://localhost:5000/predict", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      setPredictionResult(`Prediksi: ${result.prediction}`);
    } catch (error) {
      console.error("Error predicting image:", error);
      alert("Gagal melakukan prediksi. Pastikan backend Flask berjalan.");
    }
  };

  const handleWebcamPrediction = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
    canvas.toBlob((blob) => {
      if (blob) sendImageToBackend(blob);
    }, "image/jpeg");
  };

  const handleImagePrediction = () => {
    fetch(uploadedImage)
      .then((res) => res.blob())
      .then((blob) => sendImageToBackend(blob))
      .catch((error) => console.error("Error converting image:", error));
  };

  return (
    <div className="deteksi-container">
      <h2 className="title">Deteksi Uang Indonesia</h2>
      <div className="webcam-section">
        <div className="webcam-container">
          <video ref={videoRef} autoPlay playsInline className="video-stream"></video>
          <canvas ref={canvasRef} style={{ display: "none" }} width={224} height={224}></canvas>
        </div>
        <div className="scan-buttons">
          {isScanning ? (
            <button className="action-btn stop-btn" onClick={stopScan}>
              Stop Scan
            </button>
          ) : (
            <button className="action-btn start-btn" onClick={startScan}>
              Mulai Scan
            </button>
          )}
          <button className="action-btn toggle-btn" onClick={toggleCamera}>
            Balik Kamera
          </button>
          <button
            className="action-btn predict-btn"
            onClick={handleWebcamPrediction}
            disabled={!isScanning}
          >
            Prediksi dari Webcam
          </button>
        </div>
      </div>

      <div className="upload-section">
        <h3>Atau Upload Gambar</h3>
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        {uploadedImage && (
          <div className="uploaded-image-container">
            <img src={uploadedImage} alt="Uploaded" className="uploaded-image" />
            <button onClick={handleImagePrediction} className="action-btn predict-btn">
              Prediksi dari Gambar
            </button>
          </div>
        )}
        {predictionResult && <p className="result-text">{predictionResult}</p>}
      </div>
    </div>
  );
}

export default Deteksi;
