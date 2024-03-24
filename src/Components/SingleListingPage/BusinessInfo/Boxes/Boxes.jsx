import Link from "next/link";
import React from "react";
import { CiGlobe, CiMobile4, CiUser } from "react-icons/ci";
import { FaFacebookF, FaPhoneAlt } from "react-icons/fa";
import { FaInstagram, FaPinterestP, FaXTwitter } from "react-icons/fa6";
import { IoLocationSharp, IoMailOutline } from "react-icons/io5";
const Boxes = () => {
  return (
    <div className="w-full">
      <div className="reservation p-4 lg:px-7 lg:py-9 bg-[#f7f7f7]">
        <h3 className="text-[6vw] mb-4 text-black montserrat font-semibold md:text-[3vw] lg:text-[1.5vw]">
          Reservation
        </h3>
        <form action="" className="my-4 flex flex-col gap-5">
          <div className="bg-white px-4 py-5 lg:text-[1vw] flex items-center justify-between">
            <input type="text" className="w-full" placeholder="Name" />
            <div className="lg:text-[1.5vw]">
              <CiUser />
            </div>
          </div>
          <div className="bg-white px-4 py-5 lg:text-[1vw]  flex items-center justify-between">
            <input type="text" className="w-full" placeholder="Contact" />
            <div className="lg:text-[1.5vw]">
              <CiMobile4 />
            </div>
          </div>
          <select
            name=""
            id=""
            className="px-4 py-5 text-gray-400 lg:text-[1vw]  w-full bg-white"
          >
            <option value="">Guest</option>
            <option value="">Guest 01</option>
            <option value="">Guest 02</option>
            <option value=""> Guest 03</option>
            <option value=""> Guest 04</option>
          </select>
          <select
            name=""
            id=""
            className="px-4 py-5 text-gray-400 lg:text-[1vw]  w-full bg-white"
          >
            <option value="">Date</option>
            <option value="">1.06.2024</option>
            <option value="">1.06.2024</option>
            <option value="">1.06.2024</option>
            <option value="">1.06.2024</option>
          </select>
          <select
            name=""
            id=""
            className="px-4 py-5 text-gray-400 lg:text-[1vw]  w-full bg-white"
          >
            <option value="">Time</option>
            <option value="">8.00 AM-10.00 AM</option>
            <option value="">11.00 AM-12.00 PM</option>
            <option value="">1.00 PM-2.00 PM</option>
            <option value="">2.00 AM-3.00 AM</option>
          </select>
          <button
            className="py-4 px-10 rounded-md  montserrat text-white bg-[#781393] font-medium text-[3vw] md:text-[2vw] lg:text-[1.05vw]"
            type="submit"
          >
            Book Now +
          </button>
        </form>
      </div>
      <div className="conatact my-8 p-4 lg:px-7 lg:py-9 bg-[#f7f7f7]">
        <div className="w-full mb-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.33750346623!2d-73.97968099999999!3d40.6974881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1711275070354!5m2!1sen!2sin"
            className="w-full"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <h3 className="text-[6vw] mb-4 text-black montserrat font-semibold md:text-[3vw] lg:text-[1.5vw]">
          Contact Info
        </h3>
        <div className="flex flex-col gap-3">
          <div className="flex items-center montserrat text-black font-medium  gap-2">
            <div>
              <IoLocationSharp />
            </div>
            <span className="text-black montserrat font-medium text-[2vw] lg:text-[1vw]">
              {" "}
              California, USA
            </span>
          </div>
          <div className="flex items-center montserrat text-black font-medium  gap-2">
            <div>
              <FaPhoneAlt />
            </div>
            <Link href={"tel:798098089"}>
              <span className="text-black montserrat font-medium text-[2vw] lg:text-[1vw]">
                {" "}
                8700376389
              </span>
            </Link>
          </div>
          <div className="flex items-center montserrat text-black font-medium  gap-2">
            <div>
              <IoMailOutline />
            </div>
            <span className="text-black montserrat font-medium text-[2vw] lg:text-[1vw]">
              {" "}
              example@gmail.com
            </span>
          </div>
          <div className="flex items-center montserrat text-black font-medium  gap-2">
            <div>
              <CiGlobe />
            </div>
            <span className="text-black montserrat font-medium text-[2vw] lg:text-[1vw]">
              {" "}
              www.fioxen.com
            </span>
          </div>
        </div>
        <div className="socials mt-4 flex items-center gap-3">
          <Link href={"/"}>
            <div className="bg-white flex items-center hover:bg-[#FF8037] text-black hover:text-white justify-center md:h-8 lg:h-12 md:w-8 lg:w-12 border border-gray-200">
              <FaFacebookF />
            </div>
          </Link>
          <Link href={"/"}>
            <div className="bg-white flex items-center hover:bg-[#FF8037] text-black hover:text-white justify-center md:h-8 lg:h-12 md:w-8 lg:w-12 border border-gray-200">
              <FaInstagram />
            </div>
          </Link>
          <Link href={"/"}>
            <div className="bg-white flex items-center hover:bg-[#FF8037] text-black hover:text-white justify-center md:h-8 lg:h-12 md:w-8 lg:w-12 border border-gray-200">
              <FaXTwitter />
            </div>
          </Link>
          <Link href={"/"}>
            <div className="bg-white flex items-center hover:bg-[#FF8037] text-black hover:text-white justify-center md:h-8 lg:h-12 md:w-8 lg:w-12 border border-gray-200">
              <FaPinterestP />
            </div>
          </Link>
        </div>
      </div>
      <div className="business-hour mb-8 p-4 lg:px-7 lg:py-9 bg-[#f7f7f7]">
        <h3 className="text-[6vw] mb-4 text-black montserrat font-semibold md:text-[3vw] lg:text-[1.5vw]">
          Business Hour
        </h3>
        <ul class="time-info mt-4">
          <li className="pb-5 mb-5 border-b md:text-[2vw] lg:text-[1.06vw] border-[#e7e7e7] flex justify-between items-center">
            <span class="day">Monday</span>
            <span class="time">08:00 - 21:00</span>
          </li>
          <li className="pb-5 mb-5 border-b md:text-[2vw] lg:text-[1.06vw] border-[#e7e7e7] flex justify-between items-center">
            <span class="day">Tuesday</span>
            <span class="time">08:00 - 21:00</span>
          </li>
          <li className="pb-5 mb-5 border-b md:text-[2vw] lg:text-[1.06vw] border-[#e7e7e7] flex justify-between items-center">
            <span class="day">Wednesday</span>
            <span class="time">08:00 - 21:00</span>
          </li>
          <li className="pb-5 mb-5 border-b md:text-[2vw] lg:text-[1.06vw] border-[#e7e7e7] flex justify-between items-center">
            <span class="day">Thursday</span>
            <span class="time">08:00 - 21:00</span>
          </li>
          <li className="pb-5 mb-5 border-b md:text-[2vw] lg:text-[1.06vw] border-[#e7e7e7] flex justify-between items-center">
            <span class="day">Friday</span>
            <span class="time">08:00 - 21:00</span>
          </li>
          <li className="pb-5 mb-5 border-b md:text-[2vw] lg:text-[1.06vw] border-[#e7e7e7] flex justify-between items-center">
            <span class="day">Saturday</span>
            <span class="time">08:00 - 21:00</span>
          </li>
          <li className="pb-5 mb-5 border-b md:text-[2vw] lg:text-[1.06vw] border-[#e7e7e7] flex justify-between items-center">
            <span class="day">Sunday</span>
            <span class="time st-close">Close</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Boxes;
