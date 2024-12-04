from flask import Flask, request, jsonify  # type: ignore
from flask_cors import CORS  # type: ignore  # Untuk mengizinkan permintaan dari domain yang berbeda
from PIL import Image  # type: ignore
import numpy as np  # type: ignore
import tensorflow as tf  # type: ignore
import io

app = Flask(__name__)
CORS(app)  # Memungkinkan akses dari frontend React

# Inisialisasi model TensorFlow Lite
interpreter = tf.lite.Interpreter(model_path="D:/Semester 5/ALU/project/moneydetection/backend/model_uang.tflite")
interpreter.allocate_tensors()

# Mendapatkan input dan output details dari model
input_details = interpreter.get_input_details()
output_details = interpreter.get_output_details()

# Label kelas yang diprediksi oleh model
labels = ['100K', '10K', '1K', '20K', '2K', '50K', '5K']

# Fungsi untuk memproses gambar dan melakukan prediksi
def predict_image(image):
    image = image.resize((160, 160))  # Mengubah ukuran gambar sesuai dengan input model
    input_data = np.array(image).astype(np.float32) / 255.0  # Normalisasi gambar
    input_data = np.expand_dims(input_data, axis=0)  # Menambahkan dimensi untuk batch

    # Mengirimkan input ke model
    interpreter.set_tensor(input_details[0]['index'], input_data)
    interpreter.invoke()  # Menjalankan prediksi

    # Mengambil hasil prediksi dari output model
    output_data = interpreter.get_tensor(output_details[0]['index'])
    return output_data

# Endpoint untuk menerima gambar dan memberikan hasil prediksi
@app.route("/predict", methods=["POST"])
def predict():
    file = request.files['file']  # Mengambil file gambar dari permintaan
    image = Image.open(io.BytesIO(file.read()))  # Membaca file gambar
    prediction = predict_image(image)  # Melakukan prediksi dengan gambar
    predicted_label = labels[np.argmax(prediction)]  # Menentukan label dengan probabilitas tertinggi
    confidence = float(np.max(prediction))  # Mengambil confidence score dari prediksi
    
    # Mengembalikan hasil prediksi dalam format JSON
    return jsonify({"prediction": predicted_label, "confidence": confidence})

# Menjalankan aplikasi Flask
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)  # Menjalankan server di port 5000
