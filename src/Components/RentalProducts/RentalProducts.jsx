"use client";
import Image from "next/image";
import React from "react";
import beds from "../../../public/Images/rentalProducts/beds.png";
import scooters from "../../../public/Images/rentalProducts/scooters.png";
import walkers from "../../../public/Images/rentalProducts/rent-walkers.jpg";
import wheelchair from "../../../public/Images/rentalProducts/wheel-chair.jpg";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const RentalProducts = () => {
  const rentalProducts = [
    {
      title: "Medical Beds",
      img: wheelchair,
    },
    {
      title: "Walkers",
      img: walkers,
    },
    {
      title: "Scooters",
      img: wheelchair,
    },
    {
      title: "Wheelchairs",
      img: walkers,
    },
  ];

  return (
    <div className="p-6 px-0 md:px-0 lg:py-10 lg:px-0 flex flex-col md:flex-row items-center justify-between">
      <div className="flex flex-col items-start md:w-1/2 gap-4 p-6 md:pl-16">
        <h1 className="text-black Sans font-semibold text-[6vw] md:text-[4.5vw] lg:text-[2.5vw]">
          Rental Products
        </h1>
        <p className="text-black poppins font-medium text-[5vw] text-left md:text-[2vw] lg:text-[1.5vw] md:w-[65%]">
          Not looking to buy? Check out our rental products, available for a
          period that suits you
        </p>
        <button className="text-black mt-2 montserrat text-medium shadow-md rounded-lg font-semibold lg:h-[3vw] md:text-[2vw]  btn text-[3vw] lg:text-[0.8vw] py-1 px-6 leading-none border border-black ">
          Explore
        </button>
      </div>
      <div className="bg-[#F4F4F6] w-full md:w-1/2 relative rental  gap-8 px-2 md:px-6 lg:px-2 xl:px-4 py-8 md:py-16 overflow-clip">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={200}
          slidesPerView={2.6}
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
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {rentalProducts.map((rentalProduct, i) => (
            <SwiperSlide key={i} className="flex items-center flex-col gap-2">
              <div className="img w-full h-[300px] md:w-[20vw] md:h-[25vw] xl:w-[250px] rounded-lg lg:h-[300px] shadow-md overflow-clip">
                <Image
                  loading="eager"
                  src={rentalProduct.img}
                  alt={rentalProduct.title}
                  className="object-cover  h-full w-full"
                />
              </div>
              <p className="poppins text-black text-[6vw] md:text-[2vw] lg:text-[1.3vw] font-bold">
                {rentalProduct.title}
              </p>
            </SwiperSlide>
          ))}
          <div className=" mt-12 md:mt-8 lg:mt-16"></div>
        </Swiper>
      </div>
    </div>
  );
};

export default RentalProducts;
