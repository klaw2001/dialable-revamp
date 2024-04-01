import React from "react";
import accessories from "../../../../public/Images/accessories.png";
import homeDecor from "../../../../public/Images/home-decor.png";
import artifacts from "../../../../public/Images/artifacts.png";
import paints from "../../../../public/Images/paints.png";
import fashion from "../../../../public/Images/fashion.png";
import Image from "next/image";

const FeaturedCategories = () => {
  return (
    <div className="px-10 pt-20 pb-10 overflow-hidden">
      <h1 className="text-black Sans font-bold text-[2vw] text-center">
        Featured Categories
      </h1>
      <div className="mt-8 flex items-start relative justify-center gap-6">
        <div className="w-[40%] grow-[.09]">
          <div className="relative w-full">
            <Image
              src={homeDecor}
              className="h-full w-full"
              alt="home decor"
            />
          </div>
          <p className="text-white absolute bottom-[4%] left-[8%]  montserrat font-medium text-[1.5vw]">
            {" "}
            Home Decor
          </p>
        </div>
        <div className="w-[45%] grow-[.09] flex justify-evenly items-center gap-6 flex-wrap">
          <div className="w-[42%]  relative">
            <div>
              <Image
                src={artifacts}
                className="object-cover h-full w-full"
                alt="home decor"
              />
            </div>
            <p className="text-white absolute bottom-[5%] left-[5%] montserrat font-medium text-[1.5vw]">
              {" "}
              Artifacts
            </p>
          </div>
          <div className="w-[42%]  relative ">
            <div>
              <Image
                src={paints}
                className="object-cover h-full w-full"
                alt="home decor"
              />
            </div>
            <p className="text-white absolute bottom-[5%] left-[5%] montserrat font-medium text-[1.5vw]">
              {" "}
              Paints
            </p>
          </div>
          <div className="w-[42%]  relative">
            <div>
              <Image
                src={fashion}
                className="object-cover h-full w-full"
                alt="home decor"
              />
            </div>

            <p className="text-white absolute bottom-[5%] left-[5%] montserrat font-medium text-[1.5vw]">
              {" "}
              Fashion
            </p>
          </div>

          <div className="w-[42%]  relative">
            <div>
              <Image
                src={accessories}
                className="object-cover h-full w-full"
                alt="home decor"
              />
            </div>
            <p className="text-white absolute bottom-[5%] left-[5%] montserrat font-medium text-[1.5vw]">
              {" "}
              Accessories
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCategories;
