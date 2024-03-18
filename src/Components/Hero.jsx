import Image from "next/image";
import React from "react";
import award_1 from "../../public/Images/award1.png";
import award_2 from "../../public/Images/award2.png";
import placeholder from "../../public/Images/Lightbox.png";
import text_speech from "../../public/Images/text-to-speech.svg";
const Hero = () => {
  
  return (
    <div className="md:flex  justify-between items-center gap-10 montserrat bg-[#F4EBFF] block p-6  md:p-0 ">
      
      <div className="hero-img md:w-[50.3%] md:h-[60vh] h-full w-full  mt-0 relative">
        <Image
          src={placeholder}
          alt="hero-img"
          loading="eager"
          className="h-full object-cover w-full"
          placeholder="blur"
        />
      </div>
      <div className="hero-cont md:w-[45%] mt-8 md:mt-6 lg:mt-0  w-full flex items-start gap-4 md:gap-6  flex-col  ">
        <button className="flex items-center gap-2 lg:gap-3 p-2 border-2 btn border-black text-black montserrat uppercase font-medium">
          <div className="w-[4vw] md:w-[2.5vw] lg:w-[1.5vw]">
            <Image src={text_speech} alt="text-to-speech" className="object-cover h-full w-full"/>
          </div>
          <span>Listen</span>
        </button>
        <h1 className="md:text-[3vw] text-[8vw] leading-[11vw] md:leading-[3vw] Sans font-semibold text-[black]">
          Welcome to Dialable
        </h1>
        <div className="desc montserrat w-[80%]">
          <p className="text-[#781393] font-medium text-lg lg:text-[1vw] leading-[1.45rem] ">
            Embrace diversities, celebrating inclusion.All inclusive hub and knowledge
          
          </p>
        </div>
        <div className="search flex gap-4 ">
            <div className="w-[14vw] md:w-[12vw] lg:w-[9vw]">
              <Image loading="eager" src={award_2} alt="award_1" className="object-cover h-full w-full"/>
            </div>
            <div className="w-[14vw] md:w-[12vw] lg:w-[9vw]">
              <Image loading="eager" src={award_1} alt="award_1" className="object-cover h-full w-full"/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
