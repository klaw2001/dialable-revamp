import React from "react";

const Steps = () => {
  return (
    <div className=" p-10 lg:px-32 lg:py-20 bg-[#FDF3EA]">
      <div className="text-center ">
        <h1 className="text-[6vw] lg:text-[1.5vw] montserrat font-bold ">
          How does Dialable work?
        </h1>
        <p className="roboto text-[3.3vw] lg:text-[.9vw] font-normal">
          Subscribe, get verified leads, and grow your business.
        </p>
      </div>
      <div className="mt-10 lg:mt-20 block lg:flex items-start justify-center gap-4">
        <div className="flex flex-col items-center gap-2 mt-8 lg:mt-0 lg:w-[22.33vw]">
            <div className="w-[48vw] h-[40vw] lg:w-[15vw] mb-4 lg:h-[10vw] bg-[#D9D9D9]"></div>
            <h2 className=" text-[4.5vw] lg:text-[1.3vw] montserrat font-semibold">Create Account</h2>
            <p className=" text-[2.7vw] lg:text-[.9vw] text-center roboto">Enter basic information such as name, email address, and password to create your account.</p>
        </div>
        <div className="flex flex-col items-center gap-2 mt-8 lg:mt-0 lg:w-[22.33vw]">
            <div className="w-[48vw] h-[40vw] lg:w-[15vw] mb-4 lg:h-[10vw] bg-[#D9D9D9]"></div>
            <h2 className=" text-[4.5vw] lg:text-[1.3vw] montserrat font-semibold">Claim Your Business</h2>
            <p className=" text-[2.7vw] lg:text-[.9vw] text-center roboto">Add your business by providing accurate details such as name, address, phone number, and category.</p>
        </div>
        <div className="flex flex-col items-center gap-2 mt-8 lg:mt-0 lg:w-[22.33vw]">
            <div className="w-[48vw] h-[40vw] lg:w-[15vw] mb-4 lg:h-[10vw] bg-[#D9D9D9]"></div>
            <h2 className=" text-[4.5vw] lg:text-[1.3vw] montserrat font-semibold">Verify Your Account</h2>
            <p className=" text-[2.7vw] lg:text-[.9vw] text-center roboto">Verify your account through a confirmation email or phone call and activate your free business listing.</p>
        </div>
      </div>
    </div>
  );
};

export default Steps;
