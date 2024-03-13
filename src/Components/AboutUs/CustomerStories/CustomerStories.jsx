import React from "react";
import webflow from "../../../../public/Images/webflow.svg";
import relume from "../../../../public/Images/relume.svg";
import beds from "../../../../public/Images/rentalProducts/beds.png";
import Image from "next/image";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";
const CustomerStories = () => {
  return (
    <div className="p-6 lg:py-18 lg:px-14">
      <div className="flex items-start flex-col Inter">
        <h3 className=" font-semibold text-black tracking-tight capitalize text-[3vw] md:text-[2vw] lg:text-[.8vw] mb-3 ">
          Case studies
        </h3>
        <h1 className="text-black tracking-tight Sans capitalize text-[6vw] md:text-[4.5vw] lg:text-[1.5vw]  lg:mb-3 font-bold">
          Customer stories
        </h1>
        <p className="font-normal text-[3.2vw] md:text-[2.2vw] lg:text-[.9vw] w-full lg:w-[60%] text-black ">
          {`Read how Dialable's solutions have transformed accessibility through real-world case studies.`}
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-center my-10 md:m-15 lg:my-20 gap-8">
        <div className="story border-2 p-6 bg-[#F4EBFF] border-[#781393]">
          <div className="img w-[20vw] md:w-[15vw] lg:w-[8vw]">
            <Image
              src={webflow}
              alt="webflow"
              className="object-cover h-full w-full"
            />
          </div>
          <p className="text-[3.3vw] md:text-[2.3vw] lg:text-[1.3vw] text-black font-medium mt-5 lg:mt-10">
            {`"As a visually impaired individual, I've often struggled to find businesses that cater to my needs. Dialable's comprehensive listings and detailed accessibility information have been a game-changer for me. Now, I can confidently explore my city knowing that I'll be able to access the services I need. Thank you, Dialable, for making accessibility a priority"`}
            </p>
          <div className="flex gap-2 md:gap-3 lg:gap-4 mt-8">
            <div className="img  w-[12vw] md:w-[8vw] lg:w-[3vw]">
              <Image
                src={beds}
                alt="dummy"
                className="object-cover h-full w-ful"
              />
            </div>
            <div className="montserrat capitalize black">
              <p className="text-black text-[3vw] md:text-[2vw] lg:text-[.8vw] font-semibold">
                name surname
              </p>
              <span className="text-black text-[3vw] md:text-[2vw] lg:text-[.8vw] font-normal">
                position, company name
              </span>
            </div>
          </div>
          <Link href={"#"} className="flex gap-4 items-center mt-4">
            <span className="text-black font-medium">Read Full Story</span>
            <FaAngleRight />
          </Link>
        </div>
        <div className="story border-2 p-6 bg-[#F4EBFF] border-[#781393]">
          <div className="img w-[20vw] md:w-[15vw]  lg:w-[8vw]">
            <Image
              src={relume}
              alt="webflow"
              className="object-cover h-full w-full"
            />
          </div>
          <p className="text-[3.3vw] md:text-[2.3vw] lg:text-[1.3vw] text-black font-medium mt-10">
            {`"As a business owner, I was hesitant about the impact of listing on Dialable. However, after joining their platform, I've seen a noticeable increase in foot traffic and engagement from customers with disabilities. Dialable's commitment to inclusivity not only benefits the community but also drives real business growth."`}
            </p>
          <div className="flex gap-2 md:gap-3 lg:gap-4 mt-8">
            <div className="img w-[12vw] md:w-[8vw] lg:w-[3vw]">
              <Image
                src={beds}
                alt="dummy"
                className="object-cover h-full w-ful"
              />
            </div>
            <div className="montserrat capitalize black">
              <p className="text-black text-[3vw] md:text-[2vw] lg:text-[.8vw] font-semibold">
                name surname
              </p>
              <span className="text-black text-[3vw] md:text-[2vw] lg:text-[.8vw] font-normal">
                position, company name
              </span>
            </div>
          </div>
          <Link href={"#"} className="flex gap-4 items-center mt-4">
            <span className="text-black font-medium">Read Full Story</span>
            <FaAngleRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CustomerStories;
