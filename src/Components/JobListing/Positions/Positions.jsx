import Image from "next/image";
import React from "react";
import Filter from "../../../../public/Images/Filters.svg";
import Card from "./Card";
import { cardData } from "./CardData";
const Positions = () => {
  return (
    <div className="px-4 py-6 lg:px-10 lg:py-16">
      <div className=" mb-8 lg:mb-12">
        <h1 className="Sans my-5 text-black text-[5vw]  md:text-[4vw] font-bold md:leading-[4.8vw] lg:leading-[3.2vw] lg:text-[2.5vw]">
          Open Positions
        </h1>
        <p className="text-[3vw] md:text-[1.5vw] lg:text-[1vw] text-black font-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.
        </p>
      </div>
      <div className="flex items-center justify-between">
        <div className="options flex items-center gap-3">
          <div className="btn txt-black p-2 font-medium text-[2.2vw] md:text-[2vw] lg:text-[1vw] border-2">
            View all
          </div>
          <div className="btn txt-black p-2 font-medium text-[2.2vw] md:text-[2vw] lg:text-[1vw]">
            Verified
          </div>
          <div className="btn txt-black p-2 font-medium text-[2.2vw] md:text-[2vw] lg:text-[1vw]">
            Top Ratings
          </div>
          <div className="btn txt-black p-2 font-medium text-[2.2vw] md:text-[2vw] lg:text-[1vw]">
            India
          </div>
        </div>
        <button className="btn py-3 px-2 bg-[#781393] flex items-center text-white Inter text-[2.2vw] md:text-[2vw] lg:text-[1vw]">
          <div className="w-[3.5vw] md:w-[2.5vw] lg:w-[1.5vw]">
            <Image
              src={Filter}
              alt="filter_icon"
              className="object-cover h-full w-full"
            />
          </div>
          <span> All Filters</span>
        </button>
      </div>
      <div className="flex my-10 items-center flex-wrap md:gap-6  lg:gap-20">
        {cardData.map((elem, i) => (
          <Card
            key={i}
            type={elem.type}
            dept={elem.department}
            title={elem.title}
            desc={elem.desc}
            vacancies={elem.vacancies}
            exp={elem.experience}
            location={elem.location}
            link={elem.link}
          />
        ))}
      </div>

      <button
     
        className="button my-2 md:my-4 lg:my-8 btn py-3 px-5 border-2 border-black text-[3vw] md:text-[2vw] lg:text-[1vw]"
      >
        Load More
      </button>
    </div>
  );
};

export default Positions;
