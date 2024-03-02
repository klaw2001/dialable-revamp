import React from "react";

const NewsLetter = ({ className, formClass ,heading, color }) => {
  return (
    <div>
      <div className={className}>
        <div>
          <h1 className="Sans text-center font-bold text-[6vw] md:text-[4.5vw] lg:text-[3vw] montserrat">
            {heading}
          </h1>
          <p className="text-[3vw] mt-2 Inter md:text-[2vw] lg:text-[.8vw] roboto  font-normal text-center">
            Join with our community and stay updated with latest news and
            opportunities
          </p>
        </div>
        <div className={formClass}>
          <div className="">
            <form action="" className="flex gap-2 lg:gap-4">
              <input
                type="text"
                placeholder="Your Email Address"
                className="box-shadow w-full md:w-[90%] lg:w-[20vw] px-4 py-3 text-black montserrat text-[2.8vw] md:text-[2vw] lg:text-[.8vw] placeholder:text-black border focus-visible:outline-none"
              />
              <button
                type="submit"
                className="box-shadow text-white montserrat font-medium text-[1.95vw] md:text-[1.5vw] lg:text-[.95vw] bg-black px-3 w-[50vw] md:w-[30vw] lg:w-[unset] lg:px-6 py-1 lg:py-3"
              >
                Get Started
              </button>
            </form>
          </div>
          <p className={`roboto mt-2 ${color} text-[1.7vw] md:text-[1.3vw] lg:text-[.7vw] font-medium`}>
            By  clicking  Get  Started,  you  agree  to  our  Terms  and  Conditions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
