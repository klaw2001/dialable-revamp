"use client";
import React, { useState } from "react";
import SideBar from "../SideBar/SideBar";
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import Link from "next/link";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("edit-profile");
  const token = localStorage.getItem("token");
  return (
    <>
      {token ? (
        <div className="py-6 px-4  md:px-6 lg:px-12 bg-[#F7F7F7]">
          <h1 className="Sans border-b  border-[#00000075] pb-2 text-black text-[6vw]  md:text-[4.5vw] font-bold md:leading-[4.8vw] lg:leading-[3.2vw] lg:text-[2.8vw]">
            Dialable Account
          </h1>
          <div className="pt-6 flex md:flex-row flex-col items-start">
            <SideBar setActiveTab={setActiveTab} activeTab={activeTab} />

            {activeTab === "edit-profile" ? (
              <PersonalInfo />
            ) : activeTab === "order-history" ? (
              <div className="h-[100vh] md:pl-6 md:border-l border-[#00000075]">
                Order History
              </div>
            ) : activeTab === "logout" ? (
              <div className="h-[100vh] md:pl-6 md:border-l border-[#00000075]">
                logout
              </div>
            ) : null}
          </div>
        </div>
      ) : (
        <div className="flex flex-col py-32 justify-center items-center">
          <h1 className="Sans  pb-2 text-black text-[6vw]  md:text-[4.5vw] font-bold md:leading-[4.8vw] lg:leading-[3.2vw] lg:text-[2.8vw]">
            Create An Account On Dialable
          </h1>
          <Link
            href={"/signup"}
            className="hidden  rounded-lg lg:block text-white text-[0.7vw] btn font-semibold bg-[#781393] py-2 px-4 montserrat  cursor-pointer"
          >
            Sign Up
          </Link>
        </div>
      )}
    </>
  );
};

export default ProfilePage;
