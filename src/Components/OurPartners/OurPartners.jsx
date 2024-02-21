import React from "react";
import partners from "../../../public/Images/partners.png";
import check from "../../../public/Images/check.svg";
import Image from "next/image";
const OurPartners = () => {
  return (
    <div className="p-10">
      <div className="buttons flex items-center justify-center">
        <button className="montserrat uppercase text-[1.5vw] btn font-medium py-6 px-16 bg-[#781393] text-white rounded-s-xl">
          For &nbsp;Abled
        </button>
        <button className="montserrat uppercase text-[1.5vw] btn font-medium py-6 px-6 bg-[#D9D9D9] text-[#00000080] rounded-e-xl">
          For &nbsp;corporates
        </button>
      </div>
      <div className="flex justify-center my-16 px-36">
        <div className="w-[50%] rounded-s-lg border-[1.5px]  border-left overflow-hidden border-[#781393]">
          <div className="img h-full w-full">
            <Image
              src={partners}
              alt="partners"
              className="object-cover h-full w-full"
            />
          </div>
        </div>
        <div className="w-[50%] bg-[#F4EBFF] py-16  lg:px-8 xl:px-12 montserrat capitalize border border-y rounded-e-lg border-right border-[#781393]">
          <h2 className="text-black uppercase font-bold text-[2.3vw]">
            our partners like us
          </h2>
          <ul className=" mt-8 mb-6">
            <li className="flex items-center gap-2 py-4">
              <div className="w-[1.6vw]">
                <Image src={check} alt="marker" className="object-cover h-full w-full"/>
              </div>
              <span className="text-black text-[1.3vw] montserrat font-medium">one stop solutions for all inclusion needs</span>
            </li>
            <li className="flex items-center gap-2 py-4">
              <div className="w-[1.6vw]">
                <Image src={check} alt="marker" className="object-cover h-full w-full"/>
              </div>
              <span className="text-black text-[1.3vw] montserrat font-medium">training and education</span>
            </li>
            <li className="flex items-center gap-2 py-4">
              <div className="w-[1.6vw]">
                <Image src={check} alt="marker" className="object-cover h-full w-full"/>
              </div>
              <span className="text-black text-[1.3vw] montserrat font-medium">verified talent profiles</span>
            </li>
            <li className="flex items-center gap-2 py-4">
              <div className="w-[1.6vw]">
                <Image src={check} alt="marker" className="object-cover h-full w-full"/>
              </div>
              <span className="text-black text-[1.3vw] montserrat font-medium">large number of products</span>
            </li>
            <li className="flex items-center gap-2 py-4">
              <div className="w-[1.6vw]">
                <Image src={check} alt="marker" className="object-cover h-full w-full"/>
              </div>
              <span className="text-black text-[1.3vw] montserrat font-medium">trusted verified business</span>
            </li>
          </ul>
          <div className="flex items-center gap-8">
            <button className="capitalize text-white bg-[#781393] p-4 font-medium">hire part time</button>
            <button className="capitalize text-white bg-[#781393] p-4 font-medium">hire full time</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPartners;
