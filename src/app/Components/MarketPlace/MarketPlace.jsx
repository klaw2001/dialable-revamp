import React from "react";
import marketData from "./index.js";
import Image from "next/image";
import { RiStarSFill,RiStarLine } from "react-icons/ri";

const MarketPlace = () => {
  return (
    <div className="flex items-center my-10 justify-center gap-10 flex-col p-20">
      <div className="market-cont mt-20 flex items-center justify-center gap-6  flex-col">
        <h1 className="text-[3vw] w-[53%] text-center font-bold montserrat leading-[3.5vw]">
          Explore Our Marketplace and Find Amazing Products
        </h1>
        <p className="font-normal roboto text-lg w-[72%] text-center">{`Welcome to our marketplace, where you can browse and purchase a wide range of products and services. With just a few clicks, you'll find exactly what you're looking for.`}</p>
        <button className="text-white btn bg-[#781393] py-4 px-8 text-md montserrat">Browse</button>
      </div>
      <div className="flex items-center justify-center p-[2vw] mt-6 gap-[2vw]">
          {marketData.map((item,index)=>(
            <div className="relative montserrat" key={index}>
                <div className="img relative  w-[28vw] bg-white mb-2">
                  <Image src={item.img} alt={item.title} objectFit="cover" className="w-full h-full mix-blend-multiply"/>
                </div>
                <div className="cardinfo relative bar right-[-1%] z-[2] w-[98%] bg-white box-shadow  p-4 mt-[-10%]">
                  <div className="flex items-center justify-between">
                    <h1 className="text-[1.5vw] font-semibold">{item.title}</h1>
                    {index===2?<span className="flex"><RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarLine/></span>:<span className="flex items-center"><RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSFill /></span>}
                  </div>
                  <p className="text-black font-medium text-[.9vw]">{item.desc}</p>
                  <div className="flex items-center justify-between mt-2 ">
                    <div className="tag p-2 bg-[#F4F4F4] rounded text-[#8F8F8F] text-[.8vw]">{item.cat}</div>
                    <h1 className="text-black font-semibold text-[1.1vw]">{item.price}</h1>
                  </div>
                  <button className="w-full mt-6 btn px-4 py-2 border-2 border-black text-black font-medium">Add To Cart</button>
                </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MarketPlace;
