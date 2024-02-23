import Link from "next/link";
import React from "react";

const ContactUs = () => {
  return (
    <div className="p-20">
      <div>
        <h1 className="text-black tracking-tight  capitalize text-[3vw] mb-3 font-bold">
          Contact Us
        </h1>
        <p className="font-medium   text-[1.2vw]  text-black ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="flex my-12">
        <div className="w-[45%]">
          <div className="flex flex-col gap-3 my-10">
            <h1 className="text-black tracking-tight capitalize text-[2vw]  font-bold">
              Sydney
            </h1>
            <p className="text-black text-[1vw]">
              123 Sample St, Sydney NSW 2000 AU
            </p>
            <Link href={"#"} className="text-[1vw] font-semibold">
              View Map
            </Link>
          </div>
          <div className="flex flex-col gap-3 my-10">
            <h1 className="text-black tracking-tight capitalize text-[2vw]  font-bold">
              Newyork
            </h1>
            <p>123 Sample St, Newyork NY 1000 USA</p>
            <Link href={"#"} className="text-[1vw] font-semibold">
              View Map
            </Link>
          </div>
          <div className="flex flex-col gap-3 my-10">
            <h1 className="text-black tracking-tight capitalize text-[2vw]  font-bold">
              London
            </h1>
            <p>123 Sample St, London W1C 1DE, United Kingdom</p>
            <Link href={"#"} className="text-[1vw] font-semibold">
              View Map
            </Link>
          </div>
        </div>
        <div className="w-[60%]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d13251.162394346955!2d151.19646880485027!3d-33.86928710496642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s123%20Sample%20St%2C%20Sydney%20NSW%202000%20AU!5e0!3m2!1sen!2sin!4v1708677816757!5m2!1sen!2sin"
            className="h-full w-full"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
