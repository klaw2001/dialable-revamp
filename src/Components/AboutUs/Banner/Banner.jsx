import BreadCrumb from "@/Components/BreadCrumb";
import React from "react";
import story from "../../../../public/Images/story.png";
import Image from "next/image";
const Banner = () => {
  return (
    <div className="relative after:content-[''] after:absolute lg:after:h-[100%] xl:after:h-[100%] after:w-full after:top-0 after:left-0 after:bg-[#00000099]">
      <Image
        src={story}
        alt="our-story-bg"
        className="object-cover h-full w-full"
      />

      <div className="flex items-center absolute z-[90]  top-[50%] translate-x-[-50%] left-[50%] translate-y-[-50%]   flex-col gap-2 p-20">
        <h1 className="text-white Sans text-[6vw] lg:text-[3.5vw] font-bold">Our Story</h1>
        <BreadCrumb
          homeElement={"Home"}
          separator={<span className="text-white font-bold"> / </span>}
          activeClasses="text-white"
          containerClasses="flex py-0 text-[3vw] lg:text-[1.5vw] lg:py-5"
          listClasses="hover:underline mx-2 font-bold"
          capitalizeLinks
        />
      </div>
    </div>
  );
};

export default Banner;
