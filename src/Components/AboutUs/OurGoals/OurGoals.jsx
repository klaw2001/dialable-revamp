import React from "react";
import icon from "../../../../public/Images/Relume-icon.svg";
import Image from "next/image";
const OurGoals = () => {
  const goals = [
    {
      img: icon,
      title: "Describe value one",
      desc: `  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam vero
      distinctio nam nisi quod ipsa voluptatum repellendus blanditiis
      obcaecati corrupti? ipsum de amit`,
    },
    {
      img: icon,
      title: "Describe value one",
      desc: `  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam vero
      distinctio nam nisi quod ipsa voluptatum repellendus blanditiis
      obcaecati corrupti? ipsum de amit`,
    },
    {
      img: icon,
      title: "Describe value one",
      desc: `  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam vero
      distinctio nam nisi quod ipsa voluptatum repellendus blanditiis
      obcaecati corrupti? ipsum de amit`,
    },
  ];
  return (
    <div className="p-10 lg:px-12 lg:py-24 bg-[#F4EBFF]">
      <div className="flex items-center flex-col Inter">
        <h3 className=" font-semibold text-black tracking-tight capitalize text-[3vw] md:text-[2vw] lg:text-[1vw] mb-3 ">
          Our values
        </h3>
        <h1 className="text-black tracking-tight Sans  capitalize text-[6vw] md:text-[4.5vw] lg:text-[3vw] mb-3 font-bold">
          Our Ambitious Goals
        </h1>
        <p className="font-medium text-center text-[3.2vw] md:text-[2.2vw]  lg:text-[1.2vw] w-full lg:w-[60%] text-black ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-3 my-4 lg:my-[4rem]">
        {goals.map((goal, i) => (
          <div key={i} className="mt-8">
            <div className="img w-[6vw] md:w-[4.5vw] lg:w-[3.2vw]">
              <Image
                src={goal.img}
                alt={goal.title}
                className="object-cover h-full w-full"
              />
            </div>
            <h1 className="font-bold Inter text-[#781393] my-2 lg:my-5 text-[5vw] md:text-[3vw] lg:text-[2vw]">{goal.title}</h1>
            <p className="Inter font-medium text-[3vw] md:text-[2vw] lg:text-[1vw]">{goal.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurGoals;
