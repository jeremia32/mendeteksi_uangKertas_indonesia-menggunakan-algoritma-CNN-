import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../styles/Perjalanan.css"

import koin01 from "../assets/koin01.png";
import uang01 from "../assets/uang01.png";
import uang02 from "../assets/uang02.jpg";
import uang03 from "../assets/uang03.jpg";
import uang04 from "../assets/uang04.jpg";
import uang05 from "../assets/uang05.jpg";
import uang06 from "../assets/uang06.jpeg";
import uang07 from "../assets/uang07.png";
import uang08 from "../assets/uang08.jpg";
import uang09 from "../assets/uang09.png";

function Perjalanan() {
  return (
    <>
      <div className="wrapper">
        <h1>Perubahan uang Indonesia</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Era Kerajaan - abad ke-17"
            iconStyle={{ background: "black", color: "orange" }}
            icon={<img src={koin01} alt="Koin" style={{ width: "100%", height: "100%", borderRadius: "50%" }} />}
          >
            <h3 className="vertical-timeline-element-title">Masa Sebelum Kemerdekaan</h3>
            <h4 className="vertical-timeline-element-subtitle">Majapahit dan Sriwijaya</h4>
            <p>Sebelum uang kertas atau logam, masyarakat Nusantara menggunakan sistem barter. Uang logam mulai digunakan di kerajaan-kerajaan seperti Majapahit dan Sriwijaya, misalnya Koin Ma atau Koin Gobog dari perunggu dan emas..</p>
          </VerticalTimelineElement>
          {/* uang voc  */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="abad ke-17 - 1942"
            iconStyle={{ background: "black", color: "orange" }}
            icon={<img src={uang01} alt="Koin" style={{ width: "100%", height: "100%", borderRadius: "50%" }} />}
          >
            <h3 className="vertical-timeline-element-title">Era Kolonial Belanda</h3>
            <h4 className="vertical-timeline-element-subtitle">VOC dan Hindia Belanda</h4>
            <p>VOC memperkenalkan koin VOC pada abad ke-17. Pemerintah kolonial Hindia Belanda menerbitkan uang kertas Gulden.</p>
          </VerticalTimelineElement>
          {/* 1942-1945 */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="1942 - 1945"
            iconStyle={{ background: "black", color: "orange" }}
            icon={<img src={uang02} alt="Koin" style={{ width: "100%", height: "100%", borderRadius: "50%" }} />}
          >
            <h3 className="vertical-timeline-element-title">Era Pendudukan Jepang </h3>
            <h4 className="vertical-timeline-element-subtitle">Jepang</h4>
            <p>Jepang mencetak uang sendiri yang dikenal sebagai uang Jepang, namun inflasi tinggi membuat nilainya merosot</p>
          </VerticalTimelineElement>
          {/* Uang NICA */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2 Oktober 1945 - 27 Desember 1949 "
            iconStyle={{ background: "black", color: "orange" }}
            icon={<img src={uang04} alt="Koin" style={{ width: "100%", height: "100%", borderRadius: "50%" }} />}
          >
            <h3 className="vertical-timeline-element-title">Periode Awal Kemerdekaan 1945-1946 </h3>
            <h4 className="vertical-timeline-element-subtitle">Uang NICA</h4>
            <p>Belanda, melalui pemerintahan NICA, juga mencetak uang untuk bersaing dengan ORI selama masa revolusi kemerdekaan..</p>
          </VerticalTimelineElement>
          {/* Periode Awal Kemerdekaan (1945-1949) */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="7 November 1945 - 30 Oktober 1946 "
            iconStyle={{ background: "black", color: "orange" }}
            icon={<img src={uang03} alt="Koin" style={{ width: "100%", height: "100%", borderRadius: "50%" }} />}
          >
            <h3 className="vertical-timeline-element-title">Periode Awal Kemerdekaan (1945-1949) </h3>
            <h4 className="vertical-timeline-element-subtitle">Oeang Republik Indonesia (ORI)</h4>
            <p>ORI diterbitkan pada 17 Oktober 1946 sebagai uang resmi pertama Republik Indonesia. Penggunaan ORI sangat simbolis karena menunjukkan kedaulatan negara baru.</p>
          </VerticalTimelineElement>
          {/* Masa 1950-1965: */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="7 Desember 1950 - 30 September 1965 "
            iconStyle={{ background: "black", color: "orange" }}
            icon={<img src={uang06} alt="Koin" style={{ width: "100%", height: "100%", borderRadius: "50%" }} />}
          >
            <h3 className="vertical-timeline-element-title">Periode Masa 1950-1965 </h3>
            <h4 className="vertical-timeline-element-subtitle"> Stabilitas dan Inflasi</h4>
            <p>
              Setelah pengakuan kedaulatan, Indonesia mulai mencetak uang Rupiah sebagai mata uang resmi. Desain uang sering bergambar pahlawan nasional, budaya Indonesia, dan flora/fauna. Inflasi menjadi masalah besar karena
              ketidakstabilan politik dan ekonomi.
            </p>
          </VerticalTimelineElement>
          {/* Masa 1965 */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date=" 30 Desember 1965 "
            iconStyle={{ background: "black", color: "orange" }}
            icon={<img src={uang05} alt="Koin" style={{ width: "100%", height: "100%", borderRadius: "50%" }} />}
          >
            <h3 className="vertical-timeline-element-title">Redenominasi Rupiah 1965 </h3>
            <h4 className="vertical-timeline-element-subtitle"> dari Rp 1.000 Menjadi Rp 1</h4>
            <p>Pada 13 Desember 1965, pemerintah melakukan sanering (pemotongan nilai uang): 1.000 Rupiah lama menjadi 1 Rupiah baru. Hal ini dilakukan untuk mengatasi inflasi, tetapi banyak menimbulkan kerugian bagi masyarakat.</p>
          </VerticalTimelineElement>

          {/* Perkembangan Orde Baru  */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="1966-1998 "
            iconStyle={{ background: "black", color: "orange" }}
            icon={<img src={uang07} alt="Koin" style={{ width: "100%", height: "100%", borderRadius: "50%" }} />}
          >
            <h3 className="vertical-timeline-element-title">Perkembangan Orde Baru </h3>
            <h4 className="vertical-timeline-element-subtitle">stabilitas moneter</h4>
            <p>
              Bank Indonesia menerbitkan uang Rupiah dengan desain lebih modern. Perubahan pada uang kertas seringkali mengikuti perkembangan teknologi cetak dan pengamanan: Gambar pahlawan nasional tetap menjadi tema utama. Koin mulai
              diproduksi dalam jumlah besar untuk transaksi kecil.
            </p>
          </VerticalTimelineElement>

          {/* Masa Reformasi dan Krisis Moneter */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Juli 1997-1998 "
            iconStyle={{ background: "black", color: "orange" }}
            icon={<img src={uang08} alt="Koin" style={{ width: "100%", height: "100%", borderRadius: "50%" }} />}
          >
            <h3 className="vertical-timeline-element-title">Masa Reformasi dan Krisis Moneter </h3>
            <h4 className="vertical-timeline-element-subtitle"> Rp 2.000/USD menjadi Rp 16.000/USD.</h4>
            <p>
              Krisis ekonomi Asia tahun 1997-1998 membuat nilai Rupiah terpuruk, dari sekitar Rp 2.000/USD menjadi Rp 16.000/USD. Bank Indonesia mulai mencetak uang dengan pecahan lebih besar, seperti Rp 100.000 (dengan gambar Presiden
              Soekarno dan Mohammad Hatta).
            </p>
          </VerticalTimelineElement>
          {/* sekarang   */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2000 - 2024"
            iconStyle={{ background: "black", color: "orange" }}
            icon={<img src={uang09} alt="Koin" style={{ width: "100%", height: "100%", borderRadius: "50%" }} />}
          >
            <h3 className="vertical-timeline-element-title">Era Modern: 2000-an Hingga Sekarang </h3>
            <h4 className="vertical-timeline-element-subtitle">Rupiah Emas Nusantara</h4>
            <p>
              2004: Bank Indonesia memperkenalkan uang dengan fitur pengamanan lebih canggih (benang pengaman, watermark, tinta berubah warna). 2016: Peluncuran uang Rupiah Desain Baru Tahun Emisi 2016 (T.E 2016), dengan tema: Depan:
              Pahlawan Nasional. Belakang: Tari tradisional, pemandangan alam, dan flora khas Indonesia. Pecahan yang diperkenalkan: Rp 1.000 hingga Rp 100.000. 2022: Bank Indonesia meluncurkan uang Rupiah Tahun Emisi 2022: Desain lebih
              dinamis, warna cerah, serta tahan lama dengan bahan polimer untuk beberapa pecahan. dan 2024 Indonesia akan di perkenalkan uang digital
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
}

export default Perjalanan;
