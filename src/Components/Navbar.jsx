"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Logo from "../../public/Images/dialable-logo.png";
import { RxAccessibility } from "react-icons/rx";
import { IoCartOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";

import { Button, Drawer } from "antd";
import { useRouter } from "next/navigation";
import Menu from "../../public/Images/menu.svg";
import { FaChevronDown } from "react-icons/fa6";
import { getUserFromLocalStorage } from "@/utils";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [slectedFontSize, setSlectedFontSize] = useState(0);
  const toolBox = useRef(null);
  const [user, setUser] = useState(null);

  const showDrawer = () => {
    setOpen(true);
  };

  useEffect(() => {
    const userData = getUserFromLocalStorage();
    setUser(userData);
  }, []);

  const onClose = () => {
    setOpen(false);
  };
  const links = [
    {
      title: "For Abled",
      href: "/business",
    },
    {
      title: "For Corporates",
      href: "/businesslisting",
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

  const subNavLinks = [
    {
      title: "Products",
      href: "/advertise",
    },
    {
      title: "Store",
      href: "/marketplace",
    },
    {
      title: "Support",
      href: "/contact",
    },
    {
      title: "Enablers",
      href: "#",
    },
    {
      title: "B2B",
      href: "/marketplace",
    },
    {
      title: "Employment",
      href: "/joblisting",
    },
    {
      title: "Learn",
      href: "#",
    },
    {
      title: "Community",
      href: "#",
    },
    {
      title: "Events",
      href: "#",
    },
    {
      title: "Policy",
      href: "#",
    },
    {
      title: "Change Makers",
      href: "#",
    },
    {
      title: "Alliances",
      href: "#",
    },
  ];

  // font size
  // const handleTextSize = (size) => {
  //   setSlectedFontSize(size);
  // };
  return (
    <div className="flex items-center justify-between lg:px-8 px-4 py-2 md:py-2 lg:py-[0.85rem] border-t border-b bg-white border-zinc-300 montserrat sticky top-0 z-[1000]">
      <div className="logo-links flex  items-center">
        <div className="logo relative w-[33vw] md:w-[20vw] lg:w-[11vw]">
          <Link href={"/"}>
            <Image src={Logo} alt="dialable-logo" objectFit="cover" />
          </Link>
        </div>
        <div
          className={`lg:flex hidden gap-5 mx-12 text-[0.8vw] items-center leading-none`}
        >
          {links.map((item, index) => (
            <button key={index}>
              <Link
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
            </button>
          ))}
        </div>
      </div>

      <div className="lg:hidden">
        <div className="flex items-center gap-4 lg:hidden">
          {user ? (
            <button>
              <Link href={"/profile"}>
                <VscAccount size="2rem" />
              </Link>
            </button>
          ) : (
            <button>
              <Link
                href={"/signup"}
                className="hidden lg:block text-white text-[0.7vw] btn font-semibold bg-[#781393] py-2 px-4 montserrat  cursor-pointer"
              >
                Sign Up
              </Link>
            </button>
          )}
          <button onClick={showDrawer} className="relative md:w-[5vw] w-[7vw]">
            <Image src={Menu} alt="menu" objectFit="cover" />
          </button>
        </div>
        <div className="nav-drawer">
          <Drawer   title="" onClose={onClose} open={open}>
            <div className="flex items-start flex-col   text-[3vw] font-medium montserrat ">
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

              {subNavLinks.map((subLinkItem, index) => (
                <Link key={index} href={subLinkItem.href} className="py-4">
                  {subLinkItem.title}
                </Link>
              ))}
            </div>
          </Drawer>
        </div>
      </div>
      <div className="hidden lg:flex gap-5 items-center relative">
        <div className="accessibility ">
          <button className="cursor-pointer text-black   text-sm gap-1 flex items-center">
            <div>
              <RxAccessibility size="2.5rem" />
            </div>
            <FaChevronDown />
          </button>
          <div className="tools shadow-xl   bg-white py-6 rounded-xl px-8">
            <div>
              <h1 className="montserrat text-black uppercase text-[1vw] font-semibold">
                Accessibility Tools
              </h1>

              <div className="flex flex-col items-start border-b-2 gap-3 mt-6">
                <h3 className="font-medium text-[1vw]">Contrast:</h3>
                <div className="flex items-center gap-5 mb-4">
                  <button className="white cursor-pointer">
                    <div className="bg-white mb-2 border-2 border-black w-[4vw] h-[4vw] rounded-full"></div>
                    <span className="text-black text-xs font-normal montserrat">
                      White Mode
                    </span>
                  </button>
                  <button className="black cursor-pointer">
                    <div className="bg-black mb-2 border-2 border-black w-[4vw] h-[4vw] rounded-full"></div>
                    <span className="text-black text-xs font-normal montserrat">
                      Dark Mode
                    </span>
                  </button>
                </div>
              </div>
              <h3 className="font-medium text-[.94vw] mt-6">Text Size:</h3>
              <div className="flex items-center gap-4 mt-4">
                <button
                  // onClick={() => handleTextSize(0)}
                  className="border-2 w-[4vw] cursor-pointer flex items-center justify-center border-black p-2"
                >
                  <span className="text-[.86vw] text-center font-semibold">
                    A
                  </span>
                </button>
                <button
                  // onClick={() => handleTextSize(0.1)}
                  className="border-2 w-[4vw] cursor-pointer flex items-center justify-center border-black p-2"
                >
                  <span className="text-[.96vw] text-center font-semibold">
                    A
                  </span>
                </button>
                <button
                  // onClick={() => handleTextSize(0.5)}
                  className="border-2 w-[4vw] cursor-pointer flex items-center justify-center border-black p-2"
                >
                  <span className="text-[1vw] text-center font-semibold">
                    A
                  </span>
                </button>
                <button
                  onClick={() => handleTextSize(1.2)}
                  className="border-2 w-[4vw] cursor-pointer flex items-center justify-center border-black p-2"
                >
                  <span className="text-[1.2vw] text-center font-semibold">
                    A
                  </span>
                </button>
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
              className="py-2 montserrat border border-[rgba(0,0,0,0.25)] px-4"
            />
          </form>
        </div>
        <button>
          <IoCartOutline size="2rem" />
        </button>
        {user ? (
          <button>
            <Link href={"/profile"}>
              <VscAccount size="2rem" />
            </Link>
          </button>
        ) : (
          <button>
            <Link
              href={"/signup"}
              className="hidden lg:block text-white text-[0.7vw] btn font-semibold bg-[#781393] py-2 px-4 montserrat  cursor-pointer"
            >
              Sign Up
            </Link>
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
