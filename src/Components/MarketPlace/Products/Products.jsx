"use client";

import Link from "next/link";
import React, { useState } from "react";
import Filter from "../../../../public/Images/Filters.svg";
import Image from "next/image";
import { Drawer } from "antd";

import { FaAngleRight, FaChevronDown } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";
import marketData from "../index.js";
import { RiStarSFill } from "react-icons/ri";
import ProductsRow from "./ProductsRow";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
const Products = () => {
  
  const [activePage, setActivePage] = useState(1);
  const [visibleItem, setVisibleItem] = useState(16);
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("left");
  const loadMore = () => {
    const newVisibleItems = visibleItem + 14;
    setVisibleItem(Math.min(newVisibleItems, marketData.length));
  };
  const showDrawer = () => {
    setOpen(true);
    console.log("first");
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className="py-10 lg:py-20">
      <div className="breadcrumb px-6 lg:px-14 text-[3vw] md:text-[2vw] lg:text-[1.05vw] text-black font-medium montserrat">
        <Link href={"/"}>Home</Link> / Products
      </div>
      <h1 className="text-[5.6vw] Sans md:text-[4vw] lg:text-[2.6vw] px-6 lg:px-14 text-black  font-semibold montserrat">
        Shop All
      </h1>
      <div className="flex px-6 lg:px-14 items-center justify-between mt-6  lg:mt-10 mb-4">
        <button
          onClick={showDrawer}
          className="btn py-3 px-5 bg-[#781393] flex items-center gap-1 lg:gap-3 text-white Inter text-[3vw] md:text-[2vw] lg:text-[1.05vw]"
        >
          <div className="w-[3.5vw] md:w-[2.5vw] lg:w-[1.5vw]">
            <Image
              src={Filter}
              alt="filter_icon"
              className="object-cover h-full w-full"
            />
          </div>
          <span>Filters</span>
        </button>
        <button className="btn py-3 px-2 border-2 border-black flex items-center gap-3 text-Black Inter text-[3vw] md:text-[2vw] lg:text-[1.05vw]">
          <span>Sort by</span>
          <FaChevronDown />
        </button>
      </div>
      <div className="flex px-6 lg:px-14 items-center justify-between mb-4">
        <div className="py-2 px-3 bg-[#F4F4F4] flex items-center gap-2 text-black Inter text-[3vw] md:text-[2vw] lg:text-[1.05vw]">
          <span>Tag</span>
          <IoCloseOutline />
        </div>
        <span className="text-black Inter text-[3vw] md:text-[2vw] lg:text-[1vw]">
          Showing {visibleItem} of 100
        </span>
      </div>
      <ProductsRow
        onClose={onClose}
        open={open}
        placement={placement}
        visibleItem={visibleItem}
      />
      <div className="mx-6 lg:mx-20 my-8 pagination py-3 flex items-center  justify-between border-y border-black text-[1.2vw] font-semibold">
        <div className="flex items-center gap-2 lg:gap-4">
          <div
            onClick={() => setActivePage(1)}
            className={`w-[6vw] h-[6vw] md:w-[4vw] md:h-[4vw] lg:h-[2vw] text-[3vw] md:text-[2vw] lg:text-[1vw] lg:w-[2vw] btn cursor-pointer flex items-center justify-center ${
              activePage === 1 && `border border-black rounded-full`
            }`}
          >
            1
          </div>
          <div
            onClick={() => setActivePage(2)}
            className={`w-[6vw] h-[6vw] md:w-[4vw] md:h-[4vw] lg:h-[2vw] text-[3vw] md:text-[2vw] lg:text-[1vw] lg:w-[2vw] btn cursor-pointer flex items-center justify-center ${
              activePage === 2 && `border border-black rounded-full`
            }`}
          >
            2
          </div>
          <div
            onClick={() => setActivePage(3)}
            className={`w-[6vw] h-[6vw] md:w-[4vw] md:h-[4vw] lg:h-[2vw] text-[3vw] md:text-[2vw] lg:text-[1vw] lg:w-[2vw] btn cursor-pointer flex items-center justify-center ${
              activePage === 3 && `border border-black rounded-full`
            }`}
          >
            3
          </div>
          <FaAngleRight size={".9vw"} />
        </div>
        <button
          onClick={loadMore}
          className="button btn py-3 px-5 border-2 border-black text-[3vw] md:text-[2vw] lg:text-[1vw]"
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default Products;
