"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "../../../../public/Images/dialable-logo.png";

import { Button, Drawer } from "antd";
import Menu from "../../../../public/Images/menu.svg";
import { FaArrowLeft } from "react-icons/fa6";
import { MdOutlineLocalPhone } from "react-icons/md";
const Nav = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
 
  return (
    <div className="flex items-center justify-between px-6  lg:px-10 py-6 border-t border-b bg-white border-zinc-300 montserrat sticky top-0 z-[99]">
      <div className="logo-links flex  items-center gap-4 lg:gap-14">
        <div className=" text-xl">
          <Link href={"/"}>
            <FaArrowLeft />
          </Link>
        </div>
        <div className="logo relative w-[33vw] lg:w-[11vw]">
          <Link href={"/"}>
            <Image src={Logo} alt="dialable-logo" objectFit="cover" />
          </Link>
        </div>
        <p className="lg:block hidden text-sm text-black font-medium roboto">
          Listed Businesses
        </p>
       
      </div>
      <div className="lg:hidden">
        <button onClick={showDrawer} className="relative w-[7vw]">
          <Image src={Menu} alt="menu" objectFit="cover" />
        </button>
        <Drawer title="" onClose={onClose} open={open}>
        <p className="text-sm text-black font-medium roboto">
          Listed Businesses
        </p>
        <div className="flex items-center mt-4 text-lg">
          <span>
            <MdOutlineLocalPhone />
          </span>
          <Link href={"tel:1234567890"} >
          12345 67890
          </Link>
        </div>
        <button className="mt-8 text-white btn bg-[#FF6004] py-2 px-8 text-sm font-semibold cursor-pointer roboto">
          Sign Up
        </button>
        </Drawer>
      </div>

      <div className=" hidden lg:flex items-center gap-4">
        <div className="flex items-center">
          <span>
            <MdOutlineLocalPhone />
          </span>
          <Link href={"tel:1234567890"} className="text-sm">
          12345 67890
          </Link>
        </div>
        <button className="hidden lg:block text-white btn bg-[#FF6004] py-2 px-8 text-sm font-semibold cursor-pointer roboto">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Nav;
