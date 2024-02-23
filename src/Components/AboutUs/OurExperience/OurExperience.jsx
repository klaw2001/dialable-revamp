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
      <div className="p-20 flex justify-between">
        <div className="w-1/2">
          <h1 className="text-black tracking-tight  capitalize text-[3vw] mb-3 font-bold">
            Our Experience
          </h1>
        </div>
        <div className="w-1/2">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam
            inventore, vero quo est illum illo voluptates eveniet cum hic
            consequatur, excepturi consectetur iste reiciendis aspernatur
            voluptatem maxime ad? Repellendus, accusantium.
          </p>
          <div>
            <div className="flex items-center my-10 gap-40 Inter">
              <div className="w-[6vw]">
                <h1 className="text-[#781393] text-[2.5vw] font-bold mb-1">
                  {countOn && <CountUp start={0} end={2015} duration={5} />}
                </h1>
                <p className="text-[.9vw] font normal">Founded</p>
              </div>
              <div className="w-[6vw]">
                <h1 className="text-[#781393] text-[2.5vw] font-bold mb-1">
                  ${countOn && <CountUp start={0} end={20} />}m
                </h1>
                <p className="text-[.9vw] font normal">Product Sales</p>
              </div>
            </div>
            <div className="flex items-center gap-40 Inter">
              <div className="w-[6vw]">
                <h1 className="text-[#781393] text-[2.5vw] font-bold mb-1">
                  {countOn && <CountUp start={0} end={50} />}+
                </h1>
                <p className="text-[.9vw] font normal">Employees</p>
              </div>
              <div className="w-[6vw]">
                <h1 className="text-[#781393] text-[2.5vw] font-bold mb-1">
                  {countOn && <CountUp start={0} end={5} />}
                  k+
                </h1>
                <p className="text-[.9vw] font normal">Customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default OurExperience;
