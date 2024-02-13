import React from "react";
import ConnectBg from "../../public/Images/connect.png";
import Image from "next/image";
const ConnectUs = () => {
  return (
    <div
      className={`m-20 border-2 h-[40vw] lg:h-[24.6vw] relative  gap-4 after:content-[""] after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-[#781393] after:opacity-[.63]`}
    >
      <div className="relative h-full w-full">
        <Image
          src={ConnectBg}
          alt="connect"
         
          className="h-full w-full object-cover "
        />
      </div>
      <div className="absolute top-[50%] w-[60%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-[2] text-center p-8">
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
        <p className="text-white text-[.7vw] mt-[-15px] roboto">By clicking Get Started, you agree to our Terms and Conditions.</p>
      </div>
    </div>
  );
};

export default ConnectUs;
