import React from "react";
import alzheimer from "../../../public/Images/treatments/alzheimer.png";
import children from "../../../public/Images/treatments/children.png";
import spinalcord from "../../../public/Images/treatments/spinalcord.png";
import stroke from "../../../public/Images/treatments/stroke.png";
import diabetic from "../../../public/Images/treatments/diabetic.png";
import elderly from "../../../public/Images/treatments/elderly.png";
import parkinsons from "../../../public/Images/treatments/parkinsons.png";
import Image from "next/image";
const Treatment = () => {
  const treatments = [
    { title: "Special Need Children", img: children },
    { title: "Alzheimer's/Dementia care", img: alzheimer },
    { title: "Spinal cord injuries", img: spinalcord },
    { title: "Stroke", img: stroke },
    { title: "Diabetic", img: diabetic },
    { title: "Elderly care", img: elderly },
    { title: "Parkinsons", img: parkinsons },
  ];
  return (
    <div>
      <h1 className="text-black montserrat text-[6vw] Sans md:text-[4vw] lg:text-[1.5vw] font-semibold">
        Treat your condition
      </h1>
      <div className="mt-8 lg:mt-16 flex items-center justify-start md:justify-start gap-3 lg:gap-10 flex-wrap ">
        {treatments.map((treatment,i)=>(
            <div key={i} className="flex self-start flex-col md:grow lg:flex-row items-center gap-2 md:gap-3 lg:gap-5 w-[40%] md:w-[25vw] lg:w-[19vw]">
                <div className="w-[20vw] md:w-[10vw] lg:w-[5vw]">
                    <Image src={treatment.img} alt={treatment.title} className="object-cover h-full w-full"/>
                </div>
                <p className="text-black montserrat font-semibold text-[2.5vw] text-center md:text-[1.95vw]  lg:text-[.95vw]">{treatment.title}</p>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Treatment;
