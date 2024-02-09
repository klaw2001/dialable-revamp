import Image from "next/image";
import React from "react";
import Business from "../Images/business-listing.png";
import Stacks from "../Images/stacks.png";
import { MdOutlineChevronRight } from "react-icons/md";
import Link from "next/link";
const BusinessListing = () => {
  return (
    <div className=" p-20 bg-[#FDF3EA]">
      <div className="flex  justify-center gap-28">
        <div className="w-1/2">
          <h3 className="text-xl font-medium montserrat leading-[3vw]">
            Discover
          </h3>
          <h2 className="text-[3vw] montserrat text-[#781393] font-bold leading-[3.5vw]">
            Find the Best Businesses Near You
          </h2>
        </div>
        <div className="w-1/2">
          <div>
            <p className="text-black roboto font-medium">
              {` Welcome to our business directory listing feature, designed to help
            you easily find the businesses you're looking for. Whether you need
            a plumber, a restaurant, or a clothing store, our directory has got
            you covered. Simply enter your location and browse through our
            extensive list of businesses to discover the best options near you.`}
            </p>
            <div className="flex items-baseline pt-10 pb-8 justify-between gap-7">
              <div className="flex items-start justify-center flex-col gap-5 w-[50%]">
                <div className="relative w-[3vw]">
                  <Image
                    src={Stacks}
                    alt="listing-icon-1"
                    objectFit="cover"
                    className="h-full w-full"
                  />
                </div>
                <h3 className="text-[1.2vw] montserrat text-[#781393] font-bold leading-9">
                  Search Now
                </h3>
                <p className="text-sm text-black font-normal text-left roboto">
                  Explore a Wide Range of Businesses in Your Area
                </p>
              </div>
              <div className="flex items-start justify-center flex-col gap-5 w-[50%]">
                <div className="relative w-[3vw]">
                  <Image
                    src={Stacks}
                    alt="listing-icon-1"
                    objectFit="cover"
                    className="h-full w-full"
                  />
                </div>
                <h3 className="text-[1.2vw] montserrat text-[#781393] font-bold leading-9">
                  Save Time
                </h3>
                <p className="text-sm text-black font-normal text-left roboto">
                  Find What You Need Quickly and Easily
                </p>
              </div>
            </div>
          </div>
          <div className="cta flex gap-6 items-center text-xs roboto">
            <button className="btn p-4 border bg-white border-black text-black ">
              Get Started
            </button>
            <Link href={"#"}>
              <div className="flex gap-1 items-center">
                <span>Sign Up</span>
                <MdOutlineChevronRight />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="img relative mt-16">
        <Image src={Business} alt="listing-img" placeholder="blur" objectFit="cover" />
      </div>
    </div>
  );
};

export default BusinessListing;
