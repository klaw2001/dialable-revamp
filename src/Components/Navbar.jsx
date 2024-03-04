"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import Logo from "../../public/Images/dialable-logo.png";
import { RxAccessibility } from "react-icons/rx";
import { IoCartOutline } from "react-icons/io5";

import { Button, Drawer } from "antd";
import { useRouter } from "next/navigation";
import Menu from "../../public/Images/menu.svg";
import { FaChevronDown } from "react-icons/fa6";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toolBox = useRef(null);

  const showDrawer = () => {
    setOpen(true);
  };

  // const handleMouseOver = () => {
  //   toolBox.current.style.opacity = "1";
  //   toolBox.current.style.transform = "translateY(0)";
  //   toolBox.current.style.transform="scaleY(1)";

  //   console.log("first");
  // };
  // const handleMouseLeave = () => {
  //   setTimeout(() => {
  //     toolBox.current.style.opacity = "0";
  //     toolBox.current.style.transform = "translateY(-1rem)";
  //     toolBox.current.style.transform = "scaleY(0)";
  //   }, 3000);
  // };

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
      href: "/marketplace",
    },
    {
      title: "About Us",
      href: "/about",
    },
  ];

  return (
    <div className="flex items-center justify-between lg:px-8 px-4 py-2 md:py-2 lg:py-[0.85rem] border-t border-b bg-white border-zinc-300 montserrat sticky top-0 z-[99]">
      <div className="logo-links flex  items-center">
        <div className="logo relative w-[33vw] md:w-[20vw] lg:w-[11vw]">
          <Link href={"/"}>
            <Image src={Logo} alt="dialable-logo" objectFit="cover" />
          </Link>
        </div>
        <div className="lg:flex hidden gap-5 mx-12 text-[1.05vw] items-center leading-none">
          {links.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-zinc-600 font-medium cursor-pointer hover:text-black"
            >
              {index === 2 ? (
                <span>{item.title}</span>
              ) : (
                <div className="flex gap-2 items-center">
                  <span value="">{item.title}</span>
                  <FaChevronDown />
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
      <div className="lg:hidden">
        <button onClick={showDrawer} className="relative md:w-[5vw] w-[7vw]">
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
      <div className="hidden lg:flex gap-5 items-center relative">
        <div className="accessibility ">
          <div
           
            className="cursor-pointer text-black   text-sm gap-1 flex items-center"
          >
            <div>
              <RxAccessibility size="2.5rem" />
            </div>
            <FaChevronDown />
          </div>
          <div
        
            className="tools shadow-xl   bg-white py-6 rounded-xl px-8"
          >
            <div>
              <h1 className="montserrat text-black uppercase text-[1vw] font-semibold">
                Accessibility Tools
              </h1>

              <div className="flex flex-col items-start border-b-2 gap-3 mt-6">
                <h3 className="font-medium text-[1vw]">Contrast:</h3>
                <div className="flex items-center gap-5 mb-4">
                  <div className="white cursor-pointer">
                    <div className="bg-white mb-2 border-2 border-black w-[4vw] h-[4vw] rounded-full"></div>
                    <span className="text-black text-xs font-normal montserrat">
                      White Mode
                    </span>
                  </div>
                  <div className="black cursor-pointer">
                    <div className="bg-black mb-2 border-2 border-black w-[4vw] h-[4vw] rounded-full"></div>
                    <span className="text-black text-xs font-normal montserrat">
                      Dark Mode
                    </span>
                  </div>
                </div>
              </div>
              <h3 className="font-medium text-[.94vw] mt-6">Text Size:</h3>
              <div className="flex items-center gap-4 mt-4">
                <div className="border-2 w-[4vw] cursor-pointer flex items-center justify-center border-black p-2">
                  <span className="text-[.86vw] text-center font-semibold">
                    A
                  </span>
                </div>
                <div className="border-2 w-[4vw] cursor-pointer flex items-center justify-center border-black p-2">
                  <span className="text-[.96vw] text-center font-semibold">
                    A
                  </span>
                </div>
                <div className="border-2 w-[4vw] cursor-pointer flex items-center justify-center border-black p-2">
                  <span className="text-[1vw] text-center font-semibold">
                    A
                  </span>
                </div>
                <div className="border-2 w-[4vw] cursor-pointer flex items-center justify-center border-black p-2">
                  <span className="text-[1.2vw] text-center font-semibold">
                    A
                  </span>
                </div>
              </div>
            </div>
            <button className="text-white montserrat text-[1.3vw] font-semibold btn text-center bg-[#781393] py-2 px-4 w-[100%] mt-4">
              Reset
            </button>
          </div>
        </div>
        <div className="search montserrat">
          <form action="">
            <input
              type="text"
              placeholder="&#xF002;   Search"
              style={{ fontFamily: "Montserrat, FontAwesome" }}
              className="py-2 bg-[rgba(217,217,217,0.50)] montserrat border border-[rgba(0,0,0,0.25)] px-4"
            />
          </form>
        </div>
        <div>
          <IoCartOutline size="2.5rem" />
        </div>
        <Link
          href={"/joblisting"}
          className="hidden lg:block text-white text-[1vw] btn font-semibold bg-[#781393] py-2 px-4 montserrat  cursor-pointer"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
