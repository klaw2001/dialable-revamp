import React from "react";
import businessImg from "../../../public/Images/businessimg.png";
import Image from "next/image";
import { RiStarSFill } from "react-icons/ri";
import { IoLocationSharp } from "react-icons/io5";
const BusinessCard = () => {
  return (
    <div className="w-full md:w-[32%] lg:w-[48%] rounded-lg shadow-md border border-black grow overflow-clip">
      <div className="w-full">
        <Image
          src={businessImg}
          alt="businessimg"
          className="object-cover h-full w-full"
          loading="lazy"
        />
      </div>
      <div className="info bg-white p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex gap-4 items-center montserrat font-bold text-[3vw] md:text-[2.5vw] lg:text-[1.5vw]">
            Comapany Name
          </div>
          <span className="dept font-semibold text-[2vw] md:text-[1.5vw] lg:text-[.9vw]  rounded-md bg-[#F4EBFF] p-1">
            Department
          </span>
        </div>
        <p className="text-black text-[3.06vw] md:text-[1.5vw] lg:text-[1.06vw]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.{" "}
        </p>
        <div className="my-2  flex  text-[3vw] md:text-[2vw] lg:text-[1.2vw] items-center">
          <RiStarSFill />
          <RiStarSFill />
          <RiStarSFill />
          <RiStarSFill />
          <RiStarSFill />
        </div>
        <div className="flex gap-1 items-center montserrat font-medium text-[2.3vw] md:text-[1.5vw] lg:text-[1vw]">
          <IoLocationSharp />
          Location
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
