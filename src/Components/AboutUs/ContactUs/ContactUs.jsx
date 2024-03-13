"use client";
import Link from "next/link";
import React, { useState } from "react";

const ContactUs = () => {
  const [active, setActive] = useState("sydney");

  return (
    <div className="p-6 lg:py-20 lg:px-14">
      <div>
        <h1 className="text-black tracking-tight Sans capitalize text-[6vw] md:text-[4.5vw] lg:text-[1.5vw] mb-3 font-bold">
          Contact Us
        </h1>
        <p className="font-normal text-[3.2vw] md:text-[2.2vw]  lg:text-[.9vw]  text-black ">
          Reach Out at Our Three Convenient Locations
        </p>
      </div>
      <div className="flex flex-col lg:flex-row my-6 lg:mt-12">
        <div className="w-full lg:w-[45%]">
          <div
            onClick={() => setActive("sydney")}
            className={
              active === "sydney"
                ? `flex cursor-pointer flex-col gap-3 my-10 p-2  border-l-[3px] ps-4 border-black`
                : `flex flex-col gap-3 my-10 p-2 border-l-[3px] border-white`
            }
          >
            <h1 className="text-black tracking-tight capitalize text-[3vw]  md:text-[2.5vw] lg:text-[1vw]  font-bold">
              Sydney
            </h1>
            <p className="text-black text-[3vw] lg:text-[.9vw]">
              123 Sample St, Sydney NSW 2000 AU
            </p>
            <Link
              href={"#"}
              className="text-[3vw] lg:text-[.8vw] font-semibold"
            >
              View Map
            </Link>
          </div>
          <div
            onClick={() => setActive("newyork")}
            className={
              active === "newyork"
                ? `flex cursor-pointer flex-col gap-3 my-10 p-2  border-l-[3px] ps-4 border-black`
                : `flex flex-col gap-3 my-10 p-2 border-l-[3px] border-white`
            }
          >
            <h1 className="text-black tracking-tight capitalize text-[5vw] md:text-[2.5vw] lg:text-[1vw]  font-bold">
              Newyork
            </h1>
            <p className="text-black text-[3vw] lg:text-[.9vw]">
              123 Sample St, Newyork NY 1000 USA
            </p>
            <Link
              href={"#"}
              className="text-[3vw] lg:text-[.8vw] font-semibold"
            >
              View Map
            </Link>
          </div>
          <div
            onClick={() => setActive("london")}
            className={
              active === "london"
                ? `flex cursor-pointer flex-col gap-3 my-10 p-2  border-l-[3px] ps-4 border-black`
                : `flex flex-col gap-3 my-10 p-2 border-l-[3px] border-white`
            }
          >
            <h1 className="text-black tracking-tight capitalize text-[5vw] md:text-[2.5vw] lg:text-[1vw]  font-bold">
              London
            </h1>
            <p className="text-black text-[3vw] lg:text-[.9vw]">
              123 Sample St, London W1C 1DE, United Kingdom
            </p>
            <Link
              href={"#"}
              className="text-[3vw] lg:text-[.8vw] font-semibold"
            >
              View Map
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-[60%]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d13251.162394346955!2d151.19646880485027!3d-33.86928710496642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s123%20Sample%20St%2C%20Sydney%20NSW%202000%20AU!5e0!3m2!1sen!2sin!4v1708677816757!5m2!1sen!2sin"
            className="h-full w-full"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
