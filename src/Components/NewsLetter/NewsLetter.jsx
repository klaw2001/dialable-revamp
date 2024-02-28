import React from "react";

const NewsLetter = () => {
  return (
    <div className="p-0 lg:p-32">
      <div className="flex items-center flex-col bg-[#fff6e5] p-10">
        <h1 className="text-black text-center font-bold text-[6vw] lg:text-[3vw] montserrat">
          Subscribe to our Newsletter
        </h1>
        <p className="text-[3vw] lg:text-[1vw] roboto text-black font-normal text-center">
          Join with our community and stay updated with latest news and
          opportunities
        </p>
        <div className="mt-8">
          <form action="" className="flex gap-2 lg:gap-4">
            <input
              type="text"
              placeholder="Your Email Address"
              className="box-shadow w-full lg:w-[20vw] px-4 py-3 text-black montserrat text-[2.8vw] lg:text-[.8vw] placeholder:text-black border focus-visible:outline-none"
            />
            <button
              type="submit"
              className="box-shadow text-white montserrat font-medium text-[1.95vw] lg:text-[.95vw] bg-black px-3 w-[50vw] lg:w-[unset] lg:px-6 py-1 lg:py-3"
            >
              Get Started
            </button>
          </form>
        </div>
        <p className="roboto mt-3 text-black text-[1.7vw] lg:text-[.7vw] font-medium">By clicking Get Started, you agree to our Terms and Conditions.</p>

      </div>
    </div>
  );
};

export default NewsLetter;