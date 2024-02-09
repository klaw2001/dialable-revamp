import React from "react";

const MarketPlace = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="market-cont flex items-center justify-center gap-6 flex-col">
        <h1 className="text-[3vw] w-[53%] text-center font-bold montserrat leading-[3.5vw]">
          Explore Our Marketplace and Find Amazing Products
        </h1>
        <p className="font-regular roboto text-lg text-center">{`Welcome to our marketplace, where you can browse and purchase a wide range of products and services. With just a few clicks, you'll find exactly what you're looking for.`}</p>
      </div>
    </div>
  );
};

export default MarketPlace;
