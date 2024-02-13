import React from "react";

const Steps = () => {
  return (
    <div className="px-32 py-32 bg-[#FDF3EA]">
      <div className="text-center ">
        <h1 className="text-[3vw] montserrat font-bold ">
          How does Dialable work?
        </h1>
        <p className="roboto text-[1.3vw] font-medium">
          Subscribe, get verified leads, and grow your business.
        </p>
      </div>
      <div className="mt-32 flex items-center justify-between">
        <div className="flex flex-col items-center gap-4 w-[22.33vw]">
            <div className="w-[20vw] h-[16vw] bg-[#D9D9D9]"></div>
            <h2 className="text-[2vw] montserrat font-semibold">Create Account</h2>
            <p className="text-[1.2vw] text-center roboto">Enter basic information such as name, email address, and password to create your account.</p>
        </div>
        <div className="flex flex-col items-center gap-4 w-[22.33vw]">
            <div className="w-[20vw] h-[16vw] bg-[#D9D9D9]"></div>
            <h2 className="text-[2vw] montserrat font-semibold">Claim Your Business</h2>
            <p className="text-[1.2vw] text-center roboto">Add your business by providing accurate details such as name, address, phone number, and category.</p>
        </div>
        <div className="flex flex-col items-center gap-4 w-[22.33vw]">
            <div className="w-[20vw] h-[16vw] bg-[#D9D9D9]"></div>
            <h2 className="text-[2vw] montserrat font-semibold">Verify Your Account</h2>
            <p className="text-[1.2vw] text-center roboto">Verify your account through a confirmation email or phone call and activate your free business listing.</p>
        </div>
      </div>
    </div>
  );
};

export default Steps;
