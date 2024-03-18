import React from "react";
import storyImg from "../../../../public/Images/job-portal.png";
import Image from "next/image";
import Link from "next/link";
const OurStory = () => {
  return (
    <div className="flex flex-col justify-center items-center lg:flex-row gap-4 lg:gap-20 p-6 md:px-6 overflow-x-clip  lg:py-14 lg:px-14">
      <div className="order-1 lg:order-first lg:w-[50%] my-8 lg:my-16 Inter">
        <h3 className="text-black tracking-tight capitalize text-[3vw] md:text-[2vw] lg:text-[0.8vw] mb-1 lg:mb-3 font-semibold">
          About us
        </h3>
        <h1 className="text-black tracking-tight Sans capitalize text-[5vw] md:text-[3.5vw] lg:text-[1.5vw]  font-bold">
          Who We Are
        </h1>
        <div>
          <p className="font-normal my-6 text-[3.2vw] md:text-[2.2vw] lg:text-[.9vw] text-black ">
            {`In a digital landscape bustling with directories, Dialable emerges as a beacon of inclusivity and accessibility. Designed as a formidable contender against industry giants, Dialable takes a revolutionary approach, focusing on the often-overlooked needs of individuals with disabilities. Our platform isn't just about business listings; it's about empowerment and connection. With a user-centric interface tailored to accommodate diverse abilities, Dialable ensures that every search yields results catered to the unique needs of each user. Whether it's finding wheelchair-accessible restaurants, deaf-friendly businesses, or sensory-friendly attractions, Dialable is the gateway to a more inclusive world.`}
          </p>
          <p className="font-normal my-6 text-[3.2vw] md:text-[2.2vw] lg:text-[.9vw] text-black ">
           {` At Dialable, we believe in harnessing the power of technology to
            foster genuine connections and opportunities for all. Beyond merely
            listing businesses, our platform features a dynamic marketplace
            where businesses can showcase their products and services,
            specifically tailored to cater to the disability community.From
            adaptive technologies to inclusive services, our marketplace
            amplifies the voices of businesses committed to accessibility,
            creating a space where customers with disabilities can shop, engage,
            and thrive. With Dialable, inclusivity isn't just a feature – it's
            our mission. Join us as we pave the way for a more accessible and
            equitable future, one listing at a time.`}
          </p>
        </div>
      </div>
      <div className=" relative text-right">
        <Image
          src={storyImg}
          width={400}
          height={400}
          loading="lazy"
          alt="about.png"
          className="object-cover md:object-contain lg:object-cover"
        />

        <div className="flex fixed right-[-2%] lg:right-[-3.5%] z-[20] top-[80%] gap-4 rotate-[-90deg] w-[10%] ">
          <Link
            href="#"
            className="text-white active:scale-[.95] transition-all duration-[.5s] box-shadow-2 bg-[#781393]  rounded-xl text-[0.8rem] md:text-[1rem] lg:text-[1.3vw] font-semibold montserrat leading-none px-[1.35rem] py-4 lg:py-6"
          >
            Advertise
          </Link>
          <Link
            href="#"
            className="text-white active:scale-[.95] transition-all duration-[.5s] box-shadow-2 bg-[#FF6004]  rounded-xl text-[0.6rem] md:text-[1rem] lg:text-[1.3vw] font-semibold montserrat leading-none px-[1.35rem] py-4 lg:py-6"
          >
            Free&nbsp;Listing
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
