import React from "react";
import { FaRegUser } from "react-icons/fa6";

const PersonalInfo = () => {
  return (
    <div className="grow-[.8] pl-8 border-l border-[#00000075]">
      <h1 className="montserrat  border-[#00000075]  text-black text-[6vw]  md:text-[4.5vw] font-semibold md:leading-[4.8vw] lg:leading-[3.2vw] lg:text-[2vw]">
        Personal Information
      </h1>
      <p className="md:text-[1.5vw] lg:text-[0.8vw] montserrat font-semibold">
        Manage/Edit your personal information, where you can be contacted.
      </p>

      <div className="my-16">
        <form>
          <div className="flex gap-4 my-8 flex-wrap">
            <div className="bg-white py-2 grow rounded-md shadow-md px-4">
              <div className="flex montserrat md:text-[2vw] lg:text-[1vw] font-semibold items-center justify-between">
                <label htmlFor="name">Name</label>
                <FaRegUser color="#FF6004" />
              </div>
              <input
                type="text"
                className="md:text-[1.4vw] lg:text-[0.86vw] w-full montserrat"
                placeholder="abc surname"
              />
            </div>
            <div className="bg-white grow py-2 rounded-md shadow-md px-4">
              <div className="flex montserrat md:text-[2vw] lg:text-[1vw] font-semibold items-center justify-between">
                <label htmlFor="email">Email</label>
                <FaRegUser color="#FF6004" />
              </div>
              <input
                type="text"
                className="md:text-[1.4vw] lg:text-[0.86vw] w-full montserrat"
                placeholder="abc@gmail.com"
              />
            </div>
          </div>
          <div className="flex gap-4 my-8 flex-wrap">
            <div className="bg-white py-2 grow rounded-md shadow-md px-4">
              <div className="flex montserrat md:text-[2vw] lg:text-[1vw] font-semibold items-center justify-between">
                <label htmlFor="dob">Date of Birth</label>
                <FaRegUser color="#FF6004" />
              </div>
              <input
                type="text"
                className="md:text-[1.4vw] lg:text-[0.86vw] w-full montserrat"
                placeholder="07 July 2000"
              />
            </div>
            <div className="bg-white grow py-2 rounded-md shadow-md px-4">
              <div className="flex montserrat md:text-[2vw] lg:text-[1vw] font-semibold items-center justify-between">
                <label htmlFor="lang">Language</label>
                <FaRegUser color="#FF6004" />
              </div>
              <input
                type="text"
                className="md:text-[1.4vw] lg:text-[0.86vw] w-full montserrat"
                placeholder="English(US)"
              />
            </div>
          </div>
          <div className="flex gap-4 my-8 flex-wrap">
            <div className="bg-white py-2 grow-[.37] rounded-md shadow-md px-4">
              <div className="flex montserrat md:text-[2vw] lg:text-[1vw] font-semibold items-center justify-between">
                <label htmlFor="contact">Contact</label>
                <FaRegUser color="#FF6004" />
              </div>
              <input
                type="text"
                className="md:text-[1.4vw] lg:text-[0.86vw] w-full  montserrat"
                placeholder="+91 7766889900"
              />
            </div>
          </div>
          <div className="flex gap-4 my-8 flex-wrap">
            <div className="bg-white py-2 grow-[1] rounded-md shadow-md px-4">
              <div className="flex montserrat md:text-[2vw] lg:text-[1vw] font-semibold items-center justify-between">
                <label htmlFor="address01">Address 01</label>
                <FaRegUser color="#FF6004" />
              </div>
              <input
                type="text"
                className="md:text-[1.4vw] lg:text-[0.86vw] w-full  montserrat"
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero."
              />
            </div>
          </div>
          <div className="flex gap-4 my-8 flex-wrap">
            <div className="bg-white py-2 grow-[1] rounded-md shadow-md px-4">
              <div className="flex montserrat md:text-[2vw] lg:text-[1vw] font-semibold items-center justify-between">
                <label htmlFor="address02">Address02</label>
                <FaRegUser color="#FF6004" />
              </div>
              <input
                type="text"
                className="md:text-[1.4vw] lg:text-[0.86vw] w-full montserrat"
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero."
              />
            </div>
          </div>
          <div className="flex gap-4 my-8 flex-wrap">
            <div className="bg-white py-2 grow rounded-md shadow-md px-4">
              <div className="flex montserrat md:text-[2vw] lg:text-[1vw] font-semibold items-center justify-between">
                <label htmlFor="country">Country/Region</label>
                <FaRegUser color="#FF6004" />
              </div>
              <input
                type="text"
                className="md:text-[1.4vw] lg:text-[0.86vw] w-full montserrat"
                placeholder="india"
              />
            </div>
            <div className="bg-white grow py-2 rounded-md shadow-md px-4">
              <div className="flex montserrat md:text-[2vw] lg:text-[1vw] font-semibold items-center justify-between">
                <label htmlFor="state">State</label>
                <FaRegUser color="#FF6004" />
              </div>
              <input
                type="text"
                className="md:text-[1.4vw] lg:text-[0.86vw] w-full montserrat"
                placeholder="Maharashtra"
              />
            </div>
          </div>
          <div className="flex gap-4 my-8 flex-wrap">
            <div className="bg-white py-2 grow-[.37] rounded-md shadow-md px-4">
              <div className="flex montserrat md:text-[2vw] lg:text-[1vw] font-semibold items-center justify-between">
                <label htmlFor="pincode">Pincode</label>
                <FaRegUser color="#FF6004" />
              </div>
              <input
                type="text"
                className="md:text-[1.4vw] lg:text-[0.86vw] w-full  montserrat"
                placeholder="4000107"
              />
            </div>
          </div>
          <button
            className="btn px-3 mt-8 mb-12 text-white shadow-md montserrat font-medium bg-[#781393] text-[3vw] md:text-[2vw] lg:text-[1vw]"
            type="submit"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default PersonalInfo;
