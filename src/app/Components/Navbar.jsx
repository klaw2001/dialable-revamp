import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../Images/dialable-logo.png";
import { FaAngleDown } from "react-icons/fa6";
const Navbar = () => {
  return (
    <div className="flex items-center justify-between pr-14 pl-20 py-6 border-t border-b bg-white border-zinc-300 montserrat sticky top-0 z-[99]">
      <div className="logo-links flex  items-center">
        <div className="logo relative w-[11vw]">
          <Link href={"#"}>
            <Image src={Logo} alt="dialable-logo" objectFit="cover" />
          </Link>
        </div>
        <div className="flex gap-5 mx-12 text-sm leading-none">
          {["Pages", "Advertise", "List Your Business", "Find Jobs"].map(
            (item, index) => (
              <Link key={index} href={"#"} className="text-zinc-600 font-medium hover:text-black">
                {index === 0 ? (
                  <span className="flex gap-2 items-center">
                    {item} <FaAngleDown />
                  </span>
                ) : (
                  <span>{item}</span>
                )}
              </Link>
            )
          )}
        </div>
      </div>
      <button className="text-white btn bg-[#FF6004] py-2 px-8 text-md cursor-pointer">Join</button>
    </div>
  );
};

export default Navbar;
