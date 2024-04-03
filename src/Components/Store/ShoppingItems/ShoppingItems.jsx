import { Drawer } from "antd";
import React from "react";
import ItemCard from "../ItemCard/ItemCard";
import Filters from "@/Components/MarketPlace/Products/Filters";
const containerStyle = {
  position: "relative",
  zIndex: 2,
  // overflow: "hidden",
  background: "white",
};

const ShoppingItems = ({ open, close }) => {
  return (
    <div style={containerStyle}>
      <Drawer
        title=""
        open={open}
        onClose={close}
        placement={"right"}
        getContainer={false}
        closable={true}
        className="filter border-t border-black"
      >
        <Filters/>
        <div className="border-t sticky w-full bottom-0 mt-12 bg-white border-black flex items-center justify-between p-4">
          <button className="text-black text-[3vw] md:text-[2vw] lg:text-[1vw] font-medium">
            Clear all
          </button>
          <button className="text-white text-[3vw] md:text-[2vw] lg:text-[1vw] font-medium btn py-3 px-6 bg-[#781393]">
            Apply
          </button>
        </div>
      </Drawer>

      <div className="flex px-8 gap-6 items-center py-6  flex-wrap justify-between">
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </div>
      <div className="flex items-center justify-center mt-4">
        <button className="btn montserrat text-center font-medium py-2 px-4 text-balck border-balck md:text-[1.5vw] lg:text-[.8vw] border-2 mt-4">
          View More
        </button>
      </div>
    </div>
  );
};

export default ShoppingItems;
