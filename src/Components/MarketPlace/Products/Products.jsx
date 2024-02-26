"use client";

import Link from "next/link";
import React, { useState } from "react";
import Filter from "../../../../public/Images/Filters.svg";
import Image from "next/image";
import { Select } from "antd";
import { Option } from "antd/es/mentions";
import { FaAngleRight, FaChevronDown } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";
import marketData from "../index.js";
import { RiStarSFill } from "react-icons/ri";
const Products = () => {
  const [activePage, setActivePage] = useState(1);
  const[visibleItem, setvisibleItem]=useState(15)
 
  const loadMore=()=>{
    setvisibleItem(prev=>prev+15)
  }
  return (
    <div className="p-20">
      <div className="breadcrumb text-[1vw] text-black font-medium montserrat">
        <Link href={"/"}>Home</Link> / Products
      </div>
      <h1 className="text-[2.6vw] text-black  font-semibold montserrat">
        Shop All
      </h1>
      <div className="flex items-center justify-between mt-10 mb-4">
        <button className="btn py-3 px-5 bg-[#781393] flex items-center gap-3 text-white Inter text-[1vw]">
          <div className="w-[1.5vw]">
            <Image
              src={Filter}
              alt="filter_icon"
              className="object-cover h-full w-full"
            />
          </div>
          <span>Filters</span>
        </button>
        <button className="btn py-3 px-2 border-2 border-black flex items-center gap-3 text-Black Inter text-[1vw]">
          <span>Sort by</span>
          <FaChevronDown />
        </button>
      </div>
      <div className="flex items-center justify-between mb-4">
        <div className="py-2 px-3 bg-[#F4F4F4] flex items-center gap-2 text-black Inter text-[1vw]">
          <span>Tag</span>
          <IoCloseOutline />
        </div>
        <span className="text-black Inter text-[1vw]">Showing 15 of 100</span>
      </div>
      <div className="flex my-20 items-center justify-between gap-8 flex-wrap">
        {marketData.slice(0,visibleItem).map((product, i) => (
          <div key={i} className=" product-card border w-[27vw] py-3 px-2">
            <div className="py-2 px-3 bg-[#F4F4F4] w-24 flex  font-medium items-center gap-2 text-black Inter text-[1vw]">
              <span className="block grow ml-2">In Stock</span>
            </div>
            <div className="w-full my-6 mix-blend-screen">
              <Image
                src={product.img}
                alt={product.title + i}
                className="object-cover h-full w-full"
              />
            </div>
            <div className="product-info mt-6">
              <div
                className={`flex items-center text-[1.2vw] font-semibold justify-between`}
              >
                <span
                  className={` ${
                    product.title === "Healthshine Grade 1 Air Mattress Overlay"
                      ? `text-[1.1vw]`
                      : `text-[1.2vw]`
                  } font-semibold text-black Inter`}
                >
                  {product.title}
                </span>
                <span>{product.price}</span>
              </div>
              <span className="text-[.8vw] Inter capitalize font-medium">
                {product.cat}
              </span>
              <div className="my-4 flex items-center">
                <RiStarSFill size={"1.5vw"} />
                <RiStarSFill size={"1.5vw"} />
                <RiStarSFill size={"1.5vw"} />
                <RiStarSFill size={"1.5vw"} />
                <RiStarSFill size={"1.5vw"} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination py-3 flex items-center  justify-between border-y border-black text-[1.2vw] font-semibold">
        <div className="flex items-center gap-4">
          <div
          onClick={()=>setActivePage(1)}
            className={`w-[2vw] btn cursor-pointer flex items-center justify-center ${
              activePage === 1 && `border border-black rounded-full`
            }`}
          >
            1
          </div>
          <div
          onClick={()=>setActivePage(2)}
            className={`w-[2vw] btn cursor-pointer flex items-center justify-center ${
              activePage === 2 && `border border-black rounded-full`
            }`}
          >
            2
          </div>
          <div
          onClick={()=>setActivePage(3)}
            className={`w-[2vw] btn cursor-pointer flex items-center justify-center ${
              activePage === 3 && `border border-black rounded-full`
            }`}
          >
            3
          </div>
          <FaAngleRight size={".9vw"} />
        </div>
        <button onClick={loadMore} className="button py-3 px-5 border-2 border-black text-[1vw]">
          Load More
        </button>
      </div>
    </div>
  );
};

export default Products;
