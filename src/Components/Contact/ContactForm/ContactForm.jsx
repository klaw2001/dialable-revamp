import Link from "next/link";
import React from "react";

const ContactForm = () => {
  return (
    <div className="flex flex-col md:flex-row gap-3 md:gap-6 lg:gap-10  px-4 py-10 lg:py-16 lg:px-10">
      <div className="w-full md:w-[50%]">
        <h1 className="Sans mb-4 text-black text-[6vw] md:w-[50%] md:text-[4.5vw] font-bold md:leading-[4.8vw] lg:leading-[3.2vw] lg:text-[3vw]">
          Contact us
        </h1>
        <p className="text-[3vw] my-4 md:text-[1.5vw] lg:text-[1vw] montserrat text-black font-medium ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <div className="form">
          <form>
            <div className="flex flex-col my-4 gap-2">
              <label
                htmlFor="name"
                className="text-black text-[3vw] font-medium md:text-[2vw] lg:text-[1.05vw]"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                className="p-2 text-black text-[3vw] border border-black md:text-[2vw] lg:text-[1.05vw]"
              />
            </div>
            <div className="flex flex-col my-4 gap-2">
              <label
                htmlFor="email"
                className="text-black text-[3vw] font-medium md:text-[2vw] lg:text-[1.05vw]"
              >
                Email
              </label>
              <input
                type="text"
                id="Email"
                className="p-2 text-black text-[3vw] border border-black md:text-[2vw] lg:text-[1.05vw]"
              />
            </div>
            <div className="flex flex-col my-4 gap-2">
              <label
                htmlFor="message"
                className="text-black text-[3vw] font-medium md:text-[2vw] lg:text-[1.05vw]"
              >
                Message
              </label>
              <textarea
                rows={6}
                placeholder="Type your message"
                className="w-full p-2 border border-black text-[3vw] font-medium md:text-[2vw] lg:text-[1.05vw]"
              ></textarea>
            </div>
            <div className="flex items-center my-2 gap-2">
              <input type="checkbox" id="accept" />
              <label className="text-black text-[3vw] md:text-[2vw] lg:text-[1vw]">
                I accept the <Link href={"#"}>Terms</Link>{" "}
              </label>
            </div>
            <button
              className="btn px-2 my-4 text-white bg-[#781393] text-[3vw] md:text-[2vw] lg:text-[1.05vw]"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="w-full md:w-[50%]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d13251.162394346955!2d151.19646880485027!3d-33.86928710496642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s123%20Sample%20St%2C%20Sydney%20NSW%202000%20AU!5e0!3m2!1sen!2sin!4v1708677816757!5m2!1sen!2sin"
          className="h-full w-full"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactForm;
