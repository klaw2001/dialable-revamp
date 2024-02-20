"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "../../public/Images/dialable-logo.png";
import { RxAccessibility } from "react-icons/rx";
import { IoCartOutline } from "react-icons/io5";

import { Button, Drawer } from "antd";
import { useRouter } from "next/navigation";
import Menu from "../../public/Images/menu.svg";

const Navbar = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const links = [
    {
      title: "For Abled",
      href: "#",
    },
    {
      title: "For Corporates",
      href: "#",
    },
    {
      title: "MarketPlace",
      href: "#",
    },
    {
      title: "About Us",
      href: "#",
    },
  ];
  return (
    <div className="flex items-center justify-between lg:px-4 px-10 py-6 border-t border-b bg-white border-zinc-300 montserrat sticky top-0 z-[99]">
      <div className="logo-links flex  items-center">
        <div className="logo relative w-[33vw] lg:w-[11vw]">
          <Link href={"#"}>
            <Image src={Logo} alt="dialable-logo" objectFit="cover" />
          </Link>
        </div>
        <div className="lg:flex hidden gap-5 mx-12 text-[1vw] items-center leading-none">
          {links.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-zinc-600 font-medium hover:text-black"
            >
              {index === 2 ? (
                <span>{item.title}</span>
              ) : (
                <select className="flex gap-2 items-center">
                  <option value="">{item.title}</option>
                </select>
              )}
            </Link>
          ))}
        </div>
      </div>
      <div className="lg:hidden">
        <button onClick={showDrawer} className="relative w-[7vw]">
          <Image src={Menu} alt="menu" objectFit="cover" />
        </button>
        <Drawer title="" onClose={onClose} open={open}>
          <div className="flex items-start flex-col gap-4  text-lg font-medium montserrat ">
            {links.map((linkItem, index) => (
              <Link key={index} href={linkItem.href} className="py-4">
                {index === 0 ? (
                  <select className="flex gap-2 items-center">
                    <option value="">{linkItem.title}</option>
                  </select>
                ) : (
                  <span>{linkItem.title}</span>
                )}
              </Link>
            ))}
          </div>
          <button className=" mt-4 text-white btn bg-[#FF6004] py-2 px-8 text-lg cursor-pointer">
            Join
          </button>
        </Drawer>
      </div>
      <div className="flex gap-5 items-center">
        <div className="accessibility text-black text-sm flex items-center">
          <div>
            <RxAccessibility size="2.5rem" />
          </div>
          <select name="" className="bg-transparent border-none" id="">
            <option value=""></option>
          </select>
        </div>
        <div className="search montserrat">
          <form action="">
            <input
              type="text"
              placeholder="&#xF002;   Search"
              style={{ fontFamily: "Montserrat, FontAwesome" }}
              className="py-3 bg-[rgba(217,217,217,0.50)] montserrat border border-[rgba(0,0,0,0.25)] px-4"
            />
          </form>
        </div>
        <div>
          <IoCartOutline size="2.5rem" />
        </div>
        <Link
          href={"/joblisting"}
          className="hidden lg:block text-white btn font-semibold bg-[#781393] py-3 px-4 montserrat text-md cursor-pointer"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
