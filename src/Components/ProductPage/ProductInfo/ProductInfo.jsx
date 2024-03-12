"use client";

import Link from "next/link";
import { notification } from "antd";
import React, { useEffect, useState } from "react";
import {
  RiStarFill,
  RiStarHalfFill,
  RiStarLine,
  RiStarSFill,
} from "react-icons/ri";
import prod_1 from "../../../../public/Images/wheelchairfront.png";
import prod_2 from "../../../../public/Images/wheelchairleft.png";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { getSingleProduct } from "@/utils";
import axios from "axios";
const ProductInfo = () => {
  const router = useRouter();
  const { id } = useParams();
  const [selectedVariant, setSelectedVariant] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const [activeIndex, setActiveIndex] = useState(0);
  const [singleProduct, setSingleProduct] = useState({});
  useEffect(() => {
    const myFunction = async () => {
      const sin = await getSingleProduct(id);
      console.log(sin);
      setSingleProduct(sin);
    };
    myFunction();
  }, []);

  const userID = "65cb74adbee9d7c924ba9739";
  const handleCart = async (productID) => {
    await axios
      .post("/api/cart/add-cart", { userID, productID })
      .then((res) => {
        setTimeout(() => {
          // Navigate to the cart page after 3 seconds
          router.push(`/cart/${userID}`);
        }, 3000);
       notification.open({
        message:"Product Added Succesfully"
       })
      })
      .catch((err) => {
        console.log(err);
        notification.open({
          message:err
         })
        toast.error("Failed to add item to cart. Please try again.");
      });
  };
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  const decreaseQuantity = () => {
    setQuantity(quantity - 1);
    if (quantity < 2) {
      setQuantity(1);
    }
  };
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const faqs = [
    {
      title: "Details",
      desc: "S-Ergo Seating System. The S-Ergo Seating is globally patented in many countries. The seating provides the wheelchair user with basic pressure relief without having to purchase a foam cushion. While a foam cushion can be cumbersome and pricey, the S-Ergo Seating frame is lightweight and simple, offering the short-term wheelchair user an inexpensive option.",
    },
    {
      title: "Shipping",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. A nesciunt libero, exercitationem reprehenderit debitis harum. Molestias officiis tempora reiciendis dolorum laboriosam cumque, ipsum tenetur aspernatur suscipit reprehenderit ducimus quo error?",
    },
    {
      title: "Returns",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. A nesciunt libero, exercitationem reprehenderit debitis harum. Molestias officiis tempora reiciendis dolorum laboriosam cumque, ipsum tenetur aspernatur suscipit reprehenderit ducimus quo error?",
    },
    {
      title: "Specialization",
      desc: "Ultra-Lightweight & Sturdy Ergo Lite is KARMA’s lightest attendant-propelled wheelchair. This compact design is ideal for female and elderly attendants. It is also equipped with Karma’s unique S-Ergo seating system. We take care of both caregiver and user’s need.",
    },
  ];
  return (
    <div className="p-6 md:p-8 lg:pt-20 lg:pb-10 lg:px-10 lg:mb-10 relative overflow-x-clip">
      <div className="flex lg:flex-row flex-col lg:border-b lg:border-black">
        <div className="w-full  lg:w-1/2">
          <div className="img1 p-4 w-full">
            <Image
              src={singleProduct?.thumbnail}
              className="h-full w-full object-cover"
              alt="front"
              width={600}
              height={500}
            />
          </div>
          <div className="flex items-center">
            <div className="img1 w-[50%] p-[10px] grow lg:w-[40%]">
              <Image
                src={singleProduct?.thumbnail}
                className="h-full w-full object-cover"
                alt="right"
                width={300}
                height={300}
              />
            </div>
            <div className="img1 w-[50%] p-[10px] grow lg:w-[40%]">
              <Image
                src={singleProduct?.thumbnail}
                className="h-full w-full object-cover"
                alt="left"
                width={300}
                height={300}
              />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="breadcrumb text-black text-[3.1vw] md:text-[2vw] lg:text-[1.05vw] font-medium">
            <Link href={"/marketPlace"}>Shop all</Link> {`>`} Category {`>`}{" "}
            <span className="font-semibold">
              {singleProduct?.category?.name}
            </span>
          </div>
          <div className="info">
            <div className="flex justify-between my-4 text-[5vw] md:text-[4vw] lg:text-[2.5vw]">
              <h1 className="Sans  font-bold">{singleProduct.name}</h1>
              <h3 className="Inter font-bold">₹{singleProduct.price}</h3>
            </div>
            <div className="review flex items-center text-[3vw] md:text-[2vw] lg:text-[1vw]">
              <div className="flex items-center gap-1">
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarHalfFill />
                <RiStarLine />
              </div>
              <span>&nbsp;(3.5 stars) . 10 reviews</span>
            </div>
            <div className="desc text-[3vw] md:text-[2vw] lg:text-[1.05vw] font-medium my-4">
              <p>{singleProduct?.shortDescription}</p>
            </div>
            <div className="color mt-4 flex items-center gap-3">
              <div className="w-[50%]">
                <label className="block">Variant</label>
                <select className="py-2 px-2 mt-4 text-[3vw] md:text-[2vw] lg:text-[1vw] font-medium Inter w-full border border-black bg-transparent  focus-visible:outline-none fous-visible:border-[1.5px]">
                  <option value="">Color</option>
                </select>
              </div>
              <button className="btn py-3 px-2 mt-10 text-left text-[3vw] md:text-[2vw]  lg:text-[1vw] font-medium Inter w-[50%] border  border-black bg-transparent ">
                Add To WhishList
              </button>
            </div>
            <div className="options my-4">
              <p>Variant</p>
              <div className="flex items center text-[3vw] md:text-[2vw]  lg:text-[1.05vw]  pt-4 gap-2">
                <div
                  onClick={() => setSelectedVariant(1)}
                  className={`py-2 px-4 text-black Inter font-medium cursor-pointer ${
                    selectedVariant === 1
                      ? "border-2 border-[#781393] bg-[#F4EBFF]"
                      : "border-2 border-black"
                  }`}
                >
                  Option 1
                </div>
                <div
                  onClick={() => setSelectedVariant(2)}
                  className={`py-2 px-4 text-black Inter font-medium cursor-pointer ${
                    selectedVariant === 2
                      ? "border-2 border-[#781393] bg-[#F4EBFF]"
                      : "border-2 border-black"
                  }`}
                >
                  Option 2
                </div>
                <div
                  aria-disabled="true"
                  onClick={() => setSelectedVariant(3)}
                  className={`py-2 px-4 text-black Inter font-medium cursor-pointer  ${
                    selectedVariant === 3
                      ? "border-2 border-[#781393] bg-[#F4EBFF] opacity-10"
                      : "border-2 border-black opacity-10"
                  }`}
                >
                  Option 3
                </div>
              </div>
            </div>

            <div className="quantity">
              <p>Quantity</p>
              <div className="flex text-[3vw] md:text-[2vw] lg:text-[1.05vw] gap-2 mt-4">
                <input
                  value={quantity}
                  readOnly
                  className="py-3 text-black px-2 border w-[12vw] lg:w-[4vw] border-black"
                  type="text"
                />
                <button
                  onClick={increaseQuantity}
                  className="btn py-3 px-2 border w-[8vw] flex items-center justify-center lg:w-[2vw] border-black"
                >
                  +
                </button>
                <button
                  onClick={decreaseQuantity}
                  className="btn py-3 px-2 border w-[8vw] flex items-center justify-center lg:w-[2vw] border-black"
                >
                  -
                </button>
              </div>
            </div>

            <div className="buttons my-4 flex flex-col gap-4">
              <button
                className="btn py-3 px-2 w-full text-white bg-[#781393]"
                onClick={() => handleCart(singleProduct._id)}
              >
                Add To Cart
              </button>
              <button className="btn py-3 px-2 w-full border  border-black">
                Buy Now
              </button>
            </div>
            <p className="text-center text-[2.95vw] md:text-[1.95vw] lg:text-[.95vw] font-medium my-4">
              Free Shipping over $50
            </p>
          </div>
          <div className="w-full  mt-10 mb-6 md:mb-20">
            <div className="">
              <div className="space-y-4 ">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className={
                      index === 3
                        ? ` border-t-2 border-b-2  border-black  py-6`
                        : ` border-t-2  border-black  py-4`
                    }
                  >
                    <div
                      className="flex justify-between items-center cursor-pointer "
                      onClick={() => toggleFAQ(index)}
                    >
                      <h2 className="text-[4vw] md:text-[2.5vw] lg:text-[1.3vw] font-semibold">
                        {faq.title}
                      </h2>
                      <svg
                        className={`w-6 h-6 ${
                          activeIndex === index ? "transform rotate-180" : ""
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                    {activeIndex === index && (
                      <p className="text-gray-600 mt-2 text-[3.5vw] font-medium md:text-[1.9vw] lg:text-[1.1vw]">
                        {faq.desc}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex fixed md:right-[-3.5%] right-[-2.5%] z-[20] top-[80%] gap-4 rotate-[-90deg] w-[10%] ">
        <Link
          href="#"
          className="text-white active:scale-[.95] transition-all duration-[.5s] box-shadow-2 bg-[#781393] rounded-xl md:rounded-lg  lg:rounded-xl text-[0.8rem] md:text-[1rem] lg:text-[1.3vw] font-semibold montserrat leading-none px-[1.35rem] py-4 lg:py-6"
        >
          Advertise
        </Link>
        <Link
          href="#"
          className="text-white active:scale-[.95] transition-all duration-[.5s] box-shadow-2 bg-[#FF6004] rounded-xl md:rounded-lg  lg:rounded-xl text-[0.8rem] md:text-[1rem] lg:text-[1.3vw] font-semibold montserrat leading-none px-[1.35rem] py-4 lg:py-6"
        >
          Free&nbsp;Listing
        </Link>
      </div>
    </div>
  );
};

export default ProductInfo;
