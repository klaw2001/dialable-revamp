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
    <div className="py-20 px-32">
      <div className="flex items-center justify-between">
        {industries?.map((industry, i) => (
          <div key={i}>
            <IndustryCard
              icon={industry.icon}
              type={industry.type}
              events={industry.events}
            />
          </div>
        ))}
        <button className="bg-[#FF600480] btn text-white montserrat font-semibold rounded-lg flex p-8 items-center flex-col gap-2 shadow-3 hover:bg-[#FF6004] transition-[all.5s] w-[10vw] h-[10vw] justify-center ">
            View All
        </button>
      </div>
    </div>
  );
};

export default Industries;
