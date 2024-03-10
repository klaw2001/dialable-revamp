import React from "react";
import Story_1 from "../../../../public/Images/story-1.png";
import Story_2 from "../../../../public/Images/story-2.png";
import Play from "../../../../public/Images/play.svg";
import Image from "next/image";
const Stories = () => {
  return (
    <div className="px-4 py-10  lg:py-20 lg:px-16 block md:flex justify-center items-center ">
      <div className=" stories block md:flex items-start md:gap-8 lg:gap-12 justify-center">
        <div className=" card grow lg:grow-0 rounded-[4px]  overflow-hidden mt-6 lg:mt-0  md:w-[20%]  lg:w-[25%]">
          <div className="img relative  w-[100%] ">
            <Image
              src={Story_1}
              width={400}
              height={600}
              alt="story_1"
              className="object-cover"
            />
          </div>
          <div className="story-info bg-[#FF6004] text-white p-4 relative  ">
            <div className="title_role ">
              <h2 className="montserrat text-[6vw] md:text-[2vw] lg:text-[1.5vw] font-semibold leading-[4.5vw] lg:leading-[1.7vw]">
                Mr. Jopesh Thomas
              </h2>
              <p className="montserrat text-[3.5vw] md:text-[1.5vw] lg:text-[.7vw] font-medium mb-4">
                Entrepreneur name
              </p>
            </div>
            <span className="montserrat font-normal text-[2.3vw] md:text-[1vw] lg:text-[.82vw]">
              Customer since 8 years
            </span>
            <button className=" rounded-full flex items-center bg-white border border-[#FF6004] py-3 px-3  active:scale-[.98] transition-[all.5s] absolute top-0  right-2 mt-[-10%]">
              <div className="w-[8vw] md:w-[3vw] lg:h-[2vw] lg:w-[2vw] p-1  relative flex items-center">
                <Image src={Play} alt="play" className="object-contain" />
              </div>
            </button>
          </div>
        </div>
        <div className="card grow lg:grow-0 rounded-[4px]  overflow-hidden mt-6 lg:mt-0  md:w-[20%]  lg:w-[25%]">
          <div className="img relative w-[100%] ">
            <Image
              src={Story_2}
              alt="story_2"
              width={400}
              height={600}
              className="object-cover"
            />
          </div>
          <div className="story-info bg-[#FF6004] text-white p-4 relative">
            <div className="title_role ">
              <h2 className="montserrat text-[6vw] md:text-[2vw] lg:text-[1.5vw] font-semibold leading-[4.5vw] lg:leading-[1.7vw]">
                Ms. Samantha Alee
              </h2>
              <p className="montserrat text-[3.5vw] md:text-[1.5vw] lg:text-[.7vw] font-medium mb-4">
                Entrepreneur name
              </p>
            </div>
            <span className="montserrat font-normal text-[2.3vw] md:text-[1vw] lg:text-[.82vw]">
              Customer since 10 years
            </span>
            <button className=" rounded-full flex items-center bg-white border border-[#FF6004] py-3 px-3  active:scale-[.98] transition-[all.5s] absolute top-0 right-2 mt-[-10%] ">
              <div className="w-[8vw] md:w-[3vw] lg:h-[2vw] lg:w-[2vw] p-1  relative flex items-center">
                <Image
                  src={Play}
                  alt="play"
                  className="object-contain h-full w-full"
                />
              </div>
            </button>
          </div>
        </div>
        <div className=" mt-10 lg:mt-8 w-full md:w-[40%]  lg:w-[30%] lg:ml-8">
          <h1 className="mb-6 Sans text-[8vw] md:text-[4vw] md:leading-[4.8vw]  lg:text-[2.5vw] leading-[8.8vw] lg:leading-[2.8vw] font-bold ">
            Success stories of Customers
          </h1>
          <h1 className="mb-8 montserrat font-normal text-[4vw] md:text-[2.5vw] lg:text-[1.5vw]">
            <span className="text-[6vw] md:text-[4vw] lg:text-[2vw] leading-[2.5vw] font-bold">
              10K+{" "}
            </span>
            businesses use Dialable to get closer to their customers.
          </h1>
          <button className="btn border-2 text-[#FF6004] font-medium text-[4.5vw] md:text-[2vw] lg:text-[1vw] border-[#FF6004] px-6 py-3">
            View all Stories
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stories;
