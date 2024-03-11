import Image from "next/image";
import React from "react";
import chart from "../../../../public/Images/chart.png";
import badgeOne from "../../../../public/Images/badge1.svg";
import badgeTwo from "../../../../public/Images/badge2.svg";
import badgeThree from "../../../../public/Images/badge3.svg";
const Competition = () => {
  return (
    <div className="px-4 py-10 lg:px-10 lg:py-16">
      <h1 className="text-center Sans text-[6vw] md:text-[4.5vw] lg:text-[3vw] font-bold">
        Get ahead of your Competition
      </h1>
      <div className="flex flex-col md:flex-row items-center my-6 justify-center gap-4">
        <div className="search montserrat">
          <form action="">
            <input
              type="text"
              placeholder="&#xF002; Enter Category"
              style={{ fontFamily: "Inter,FontAwesome" }}
              className="py-2 montserrat border border-[rgba(0,0,0,0.25)] px-4"
            />
          </form>
        </div>
        <div className="search montserrat">
          <form action="">
            <input
              type="text"
              placeholder="&#xF002; Enter City/area name"
              style={{ fontFamily: "Inter,FontAwesome" }}
              className="py-2 montserrat border border-[rgba(0,0,0,0.25)] px-4"
            />
          </form>
        </div>
      </div>
      <div className="flex md:flex-row flex-col items-center gap-4">
        <div className="p-3 border-2 my-2 md:my-0 md:w-[50%]">
          <h1 className="text-[4vw] montserrat font-semibold md:text-[2.5vw] lg:text-[1.5vw]">
            Count of Leads
          </h1>
          <p className="text-[3vw] montserrat font-medium md:text-[2vw] lg:text-[1.06vw]">
            Leads Generated in Interior Designers
          </p>
          <p className="text-[3vw] text-[#FF6004] mt-3 montserrat font-medium md:text-[2vw] lg:text-[1.06vw]">
            13,877
          </p>
          <div className="flex items-center gap-2 mt-2">
            <div className="py-1  px-3 border border-[#781393] bg-[#F4EBFF]">
              <p className="montserrat font-semibold text-black text-[2.06vw] md:text-[1.06vw] lg:text-[0.8vw]">
                3M
              </p>
            </div>
            <div className="py-1  px-3 border border-black bg-transparent">
              <p className="montserrat font-semibold text-black text-[2.06vw] md:text-[1.06vw] lg:text-[0.8vw]">
                3M
              </p>
            </div>
          </div>
          <div className="img w-full my-1">
            <Image
              src={chart}
              className="object-cover mix-blend-lighten h-full w-full"
              alt="barchart"
            />
          </div>
        </div>
        <div className="p-3 border-2 my-2 md:my-0 w-full md:w-[50%]">
          <h1 className="text-[4vw] montserrat font-semibold md:text-[2.5vw] lg:text-[1.5vw]">
            Leaderboard
          </h1>
          <p className="text-[3vw] montserrat font-medium md:text-[1.5vw] lg:text-[1.06vw]">
            Interior Designers Leaderboard in Mumbai
          </p>
          <p className="text-[2.9vw] text-black montserrat font-medium md:text-[1.5vw] lg:text-[0.9vw]">
            19-Feb-2024 to 25-Feb-2024
          </p>
          <div className="flex justify-between py-2 px-4 bg-[#F4EBFF] my-3 lg:my-4">
            <p className="montserrat font-semibold text-black  text-[3vw] md:text-[1.06vw] lg:text-[0.92vw]">
              Rank
            </p>
            <p className="montserrat font-semibold text-black  text-[3vw] md:text-[1.06vw] lg:text-[0.92vw]">
              Business Name
            </p>
            <p className="montserrat font-semibold text-black  text-[3vw] md:text-[1.06vw] lg:text-[0.92vw]">
              Leads
            </p>
          </div>
          <div className="py-0 lg:py-3">
            <div className="flex justify-between items-center py-2 px-4 border border-black my-2 lg:my-4">
              <div className="w-[3vw] md:w-[1.2vw]">
                <Image src={badgeOne} className="object-cover h-full w-full" alt="badge_1"/>
              </div>
              <p className="montserrat font-medium text-black  text-[3vw] md:text-[1.06vw] lg:text-[0.92vw]">
                Bonito Design
              </p>
              <p className="montserrat font-medium text-black  text-[3vw] md:text-[1.06vw] lg:text-[0.92vw]">
                156
              </p>
            </div>
            <div className="flex justify-between items-center py-2 px-4 border border-black my-2 lg:my-4">
              <div className="w-[3vw] md:w-[1.2vw]">
                <Image src={badgeTwo} className="object-cover h-full w-full" alt="badge_1"/>
              </div>
              <p className="montserrat font-medium text-black  text-[3vw] md:text-[1.06vw] lg:text-[0.92vw]">
                Interior Company
              </p>
              <p className="montserrat font-medium text-black  text-[3vw] md:text-[1.06vw] lg:text-[0.92vw]">
                96
              </p>
            </div>
            <div className="flex justify-between items-center py-2 px-4 border border-black my-2 lg:my-4">
              <div className="w-[3vw] md:w-[1.2vw]">
                <Image src={badgeThree} className="object-cover h-full w-full" alt="badge_1"/>
              </div>
              <p className="montserrat font-medium text-black  text-[3vw] md:text-[1.06vw] lg:text-[0.92vw]">
              Dreams On Interiors & Designers
              </p>
              <p className="montserrat font-medium text-black  text-[3vw] md:text-[1.06vw] lg:text-[0.92vw]">
                24
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Competition;
