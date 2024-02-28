import React from "react";

const OurNewsLetter = () => {
  return (
    <div className="p-10 lg:px-20 lg:py-32 bg-[#FFF6E5] flex flex-col lg:flex-row justify-center lg:justify-between">
      <div>
        <h1 className="text-black tracking-tight  capitalize text-[5.5vw] lg:text-[2.5vw] mb-1 lg:mb-3 font-bold">
         Join Our Newsletter
        </h1>
        <p className="font-medium  text-[3.5vw] lg:text-[1.2vw]  text-black ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="mt-4 lg:mt-0">
        <form action="" className="flex gap-1 lg:gap-4">
          <input
            type="text"
            placeholder="Your Email Address"
            className="box-shadow w-full lg:w-[20vw] px-4 py-3 text-black montserrat text-[2.8vw] lg:text-[.8vw] placeholder:text-black border focus-visible:outline-none"
          />
          <button
            type="submit"
            className="box-shadow text-white montserrat font-medium text-[2.95vw] w-[30vw] lg:w-[unset] lg:text-[.95vw] bg-black px-2 lg:px-6 py-3"
          >
            Get Started
          </button>
        </form>
        <p className="roboto mt-3 text-black text-[2.7vw] lg:text-[.7vw] font-medium">
          By clicking Get Started, you agree to our Terms and Conditions.
        </p>
      </div>
    </div>
  );
};

export default OurNewsLetter;
