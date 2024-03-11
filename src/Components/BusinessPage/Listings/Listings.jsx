import Image from "next/image";
import React from "react";
import Filter from "../../../../public/Images/Filters.svg";
import BusinessCard from "../BusinessCard";

const Listings = () => {
  return (
    <div className="p-4 md:p-6 lg:p-10">
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
    </div>
  );
};

export default Listings;
