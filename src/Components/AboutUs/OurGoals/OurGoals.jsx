import React from "react";
import icon from "../../../../public/Images/Relume-icon.svg";
import Image from "next/image";
const OurGoals = () => {
  const goals = [
    {
      img: icon,
      title: "Accessibility First",
      desc: `At Dialable, accessibility is our cornerstone. We're committed to dismantling barriers and ensuring equitable access to information and services. With our intuitive platform, we empower individuals with disabilities to navigate the world confidently.`,
    },
    {
      img: icon,
      title: "Community Engagement",
      desc: `Building a supportive community lies at the heart of our mission. Through partnerships and advocacy, we champion diversity and inclusion. By amplifying marginalized voices, we aim to foster meaningful connections and drive societal change.`,
    },
    {
      img: icon,
      title: "Business Empowerment",
      desc: ` Dialable isn't just a directory; it's a platform for business growth. We support businesses that prioritize accessibility, providing them with visibility to a diverse audience. By spotlighting inclusive businesses, we inspire others to embrace accessibility and create positive impacts within their communities,`,
    },
  ];
  return (
    <div className="p-6 lg:px-12 lg:py-16 bg-[#F4EBFF]">
      <div className="flex items-center flex-col Inter">
        <h3 className=" font-semibold text-black tracking-tight capitalize text-[3vw] md:text-[2vw] lg:text-[.8vw] mb-3 ">
          Our values
        </h3>
        <h1 className="text-black tracking-tight Sans  capitalize text-[6vw] md:text-[4.5vw] lg:text-[1.5vw] mb-3 font-bold">
          Our Ambitious Goals
        </h1>
        <p className="font-normal text-center text-[3.2vw] md:text-[2.2vw]  lg:text-[.9vw] w-full lg:w-[60%] text-black ">
          Dialable is dedicated to fostering accessibility, community
          engagement, and business empowerment. Join us as we strive to create a
          more inclusive world for all
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-4 items-center gap-3 mt-2 lg:mt-[2rem] lg:mx-24">
        {goals.map((goal, i) => (
          <div key={i} className="mt-8">
            <div className="img w-[6vw] md:w-[4.5vw] lg:w-[3.2vw]">
              <Image
                src={goal.img}
                alt={goal.title}
                width={100}
                height={100}
                className="object-cover "
              />
            </div>
            <h1 className="font-bold Inter text-[#781393] my-2 lg:my-5 text-[5vw] md:text-[3vw] lg:text-[1vw]">
              {goal.title}
            </h1>
            <p className="Inter font-normal text-[3vw] md:text-[2vw] lg:text-[.9vw]">
              {goal.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurGoals;
