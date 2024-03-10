import Image from "next/image";
import React from "react";
import bag from "../../../../public/Images/bag.svg";
import Link from "next/link";
import {FaChevronRight } from "react-icons/fa6";
const Card = ({type, dept, title, desc, vacancies, exp, location, link}) => {
  return (
    <div className="p-3 w-full my-4 md:my-0 md:w-[30vw] lg:w-[22vw] border-2 shadow-lg rounded-lg grow">
      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-4 items-center montserrat font-semibold text-[2.9vw] md:text-[1.5vw] lg:text-[.9vw]">
          <div className="w-[4vw] md:w-[2vw] lg:w-[1.3vw]">
            <Image src={bag} alt="bag" className="object-cover h-full w-full" />
          </div>
          {type}
        </div>
        <span className="dept font-semibold text-[2vw] md:text-[1.5vw] lg:text-[.8vw]  rounded-md bg-[#F4EBFF] p-1">
          {dept}
        </span>
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="montserrat text-[3.4vw] md:text-[2.3vw] font-bold lg:text-[1.5vw]">
          {title}
        </h1>
        <p className="montserrat text-[2.4vw] md:text-[1.5vw] lg:text-[.9vw]">
          {desc}
        </p>
      </div>
      <div className="my-8">
        <div className="flex justify-between items-center my-4">
          <div className="flex gap-2 items-center montserrat font-medium text-[2.3vw] md:text-[1.5vw] lg:text-[.9vw]">
            <div className="w-[4vw] md:w-[2vw] lg:w-[1.3vw]">
              <Image
                src={bag}
                alt="bag"
                className="object-cover h-full w-full"
              />
            </div>
            No. of Vacancies
          </div>
          <span className="dept montserrat font-medium text-[2vw] md:text-[1vw] lg:text-[.75vw]">
            {vacancies} positions
          </span>
        </div>
        <div className="flex justify-between items-center my-4">
          <div className="flex gap-2 items-center montserrat font-medium text-[2.3vw] md:text-[1.5vw] lg:text-[.9vw]">
            <div className="w-[4vw] md:w-[2vw] lg:w-[1.3vw]">
              <Image
                src={bag}
                alt="bag"
                className="object-cover h-full w-full"
              />
            </div>
            Years of experience
          </div>
          <span className="dept montserrat font-medium text-[2vw] md:text-[1vw] lg:text-[.75vw]">
            {exp} years
          </span>
        </div>
        <div className="flex justify-between items-center my-4">
          <div className="flex gap-2 items-center montserrat font-medium text-[2.3vw] md:text-[1.5vw] lg:text-[.9vw]">
            <div className="w-[4vw] md:w-[2vw] lg:w-[1.3vw]">
              <Image
                src={bag}
                alt="bag"
                className="object-cover h-full w-full"
              />
            </div>
            Location
          </div>
          <span className="dept montserrat font-medium text-[2vw] md:text-[1vw] lg:text-[.75vw]">
            {location}
          </span>
        </div>
      </div>

      <Link className="text-black flex items-center gap-2 montserrat text-[2.4vw] md:text-[1.5vw] font-semibold lg:text-[.95vw] my-2" href={link}>
        Apply Now <FaChevronRight/>
      </Link>
    </div>
  );
};

export default Card;
