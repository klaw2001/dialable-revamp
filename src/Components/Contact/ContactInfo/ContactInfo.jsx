import Link from "next/link";
import React from "react";
import { FaEnvelope } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-6 md:flex-row  items-center justify-between px-4 py-6 lg:px-10 lg:py-16">
      <div className="flex flex-col gap-4 my-2 md:my-0">
        <div className="text-[5vw] md:text-[3vw]">
          <FaEnvelope />
        </div>
        <h1 className="text-black text-[4vw] md:text-[2vw] lg:text-[2.06vw] Inter font-bold">
          Email
        </h1>
        <p className="text-black text-[3vw] md:text-[1.09vw] lg:text-[0.9vw]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, maxime
          Lorem, ipsum dolor.
        </p>
        <Link
          href={"#"}
          className="text-black text-[3vw] md:text-[1.09vw] lg:text-[0.9vw] underline"
        >
          hello@relume.io
        </Link>
      </div>
      <div className="flex flex-col gap-4 my-2 md:my-0">
        <div className="text-[5vw] md:text-[3vw]">
          <FaPhoneAlt />
        </div>
        <h1 className="text-black text-[4vw] md:text-[2vw] lg:text-[2.06vw] Inter font-bold">
         Phone
        </h1>
        <p className="text-black text-[3vw] md:text-[1.09vw] lg:text-[0.9vw]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, maxime
          Lorem, ipsum dolor.
        </p>
        <Link
          href={"#"}
          className="text-black text-[3vw] md:text-[1.09vw] lg:text-[0.9vw] underline"
        >
          hello@relume.io
        </Link>
      </div>
      <div className="flex flex-col gap-4 my-2 md:my-0">
        <div className="text-[5vw] md:text-[3vw]">
          <IoLocationSharp />
        </div>
        <h1 className="text-black text-[4vw] md:text-[2vw] lg:text-[2.06vw] Inter font-bold">
         Office
        </h1>
        <p className="text-black text-[3vw] md:text-[1.09vw] lg:text-[0.9vw]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, maxime
          Lorem, ipsum dolor.
        </p>
        <Link
          href={"#"}
          className="text-black text-[3vw] md:text-[1.09vw] lg:text-[0.9vw] underline"
        >
          hello@relume.io
        </Link>
      </div>
    </div>
  );
};

export default ContactInfo;
