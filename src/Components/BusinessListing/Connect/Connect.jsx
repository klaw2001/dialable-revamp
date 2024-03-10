import React from "react";
import Link from "next/link";
const Connect = () => {
  return (
    <div className="px-4 py-10 lg:py-16 lg:px-24 gradient flex items-center flex-col gap-4">
      <h1 className="text-[4.5vw] md:text-[3.5vw] text-white text-center lg:text-[2.5vw] Sans lg:w-[48%] font-bold leading-[8vw] lg:leading-[3vw]">
      Connect with New Customers & Grow Your Business
      </h1>
      <p className="roboto text-white font-normal text-[2.5vw] text-center md:text-[1.8vw]  lg:text-[1.2vw]">
      Register Your Business Today
      </p>
      
      <div className="search flex">
            <div className="flex  bg-white items-center gap-2  border-y border-l border-black p-2 text-[3vw] md:text-[2.5vw] lg:text-[1.06vw] md:p-4">
              <p className="montserrat  font-medium text-[3vw] md:text-[2.5vw] lg:text-[1.06vw]">+91</p>
              <div className="text-black lg:w-[20vw] w-[36vw]">
                <input
                  type="number"
                  className="w-full montserrat focus-within:outline-none"
                  placeholder="Mobile Number"
                />
              </div>
            </div>

            <button className="text-white btn  bg-black py-2 px-4 lg:px-8 text-[3vw] md:text-[2.2vw] lg:text-[1.2vw] cursor-pointer montserrat font-medium">
              Start Now
            </button>
          </div>
          <p className="montserrat text-white text-[2vw] md:text-[1.5vw] lg:text-[.8vw]">By continuing, you agree to our  Terms of Use , Privacy & Infringement Policy</p>
    </div>
  );
};

export default Connect;
