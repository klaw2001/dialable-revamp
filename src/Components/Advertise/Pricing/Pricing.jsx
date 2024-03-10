import React from "react";
import check from "../../../../public/Images/black-check.svg";
import Image from "next/image";
const Pricing = () => {
  return (
    <div className="px-4 py-10 md:px-10  md:py-16 bg-[#F4EBFF]">
      <div>
        <h1 className="text-center Sans text-[6vw] md:text-[4.5vw] lg:text-[3vw] font-bold">
          Features
        </h1>
        <p className="text-[3vw] md:text-[2vw] text-center lg:text-[1vw] text-black">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center mt-6 justify-center md:gap-6 lg:gap-10">
        <div className="price-card my-4 md:my-0 p-4 border border-black md:h-[70vh]  lg:h-[30vw] w-full md:w-[33vw]">
          <div className="pb-4">
            <h1 className="text-[3vw] font-bold md:text-[2vw] lg:text-[1vw]">
              Basic Plan
            </h1>
            <p className="text-[2.5vw] md:text-[1.9vw] lg:text-[.9vw]">
              Lorem ipsum dolor sit amet
            </p>
          </div>
          <div className="py-3 border-y border-black">
            <p className="text-[3.5vw] md:text-[2.5vw] text-black font-semibold lg:text-[1.5vw]">
              <span className="text-[4.5vw] md:text-[3.5vw] lg:text-[2.5vw]">
                ₹99
         </span>
              /day
            </p>
            <p className="text-[2.5vw] font-medium md:text-[1.9vw] lg:text-[.9vw]">
              standard
            </p>
            <button className="p-2 my-4 lg:py-3 lg:px-4 bg-[#781393] w-full  text-white font-normal">
              Get Started
            </button>
          </div>
          <ul className="my-4">
            <li className="flex items-center my-2 gap-3">
         <div className="md:w-[2vw] lg:w-[1vw]">
                <Image
                  src={check}
                  alt="check-icon"
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="text-[2.5vw] md:text-[1.4vw] lg:text-[.9vw]">
                Lorem ipsum dolor sit amet
              </p>
            </li>
            <li className="flex items-center my-2 gap-3">
         <div className="md:w-[2vw] lg:w-[1vw]">
                <Image
                  src={check}
                  alt="check-icon"
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="text-[2.5vw] md:text-[1.4vw] lg:text-[.9vw]">
                Lorem ipsum dolor sit amet
              </p>
            </li>
            <li className="flex items-center my-2 gap-3">
              <div className="md:w-[2vw] lg:w-[1vw]">
                <Image
                  src={check}
                  alt="check-icon"
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="text-[2.5vw] md:text-[1.4vw] lg:text-[.9vw]">
                Lorem ipsum dolor sit amet
              </p>
            </li>
            <li className="flex items-center my-2 gap-3">
              <div className="md:w-[2vw] lg:w-[1vw]">
                <Image
                  src={check}
                  alt="check-icon"
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="text-[2.5vw] md:text-[1.4vw] lg:text-[.9vw]">
                Lorem ipsum dolor sit amet
              </p>
            </li>
          </ul>
        </div>
        <div className="price-card my-4 md:my-0 p-4 border border-black md:h-[70vh]  lg:h-[30vw] w-full md:w-[33vw]">
          <div className="pb-4">
            <h1 className="text-[3vw] font-bold md:text-[2vw] lg:text-[1vw]">
              Basic Plan
            </h1>
            <p className="text-[2.5vw] md:text-[1.9vw] lg:text-[.9vw]">
              Lorem ipsum dolor sit amet
            </p>
          </div>
          <div className="py-3 border-y border-black">
            <p className="text-[3.5vw] md:text-[2.5vw] text-black font-semibold lg:text-[1.5vw]">
              <span className="text-[4.5vw] md:text-[3.5vw] lg:text-[2.5vw]">
                ₹99
         </span>
              /day
            </p>
            <p className="text-[2.5vw] font-medium md:text-[1.9vw] lg:text-[.9vw]">
              standard
            </p>
            <button className="p-2 my-4 lg:py-3 lg:px-4 bg-[#781393] w-full  text-white font-normal">
              Get Started
            </button>
          </div>
          <ul className="my-4">
            <li className="flex items-center my-2 gap-3">
         <div className="md:w-[2vw] lg:w-[1vw]">
                <Image
                  src={check}
                  alt="check-icon"
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="text-[2.5vw] md:text-[1.4vw] lg:text-[.9vw]">
                Lorem ipsum dolor sit amet
              </p>{" "}
            </li>
            <li className="flex items-center my-2 gap-3">
         <div className="md:w-[2vw] lg:w-[1vw]">
                <Image
                  src={check}
                  alt="check-icon"
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="text-[2.5vw] md:text-[1.4vw] lg:text-[.9vw]">
                Lorem ipsum dolor sit amet
              </p>{" "}
            </li>
            <li className="flex items-center my-2 gap-3">
         <div className="md:w-[2vw] lg:w-[1vw]">
                <Image
                  src={check}
                  alt="check-icon"
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="text-[2.5vw] md:text-[1.4vw] lg:text-[.9vw]">
                Lorem ipsum dolor sit amet
              </p>{" "}
            </li>
            <li className="flex items-center my-2 gap-3">
              <div className="md:w-[2vw] lg:w-[1vw]">
                <Image
                  src={check}
                  alt="check-icon"
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="text-[2.5vw] md:text-[1.4vw] lg:text-[.9vw]">
                Lorem ipsum dolor sit amet
              </p>{" "}
            </li>
            <li className="flex items-center my-2 gap-3">
              <div className="md:w-[2vw] lg:w-[1vw]">
                <Image
                  src={check}
                  alt="check-icon"
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="text-[2.5vw] md:text-[1.4vw] lg:text-[.9vw]">
                Lorem ipsum dolor sit amet
              </p>{" "}
            </li>
          </ul>
        </div>
        <div className="price-card my-4 md:my-0 p-4 border border-black md:h-[70vh]  lg:h-[30vw] w-full md:w-[33vw]">
          <div className="pb-4">
            <h1 className="text-[3vw] font-bold md:text-[2vw] lg:text-[1vw]">
              Basic Plan
            </h1>
            <p className="text-[2.5vw] md:text-[1.9vw] lg:text-[.9vw]">
              Lorem ipsum dolor sit amet
            </p>
          </div>
          <div className="py-3 border-y border-black">
            <p className="text-[3.5vw] md:text-[2.5vw] text-black font-semibold lg:text-[1.5vw]">
              <span className="text-[4.5vw] md:text-[3.5vw] lg:text-[2.5vw]">
                ₹99
         </span>
              /day
            </p>
            <p className="text-[2.5vw] font-medium md:text-[1.9vw] lg:text-[.9vw]">
              standard
            </p>
            <button className="p-2 my-4 lg:py-3 lg:px-4 bg-[#781393] w-full  text-white font-normal">
              Get Started
            </button>
          </div>
          <ul className="my-4">
            <li className="flex items-center my-2 gap-3">
         <div className="md:w-[2vw] lg:w-[1vw]">
                <Image
                  src={check}
                  alt="check-icon"
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="text-[2.5vw] md:text-[1.4vw] lg:text-[.9vw]">
                Lorem ipsum dolor sit amet
              </p>{" "}
            </li>
            <li className="flex items-center my-2 gap-3">
         <div className="md:w-[2vw] lg:w-[1vw]">
                <Image
                  src={check}
                  alt="check-icon"
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="text-[2.5vw] md:text-[1.4vw] lg:text-[.9vw]">
                Lorem ipsum dolor sit amet
              </p>{" "}
            </li>
            <li className="flex items-center my-2 gap-3">
         <div className="md:w-[2vw] lg:w-[1vw]">
                <Image
                  src={check}
                  alt="check-icon"
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="text-[2.5vw] md:text-[1.4vw] lg:text-[.9vw]">
                Lorem ipsum dolor sit amet
              </p>{" "}
            </li>
            <li className="flex items-center my-2 gap-3">
              <div className="md:w-[2vw] lg:w-[1vw]">
                <Image
                  src={check}
                  alt="check-icon"
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="text-[2.5vw] md:text-[1.4vw] lg:text-[.9vw]">
                Lorem ipsum dolor sit amet
              </p>{" "}
            </li>
            <li className="flex items-center my-2 gap-3">
              <div className="md:w-[2vw] lg:w-[1vw]">
                <Image
                  src={check}
                  alt="check-icon"
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="text-[2.5vw] md:text-[1.4vw] lg:text-[.9vw]">
                Lorem ipsum dolor sit amet
              </p>{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
