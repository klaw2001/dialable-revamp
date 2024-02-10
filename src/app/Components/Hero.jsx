import Image from "next/image";
import React from "react";
import hero from "../Images/hero-img.png";
const Hero = () => {
  
  return (
    <div className="lg:flex  justify-between items-center gap-10 montserrat block p-10 sm:p-20 lg:p-0 ">
      <div className="hero-cont lg:w-1/2 sm:w-full flex items-start gap-6  flex-col lg:px-20 ">
        <h1 className="lg:text-[4vw] text-[10vw] leading-[13vw] lg:leading-[5vw] font-semibold text-[#781393]">
          Connecting Businesses and Opportunities for Everyone
        </h1>
        <div className="desc roboto">
          <p className="text-blac text-lg lg:text-2xl font-normal">
            Welcome to our inclusive business directory listing website. We are
            committed to providing equal access to job opportunities and a
            marketplace for all.
          </p>
        </div>
        <div className="search flex ">
            <div className="border-black border px-2 py-4">
                <select name="" id="" className="roboto text-xs cursor-pointer font-medium">
                    <option>India</option>
                </select>
            </div>
            <div className="text-black lg:w-[25vw] w-[36vw]">
                <input type="text" className="w-full border border-black px-2 py-4"  />
            </div>
            <button  className="text-white btn  bg-[#FF6004] py-2 px-8 text-md cursor-pointer montserrat font-medium">Search</button>
        </div>
      </div>
      <div className="hero-img lg:w-1/2 w-full mt-10 lg:mt-0 relative">
        <Image
          src={hero}
          alt="hero-img"
          objectFit="cover"
          className="h-full w-full"
        />
      </div>
    </div>
  );
};

export default Hero;
