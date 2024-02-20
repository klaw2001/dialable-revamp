import Link from "next/link";
import React from "react";
import categories from "./categories";
import Image from "next/image";
const TopCategories = () => {
  return (
    <div className="flex  items-center overflow-hidden relative p-28 z-[3]">
      <div className="w-[90%]  lg:grow-[.7] xl:grow-[.4]">
        <div className="flex justify-between">
          <h1 className="text-black montserrat font-semibold lg:text-[3.5vw]">
            Top Categories
          </h1>
          <button className="text-black montserrat font-bold h-[4vw]  btn text-[1vw] py-2 px-4 leading-none border-[1.5px] border-black ">
            View all categories
          </button>
        </div>
        <div>
          <div className="flex items-center relative justify-between gap-16 mt-16 flex-wrap ">
            {categories.map((category, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="image_wrapper w-[10vw]">
                  <Image
                    src={category.img}
                    alt={category.title}
                    className="object-cover h-full w-full"
                  />
                </div>
                <p className="text-center montserrat text-[1vw] font-bold">
                  {category.title}
                </p>
              </div>
            ))}
            <div className="flex absolute right-[-16.5%]  top-[75%] gap-4 rotate-[-90deg] w-[10%] ">
              <Link
                href="#"
                className="btn text-black bg-[#FF8037] border rounded-lg border-black text-[1.5vw] font-semibold montserrat leading-none px-14 py-12"
              >
                Advertise
              </Link>
              <Link
                href="#"
                className="btn text-black bg-[#FF8038] border rounded-lg border-black text-[1.5vw] font-semibold montserrat leading-none px-12 py-12"
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
