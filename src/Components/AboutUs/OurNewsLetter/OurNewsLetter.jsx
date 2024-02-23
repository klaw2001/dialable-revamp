import React from "react";

const OurNewsLetter = () => {
  return (
    <div className="px-20 py-32 bg-[#FFF6E5] flex justify-between">
      <div>
        <h1 className="text-black tracking-tight  capitalize text-[2.5vw] mb-3 font-bold">
         Join Our Newsletter
        </h1>
        <p className="font-medium   text-[1.2vw]  text-black ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="">
        <form action="" className="flex gap-4">
          <input
            type="text"
            placeholder="Your Email Address"
            className="box-shadow w-[20vw] px-4 py-3 text-black montserrat text-[.8vw] placeholder:text-black border focus-visible:outline-none"
          />
          <button
            type="submit"
            className="box-shadow text-white montserrat font-medium text-[.95vw] bg-black px-6 py-3"
          >
            Get Started
          </button>
        </form>
        <p className="roboto mt-3 text-black text-[.7vw] font-medium">
          By clicking Get Started, you agree to our Terms and Conditions.
        </p>
      </div>
    </div>
  );
};

export default OurNewsLetter;
