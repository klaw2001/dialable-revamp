import Image from "next/image";
import React from "react";
import Filter from "../../../../public/Images/Filters.svg";
import BusinessCard from "../BusinessCard";
import Link from "next/link";

const Listings = () => {
  return (
    <div className="p-4 md:p-6 lg:p-10 relative">
      <div className="flex items-center justify-between">
        <div className="options flex items-center gap-3">
          <div className="btn txt-black p-2 font-medium text-[2.2vw] md:text-[2vw] lg:text-[1vw] border-2">
            View all
          </div>
          <div className="btn txt-black p-2 font-medium text-[2.2vw] md:text-[2vw] lg:text-[1vw]">
            Verified
          </div>
          <div className="btn txt-black p-2 font-medium text-[2.2vw] md:text-[2vw] lg:text-[1vw]">
            Top Ratings
          </div>
          <div className="btn txt-black p-2 font-medium text-[2.2vw] md:text-[2vw] lg:text-[1vw]">
            India
          </div>
        </div>
        <button className="btn py-3 px-2 bg-[#781393] flex items-center text-white Inter text-[2.2vw] md:text-[2vw] lg:text-[1vw]">
          <div className="w-[3.5vw] md:w-[2.5vw] lg:w-[1.5vw]">
            <Image
              src={Filter}
              alt="filter_icon"
              className="object-cover h-full w-full"
            />
          </div>
          <span> All Filters</span>
        </button>
      </div>
      <div className="flex items-center justify-center gap-8 flex-wrap py-10 mb-8">
            <BusinessCard/>
            <BusinessCard/>
            <BusinessCard/>
            <BusinessCard/>
            <BusinessCard/>
            <BusinessCard/>
            <BusinessCard/>
            <BusinessCard/>
            <BusinessCard/>
            <BusinessCard/>
            <BusinessCard/>
            <BusinessCard/>
            
      </div>
      <div className="flex fixed right-[-2%] md:right-[-3.5%] z-[20] top-[80%] gap-4 rotate-[-90deg] w-[10%] ">
        <Link
          href="#"
          className="text-white active:scale-[.95] transition-all duration-[.5s] box-shadow-2 bg-[#781393] rounded-lg md:rounded-xl text-[0.8rem] md:text-[1rem] lg:text-[1.3vw] font-semibold montserrat leading-none px-[1.35rem] py-4 lg:py-6"
        >
          Advertise
        </Link>
        <Link
          href="#"
          className="text-white active:scale-[.95] transition-all duration-[.5s] box-shadow-2 bg-[#FF6004] rounded-lg md:rounded-xl text-[0.8rem] md:text-[1rem] lg:text-[1.3vw] font-semibold montserrat leading-none px-[1.35rem] py-4 lg:py-6"
        >
          Free&nbsp;Listing
        </Link>
      </div>
    </div>
  );
};

export default Listings;
