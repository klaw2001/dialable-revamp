"use client";

import React from "react";
import { Navigation, Scrollbar, A11y, Autoplay, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const CountryEvents = () => {
  return (
    <div className="py-6 px-4 md:px-10 md:py-16">
      <h1 className="Sans  text-black md:text-[4vw] lg:text-[3vw] leading-2 font-semibold text-left">
        Browse events by country
      </h1>
      <p className="montserrat  text-black md:text-[2vw] lg:text-[1.2vw] font-medium text-left">
        Embark on a worldwide event journey,effortlessly tailored to your country
        of choice{" "}
      </p>

      <div className="countries my-20 overflow-x-clip">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Scrollbar, Pagination, A11y, Autoplay]}
          loop="true"
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 150,
            },
          }}
          autoplay
          className="flex justify-between gap-8"
        >
          {["USA", "UK", "Germany", "France", "India"].map((elem, i) => (
            <SwiperSlide key={i}>
              <div className=" h-32 w-32 md:h-40 md:w-40 rounded-full flex items-center justify-center text-white text-[6vw] md:text-[2.5vw] lg:text-[1.5vw] montserrat font-semibold bg-[#FF600480]">
                <span>{elem}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CountryEvents;
