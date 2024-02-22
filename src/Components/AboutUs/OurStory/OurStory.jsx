import React from "react";
import storyImg from "../../../../public/Images/job-portal.png";
import Image from "next/image";
import Link from "next/link";
const OurStory = () => {
  return (
    <div className="flex gap-10  py-14 px-20">
      <div className="w-1/2 my-16 Inter">
        <h3 className="text-black tracking-tight capitalize text-[1vw] mb-3 font-semibold">
          About us
        </h3>
        <h1 className="text-black tracking-tight  capitalize text-[2.7vw] mb-3 font-bold">
          Who We Are
        </h1>
        <div>
          <p className="font-medium my-6 text-[1.2vw] text-black ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo rerum
            explicabo quis assumenda? Earum accusamus labore recusandae.
            Asperiores nobis eaque magnam ratione nisi dolorum, quia officia
            consequatur excepturi deleniti, dolores sapiente veniam optio sint!
            Voluptates id velit optio quae sunt ut vitae, maxime eos libero
            quidem mollitia illo molestias excepturi dicta dolore maiores
            ducimus veniam eum. Deleniti reprehenderit numquam maiores.
          </p>
          <p className="font-medium my-6 text-[1.2vw] text-black ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo rerum
            explicabo quis assumenda? Earum accusamus labore recusandae.
            Asperiores nobis eaque magnam ratione nisi dolorum, quia officia
            consequatur excepturi deleniti, dolores sapiente veniam optio sint!
            Voluptates id velit optio quae sunt ut vitae, maxime eos libero
            quidem mollitia illo molestias excepturi dicta dolore maiores
            ducimus veniam eum. Deleniti reprehenderit numquam maiores.
          </p>
        </div>
      </div>
      <div className="w-1/2 relative">
        <Image
          src={storyImg}
          alt="about.png"
          className="object-cover h-full w-full"
        />
        <div className="flex absolute right-[-10.5%]  top-[100%] gap-4 rotate-[-90deg] w-[10%] ">
          <Link
            href="#"
            className="btn text-white box-shadow-2 bg-[#781393]  rounded-lg  text-[2vw] font-semibold montserrat leading-none px-12 py-10"
          >
            Advertise
          </Link>
          <Link
            href="#"
            className="btn text-white box-shadow-2 bg-[#FF8038]  rounded-lg  text-[2vw] font-semibold montserrat leading-none px-12 py-10"
          >
            Free&nbsp;Listing
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
