import React from "react";

const NewsLetter = () => {
  return (
    <div className="p-32">
      <div className="flex items-center flex-col bg-[#FFF6E5] p-10">
        <h1 className="text-black text-center font-bold text-[3vw] montserrat">
          Subscribe to our Newsletter
        </h1>
        <p className="text-[1vw] roboto text-black font-normal text-center">
          Join with our community and stay updated with latest news and
          opportunities
        </p>
        <div className="mt-8">
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
        </div>
        <p className="roboto mt-3 text-black text-[.7vw] font-medium">By clicking Get Started, you agree to our Terms and Conditions.</p>

      </div>
    </div>
  );
};

export default NewsLetter;
