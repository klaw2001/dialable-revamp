import Image from "next/image";
import React from "react";
import Handmade from "../.../../../../../public/Images/handmade.png";
const HandMade = () => {
  return (
    <div className="flex md:items-center flex-col md:flex-row my-10 md:my-20 justify-between">
      <div className="w-full md:w-[50%] relative">
        <Image src={Handmade} alt="handmade" className="h-full w-full" />
      </div>
      <div className="w-full md:w-1/2  md:h-[40.5vw] px-4 py-6 md:p-10 lg:p-20 bg-[#F4EBFF]">
        <div className="md:mt-[4vw] lg:mt-[6vw]">
          <h3 className="montserrat text-black font-medium leading-none text-[3vw] md:text-[1.2vw]">
            Featured Product
          </h3>
          <h1 className="Sans font-bold text-[6vw] md:text-[3vw] text-black ">
            Handmade Vessels
          </h1>
        </div>
        <div className="">
          <div className="flex items-center mt-6 justify-between">
            <h3 className="montserrat text-black font-semibold text-[3.8vw] md:text-[1.5vw]">
              Material
            </h3>
            <h3 className="montserrat text-black font-semibold text-[3.8vw] md:text-[1.5vw]">
              Category
            </h3>
            <h3 className="montserrat text-black font-semibold text-[3.8vw] md:text-[1.5vw]">
              Designer
            </h3>
          </div>
          <div className="flex items-center my-8 justify-between">
            <p className="montserrat text-black font-normal text-[3vw] md:text-[1.2vw]">
              Ceramic/Clay
            </p>
            <p className="montserrat text-black font-normal text-[3vw] md:text-[1.2vw]">
              Artifacts
            </p>
            <p className="montserrat text-black font-normal text-[3vw] md:text-[1.2vw]">
              Mahesh Rane
            </p>
          </div>

          <div className="flex items-center gap-16 md:gap-[8vw] justify-start">
            <h3 className="montserrat text-black font-bold text-[3.8vw] md:text-[1.5vw]">
              ₹10,000/-
            </h3>
            <button className="btn px-4 md:py-4 montserrat md:px-6 text-[2.5vw] md:text-[.95vw] border-black border-2 text-black">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HandMade;
