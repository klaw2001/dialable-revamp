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
      <h1 className="montserrat text-[6vw] md:text-[5vw] lg:text-[1.5vw] Sans text-black font-bold">
        A Service You Can Trust
      </h1>

      <p className="text-black roboto text-[2.9vw] md:text-[1.2vw] lg:text-[.9vw] mt-4">
        Hear From Our Happy Customers
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
          breakpoints={{
            320: {
              slidesPerView: 1.5,
              spaceBetween: 150,
            },
            768: {
              slidesPerView: 2.3,
              spaceBetween: 50,
            },
            1024: {
              slidesPerView: 2.6,
              spaceBetween: 200,
            },
          }}
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
              <p className="text-[1.9vw] lg:text-[.9vw] mt-6 roboto">
                {` "Dialable's user-friendly interface makes finding accessible
                businesses a breeze, empowering people with disabilities like me
                to explore the world with confidence!"`}
              </p>
              <div className="flex gap-2 md:gap-4 mt-6">
                <div className="img w-[9vw] md:w-[3vw]">
                  <Image
                    src={beds}
                    alt="dummy"
                    className="object-cover h-full w-full"
                  />
                </div>
                <div className="montserrat capitalize black">
                  <p className="text-black text-[1.8vw] lg:text-[.8vw] font-semibold">
                    Emily R.
                  </p>
                  <span className="text-black text-[1.8vw] lg:text-[.8vw] font-normal">
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
              <p className="text-[1.9vw] lg:text-[.9vw] mt-6 roboto">
                {`"Dialable's commitment to inclusivity and its marketplace feature have transformed the way I navigate the city, connecting me with wheelchair-friendly businesses and new opportunities for independence."`}
              </p>
              <div className="flex gap-2 md:gap-4 mt-6">
                <div className="img w-[9vw] md:w-[3vw]">
                  <Image
                    src={beds}
                    alt="dummy"
                    className="object-cover h-full w-full"
                  />
                </div>
                <div className="montserrat capitalize black">
                  <p className="text-black text-[1.8vw] lg:text-[.8vw] font-semibold">
                    Rajesh S.
                  </p>
                  <span className="text-black text-[1.8vw] lg:text-[.8vw] font-normal">
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
              <p className="text-[1.9vw] lg:text-[.9vw] mt-6 roboto">
                {`"With Dialable's marketplace, my small business gained visibility among customers with disabilities, fostering connections and growth within the community – thank you for supporting inclusivity!"`}
              </p>
              <div className="flex gap-2 md:gap-4 mt-6">
                <div className="img w-[9vw] md:w-[3vw]">
                  <Image
                    src={beds}
                    alt="dummy"
                    className="object-cover h-full w-full"
                  />
                </div>
                <div className="montserrat capitalize black">
                  <p className="text-black text-[1.8vw] lg:text-[.8vw] font-semibold">
                    Sophie L.
                  </p>
                  <span className="text-black text-[1.8vw] lg:text-[.8vw] font-normal">
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
              <p className="text-[1.9vw] lg:text-[.9vw] mt-6 roboto">
                {`"Dialable's platform goes beyond listings, offering features like text-based messaging and video calling for seamless communication with deaf-friendly businesses – a game-changer for accessibility!"`}
              </p>
              <div className="flex gap-2 md:gap-4 mt-6">
                <div className="img w-[9vw] md:w-[3vw]">
                  <Image
                    src={beds}
                    alt="dummy"
                    className="object-cover h-full w-full"
                  />
                </div>
                <div className="montserrat capitalize black">
                  <p className="text-black text-[1.8vw] lg:text-[.8vw] font-semibold">
                    Carlos G.
                  </p>
                  <span className="text-black text-[1.8vw] lg:text-[.8vw] font-normal">
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
              <p className="text-[1.9vw] lg:text-[.9vw] mt-6 roboto">
                {`"Dialable ensures stress-free outings for families with autism-friendly listings, helping us find sensory-friendly places to enjoy quality time together without overwhelming experiences."`}
              </p>
              <div className="flex gap-2 md:gap-4 mt-6">
                <div className="img w-[9vw] md:w-[3vw]">
                  <Image
                    src={beds}
                    alt="dummy"
                    className="object-cover h-full w-full"
                  />
                </div>
                <div className="montserrat capitalize black">
                  <p className="text-black text-[1.8vw] lg:text-[.8vw] font-semibold">
                    Aisha N
                  </p>
                  <span className="text-black text-[1.8vw] lg:text-[.8vw] font-normal">
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
              <p className="text-[1.9vw] lg:text-[.9vw] mt-6 roboto">
                {`"Dialable's detailed accessibility info and comprehensive listings make city exploration hassle-free for me – now I can confidently access the services I need, wherever I go!"`}
              </p>
              <div className="flex gap-2 md:gap-4 mt-6">
                <div className="img w-[9vw] md:w-[3vw]">
                  <Image
                    src={beds}
                    alt="dummy"
                    className="object-cover h-full w-full"
                  />
                </div>
                <div className="montserrat capitalize black">
                  <p className="text-black text-[1.8vw] lg:text-[.8vw] font-semibold">
                    Luis M.
                  </p>
                  <span className="text-black text-[1.8vw] lg:text-[.8vw] font-normal">
                    position, company name
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
