import Image from "next/image";
import React from "react";
import award_1 from "../../public/Images/award1.png";
import award_2 from "../../public/Images/award2.png";
import placeholder from "../../public/Images/Lightbox.png";
import text_speech from "../../public/Images/text-to-speech.svg";
const Hero = () => {
  
  return (
    <div className="lg:flex  justify-between items-center gap-10 montserrat bg-[#F4EBFF] block p-10 sm:p-20 lg:p-0 ">
      
      <div className="hero-img lg:w-[50.3%] w-full mt-10 lg:mt-0 relative">
        <Image
          src={placeholder}
          alt="hero-img"
          objectFit="cover"
          className="h-full w-full"
        />
      </div>
      <div className="hero-cont lg:w-[45%] mt-8 md:mt-6 lg:mt-0  w-full flex items-start gap-4 lg:gap-6  flex-col  ">
        <button className="flex items-center gap-3 p-2 border-2 btn border-black text-black montserrat uppercase font-bold">
          <div className="w-[4vw] lg:w-[1.5vw]">
            <Image src={text_speech} alt="text-to-speech" className="object-cover h-full w-full"/>
          </div>
          <span>Listen</span>
        </button>
        <h1 className="lg:text-[3.5vw] text-[10vw] leading-[13vw] lg:leading-[5vw] font-semibold text-[black]">
          Welcome to Dialable
        </h1>
        <div className="desc montserrat w-[80%]">
          <p className="text-[#781393] font-medium text-lg lg:text-[2.2vw] leading-[1.45rem] lg:leading-[3.1vw]">
            Embrace diversities, celebrating inclusion.All inclusive hub and knowledge
          
          </p>
        </div>
        <div className="search flex gap-4 ">
            <div className="w-[9vw]">
              <Image src={award_2} alt="award_1" className="object-cover h-full w-full"/>
            </div>
            <div className="w-[9vw]">
              <Image src={award_1} alt="award_1" className="object-cover h-full w-full"/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
