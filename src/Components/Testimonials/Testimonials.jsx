"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa6";
import beds from "../../../public/Images/rentalProducts/beds.png";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Testimonials = () => {


  
  return (
    <div className="p-6 lg:p-10  overflow-clip">
      <h1 className="montserrat text-[6vw] md:text-[5vw] lg:text-[3.5vw] Sans text-black font-bold">
        A Service You Can Trust
      </h1>

      <p className="text-black roboto text-[2.9vw] md:text-[1.9vw] lg:text-[.9vw] mt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>

      <div className="mt-12 mb-10   items-center">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={200}
          slidesPerView={2.6}
          loop="true"
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          autoplay
          className="flex justify-between gap-8"
          

        >
          <SwiperSlide>
            {" "}
            <div className="testionial w-[80vw] md:w-[40vw] bg-[#F4EBFF] border border-[#781393] p-4 ">
              <div className="flex items-center gap-1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p className="text-[.9vw] mt-6 roboto">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
                rerum assumenda voluptatem blanditiis, deserunt quibusdam maxime
                vero illum aliquid veniam.
              </p>
              <div className="flex gap-4 mt-6">
                <div className="img w-[3vw]">
                  <Image
                    src={beds}
                    alt="dummy"
                    className="object-cover h-full w-ful"
                  />
                </div>
                <div className="montserrat capitalize black">
                  <p className="text-black text-[.8vw] font-semibold">
                    name surname
                  </p>
                  <span className="text-black text-[.8vw] font-normal">
                    position, company name
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="testionial w-[80vw] md:w-[40vw] bg-[#F4EBFF] border border-[#781393] p-4 ">
              <div className="flex items-center gap-1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p className="text-[.9vw] mt-6 roboto">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
                rerum assumenda voluptatem blanditiis, deserunt quibusdam maxime
                vero illum aliquid veniam.
              </p>
              <div className="flex gap-4 mt-6">
                <div className="img w-[3vw]">
                  <Image
                    src={beds}
                    alt="dummy"
                    className="object-cover h-full w-ful"
                  />
                </div>
                <div className="montserrat capitalize black">
                  <p className="text-black text-[.8vw] font-semibold">
                    name surname
                  </p>
                  <span className="text-black text-[.8vw] font-normal">
                    position, company name
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="testionial w-[80vw] md:w-[40vw] bg-[#F4EBFF] border border-[#781393] p-4 ">
              <div className="flex items-center gap-1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p className="text-[.9vw] mt-6 roboto">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
                rerum assumenda voluptatem blanditiis, deserunt quibusdam maxime
                vero illum aliquid veniam.
              </p>
              <div className="flex gap-4 mt-6">
                <div className="img w-[3vw]">
                  <Image
                    src={beds}
                    alt="dummy"
                    className="object-cover h-full w-ful"
                  />
                </div>
                <div className="montserrat capitalize black">
                  <p className="text-black text-[.8vw] font-semibold">
                    name surname
                  </p>
                  <span className="text-black text-[.8vw] font-normal">
                    position, company name
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="testionial w-[80vw] md:w-[40vw] bg-[#F4EBFF] border border-[#781393] p-4 ">
              <div className="flex items-center gap-1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p className="text-[.9vw] mt-6 roboto">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
                rerum assumenda voluptatem blanditiis, deserunt quibusdam maxime
                vero illum aliquid veniam.
              </p>
              <div className="flex gap-4 mt-6">
                <div className="img w-[3vw]">
                  <Image
                    src={beds}
                    alt="dummy"
                    className="object-cover h-full w-ful"
                  />
                </div>
                <div className="montserrat capitalize black">
                  <p className="text-black text-[.8vw] font-semibold">
                    name surname
                  </p>
                  <span className="text-black text-[.8vw] font-normal">
                    position, company name
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="testionial w-[80vw] md:w-[40vw] bg-[#F4EBFF] border border-[#781393] p-4 ">
              <div className="flex items-center gap-1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p className="text-[.9vw] mt-6 roboto">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
                rerum assumenda voluptatem blanditiis, deserunt quibusdam maxime
                vero illum aliquid veniam.
              </p>
              <div className="flex gap-4 mt-6">
                <div className="img w-[3vw]">
                  <Image
                    src={beds}
                    alt="dummy"
                    className="object-cover h-full w-ful"
                  />
                </div>
                <div className="montserrat capitalize black">
                  <p className="text-black text-[.8vw] font-semibold">
                    name surname
                  </p>
                  <span className="text-black text-[.8vw] font-normal">
                    position, company name
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="testionial w-[80vw] md:w-[40vw] bg-[#F4EBFF] border border-[#781393] p-4 ">
              <div className="flex items-center gap-1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p className="text-[.9vw] mt-6 roboto">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
                rerum assumenda voluptatem blanditiis, deserunt quibusdam maxime
                vero illum aliquid veniam.
              </p>
              <div className="flex gap-4 mt-6">
                <div className="img w-[3vw]">
                  <Image
                    src={beds}
                    alt="dummy"
                    className="object-cover h-full w-ful"
                  />
                </div>
                <div className="montserrat capitalize black">
                  <p className="text-black text-[.8vw] font-semibold">
                    name surname
                  </p>
                  <span className="text-black text-[.8vw] font-normal">
                    position, company name
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          
        </Swiper>

        {/* <div className="testionial w-[80vw] md:w-[40vw] bg-[#F4EBFF] border border-[#781393] p-4 ">
          <div className="flex items-center gap-1">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <p className="text-[.9vw] mt-6 roboto">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
            rerum assumenda voluptatem blanditiis, deserunt quibusdam maxime
            vero illum aliquid veniam.
          </p>
          <div className="flex gap-4 mt-6">
            <div className="img w-[3vw]">
              <Image
                src={beds}
                alt="dummy"
                className="object-cover h-full w-ful"
              />
            </div>
            <div className="montserrat capitalize black">
              <p className="text-black text-[.8vw] font-semibold">
                name surname
              </p>
              <span className="text-black text-[.8vw] font-normal">
                position, company name
              </span>
            </div>
          </div>
        </div>
        <div className="testionial w-[80vw] md:w-[40vw] bg-[#F4EBFF] border border-[#781393] p-4 ">
          <div className="flex items-center gap-1">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <p className="text-[.9vw] mt-6 roboto">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
            rerum assumenda voluptatem blanditiis, deserunt quibusdam maxime
            vero illum aliquid veniam.
          </p>
          <div className="flex gap-4 mt-6">
            <div className="img w-[3vw]">
              <Image
                src={beds}
                alt="dummy"
                className="object-cover h-full w-ful"
              />
            </div>
            <div className="montserrat capitalize black">
              <p className="text-black text-[.8vw] font-semibold">
                name surname
              </p>
              <span className="text-black text-[.8vw] font-normal">
                position, company name
              </span>
            </div>
          </div>
        </div>
        <div className="testionial w-[80vw] md:w-[40vw] bg-[#F4EBFF] border border-[#781393] p-4 ">
          <div className="flex items-center gap-1">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <p className="text-[.9vw] mt-6 roboto">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
            rerum assumenda voluptatem blanditiis, deserunt quibusdam maxime
            vero illum aliquid veniam.
          </p>
          <div className="flex gap-4 mt-6">
            <div className="img w-[3vw]">
              <Image
                src={beds}
                alt="dummy"
                className="object-cover h-full w-ful"
              />
            </div>
            <div className="montserrat capitalize black">
              <p className="text-black text-[.8vw] font-semibold">
                name surname
              </p>
              <span className="text-black text-[.8vw] font-normal">
                position, company name
              </span>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Testimonials;
