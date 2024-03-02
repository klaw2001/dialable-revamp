import Link from "next/link";
import React from "react";
import categories from "./categories";
import Image from "next/image";
const TopCategories = () => {
  return (
    <div className="flex  items-center overflow-hidden relative p-10 md:p-18 lg:p-28 z-[3]">
      <div className="w-[90%] grow lg:grow-[.7] xl:grow-[.4]">
        <div className="flex justify-between">
          <h1 className="text-black Sans font-semibold text-[6vw] md:text-[5vw] lg:text-[3.5vw]">
            Top Categories
          </h1>
          <button className="text-black montserrat shadow-xl font-bold lg:h-[4vw] p-2 md:p-3  btn text-[2vw] md:text-[1.5vw] lg:text-[1vw] lg:py-2 lg:px-4 leading-none border-[1.5px] border-black ">
            View all categories
          </button>
        </div>
        <div>
          <div className="flex items-center relative justify-center md:justify-between gap-8 lg:gap-16 mt-16 flex-wrap ">
            {categories.map((category, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="image_wrapper w-[30vw] md:w-[20vw] lg:w-[10vw]">
                  <Image
                    src={category.img}
                    alt={category.title}
                    className="object-cover h-full w-full"
                  />
                </div>
                <p className="text-center montserrat text-[3vw] md:text-[2vw] lg:text-[1vw] font-bold">
                  {category.title}
                </p>
              </div>
            ))}
            <div className="flex absolute right-[-14%] lg:right-[-16.5%]  top-[75%] gap-4 rotate-[-90deg] w-[10%] ">
              <Link
                href="#"
                className="btn text-white box-shadow-2 bg-[#781393]  rounded-lg  text-[2vw] font-semibold montserrat leading-none px-12 py-4 lg:py-10"
              >
                Advertise
              </Link>
              <Link
                href="#"
                className="btn text-white box-shadow-2 bg-[#FF8038]  rounded-lg  text-[2vw] font-semibold montserrat leading-none px-12 py-4 lg:py-10"
              >
                Free&nbsp;Listing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCategories;
