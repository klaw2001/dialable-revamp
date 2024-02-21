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
      <h1 className="text-black montserrat text-[3.5vw] font-semibold">
        Treat your condition
      </h1>
      <div className="mt-16 flex items-center gap-10 flex-wrap ">
        {treatments.map((treatment,i)=>(
            <div key={i} className="flex items-center gap-5 w-[19vw]">
                <div className="w-[5vw]">
                    <Image src={treatment.img} alt={treatment.title} className="object-cover h-full w-full"/>
                </div>
                <p className="text-black montserrat font-semibold   text-[.95vw]">{treatment.title}</p>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Treatment;
