"use client"
import Image from "next/image";
import React, { useState } from "react";
import Filter from "../../../../public/Images/Filters.svg";
import BusinessCard from "../BusinessCard";
import Link from "next/link";
import BusinessListingComp from "./BusinessListingComp";

const Listings = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("right");

  const showDrawer = () => {
    setOpen(true);
    console.log("first");
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className="relative">
      <div className="flex items-center justify-between pt-4 px-4 md:pt-6 md:px-6 lg:pt-10 lg:px-10">
        <div className="options flex items-center gap-3">
          <button className="btn text-black p-2 font-medium text-[2.2vw] md:text-[2vw] lg:text-[1vw] border-2">
            View all
          </button>
          <button className="btn text-black p-2 font-medium text-[2.2vw] md:text-[2vw] lg:text-[1vw]">
            Verified
          </button>
          <button className="btn text-black p-2 font-medium text-[2.2vw] md:text-[2vw] lg:text-[1vw]">
            Top Ratings
          </button>
          <button className="btn text-black p-2 font-medium text-[2.2vw] md:text-[2vw] lg:text-[1vw]">
            India
          </button>
        </div>
        <button onClick={showDrawer} className="btn py-3 px-2 bg-[#781393] flex items-center text-white Inter text-[2.2vw] md:text-[2vw] lg:text-[1vw]">
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
     <BusinessListingComp
        open={open}
        close={onClose}
        placement={placement}
     />
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
