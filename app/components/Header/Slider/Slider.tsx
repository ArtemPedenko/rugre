"use client";

import { FC, useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "./slider.css";
import { EffectFade, Pagination, Autoplay } from "swiper/modules";

const Slider = () => {
  let sliderRef = useRef(null);

  return (
    <Swiper
      effect={"fade"}
      speed={1000}
      direction={"vertical"}
      pagination={{
        clickable: true,
      }}
      modules={[EffectFade, Autoplay, Pagination]}
      ref={sliderRef}
      spaceBetween="30px"
      // loop={true}
      className="swiper-container-slider"
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      autoHeight={true}
    >
      <SwiperSlide className="swiper-slide-slider">
        <img className="img" alt="q" src="/images/1.png" />
      </SwiperSlide>
      <SwiperSlide className="swiper-slide-slider">
        <img className="img" alt="q" src="/images/2.png" />
      </SwiperSlide>
      <SwiperSlide className="swiper-slide-slider">
        <img className="img" alt="q" src="/images/3.png" />
      </SwiperSlide>
      <SwiperSlide className="swiper-slide-slider">
        <img className="img" alt="q" src="/images/4.png" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
