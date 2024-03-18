import React from "react";
import webflow from "../../../public/Images/webflow.svg";
import relume from "../../../public/Images/relume.svg";
import Image from "next/image";
const ValuedPartners = () => {
  return (
    <div className="p-6 lg:p-10 flex items-center flex-col">
      <h1 className="text-center text-black Sans  text-[6vw] md:text-[4vw] lg:text-[1.5vw] font-bold">
        Most Valued Partners
      </h1>
      <div className="mt-6 lg:mt-12">
        <div className="flex justify-center items-center flex-wrap  gap-2 mb-2">
          <div className="partner-bg flex justify-center bg-[#F4EBFF] p-7">
            <div className="">
              <Image loading="eager" src={webflow} alt="webflow" className="object-cover w-[100px] md:w-[150px]" />
            </div>
          </div>
          <div className="partner-bg flex justify-center bg-[#F4EBFF] p-7 ">
            <div className="">
              <Image loading="eager" src={relume} alt="relume" className="object-cover w-[100px] md:w-[150px]" />
            </div>
          </div>
          <div className="partner-bg flex justify-center bg-[#F4EBFF] p-7 ">
            <div className="">
              <Image loading="eager" src={webflow} alt="webflow" className="object-cover w-[100px] md:w-[150px]" />
            </div>
          </div>
          <div className="partner-bg flex justify-center bg-[#F4EBFF] p-7 ">
            <div className="">
              <Image loading="eager" src={webflow} alt="webflow" className="object-cover w-[100px] md:w-[150px]" />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center flex-wrap  gap-2">
          <div className="partner-bg flex justify-center bg-[#F4EBFF] p-7">
            <div className="">
              <Image loading="eager" src={webflow} alt="webflow" className="object-cover w-[100px] md:w-[150px]" />
            </div>
          </div>
          <div className="partner-bg flex justify-center bg-[#F4EBFF] p-7 ">
            <div className="">
              <Image loading="eager" src={relume} alt="relume" className="object-cover w-[100px] md:w-[150px]" />
            </div>
          </div>
          <div className="partner-bg flex justify-center bg-[#F4EBFF] p-7 ">
            <div className="">
              <Image loading="eager" src={relume} alt="relume" className="object-cover w-[100px] md:w-[150px]" />
            </div>
          </div>
          <div className="partner-bg flex justify-center bg-[#F4EBFF] p-7 ">
            <div className="">
              <Image loading="eager" src={webflow} alt="webflow" className="object-cover w-[100px] md:w-[150px]" />
            </div>
          </div>
        </div>
      </div>
      <button className="text-black mt-8  montserrat shadow-xl font-bold  lg:ml-5  btn text-[3vw] md:text-[2vw] lg:text-[0.7vw] py-2 px-6 border-[2px] border-black ">
        Know More
      </button>
    </div>
  );
};

export default ValuedPartners;
