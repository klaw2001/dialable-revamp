import React from "react";
import storyImg from "../../../../public/Images/job-portal.png";
import Image from "next/image";
import Link from "next/link";
const OurStory = () => {
  return (
    <div className="flex flex-col  lg:flex-row gap-20 p-10 md:px-6 overflow-x-clip  lg:py-14 lg:px-14">
      <div className="w-full lg:w-[55%] my-8 lg:my-16 Inter">
        <h3 className="text-black tracking-tight capitalize text-[3vw] md:text-[2vw] lg:text-[1vw] mb-1 lg:mb-3 font-semibold">
          About us
        </h3>
        <h1 className="text-black tracking-tight Sans capitalize text-[5vw] md:text-[3.5vw] lg:text-[2.7vw]  font-bold">
          Who We Are
        </h1>
        <div>
          <p className="font-medium my-6 text-[3.2vw] md:text-[2.2vw] lg:text-[1.05vw] text-black ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo rerum
            explicabo quis assumenda? Earum accusamus labore recusandae.
            Asperiores nobis eaque magnam ratione nisi dolorum, quia officia
            consequatur excepturi deleniti, dolores sapiente veniam optio sint!
            Voluptates id velit optio quae sunt ut vitae, maxime eos libero
            quidem mollitia illo molestias excepturi dicta dolore maiores
            ducimus veniam eum. Deleniti reprehenderit numquam maiores.
          </p>
          <p className="font-medium my-6 text-[3.2vw] md:text-[2.2vw] lg:text-[1.05vw] text-black ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo rerum
            explicabo quis assumenda? Earum accusamus labore recusandae.
            Asperiores nobis eaque magnam ratione nisi dolorum, quia officia
            consequatur excepturi deleniti, dolores sapiente veniam optio sint!
            Voluptates id velit optio quae sunt ut vitae, maxime eos libero
            quidem mollitia illo molestias excepturi dicta dolore maiores
            ducimus veniam eum. Deleniti reprehenderit numquam maiores. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Sapiente odit
            dignissimos accusantium dicta fugit cumque aliquam assumenda
            aliquid. Facilis, repudiandae nobis. Minus ea ducimus odio!
          </p>
        </div>
      </div>
      <div className="w-full lg:w-[45%] lg:h-[60%] relative">
        <Image
          src={storyImg}
          alt="about.png"
          className="object-cover md:object-contain lg:object-cover h-full w-full"
        />

        <div className="flex fixed right-[-14%] lg:right-[-3.5%] z-[20] top-[80%] gap-4 rotate-[-90deg] w-[10%] ">
          <Link
            href="#"
            className="text-white active:scale-[.95] transition-all duration-[.5s] box-shadow-2 bg-[#781393]  rounded-xl text-[0.8rem] md:text-[1rem] lg:text-[1.3vw] font-semibold montserrat leading-none px-[1.35rem] py-4 lg:py-6"
          >
            Advertise
          </Link>
          <Link
            href="#"
            className="text-white active:scale-[.95] transition-all duration-[.5s] box-shadow-2 bg-[#FF6004]  rounded-xl text-[0.6rem] md:text-[1rem] lg:text-[1.3vw] font-semibold montserrat leading-none px-[1.35rem] py-4 lg:py-6"
          >
            Free&nbsp;Listing
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
