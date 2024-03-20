import React from "react";
import SideBar from "../SideBar/SideBar";
import PersonalInfo from "../PersonalInfo/PersonalInfo";

const ProfilePage = () => {
  return (
    <div className="py-6  md:px-6 lg:px-12 bg-[#F7F7F7]">
      <h1 className="Sans border-b  border-[#00000075] pb-2 text-black text-[6vw]  md:text-[4.5vw] font-bold md:leading-[4.8vw] lg:leading-[3.2vw] lg:text-[2.8vw]">
        Dialable Account
      </h1>
      <div className="pt-6 flex items-start">
        <SideBar/>
        <PersonalInfo/>
      </div>
    </div>
  );
};

export default ProfilePage;
