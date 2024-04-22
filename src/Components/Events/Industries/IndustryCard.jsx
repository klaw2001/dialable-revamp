import React from "react";

const IndustryCard = ({ icon, type, events }) => {
  return (
    <div className="bg-white rounded-lg w-[50vw]  md:w-[16vw] lg:w-[10vw] flex py-8 px-4 items-center flex-col gap-3 shadow-3">
      <div className="text-[10vw] md:text-[3vw] lg:text-[2vw] text-[#FF6004]">{icon}</div>
      <h1 className="montserrat md:text-[2vw] lg:text-[1.2vw] font-semibold leading-3">{type}</h1>
      <p className="montserrat md:text-[1.2vw] lg:text-[.85vw] font-medium">{`${events} events`}</p>
    </div>
  );
};

export default IndustryCard;

