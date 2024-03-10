import Image from "next/image";
import React from "react";
import Discount from "../../../../public/Images/discount.png"

const Banner = () => {
  return (
    <div className="relative">
      <Image
        src={Discount}
        height={400}
        loading="lazy"
        placeholder="blur"
        alt="banner"
        className="w-full"
      />
    </div>
  );
};

export default Banner;
