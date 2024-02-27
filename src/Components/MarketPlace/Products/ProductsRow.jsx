import { Drawer, theme } from "antd";
import Image from "next/image";
import React from "react";
import { RiStarSFill } from "react-icons/ri";
import marketData from "../index.js";
import Filters from "./Filters.jsx";

const ProductsRow = ({open, onClose, placement, visibleItem}) => {
    const { token } = theme.useToken();
    const containerStyle = {
        position: 'relative',
        zIndex:2,
        overflow: 'hidden',
        background: token.colorFillAlter,
    
      };
  return (
    <div className=" product  relative" style={containerStyle}>
      <Drawer
        title=""
        onClose={onClose}
        open={open}
        placement={placement}
        getContainer={false}
        closable={true}
        className=" border-t border-black"
      >
        <Filters/>
        <div className="border-t mt-12 border-black flex items-center justify-between p-4">
            <button className="text-black text-[1vw] font-medium">Clear all</button>
            <button className="text-white text-[1vw] font-medium btn py-3 px-6 bg-[#781393]">Apply</button>
        </div>
      </Drawer>
      <div className="flex py-10 px-20 items-center gap-14 flex-wrap">
        {marketData.slice(0, visibleItem).map((product, i) => (
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
    </div>
  );
};

export default ProductsRow;
