import Link from "next/link";
import React from "react";
import categories from "./categories";
import Image from "next/image";
const TopCategories = () => {
  return (
    <div className="flex  items-center overflow-hidden relative p-6 lg:p-24  z-[3]">
      <div className="w-[90%] grow lg:grow-[.7] xl:grow-[.4]">
        <div className="flex items-baseline justify-between">
          <h1 className="text-black Sans font-semibold text-[6vw] md:text-[5vw] lg:text-[3.5vw]">
            Top Categories
          </h1>
          <button className="text-black montserrat shadow-xl font-bold lg:h-[3vw] p-2 md:p-3  btn text-[2vw] md:text-[1.5vw] lg:text-[1vw] lg:py-2 lg:px-4 leading-none border-[1.5px] border-black ">
            View all categories
          </button>
        </div>
        <div>
          <div className="flex items-center relative justify-center md:justify-start md:items-start gap-8 md:gap-2 lg:gap-12 lg:justify-start mt-16 flex-wrap ">
            {categories.map((category, i) => (
              <div key={i} className="flex flex-col md:my-2 lg:my-0 grow items-center">
                <div className="image_wrapper w-[30vw]  md:w-[12vw]">
                  <Image
                    src={category.img}
                    alt={category.title}
                    className="object-cover h-full w-full"
                  />
                </div>
                <p className="text-center montserrat text-[3vw] md:text-[1.8vw] lg:text-[1vw] font-bold">
                  {category.title}
                </p>
              </div>
            ))}
            <div className="flex fixed right-[-3%] md:right-[-3.5%] z-[20] top-[80%] gap-4 rotate-[-90deg] w-[10%] ">
              <Link
                href="#"
                className="text-white active:scale-[.95] transition-all duration-[.5s] box-shadow-2 bg-[#781393] rounded-lg md:rounded-xl text-[0.8rem] md:text-[1rem] lg:text-[1.3vw] font-semibold montserrat leading-none px-[1.35rem] py-4 lg:py-6"
              >
                Advertise
              </Link>
              <Link
                href="#"
                className="text-white active:scale-[.95] transition-all duration-[.5s] box-shadow-2 bg-[#FF6004] rounded-lg md:rounded-xl text-[0.8rem] md:text-[1rem] lg:text-[1.3vw] font-semibold montserrat leading-none px-[1.35rem] py-4 lg:py-6"
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
