import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import AOS from "aos";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "aos/dist/aos.css";
import "../styles/Sejarah.css";
import cardData from "../data/datacard"; // Import data

const Sejarah = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="sejarah-container">
      <div className="wrapper">
        <h1>Sejarah Mata Uang Indonesia</h1>
      </div>
      <Swiper
        spaceBetween={30}
        slidesPerView={4} // Default slides per view
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          793: { slidesPerView: 3 }, // 3 cards for screens <= 793px
          500: { slidesPerView: 2 }, // 2 cards for screens <= 500px
          300: { slidesPerView: 1 }, // 2 cards for screens <= 500px
        }}
        className="swiper-container"
        modules={[Navigation, Pagination]}
      >
        {cardData.map((card) => (
          <SwiperSlide key={card.id}>
            <div className="card" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
              <img src={card.image} alt={card.caption} className="card-image" />
              <div className="card-content">
                <h4 className="card-caption">{card.caption}</h4>
                <Link to={`/detail/${card.id}`} className="card-link">
                  Selengkapnya
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Sejarah;
