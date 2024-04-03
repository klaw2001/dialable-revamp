"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const UtilityBox = ({ title, img, infoColor, nameColor, name, info }) => {
  const [size, setSize] = useState(0);
  useEffect(() => {
    const updateSize = () => {
      let updatedSize;
      let screenWidth = window.innerWidth;
      if (screenWidth >= 768) {
        updatedSize = 50;
      } else if (screenWidth >= 320) {
        updatedSize = 50;
      } else {
        updatedSize = 100;
      }
      setSize(updatedSize);
    };
    updateSize();

    window.addEventListener("resize", updateSize);
    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []);
  return (
    <div className="w-full  bg-[#F4EBFF]  box-shadow border p-4 border-[#781393]">
      <h1 className="text-[6vw] md:text-[2.5vw] lg:text-[1.5vw] font-semibold montserrat">{title}</h1>
      <div className="my-2 md:my-4 lg:my-8">
        <div className="flex items-center py-2  border-b border-gray-300 gap-2">
          <div className="">
            <Image src={img} height={size} width={size} alt="img" />
          </div>
          <div>
            <h1
              className={`montserrat text-[${nameColor}] font-bold text-[6vw] md:text-[2vw] lg:text-[1vw]`}
            >
              {name}
            </h1>
            <p
              className={`montserrat text-[${infoColor}] font-semibold text-[3vw] md:text-[1.2vw] lg:text-[0.8vw]`}
            >
              {info}
            </p>
          </div>
        </div>
        <div className="flex items-center py-2  border-b border-gray-300 gap-2">
          <div className="">
            <Image src={img} height={size} width={size} alt="img" />
          </div>
          <div>
            <h1
              className={`montserrat text-[${nameColor}] font-bold text-[6vw] md:text-[2vw] lg:text-[1vw]`}
            >
              {name}
            </h1>
            <p
              className={`montserrat text-[${infoColor}] font-semibold text-[3vw] md:text-[1.2vw] lg:text-[0.8vw]`}
            >
              {info}
            </p>
          </div>
        </div>
        <div className="flex items-center py-2  border-b border-gray-300 gap-2">
          <div className="">
            <Image src={img} height={size} width={size} alt="img" />
          </div>
          <div>
            <h1
              className={`montserrat text-[${nameColor}] font-bold text-[6vw] md:text-[2vw] lg:text-[1vw]`}
            >
              {name}
            </h1>
            <p
              className={`montserrat text-[${infoColor}] font-semibold text-[3vw] md:text-[1.2vw] lg:text-[0.8vw]`}
            >
              {info}
            </p>
          </div>
        </div>
        <div className="flex items-center py-2  border-b border-gray-300 gap-2">
          <div className="">
            <Image src={img} height={size} width={size} alt="img" />
          </div>
          <div>
            <h1
              className={`montserrat text-[${nameColor}] font-bold text-[6vw] md:text-[2vw] lg:text-[1vw]`}
            >
              {name}
            </h1>
            <p
              className={`montserrat text-[${infoColor}] font-semibold text-[3vw] md:text-[1.2vw] lg:text-[0.8vw]`}
            >
              {info}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UtilityBox;
