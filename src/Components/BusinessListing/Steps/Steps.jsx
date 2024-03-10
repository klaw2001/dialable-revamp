import React from "react";
import user from "../../../../public/Images/user.svg";
import bag from "../../../../public/Images/bag.svg";
import verification from "../../../../public/Images/verification.svg";
import Image from "next/image";
const Steps = () => {
  return (
    <div className=" p-10 lg:px-32 lg:py-20 bg-[#F4EBFF]">
      <div className="text-center ">
        <h1 className="text-[6vw] md:text-[3vw] lg:text-[2vw] Sans font-bold ">
          How does Dialable work?
        </h1>
        <p className="roboto text-[3.3vw] md:text-[1.5vw] lg:text-[.8vw] font-normal">
          Subscribe, get verified leads, and grow your business.
        </p>
      </div>
      <div className="mt-10 lg:mt-20 block md:flex items-baseline justify-between gap-4">
        <div className="flex flex-col items-center gap-1 mt-8 lg:mt-0 lg:w-[22.33vw]">
          <div className="w-[12vw] md:w-[8vw] lg:w-[5vw] mb-4">
            <Image
              src={user}
              alt="steps"
              className="object-cover h-full w-full"
            />
          </div>
          <h2 className=" text-[4.5vw] md:text-[2.5vw] lg:text-[1.3vw] montserrat font-semibold">
            Create Account
          </h2>
          <p className=" text-[2.7vw] md:text-[1.5vw] lg:text-[.9vw] text-center roboto">
            Enter basic information such as name, email address, and password to
            create your account.
          </p>
        </div>
        <div className="flex flex-col items-center gap-1 mt-8 lg:mt-0 lg:w-[22.33vw]">
          <div className="w-[12vw] md:w-[8vw] lg:w-[5vw] mb-4">
            <Image
              src={bag}
              alt="steps"
              className="object-cover h-full w-full"
            />
          </div>
          <h2 className=" text-[4.5vw] md:text-[2.5vw] lg:text-[1.3vw] montserrat font-semibold">
            Claim Your Business
          </h2>
          <p className=" text-[2.7vw] md:text-[1.5vw] lg:text-[.9vw] text-center roboto">
            Add your business by providing accurate details such as name,
            address, phone number, and category.
          </p>
        </div>
        <div className="flex flex-col items-center gap-1 mt-8 lg:mt-0 lg:w-[22.33vw]">
          <div className="w-[12vw] md:w-[8vw] lg:w-[5vw] mb-4">
            <Image
              src={verification}
              alt="steps"
              className="object-cover h-full w-full"
            />
          </div>
          <h2 className=" text-[4.5vw] md:text-[2.5vw] lg:text-[1.3vw] montserrat font-semibold">
            Verify Your Account
          </h2>
          <p className=" text-[2.7vw] md:text-[1.5vw] lg:text-[.9vw] text-center roboto">
            Verify your account through a confirmation email or phone call and
            activate your free business listing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Steps;
