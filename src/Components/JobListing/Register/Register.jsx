import React from "react";
import Vector from "../../../../public/Images/register.png";
import Image from "next/image";
import Link from "next/link";
import Check from "../../../../public/Images/check.svg";
const Register = () => {
  return (
    <div className="py-16 px-10 lg:px-24 flex items-center flex-col">
      <div className=" mt-6 lg:my-10">
        <h1 className="montserrat text-[6vw] lg:text-[2vw] text-center  mx-auto font-semibold">
          List Your Business For Free. Start Getting Enquires
        </h1>
      </div>
      <div className="my-8 block lg:flex items-center justify-center gap-10">
        <div className="">
          <h1 className=" my-6 text-[#781393] text-[6vw] lg:text-[1.5vw] font-bold w-full lg:w-[80%] montserrat leading-[6vw] lg:leading-[1.6vw]">
            Let’s start to list your business
          </h1>
          <div className="search flex py-4">
            <div className="flex border items-center gap-2 border-black p-4">
              <p className="montserrat text-lg font-medium">+91</p>
              <div className="text-black lg:w-[10vw] w-[40vw]">
                <input
                  type="number"
                  className="w-full montserrat focus-within:outline-none"
                  placeholder="Mobile Number"
                />
              </div>
            </div>

            <button className="text-white btn  bg-[#FF6004] p-2 lg:px-8 text-[2.8vw] lg:text-[.9vw] cursor-pointer montserrat font-medium">
              Start Now
            </button>
          </div>
          <div className="flex montserrat gap-4 text-[2.5vw] lg:text-[.9vw] mt-2">
            <span>Already Registered?</span>
            <Link href={"#"} className="font-semibold montserrat">
              Sign Up
            </Link>
          </div>

          <div className="mt-8">
            <ul>
              <li className="py-2">
                <div className="flex items-center gap-2 roboto text-sm lg:text-lg font-normal ">
                  <div className="relative w-[7vw] lg:w-[2vw]">
                    <Image
                      src={Check}
                      alt="check"
                      className="object-cover h-full w-full"
                    />
                  </div>
                  Start your Online Business and get discovered
                </div>
              </li>
              <li className="py-2">
                <div className="flex items-center gap-2 roboto text-sm lg:text-lg font-normal ">
                  <div className="relative w-[7vw] lg:w-[2vw]">
                    <Image
                      src={Check}
                      alt="check"
                      className="object-cover h-full w-full"
                    />
                  </div>
                  Display your products and service offerings{" "}
                </div>{" "}
              </li>
              <li className="py-2">
                <div className="flex items-center gap-2 roboto text-sm lg:text-lg font-normal  ">
                  <div className="relative w-[7vw] lg:w-[2vw]">
                    <Image
                      src={Check}
                      alt="check"
                      className="object-cover h-full w-full"
                    />
                  </div>
                  Respond to customer reviews and questions{" "}
                </div>{" "}
              </li>
            </ul>
          </div>
        </div>
        <div className="relative w-full lg:w-[44%] mt-6 lg:mt-0">
          <Image
            src={Vector}
            alt="register"
            className="object-cover h-full w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
