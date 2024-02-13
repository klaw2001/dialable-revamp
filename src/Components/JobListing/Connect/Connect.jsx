import React from "react";
import Link from "next/link";
const Connect = () => {
  return (
    <div className="py-20 px-24 bg-[#781393] flex items-center flex-col gap-4">
      <h1 className="text-[8.5vw] text-white text-center lg:text-[2.5vw] montserrat w-[48%] font-bold leading-[10vw] lg:leading-[3vw]">
      Connect with New Customers & Grow Your Business
      </h1>
      <p className="roboto text-white font-medium text-[4.5vw] text-center  lg:text-[1vw]">
      Register Your Business Today
      </p>
      
      <div className="search flex">
            <div className="flex  bg-white items-center gap-2  border-y border-l border-black p-4">
              <p className="montserrat text-lg font-medium ">+91</p>
              <div className="text-black lg:w-[20vw] w-[36vw]">
                <input
                  type="number"
                  className="w-full montserrat focus-within:outline-none"
                  placeholder="Mobile Number"
                />
              </div>
            </div>

            <button className="text-white btn  bg-[#FF6004] py-2 px-8 text-[1.2vw] cursor-pointer montserrat font-medium">
              Start Now
            </button>
          </div>
          <p className="montserrat text-white text-[1vw]">By continuing, you agree to our  Terms of Use , Privacy & Infringement Policy</p>
    </div>
  );
};

export default Connect;
