"use client";
import Image from "next/image";
import React, { useState } from "react";
import Filter from "../../../../public/Images/Filters.svg";
import { Drawer } from "antd";
import ShoppingItems from "../ShoppingItems/ShoppingItems";
const Items = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="flex items-center justify-between pt-4 px-4 md:pt-6 md:px-6 lg:pt-10 lg:px-10">
        <h1 className="text-[5.6vw] Sans md:text-[4vw] lg:text-[2.6vw] text-black  font-semibold montserrat">
          Shop All
        </h1>
        <button
          onClick={showDrawer}
          className="btn py-3 px-2 bg-[#781393] flex items-center text-white Inter text-[2.2vw] md:text-[2vw] lg:text-[1vw]"
        >
          <div className="w-[3.5vw] md:w-[2.5vw] lg:w-[1.5vw]">
            <Image
              src={Filter}
              alt="filter_icon"
              className="object-cover h-full w-full"
            />
          </div>
          <span> All Filters</span>
        </button>
      </div>
      <div className="my-6">
        <ShoppingItems open={open} close={onClose} />
      </div>
    </div>
  );
};

export default Items;
