import Image from "next/image";
import React from "react";
import beds from "../../../public/Images/rentalProducts/beds.png"
import scooters from "../../../public/Images/rentalProducts/scooters.png"
import walkers from "../../../public/Images/rentalProducts/walkers.png"
import wheelchair from "../../../public/Images/rentalProducts/wheelchair.png"
const RentalProducts = () => {
  const rentalProducts = [
    {
      title: "Medical Beds",
      img: beds,
    },
    {
      title: "Walkers",
      img: walkers,
    },
    {
      title: "Scooters",
      img: scooters,
    },
    {
      title: "Wheelchairs",
      img: wheelchair,
    },
  ];

  return (
    <div className="p-10">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-black Sans font-semibold text-[6vw] lg:text-[3.5vw]">Rental Products</h1>
        <p className="text-black roboto font-bold text-[3vw] text-center lg:text-[1.2vw]">
          Not looking to buy? Check out our rental products, available for a
          period that suits you
        </p>
        <button className="text-black mt-2 montserrat shadow-xl font-bold lg:h-[3vw]  btn text-[3vw] lg:text-[1vw] py-2 px-6 leading-none border-[2px] border-black ">
          Browse
        </button>
      </div>
      <div className="flex items-center flex-wrap lg:flex-nowrap justify-center gap-8 px-2 py-16">
            {
                rentalProducts.map((rentalProduct,i)=>(
                    <div key={i} className="flex items-center flex-col gap-2">
                        <div className="img w-[30vw] lg:w-[20vw]">
                            <Image src={rentalProduct.img} alt={rentalProduct.title} className="object-cover h-full w-full"/>
                        </div>
                        <p className="montserrat text-black text-[3vw] lg:text-[1.3vw] font-bold">{rentalProduct.title}</p>
                    </div>
                ))
            }
      </div>
    </div>
  );
};

export default RentalProducts;
