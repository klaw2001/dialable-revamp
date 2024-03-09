import Image from "next/image";
import React from "react";
import { FaAngleDown } from "react-icons/fa6";
import { PiGlobe } from "react-icons/pi";
const TopBar = () => {
  return (
    <div className="flex bg-[#FF8037] md:flex-row flex-col-reverse justify-between items-center lg:px-4 px-4 py-2  montserrat">
      <div className="flex items-center justify-center sm:self-center gap-2 text-xs cursor-pointer font-normal">
        <div className="text-white font-semibold  text-[2.5vw] md:text-[1vw] mt-2 md:mt-0 lg:text-[.8vw]">
          FREE DELIVERY on all orders above 999 AED | No coupon required
        </div>
      </div>
      <div className="flex items-center self-start  justify-center font-medium gap-6 md:gap-3">
        <div className="text-lg flex items-center justify-center cursor-pointer gap-[.2vw] text-white font-semibold">
          <PiGlobe />
          <select name="" id="" className="border-none bg-transparent text-[2vw] md:text-[.8vw] font-semibold ">
            <option>Language</option>
          </select>
        </div>
        <div className="country">
          <select className="p-1 md:p-2 text-[2.5vw] md:text-[.85vw] bg-transparent  focus-visible:outline-none text-white border-2 border-white">
            <option value="">Select Country</option>
          </select>
        </div>
        <div className="State   ">
          <select className="bg-transparent p-1 md:p-2 text-[2.5vw] md:text-[.85vw]  focus-visible:outline-none text-white border-2 border-white">
            <option value="" className="p-2">Select State</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
