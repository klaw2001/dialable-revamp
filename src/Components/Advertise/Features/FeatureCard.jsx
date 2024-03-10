import React from "react";
import relume from "../../../../public/Images/Relume-icon.svg";
import Image from "next/image";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa6";
const FeatureCard = () => {
  return (
    <div className="p-4 rounded-lg border-2 w-full md:w-[42vw] lg:w-[20vw] border-black bg-white flex flex-col grow gap-2">
      <div className="img w-[10vw] md:w-[4.5vw] lg:w-[2.5vw]">
        <Image src={relume} alt="icon" className="object-cover h-full w-full" />
      </div>
      <h1 className="text-black font-semibold text-[4.5vw] md:text-[2.3vw] lg:text-[1.5vw] Inter">
        Medium length section heading goes here
      </h1>
      <p className="text-black font-medium text-[3vw] md:text-[1.9vw] lg:text-[.95vw] Inter">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
      <Link className="text-black flex items-center gap-2 montserrat text-[3vw] md:text-[1.5vw] font-semibold lg:text-[.95vw] my-4" href={"#"}>
        Button <FaChevronRight/>
      </Link>
    </div>
  );
};

export default FeatureCard;
