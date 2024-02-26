import Image from "next/image";
import React from "react";
import Discount from "../../../../public/Images/discount.png"

const Banner = () => {
  return (
    <div className="relative">
      <Image
        src={Discount}
        alt="banner"
        className="object-cover h-full w-full"
      />
    </div>
  );
};

export default Banner;
