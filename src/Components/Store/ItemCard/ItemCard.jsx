import Image from "next/image";
import React from "react";
import Item from "../../../../public/Images/item-1.png";
const ItemCard = () => {
  return (
    <div className="w-[20.22vw] grow flex  gap-2 flex-col items-center relative">
      <div className="w-full">
        <Image src={Item} className="h-full w-full" alt={"item_1"} />
      </div>
      <div className="h-14 w-14 absolute top-[5%]  left-[5%] flex flex-col item-center justify-center text-center rounded-full bg-[#FF6004] text-white text-[.67vw] montserrat font-medium">
        <span className="">New</span>
      </div>
      <div className="info flex flex-col items-center gap-2 justify-center">
        <h1 className="montserrat text-black font-semibold text-[1.5vw]">Handmade Earings</h1>
        <span className="montserrat text-[#777676] font-semibold text-[.8vw]">Accessories</span>

        <h4 className="text-[#FF6004] font-bold montserrat text-[1.08vw]">₹300/-</h4>
      </div>
    </div>
  );
};

export default ItemCard;
