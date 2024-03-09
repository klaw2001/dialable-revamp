"use client";

import React, { useState } from "react";
import partners from "../../../public/Images/partners.png";
import check from "../../../public/Images/check.svg";
import Image from "next/image";
const OurPartners = () => {
  const [activeTab, setActiveTab] = useState("abled");
  return (
    <div className="p-6 lg:p-10">
      <div className="buttons flex items-center justify-center">
        <button
          onClick={() => setActiveTab("abled")}
          className={`montserrat active:scale-[.97] transition-all duration-75 uppercase text-[3vw] md:text-[2vw] lg:text-[1.05vw]  font-medium py-4 lg:py-4 px-8 lg:px-10 ${
            activeTab === "abled"
              ? "bg-[#781393] text-white"
              : "text-black bg-[#D9D9D9]"
          }  rounded-s-lg`}
        >
          For &nbsp;Abled
        </button>
        <button
          onClick={() => setActiveTab("corporates")}
          className={`montserrat active:scale-[.97] transition-all duration-75 uppercase text-[3vw] md:text-[2vw] lg:text-[1.05vw]  font-medium py-4 lg:py-4 px-4 lg:px-4  ${
            activeTab === "corporates"
              ? "bg-[#781393] text-white"
              : "text-black bg-[#D9D9D9]"
          }   rounded-e-lg`}
        >
          For &nbsp;corporates
        </button>
      </div>
      {activeTab === "abled" ? (
        <div className="block md:flex justify-center my-8 lg:my-16 mx-0 md:mx-16 lg:mx-36 border-[1.5px] border-[#781393] rounded-lg overflow-clip">
          <div className="w-full md:w-[50%] overflow-clip">
            <div className="img h-full w-full">
              <Image
                src={partners}
                alt="partners"
                className="object-cover h-full w-full"
              />
            </div>
          </div>
          <div className="w-full md:w-[50%] bg-[#F4EBFF] py-8  px-4  xl:px-12 montserrat capitalize overflow-clip">
            <h2 className="text-black uppercase Sans font-bold text-[4vw] md:text-[1.6vw]">
              our partners like us
            </h2>
            <ul className="my-4 md:mt-8 md:mb-6">
              <li className="flex items-center gap-2 py-2 md:py-4">
                <div className="w-[3vw] md:w-[1.2vw]">
                  <Image
                    src={check}
                    alt="marker"
                    className="object-cover h-full w-full"
                  />
                </div>
                <span className="text-black text-[3vw] md:text-[1.06vw] montserrat font-medium">
                  one stop solutions for all inclusion needs
                </span>
              </li>
              <li className="flex items-center gap-2 pb-2 md:py-4">
                <div className="w-[3vw] md:w-[1.2vw]">
                  <Image
                    src={check}
                    alt="marker"
                    className="object-cover h-full w-full"
                  />
                </div>
                <span className="text-black text-[3vw] md:text-[1.06vw] montserrat font-medium">
                  training and education
                </span>
              </li>
              <li className="flex items-center gap-2 pb-2 md:py-4">
                <div className="w-[3vw] md:w-[1.2vw]">
                  <Image
                    src={check}
                    alt="marker"
                    className="object-cover h-full w-full"
                  />
                </div>
                <span className="text-black text-[3vw] md:text-[1.06vw] montserrat font-medium">
                  verified talent profiles
                </span>
              </li>
              <li className="flex items-center gap-2 pb-2 md:py-4">
                <div className="w-[3vw] md:w-[1.2vw]">
                  <Image
                    src={check}
                    alt="marker"
                    className="object-cover h-full w-full"
                  />
                </div>
                <span className="text-black text-[3vw] md:text-[1.06vw] montserrat font-medium">
                  large number of products
                </span>
              </li>
              <li className="flex items-center gap-2 pb-2 md:py-4">
                <div className="w-[3vw] md:w-[1.2vw]">
                  <Image
                    src={check}
                    alt="marker"
                    className="object-cover h-full w-full"
                  />
                </div>
                <span className="text-black text-[3vw] md:text-[1.06vw] montserrat font-medium">
                  trusted verified business
                </span>
              </li>
            </ul>
            <div className="flex items-center ml-4 gap-6 md:gap-8">
              <button className="capitalize text-white bg-[#781393] text-[2vw] md:text-[1.1vw] lg:text-[1vw] btn lg:py-3 px-4 md:p-4 font-medium">
                hire part time
              </button>
              <button className="capitalize text-white bg-[#781393] text-[2vw] md:text-[1.1vw] lg:text-[1vw] btn lg:py-3 px-4 md:p-4 font-medium">
                hire full time
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="block md:flex justify-center my-8 lg:my-16 mx-0 md:mx-16 lg:mx-36 border-[1.5px] border-[#781393] rounded-lg overflow-clip">
          <div className="w-full md:w-[50%] overflow-clip">
            <div className="img h-full w-full">
              <Image
                src={partners}
                alt="partners"
                className="object-cover h-full w-full"
              />
            </div>
          </div>
          <div className="w-full md:w-[50%] bg-white py-8  px-4  xl:px-12 montserrat capitalize overflow-clip">
            <h2 className="text-black uppercase Sans font-bold text-[4vw] md:text-[1.6vw]">
              our partners like us
            </h2>
            <ul className="my-4 md:mt-8 md:mb-6">
              <li className="flex items-center gap-2 py-2 md:py-4">
                <div className="w-[3vw] md:w-[1.2vw]">
                  <Image
                    src={check}
                    alt="marker"
                    className="object-cover h-full w-full"
                  />
                </div>
                <span className="text-black text-[3vw] md:text-[1.06vw] montserrat font-medium">
                  one stop solutions for all inclusion needs
                </span>
              </li>
              <li className="flex items-center gap-2 pb-2 md:py-4">
                <div className="w-[3vw] md:w-[1.2vw]">
                  <Image
                    src={check}
                    alt="marker"
                    className="object-cover h-full w-full"
                  />
                </div>
                <span className="text-black text-[3vw] md:text-[1.06vw] montserrat font-medium">
                  training and education
                </span>
              </li>
              <li className="flex items-center gap-2 pb-2 md:py-4">
                <div className="w-[3vw] md:w-[1.2vw]">
                  <Image
                    src={check}
                    alt="marker"
                    className="object-cover h-full w-full"
                  />
                </div>
                <span className="text-black text-[3vw] md:text-[1.06vw] montserrat font-medium">
                  verified talent profiles
                </span>
              </li>
              <li className="flex items-center gap-2 pb-2 md:py-4">
                <div className="w-[3vw] md:w-[1.2vw]">
                  <Image
                    src={check}
                    alt="marker"
                    className="object-cover h-full w-full"
                  />
                </div>
                <span className="text-black text-[3vw] md:text-[1.06vw] montserrat font-medium">
                  large number of products
                </span>
              </li>
              <li className="flex items-center gap-2 pb-2 md:py-4">
                <div className="w-[3vw] md:w-[1.2vw]">
                  <Image
                    src={check}
                    alt="marker"
                    className="object-cover h-full w-full"
                  />
                </div>
                <span className="text-black text-[3vw] md:text-[1.06vw] montserrat font-medium">
                  trusted verified business
                </span>
              </li>
            </ul>
            <div className="flex items-center ml-4 gap-6 md:gap-8">
              <button className="capitalize text-white bg-[#781393] text-[2vw] md:text-[1.1vw] lg:text-[1vw] btn lg:py-3 px-4 md:p-4 font-medium">
                hire part time
              </button>
              <button className="capitalize text-white bg-[#781393] text-[2vw] md:text-[1.1vw] lg:text-[1vw] btn lg:py-3 px-4 md:p-4 font-medium">
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
