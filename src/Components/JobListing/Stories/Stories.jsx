import React from "react";
import Story_1 from "../../../../public/Images/story-1.png";
import Story_2 from "../../../../public/Images/story-2.png";
import Play from "../../../../public/Images/play.svg";
import Image from "next/image";
const Stories = () => {
  return (
    <div className="py-20 lg:py-60 px-10 lg:px-24 block lg:flex ">
      <div className=" stories block lg:flex items-start gap-12">
        <div className=" card rounded-[4px]  overflow-hidden mt-6 lg:mt-0  lg:w-[26.33%]">
          <div className="img relative  w-[100%] ">
            <Image
              src={Story_1}
              alt="story_1"
              className="object-cover h-full w-full"
            />
          </div>
          <div className="story-info border-x-2 border-b-2 p-4 relative  ">
            <div className="title_role ">
              <h2 className="montserrat text-[6vw] lg:text-[1.35vw] font-semibold leading-[4.5vw] lg:leading-[1.7vw]">
                Mr. Jopesh Thomas
              </h2>
              <p className="montserrat text-[3.5vw] lg:text-[.85vw] font-medium mb-4">
                Entrepreneur name
              </p>
            </div>
            <span className="montserrat font-normal text-[2.3vw] lg:text-[.82vw]">
              Customer since 8 years
            </span>
            <button className="btn bg-white border border-[#FF6004] p-4 absolute top-0  right-2 mt-[-10%]">
              <div className="w-[4vw] lg:w-[2vw] relative flex items-center">
                <Image
                  src={Play}
                  alt="play"
                  className="object-contain h-full w-full"
                />
              </div>
            </button>
          </div>
        </div>
        <div className="card rounded-[4px]  overflow-hidden mt-6 lg:mt-0  lg:w-[26.33%]">
          <div className="img relative w-[100%] ">
            <Image
              src={Story_2}
              alt="story_2"
              className="object-cover h-full w-full"
            />
          </div>
          <div className="story-info border-x-2 border-b-2 p-4 relative">
            <div className="title_role ">
              <h2 className="montserrat text-[6vw] lg:text-[1.35vw] font-semibold leading-[4.5vw] lg:leading-[1.7vw]">
                Ms. Samantha Alee
              </h2>
              <p className="montserrat text-[3.5vw] lg:text-[.85vw] font-medium mb-4">
                Entrepreneur name
              </p>
            </div>
            <span className="montserrat font-normal text-[2.3vw] lg:text-[.82vw]">
              Customer since 10 years
            </span>
            <button className="btn bg-white border border-[#FF6004] p-4 absolute top-0 right-2 mt-[-10%] ">
              <div className="w-[4vw] lg:w-[2vw] relative flex items-center">
                <Image
                  src={Play}
                  alt="play"
                  className="object-contain h-full w-full"
                />
              </div>
            </button>
          </div>
        </div>
        <div className="lg:w-[40.34%] mt-10 lg:mt-8 lg:ml-8">
          <h1 className="mb-6 montserrat text-[8vw]  lg:text-[3vw] leading-[8.8vw] lg:leading-[2.8vw] font-bold ">
            Success stories of Customers
          </h1>
          <h1 className="mb-8 montserrat font-medium text-[4vw] lg:text-[1.8vw]">
            <span className="text-[6vw] lg:text-[3vw] leading-[2.8vw] font-bold">10K+ </span>
            businesses use Dialable to get closer to their customers.
          </h1>
          <button className="btn border-2 text-[#FF6004] font-medium text-[4.5vw] lg:text-[1vw] border-[#FF6004] px-6 py-3">
            View all Stories
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stories;
