import Link from "next/link";
import React from "react";

const JobBanner = () => {
  return (
    <div className="flex flex-col px-4 py-8 lg:px-10 lg:py-14 bg-[#781393]">
      <div className="breadcrumb  text-[2.4vw] md:text-[1.5vw] lg:text-[.9vw] text-white font-semibold montserrat">
        <Link href={"/"}>Home</Link> {`>`} Jobs
      </div>
      <h1 className="Sans my-5 text-white text-[6vw] md:w-[50%] md:text-[4.5vw] font-bold md:leading-[4.8vw] lg:leading-[3.2vw] lg:text-[3vw]">Your Ulimate Job Search Companion</h1>
      <p className="text-[3vw] md:text-[1.5vw] lg:text-[1vw] montserrat text-white font-medium md:w-[45%]">Explore the latest job openings and apply for the best job opportunities available today! </p>
    </div>
  );
};

export default JobBanner;
