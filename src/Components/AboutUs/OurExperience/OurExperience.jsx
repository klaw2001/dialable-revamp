"use client";

import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const OurExperience = () => {
  const [countOn, setCountOn] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setCountOn(true)}
      onExit={() => setCountOn(false)}
    >
      <div className="p-6 lg:py-24 lg:px-14 flex flex-col lg:flex-row justify-between items-center">
        <div className="w-full lg:w-1/2">
          <h1 className="text-black text-center tracking-tight Sans capitalize text-[6vw] md:text-[4.5vw] lg:text-[1.5vw] mb-3 font-bold">
            Our Experience
          </h1>
        </div>
        <div className="w-full lg:w-1/2">
          <p className="text-[3vw] md:text-[2vw] lg:text-[.9vw]">
           {` Experience the Difference At Dialable, our journey is defined by
            expertise, user-centricity, and innovation. With a proven track
            record in accessibility and technology, we're dedicated to
            delivering impactful solutions that empower individuals with
            disabilities.`}
          </p>
          <div>
            <div className="flex items-center justify-center my-10 gap-20 md:gap-0 md:justify-between lg:justify-start lg:gap-40 Inter">
              <div className="w-[20vw] lg:w-[6vw]">
                <h1 className="text-[#781393] text-[5.5vw] md:text-[3.5vw]  lg:text-[2.5vw] font-bold mb-1">
                  {countOn && <CountUp start={0} end={2015} duration={5} />}
                </h1>
                <p className="text-[3vw] md:text-[2vw] lg:text-[.9vw] font normal">
                  Founded
                </p>
              </div>
              <div className="w-[20vw] lg:w-[6vw]">
                <h1 className="text-[#781393] text-[5.5vw] md:text-[3.5vw] lg:text-[2.5vw] font-bold mb-1">
                  ${countOn && <CountUp start={0} end={20} />}m
                </h1>
                <p className="text-[3vw] md:text-[2vw] lg:text-[.9vw] font normal">
                  Product Sales
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center  my-10 gap-20 md:gap-0 md:justify-between lg:justify-start lg:gap-40 Inter">
              <div className="w-[20vw] lg:w-[6vw]">
                <h1 className="text-[#781393] text-[5.5vw] md:text-[3.5vw] lg:text-[2.5vw] font-bold mb-1">
                  {countOn && <CountUp start={0} end={50} />}+
                </h1>
                <p className="text-[3vw] md:text-[2vw]  lg:text-[.9vw] font normal">
                  Employees
                </p>
              </div>
              <div className="w-[20vw] lg:w-[6vw]">
                <h1 className="text-[#781393] md:text-[3.5vw] text-[5.5vw] lg:text-[2.5vw] font-bold mb-1">
                  {countOn && <CountUp start={0} end={5} />}
                  k+
                </h1>
                <p className="text-[3vw] md:text-[2vw] lg:text-[.9vw] font normal">
                  Customers
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default OurExperience;
