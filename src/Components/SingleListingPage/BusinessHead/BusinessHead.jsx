import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaRegShareFromSquare } from "react-icons/fa6";

const BusinessHead = () => {
  return (
    <div className="flex border-b border-gray-300 items-center gap-10 md:gap-20 lg:gap-36 p-4 lg:px-10 lg:py-12 flex-wrap">
      <div className="flex items-center gap-3 ">
        <div className="img">
          <Image src={""} height={100} width={150} alt="img" />
        </div>
        <div className="content">
          <h4 className="text-[5vw]  lg:text-[2.1vw]  text-black font-semibold Sans">
            Jawed Habib Hair & Beauty
          </h4>
          <p className="text-black montserrat font-medium text-[2vw] lg:text-[1vw]">
            Popular restraunt, California
          </p>
        </div>
      </div>
      <div className="reviews flex flex-col gap-1 grow lg:grow-0">
        <div className="flex montserrat text-gray-900 transition-all items-center hover:text-black gap-1">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <Link
            href={"#reviews"}
            className="transition-[all.5s] hover:underline"
          >
            <span className="text-black montserrat font-medium text-[2vw] lg:text-[1vw]">
              (02 reviews)
            </span>
          </Link>
        </div>
        <div className="flex items-center montserrat text-black font-medium  gap-2">
          <div>
            <IoLocationSharp />
          </div>
          <span className="text-black montserrat font-medium text-[2vw] lg:text-[1vw]">
            {" "}
            California, USA
          </span>
        </div>
        <div className="flex items-center montserrat text-black font-medium  gap-2">
          <div>
            <FaPhoneAlt />
          </div>
          <Link href={"tel:798098089"} className="underline ">
            <span className="text-black montserrat font-medium text-[2vw] lg:text-[1vw]">
              {" "}
              8700376389
            </span>
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-end gap-2 grow ">
        <button className="p-4 border text-black font-medium flex items-center justify-center text-[5vw] transition-[all.5s] active:scale-[.98] lg:text-[3vw] border-black h-16 w-16">
          <IoMdHeartEmpty  />
        </button>
        <button className="p-4 border text-black font-medium flex items-center justify-center text-[5vw] transition-[all.5s] active:scale-[.98] lg:text-[3vw] border-black h-16 w-16">
          <FaRegShareFromSquare />
        </button>
      </div>
    </div>
  );
};

export default BusinessHead;
