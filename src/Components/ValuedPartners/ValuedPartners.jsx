import React from "react";
import webflow from "../../../public/Images/webflow.svg";
import relume from "../../../public/Images/relume.svg";
import Image from "next/image";
const ValuedPartners = () => {
  return (
    <div className="p-10 flex items-center flex-col">
      <h1 className="text-center text-black montserrat  text-[3vw] font-bold">
        Most Valued Partners
      </h1>
      <div className="mt-12">
        <div className="flex justify-center items-center  gap-2">
          <div className="partner-bg flex justify-center bg-[#F4EBFF] py-4 px-12 w-[30vw]">
            <div className="w-[8vw]">
              <Image src={webflow} alt="webflow" className="object-cover" />
            </div>
          </div>
          <div className="partner-bg flex justify-center bg-[#F4EBFF] py-4 px-12 w-[30vw]">
            <div className="w-[8vw]">
              <Image src={relume} alt="relume" className="object-cover" />
            </div>
          </div>
          <div className="partner-bg flex justify-center bg-[#F4EBFF] py-4 px-12 w-[30vw]">
            <div className="w-[8vw]">
              <Image src={webflow} alt="webflow" className="object-cover" />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-2 gap-2">
          <div className="partner-bg flex justify-center bg-[#F4EBFF] py-4 px-12 w-[30vw]">
            <div className="w-[8vw]">
              <Image src={relume} alt="relume" className="object-cover" />
            </div>
          </div>
          <div className="partner-bg flex justify-center bg-[#F4EBFF] py-4 px-12 w-[30vw]">
            <div className="w-[8vw]">
              <Image src={webflow} alt="webflow" className="object-cover" />
            </div>
          </div>
          <div className="partner-bg flex justify-center bg-[#F4EBFF] py-4 px-12 w-[30vw]">
            <div className="w-[8vw]">
              <Image src={relume} alt="relume" className="object-cover" />
            </div>
          </div>
        </div>
      </div>
      <button className="text-black mt-8  montserrat shadow-xl font-bold h-[3vw] ml-5  btn text-[1vw] py-2 px-6 leading-none border-[2px] border-black ">
        Know More
      </button>
    </div>
  );
};

export default ValuedPartners;
