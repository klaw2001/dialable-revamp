"use client";
import React from "react";
import { Navigation, Scrollbar, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import { events } from "../evntInfo";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import EventCard from "../FeatureEvents/EventCard";
const PastEvents = () => {
  return (
    <div className="bg-[#F4EBFF] px-4 py-6 md:px-10 md:py-16 ">
      <h1 className="Sans  text-black text-[6vw] md:text-[4vw] lg:text-[3vw] leading-2 font-semibold text-center">
        Past Events
      </h1>
      <p className="montserrat  text-black text-[4vw] md:text-[2vw] lg:text-[1.2vw] font-medium text-center">
        Elevate your experience, Ignite your potential
      </p>
      <div className="past relative overflow-x-clip mt-12 mb-20 md:px-6">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Scrollbar, A11y, Autoplay]}
          loop="true"
          navigation
          scrollbar={{ draggable: true }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 150,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          autoplay
          className=""
        >
          {events?.map((elem, i) => (
            <SwiperSlide key={i}>
              <div>
                <EventCard
                  img={elem.img}
                  type={elem.type}
                  price={elem.price}
                  desc={elem.desc}
                  date={elem.date}
                  location={elem.location}
                  width={"w-full"}
                />
                
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PastEvents;
