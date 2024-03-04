"use client";

import React, { useState } from "react";
import partners from "../../../public/Images/partners.png";
import check from "../../../public/Images/check.svg";
import Image from "next/image";
const OurPartners = () => {
  const [activeTab, setActiveTab] = useState("abled");
  return (
    <div className="p-10">
      <div className="buttons flex items-center justify-center">
        <button
          onClick={() => setActiveTab("abled")}
          className="montserrat active:scale-[.97] transition-all duration-75 uppercase text-[3vw] md:text-[2vw] lg:text-[1.05vw]  font-medium py-4 lg:py-4 px-8 lg:px-10 bg-[#781393] text-white rounded-s-xl"
        >
          For &nbsp;Abled
        </button>
        <button
          onClick={() => setActiveTab("corporates")}
          className="montserrat active:scale-[.97] transition-all duration-75 uppercase text-[3vw] md:text-[2vw] lg:text-[1.05vw]  font-medium py-4 lg:py-4 px-4 lg:px-4 bg-[#D9D9D9] text-[#00000080] rounded-e-xl"
        >
          For &nbsp;corporates
        </button>
      </div>
      {activeTab === "abled" ? (
        <div className="block md:flex justify-center my-8 lg:my-16 px-0 lg:px-36">
          <div className="w-full md:w-[50%] rounded-t-lg md:rounded-t-none md:rounded-s-lg border-[1.5px]  border-left overflow-clip border-[#781393]">
            <div className="img h-full w-full">
              <Image
                src={partners}
                alt="partners"
                className="object-cover h-full w-full"
              />
            </div>
          </div>
          <div className="w-full md:w-[50%] bg-[#F4EBFF] py-8 lg:py-16 px-4 lg:px-8 xl:px-12 montserrat capitalize border border-y rounded-b-lg  md:rounded-b-none md:rounded-e-lg border-right border-[#781393]">
            <h2 className="text-black uppercase Sans font-bold text-[4vw] md:text-[2.3vw]">
              our partners like us
            </h2>
            <ul className="my-4 md:mt-8 md:mb-6">
              <li className="flex items-center gap-2 py-2 md:py-4">
                <div className="w-[3vw] md:w-[1.6vw]">
                  <Image
                    src={check}
                    alt="marker"
                    className="object-cover h-full w-full"
                  />
                </div>
                <span className="text-black text-[3vw] md:text-[1.3vw] montserrat font-medium">
                  one stop solutions for all inclusion needs
                </span>
              </li>
              <li className="flex items-center gap-2 py-2 md:py-4">
                <div className="w-[3vw] md:w-[1.6vw]">
                  <Image
                    src={check}
                    alt="marker"
                    className="object-cover h-full w-full"
                  />
                </div>
                <span className="text-black text-[3vw] md:text-[1.3vw] montserrat font-medium">
                  training and education
                </span>
              </li>
              <li className="flex items-center gap-2 py-2 md:py-4">
                <div className="w-[3vw] md:w-[1.6vw]">
                  <Image
                    src={check}
                    alt="marker"
                    className="object-cover h-full w-full"
                  />
                </div>
                <span className="text-black text-[3vw] md:text-[1.3vw] montserrat font-medium">
                  verified talent profiles
                </span>
              </li>
              <li className="flex items-center gap-2 py-2 md:py-4">
                <div className="w-[3vw] md:w-[1.6vw]">
                  <Image
                    src={check}
                    alt="marker"
                    className="object-cover h-full w-full"
                  />
                </div>
                <span className="text-black text-[3vw] md:text-[1.3vw] montserrat font-medium">
                  large number of products
                </span>
              </li>
              <li className="flex items-center gap-2 py-2 md:py-4">
                <div className="w-[3vw] md:w-[1.6vw]">
                  <Image
                    src={check}
                    alt="marker"
                    className="object-cover h-full w-full"
                  />
                </div>
                <span className="text-black text-[3vw] md:text-[1.3vw] montserrat font-medium">
                  trusted verified business
                </span>
              </li>
            </ul>
            <div className="flex items-center ml-4 gap-6 mg:gap-8">
              <button className="capitalize text-white bg-[#781393] text-[1.09vw] btn lg:py-3 px-4 md:p-4 font-medium">
                hire part time
              </button>
              <button className="capitalize text-white bg-[#781393] text-[1.09vw] btn lg:py-3 px-4 md:p-4 font-medium">
                hire full time
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="block md:flex justify-center my-8 lg:my-16 px-0 lg:px-36">
          <div className="w-full md:w-[50%] rounded-t-lg md:rounded-l-lg  border-[1.5px]  border-left overflow-clip border-[#781393]">
            <div className="img h-full w-full">
              <Image
                src={partners}
                alt="partners"
                className="object-cover h-full w-full"
              />
            </div>
          </div>
          <div className="w-full md:w-[50%] bg-[white] py-8 lg:py-16 px-4 lg:px-8 xl:px-12 montserrat capitalize border border-y rounded-b-lg  md:rounded-b-none md:rounded-e-lg border-right border-[#781393]">
            <h2 className="text-black uppercase Sans font-bold text-[4vw] md:text-[2.3vw]">
              our partners like us
            </h2>
            <ul className="my-4 md:mt-8 md:mb-6">
              <li className="flex items-center gap-2 py-2 md:py-4">
                <div className="w-[3vw] md:w-[1.6vw]">
                  <Image
                    src={check}
                    alt="marker"
                    className="object-cover h-full w-full"
                  />
                </div>
                <span className="text-black text-[3vw] md:text-[1.3vw] montserrat font-medium">
                  one stop solutions for all inclusion needs
                </span>
              </li>
              <li className="flex items-center gap-2 py-2 md:py-4">
                <div className="w-[3vw] md:w-[1.6vw]">
                  <Image
                    src={check}
                    alt="marker"
                    className="object-cover h-full w-full"
                  />
                </div>
                <span className="text-black text-[3vw] md:text-[1.3vw] montserrat font-medium">
                  training and education
                </span>
              </li>
              <li className="flex items-center gap-2 py-2 md:py-4">
                <div className="w-[3vw] md:w-[1.6vw]">
                  <Image
                    src={check}
                    alt="marker"
                    className="object-cover h-full w-full"
                  />
                </div>
                <span className="text-black text-[3vw] md:text-[1.3vw] montserrat font-medium">
                  verified talent profiles
                </span>
              </li>
              <li className="flex items-center gap-2 py-2 md:py-4">
                <div className="w-[3vw] md:w-[1.6vw]">
                  <Image
                    src={check}
                    alt="marker"
                    className="object-cover h-full w-full"
                  />
                </div>
                <span className="text-black text-[3vw] md:text-[1.3vw] montserrat font-medium">
                  large number of products
                </span>
              </li>
              <li className="flex items-center gap-2 py-2 md:py-4">
                <div className="w-[3vw] md:w-[1.6vw]">
                  <Image
                    src={check}
                    alt="marker"
                    className="object-cover h-full w-full"
                  />
                </div>
                <span className="text-black text-[3vw] md:text-[1.3vw] montserrat font-medium">
                  trusted verified business
                </span>
              </li>
            </ul>
            <div className="flex items-center ml-4 gap-6 mg:gap-8">
              <button className="capitalize text-white bg-[#781393] active:sacle-[.98] transition-all duration-75 text-[1.09vw] btn lg:py-3 px-4 md:p-4 font-medium">
                hire part time
              </button>
              <button className="capitalize text-white bg-[#781393] active:sacle-[.98] transition-all duration-75 text-[1.09vw] btn lg:py-3 px-4 md:p-4 font-medium">
                hire full time
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OurPartners;
