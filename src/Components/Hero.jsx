import Image from "next/image";
import React from "react";
import award_1 from "../../public/Images/award1.png";
import award_2 from "../../public/Images/award2.png";
import placeholder from "../../public/Images/Lightbox.png";
import text_speech from "../../public/Images/text-to-speech.svg";
import Link from "next/link";
const Hero = () => {
  return (
    <div className="md:flex  justify-between lg:h-[100vh] xl:h-[72vh] items-center gap-10 montserrat hero-gradient block p-6  md:p-0 ">
      <div className="hero-img md:w-[50.3%]  h-full w-full  mt-0 relative">
        <Image
          src={placeholder}
          alt="hero-img"
          loading="eager"
          className="h-full object-cover w-full"
          placeholder="blur"
        />
      </div>
      <div className="hero-cont  md:w-[45%] mt-8 md:mt-6 lg:mt-0  w-full flex items-start  gap-4 md:gap-5  flex-col  ">
        <button className="flex items-center gap-2 rounded-xl lg:gap-1 text-[2.3vw] md:text-[1.5vw] lg:text-[1vw] p-2 border-2 btn border-black text-black poppins uppercase font-semibold">
          <div className="w-[4vw] md:w-[2.5vw] lg:w-[1vw]">
            <Image
              src={text_speech}
              alt="text-to-speech"
              className="object-cover h-full w-full"
            />
          </div>
          <span>Listen</span>
        </button>
        <h1 className="md:text-[3vw] text-[8vw] leading-[11vw] md:leading-[3vw] Sans font-semibold text-[black]">
          Welcome to <span className="text-[#781393]">Dialable</span>
        </h1>
        <div className="desc poppins w-[75%]">
          <p className="text-[black] font-medium text-lg lg:text-[1vw] leading-[1.45rem] ">
            <span className="text-[2.1vw] font-semibold">
              Embrace diversities, celebrating inclusion!
            </span>
            <br />
          </p>
          <p className="text-[1.5vw] mt-3 text-[black] font-semibold">
            All inclusive hub and knowledge
          </p>
        </div>
        <div className="search flex gap-4 ">
          <div className="w-[14vw] md:w-[12vw] lg:w-[9vw]">
            <Image
              loading="eager"
              src={award_2}
              alt="award_1"
              className="object-cover h-full w-full"
            />
          </div>
          <div className="w-[14vw] md:w-[12vw] lg:w-[9vw]">
            <Image
              loading="eager"
              src={award_1}
              alt="award_1"
              className="object-cover h-full w-full"
            />
          </div>
        </div>
        <div className="mt-2 flex flex-col gap-3 items-start">
          <Link href={"#"} className="text-black font-medium text-[.8vw] underline poppins">
            click to watch our video
          </Link>

          <button>
            <Link
              href={"/advertise"}
              className=" rounded-xl shadow-lg lg:block text-white text-[1.1vw] btn font-semibold bg-[#781393] py-2 px-4 montserrat  cursor-pointer"
            >
              Register Now
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
