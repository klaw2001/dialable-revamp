import Link from "next/link";
import React from "react";

const BusinessBanner = () => {
  return (
    <div className="flex f items-center flex-col md:flex-row px-4 py-8 lg:px-10 lg:py-14 bg-[#F4EBFF]">
      <div className="w-full md:w-[50%]">
        <div className="breadcrumb  text-[2.4vw] md:text-[1.5vw] lg:text-[.9vw] text-black font-semibold montserrat">
          <Link href={"/"}>Home</Link> {`>`} Businesses {`>`} Mumbai {`>`} 106+
          Listings
        </div>
        <h1 className="Sans my-5 text-black text-[6vw] md:w-[50%] md:text-[4.5vw] font-bold md:leading-[4.8vw] lg:leading-[3.2vw] lg:text-[3vw]">
          Top Business in Mumbai
        </h1>
      </div>
      <div className="w-full md:w-[50%]">
        <p className="text-[3vw] md:text-[1.5vw] lg:text-[1vw] montserrat text-black font-medium ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.{" "}
        </p>
      </div>
    </div>
  );
};

export default BusinessBanner;
