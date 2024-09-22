import React, { useEffect, useRef } from "react";
import "../../assets/scss/swiper.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

// Import the required modules from Swiper
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";
import Card from "../Card/Card";

interface Product {
  image: string;
  title: string;
  description: string;
  category: string;
}

interface CardListProps {
  cards: Product[];
}

const MySwiper = ({ cards }: CardListProps) => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      // swiperRef.current.style.width = "1600px";
      // swiperRef.current.style.backgroundColor = "lightblue";
    }
  }, []);

  return (
    <div ref={swiperRef}>
      <Swiper
        slidesPerView={3}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          468: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          769: {
            slidesPerView: 3,
            slidesPerGroup: 1,
          },
        }}
        scrollbar={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className="mySwiper"
      >
        {cards.map((card, idx) => {
          return (
            <SwiperSlide key={idx} className="swiper-card">
              <Card key={idx} product={card} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default MySwiper;
