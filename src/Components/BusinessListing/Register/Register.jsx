import React from "react";
import Image from "next/image";
import Link from "next/link";
import Check from "../../../../public/Images/check.svg";
const Register = ({title, heading, desc, img}) => {
  return (
    <div className="py-10 px-4 lg:py-20 lg:px-14 flex items-center flex-col">
      <div className="block md:flex items-start">
        <div className="w-full md:w-[48%] lg:mt-14 grow">
          <p className="montserrat font-semibold text-[3vw] md:text-[1.2vw] lg:text-[1vw]">
            {title}
          </p>
          <h1 className="Sans text-[6.5vw] md:text-[3.4vw] lg:text-[3.5vw] md:w-[85%] mt-2 leading-[6.2vw] md:leading-[4vw] font-bold">
            {heading}
          </h1>
          <p className="montserrat text-[3vw] md:text-[1.2vw] lg:text-[1vw] font-medium my-4 md:w-[75%]">
           {desc}
          </p>
          <div className="search flex gap-2">
            <div className="flex border items-center gap-2 border-black p-1 lg:px-4 lg:py-2 text-[3vw] md:text-[1.2vw] lg:text-[1vw]">
              <p className="montserrat  font-medium">+91</p>
              <div className="text-black w-[50vw] md:w-[20vw] lg:w-[15vw] ">
                <input
                  type="number"
                  className="w-full montserrat focus-within:outline-none"
                  placeholder="Mobile Number"
                />
              </div>
            </div>

            <button className="text-white btn  bg-[#FF6004] p-2 lg:px-8 text-[2.8vw] md:text-[1.9vw] lg:text-[.9vw] cursor-pointer montserrat font-medium">
              Start Now
            </button>
          </div>
          <div className="flex montserrat font-semibold text-[2vw] md:text-[.9vw] lg:text-[.7vw] mt-3">
            <span>{`By clicking Sign Up you're confirming that you agree with our`}&nbsp;</span>
            <Link href={"#"} className=" montserrat underline">
             Terms and Conditions.
            </Link>
          </div>
          <div className="mt-4">
            <ul>
              <li className="py-2">
                <div className="flex items-center gap-2 montserrat font-medium text-[3vw] md:text-[1.5vw] lg:text-[1vw]   ">
                  <div className="relative w-[7vw] md:w-[4vw] lg:w-[2vw]">
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
                <div className="flex items-center gap-2 montserrat font-medium text-[3vw] md:text-[1.5vw] lg:text-[1vw]   ">
                  <div className="relative w-[7vw] md:w-[4vw] lg:w-[2vw]">
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
                <div className="flex items-center gap-2 montserrat font-medium text-[3vw] md:text-[1.5vw] lg:text-[1vw]    ">
                  <div className="relative w-[7vw] md:w-[4vw] lg:w-[2vw]">
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
        <div className="relative w-full md:w-[50%] mt-6 h-full md:h-[68vh] lg:h-[80vh] lg:mt-0 grow">
          <Image
            src={img}
            alt="register"
            className="object-cover h-full w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
