import React from "react";
import IndustryCard from "./IndustryCard";
import { MdOutlineBusinessCenter, MdOutlinePalette } from "react-icons/md";
import { FaLaptop } from "react-icons/fa6";
import { FaChartLine } from "react-icons/fa";

const Industries = () => {
  const industries = [
    {
      icon: <MdOutlineBusinessCenter />,
      type: "Business",
      events: 15,
    },
    {
      icon: <FaLaptop />,
      type: "Technology",
      events: 15,
    },
    {
      icon: <FaChartLine />,
      type: "Finance",
      events: 15,
    },
    {
      icon: <MdOutlinePalette />,
      type: "Art and Craft",
      events: 15,
    },
  ];
  return (
    <div className="p-8 md:py-12 md:px-8 lg:py-20 lg:px-32">
      <div className="flex flex-col gap-8 md:gap-0 md:flex-row items-center justify-between">
        {industries?.map((industry, i) => (
          <div key={i}>
            <IndustryCard
              icon={industry.icon}
              type={industry.type}
              events={industry.events}
            />
          </div>
        ))}
        <button className="bg-[#FF600480] btn text-white montserrat font-semibold rounded-lg flex p-8 md:text-[2vw] lg:text-[1.2vw] items-center flex-col gap-2 shadow-3 hover:bg-[#FF6004] transition-[all.5s] h-[50vw] w-[50vw] md:w-[17vw] md:h-[17vw] lg:w-[10vw] lg:h-[10vw] justify-center ">
            View All
        </button>
      </div>
    </div>
  );
};

export default Industries;
