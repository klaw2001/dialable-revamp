import Image from "next/image";
import React from "react";
import { FaAngleDown } from "react-icons/fa6";
import { PiGlobe } from "react-icons/pi";
const TopBar = () => {
  return (
    <div className="flex bg-[#FF8037] justify-between items-center lg:px-4 px-4 py-2  montserrat">
      <div className="flex items-center justify-center gap-2 text-xs cursor-pointer font-normal">
        <div className="text-white font-semibold text-[1.5vw] lg:text-[.8vw]">
          FREE DELIVERY on all orders above 999 AED | No coupon required
        </div>
      </div>
      <div className="flex items-center justify-center font-medium gap-3">
        <div className="text-lg flex items-center justify-center  cursor-pointer gap-[.2vw] text-white font-semibold">
          <PiGlobe size="1.5vw"/>
          <select name="" id="" className="border-none bg-transparent text-[.8vw] font-semibold ">
            <option>Language</option>
          </select>
        </div>
        <div className="country  px-2 text-white border-2 border-white">
          <select className="py-2 text-[.85vw] bg-transparent border-none focus-visible:outline-none">
            <option value="">Select Country</option>
          </select>
        </div>
        <div className="State  px-2 text-white border-2 border-white">
          <select className="bg-transparent py-2 text-[.85vw] border-none focus-visible:outline-none">
            <option value="" className="p-2">Select State</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
