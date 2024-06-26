"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from "swiper";

const EventsBanner = () => {
  return (
    <div className="store overflow-x-clip">
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
            slidesPerView: 1,
            spaceBetween: 150,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 200,
          },
        }}
       
        autoplay
        className="flex justify-between gap-8"
      >
        <SwiperSlide>
          <div className="flex items-center p-10 md:px-20 md:py-[10rem] justify-start bg-[url(https://s3-alpha-sig.figma.com/img/6b1c/f3eb/2b13bddd597380b44c8ab57a829fcb6f?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k7P0-uqssy6SvG2m10MUtbL6Gq6wxo5z2onJC6Oe3Ds8ZrsloL-ijqisngacrCoQXAFd~bfU3mdfzciVSmGc~IsaEMeYHuqKL7Gc-DKWB~Lo0d0xbeRCziaHQicytRbVjzHSp0rEncCKcEkfx5q84Zg4mrdvnKsmpGaGCcFIEh2OqNWIOQMQm6Adv0A-jZmpR4PagStKwqxYokDUAk3mDIrKlNaIPtB-adKhx5i9cIM8n0nw6CnhTHxTrNekJlr~tzhekh~ZQYGmbKaY3IsFSBobcoLvo4p6JZEBAbFCR43WGk5kBxCKqQu5xr3nY~5g5jCPulJ2zxbwYn~tQUfR~Q__)]  w-full bg-[length:cover] bg-[center] bg-no-repeat h-auto md:h-[clamp(200px,40vw,500px)]">
            <div>
              <span className="montserrat font-bold text-white text-[4vw] md:text-[1.5vw] leading-none">
                Featured
              </span>
              <p className="text-white Sans text-[6vw] md:text-[4vw] leading-2 font-semibold w-full">
                Upcoming Events
              </p>
              <p className="text-white montserrat text-[3vw] md:text-[1.5vw]  font-semibold md:w-[60%] lg:w-[50%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat.
              </p>
              <button className="font-semibold  py-3 px-6 text-white bg-[#FF6004] text-[2vw] md:text-[1.5vw] lg:text-[1vw] mt-4">
                Explore
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default EventsBanner;
