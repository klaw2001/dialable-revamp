import Link from "next/link";
import React from "react";
import Prod from "../../../../public/Images/wheelchairfront.png";
import Image from "next/image";
import { RiDeleteBin6Line } from "react-icons/ri";
const Cart = () => {
  return (
    <div className="py-10 px-4 lg:py-32 lg:px-10 lg:mb-10 relative overflow-x-clip">
      <div className="breadcrumb text-black text-[3vw] lg:text-[1.1vw] font-medium">
        <Link href={"/"}>Home</Link> {`>`} Cart
      </div>
      <h1 className="Sans text-[5vw] lg:text-[3vw] font-bold mb-8">My Cart</h1>
      <div className="flex gap-6 flex-col lg:flex-row montserrat">
        <div className="w-full lg:w-1/2">
          <div className="pt-10 pb-4 border-y-2 border-black">
            <div className="flex lg:flex-row flex-col gap-3">
              <div className="img w-full lg:w-[7vw] lg:h-[7vw] border border-black">
                <Image
                  src={Prod}
                  alt="productimg"
                  className="object-cover h-full w-full"
                />
              </div>
              <div className="grow">
                <div className="flex flex-col lg:flex-row justify-between">
                  <div className="flex gap-3">
                    <div className="info ">
                      <h1 className="font-bold text-[5.2vw] lg:text-[1.2vw]">
                        Karma Ergo Lite Silver
                      </h1>
                      <p className="text-[2.85vw] lg:text-[.85vw]">Color: Black</p>
                      <p className="text-[2.85vw] lg:text-[.85vw]">Size: 16 inch</p>
                      <p className="text-[2.85vw] lg:text-[.85vw]">In Stock</p>
                    </div>
                  </div>
                  <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
                    <div className="quantity mt-4 lg:mt-0">
                      <h1 className="font-bold text-[5.2vw] lg:text-[1.2vw]">Quantity</h1>
                      <select
                        name=""
                        className="border mt-2 focus-visible:rounded-none border-black py-2 px-6 "
                        id=""
                      >
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                      </select>
                    </div>
                    <div className="total">
                      <h1 className="font-bold text-[5.2vw] lg:text-[1.2vw] text-left lg:text-right">
                        Total
                      </h1>
                      <p className="font-bold text-[4vw] lg:text-[1vw] mt-3">₹2500 /-</p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between  mt-8 items-center">
                  <div className="buttons flex items-center gap-3 montserrat">
                    <button className="text-[2.85vw] lg:text-[.85vw]">Edit</button>
                    <button className="text-[2.85vw] lg:text-[.85vw]">Move to Wishlist</button>
                    <button className="text-[2.85vw] lg:text-[.85vw]">Save for Later</button>
                  </div>
                  <button className="btn">
                    <RiDeleteBin6Line />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="montserrat border-2 py-2 px-4 lg:py-4 lg:px-6 bg-[#F4EBFF] lg:h-[35vw] border-[#781393]">
            <div>
              <p className="font-semibold text-[2.85vw] lg:text-[.85vw] mb-1">
                Enter Promo Code
              </p>
              <div className="flex items-center gap-3 lg:gap-6">
                <input
                  type="text"
                  className="p-2 lg:p-4 w-full"
                  placeholder="Promo Code"
                />
                <button className="p-2 lg:p-4 w-[50%] bg-[#781393] btn text-white font-semibold">
                  Submit
                </button>
              </div>
              <div className="font-medium mt-10">
                <div className="flex justify-between">
                  <p className="text-[#000000BF]">Shipping Cost</p>
                  <p>-₹0</p>
                </div>
                <div className="flex justify-between my-4">
                  <p className="text-[#000000BF]">Discount</p>
                  <p>-₹0</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[#000000BF]">Tax</p>
                  <p>TBD</p>
                </div>
              </div>
              <div className="total font-bold flex justify-between my-10">
                <p className="text-[#000000BF]">Estimated Total</p>
                <p>₹2500 /-</p>
              </div>
              <button className="p-4 w-full bg-[#781393] text-white font-medium btn">
                  Checkout
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
