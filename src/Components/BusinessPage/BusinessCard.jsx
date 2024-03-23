import React from "react";
import businessImg from "../../../public/Images/businessimg.png";
import Image from "next/image";
import { RiStarSFill } from "react-icons/ri";
import { IoLocationSharp } from "react-icons/io5";
import Link from "next/link";
const BusinessCard = ({ thumbnail, placeName, category, description , id }) => {
  return (
    <div className="w-full md:w-[47%] lg:w-[24%] rounded-lg md::grow-0 shadow-md border border-black  overflow-clip" key={id}>
      <Link href={`/single-listing/${id}`}>
        <div className="w-full">
          <Image
            src={thumbnail}
            alt="businessimg"
            className="object-cover h-full w-full"
            loading="lazy"
            width={500}
            height={300}
          />
        </div>
        <div className="info bg-white p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex gap-4 items-center montserrat font-bold text-[3vw] md:text-[2.5vw] lg:text-[1.3vw]">
              {placeName}
            </div>
            <span className="dept font-semibold text-[2vw] md:text-[1.5vw] lg:text-[.9vw]  rounded-md bg-[#F4EBFF] p-1">
              {category?.name}
            </span>
          </div>
          <p className="text-black text-[3.06vw] md:text-[1.5vw] lg:text-[1.06vw] truncate">
            {description}
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
      </Link>
    </div>
  );
};

export default BusinessCard;
