import React from "react";
import ConnectBg from "../Images/connect.png";
import Image from "next/image";
const ConnectUs = () => {
  return (
    <div
      className={`m-20 border-2  relative   gap-4 after:content-[""] after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-[#781393] after:opacity-[.63]`}
    >
      <div className="relative">
        <Image
          src={ConnectBg}
          alt="connect"
          objectFit="cover"
          className="h-full w-full"
        />
      </div>
      <div className="absolute top-[50%] w-[60%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-[2] text-center">
        <h1 className="text-[3vw] mb-4 montserrat font-bold leading-[3vw]">
          Discover Opportunities and Connect Easily
        </h1>
        <p className="roboto font-normal text-[1.2vw] mb-2">
          Join our community and stay updated with the latest news and
          opportunities
        </p>
        <div className="flex items-center justify-center gap-2 my-6 montserrat">
          <input placeholder="Your Email Address" type="text" className="py-4 px-6 text-black placeholder:text-black" />
          <button className="btn bg-[#781393] py-4 px-6 text-[1vw] border border-white font-medium text-white montserrat">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConnectUs;
