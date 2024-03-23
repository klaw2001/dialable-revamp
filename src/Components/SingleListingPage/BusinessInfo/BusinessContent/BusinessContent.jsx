import React from "react";
import { FaRegCreditCard } from "react-icons/fa";
const BusinessContent = () => {
  const featureData = [
    {
      icon: <FaRegCreditCard />,
      title: "Card Payment",
    },
    {
      icon: <FaRegCreditCard />,
      title: "Air Conditioned",
    },
    {
      icon: <FaRegCreditCard />,
      title: "Wireless Internet",
    },
    {
      icon: <FaRegCreditCard />,
      title: "Serves Alcohol",
    },
    {
      icon: <FaRegCreditCard />,
      title: "Parking Street",
    },
    {
      icon: <FaRegCreditCard />,
      title: "Outdoor Seating",
    },
  ];
  return (
    <div className="w-full">
      <div className="info pb-8 border-b border-gray-300">
        <h3 className="text-[6vw] mb-4 text-black montserrat font-semibold md:text-[4vw] lg:text-[1.5vw]">
          Jawed Habib Hair & Beauty
        </h3>
        <p className="text-[1vw] Inter text-black font-medium">{`Who doesn't like looking at their best? This is especially true when there is a special day around the corner or simply when you need to look presentable for an event. Salons, also known as beauty salons or beauty parlours, is a facility or establishment that provides beauty treatments to both women and men. If you are looking for a makeover or any cosmetic treatment, you can choose from a range of various salons available in Thane.`}</p>
      </div>
      <div className="features py-8 border-b border-gray-300">
        <h3 className="text-[6vw] mb-4 text-black montserrat font-semibold md:text-[4vw] lg:text-[1.5vw]">
          Our Features
        </h3>
        <div className="flex items-center  pt-4 flex-wrap">
          {featureData.map((elem, i) => {
            return (
              <div key={i} className="flex m-4 gap-4 w-[25%] items-center">
                <div className="icon rounded-full border text-[1.06vw] text-[#781393] p-4">
                  {elem.icon}
                </div>
                <p className="text-[1vw] text-black font-semibold">
                  {elem.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="gallery py-8">
        <h3 className="text-[6vw] mb-4 text-black montserrat font-semibold md:text-[4vw] lg:text-[1.5vw]">
          Photo Showcase
        </h3>
        <div>

        </div>
      </div>
    </div>
  );
};

export default BusinessContent;
