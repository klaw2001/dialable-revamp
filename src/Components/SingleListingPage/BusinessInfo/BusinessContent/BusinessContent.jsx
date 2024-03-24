"use client";

import Faq from "@/Components/Faq";
import Image from "next/image";
import React, { useState } from "react";
import { FaRegCreditCard, FaReply } from "react-icons/fa";
import beds from "../../../../../public/Images/rentalProducts/beds.png";
import { FaStar } from "react-icons/fa6";

const BusinessContent = () => {
  const featureData = [
    {
      icon: <FaRegCreditCard />,
      title: "Card Payment",
    },
    {
      icon: <FaRegCreditCard />,
      title: "Air Conditioned",
    },
    {
      icon: <FaRegCreditCard />,
      title: "Wireless Internet",
    },
    {
      icon: <FaRegCreditCard />,
      title: "Serves Alcohol",
    },
    {
      icon: <FaRegCreditCard />,
      title: "Parking Street",
    },
    {
      icon: <FaRegCreditCard />,
      title: "Outdoor Seating",
    },
  ];

  const faqs = [
    {
      question: "How can I sign up?",
      answer:
        "To sign up, simply click on the 'Sign Up' button on the homepage and follow the instructions.",
    },
    {
      question: "How do I post a job?",
      answer:
        "To post a job, go to the 'Job Portal' section and click on 'Post a Job'. Fill in the required details and submit the form.",
    },
    {
      question: "How do I search for jobs?",
      answer:
        "To search for jobs, use the search bar on the homepage. Enter keywords related to the job you're looking for and click 'Search'.",
    },
    {
      question: "How do I buy/sell on the marketplace?",
      answer:
        "To buy or sell on the marketplace, create an account and visit the 'Marketplace' section. Follow the instructions to list your items or make a purchase.",
    },
    {
      question: "How can I contact support?",
      answer:
        "If you need further assistance, you can reach our support team by clicking on the 'Contact' link and filling out the contact form.",
    },
  ];

  const reviews = [
    {
      img: beds,
      name: "Mariona Steve",
      date: "Sep 02, 2021",
      desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
      voluptatum accusamus aperiam nostrum ipsum quos, blanditiis suscipit
      maxime dolores neque.`,
      rating: 4.5,
      stars: (
        <div className="flex items-center gap-1">
          <FaStar color="#FF8037" />
          <FaStar color="#FF8037" />
          <FaStar color="#FF8037" />
          <FaStar color="#FF8037" />
          <FaStar />
        </div>
      ),
    },
    {
      img: beds,
      name: "Mariona Steve",
      date: "Sep 02, 2021",
      desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
      voluptatum accusamus aperiam nostrum ipsum quos, blanditiis suscipit
      maxime dolores neque.`,
      rating: 4.5,
      stars: (
        <div className="flex items-center gap-1">
          <FaStar color="#FF8037" />
          <FaStar color="#FF8037" />
          <FaStar color="#FF8037" />
          <FaStar />
          <FaStar />
        </div>
      ),
    },
    {
      img: beds,
      name: "Mariona Steve",
      date: "Sep 02, 2021",
      desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
      voluptatum accusamus aperiam nostrum ipsum quos, blanditiis suscipit
      maxime dolores neque.`,
      rating: 4.5,
      stars: (
        <div className="flex items-center gap-1">
          <FaStar color="#FF8037" />
          <FaStar color="#FF8037" />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
      ),
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className="w-full">
      <div className="info pb-8 border-b border-gray-300">
        <h3 className="text-[6vw] mb-4 text-black montserrat font-semibold md:text-[3vw] lg:text-[1.5vw]">
          Jawed Habib Hair & Beauty
        </h3>
        <p className="text-[1vw] Inter text-black font-medium">{`Who doesn't like looking at their best? This is especially true when there is a special day around the corner or simply when you need to look presentable for an event. Salons, also known as beauty salons or beauty parlours, is a facility or establishment that provides beauty treatments to both women and men. If you are looking for a makeover or any cosmetic treatment, you can choose from a range of various salons available in Thane.`}</p>
      </div>
      <div className="features py-8 border-b border-gray-300">
        <h3 className="text-[6vw] mb-4 text-black montserrat font-semibold md:text-[3vw] lg:text-[1.5vw]">
          Our Features
        </h3>
        <div className="flex items-center  pt-4 flex-wrap">
          {featureData.map((elem, i) => {
            return (
              <div key={i} className="flex m-4 gap-4 md:w-[40%] grow lg:grow-0 lg:w-[25%] items-center">
                <div className="icon rounded-full border lg:text-[1.06vw] text-[#781393] p-4">
                  {elem.icon}
                </div>
                <p className=",d:text-[2vw] lg:text-[1vw] text-black font-semibold">
                  {elem.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="gallery py-8">
        <h3 className="text-[6vw] mb-4 text-black montserrat font-semibold md:text-[3vw] lg:text-[1.5vw]">
          Photo Showcase
        </h3>
        <div className="flex items-center gap-4 pt-4 flex-wrap">
          <div className="w-[40%] grow my-2">
            <Image src="" alt="gallery image" />
          </div>
          <div className="w-[40%] grow my-2">
            <Image src="" alt="gallery image" />
          </div>
          <div className="w-[40%] grow my-2">
            <Image src="" alt="gallery image" />
          </div>
          <div className="w-[40%] grow my-2">
            <Image src="" alt="gallery image" />
          </div>
        </div>
        <div className="popular-tags pb-4 border-b border-gray-300">
          <h3 className="text-[6vw] mb-4 py-6 border-b border-gray-300  text-black montserrat font-semibold md:text-[3vw] lg:text-[1.5vw]">
            Popular Tag
          </h3>
          <div className="py-4 flex flex-wrap items-center gap-4">
            <div className="py-2 bg-[#f7f7f7] text-black tarnsition-[all.5s] hover:bg-[#781393] hover:text-white font-normal md:text-[2vw] lg:text-[1.1vw] cursor-pointer rounded-sm px-6">
              Delivery
            </div>
            <div className="py-2 bg-[#f7f7f7] text-black tarnsition-[all.5s] hover:bg-[#781393] hover:text-white font-normal md:text-[2vw] lg:text-[1.1vw] cursor-pointer rounded-sm px-6">
              Restaurant
            </div>
            <div className="py-2 bg-[#f7f7f7] text-black tarnsition-[all.5s] hover:bg-[#781393] hover:text-white font-normal md:text-[2vw] lg:text-[1.1vw] cursor-pointer rounded-sm px-6">
              Free Internet
            </div>
            <div className="py-2 bg-[#f7f7f7] text-black tarnsition-[all.5s] hover:bg-[#781393] hover:text-white font-normal md:text-[2vw] lg:text-[1.1vw] cursor-pointer rounded-sm px-6">
              Shopping
            </div>
            <div className="py-2 bg-[#f7f7f7] text-black tarnsition-[all.5s] hover:bg-[#781393] hover:text-white font-normal md:text-[2vw] lg:text-[1.1vw] cursor-pointer rounded-sm px-6">
              Car Parking
            </div>
            <div className="py-2 bg-[#f7f7f7] text-black tarnsition-[all.5s] hover:bg-[#781393] hover:text-white font-normal md:text-[2vw] lg:text-[1.1vw] cursor-pointer rounded-sm px-6">
              Food
            </div>
            <div className="py-2 bg-[#f7f7f7] text-black tarnsition-[all.5s] hover:bg-[#781393] hover:text-white font-normal md:text-[2vw] lg:text-[1.1vw] cursor-pointer rounded-sm px-6">
              Kitchen
            </div>
            <div className="py-2 bg-[#f7f7f7] text-black tarnsition-[all.5s] hover:bg-[#781393] hover:text-white font-normal md:text-[2vw] lg:text-[1.1vw] cursor-pointer rounded-sm px-6">
              Reservation
            </div>
            <div className="py-2 bg-[#f7f7f7] text-black tarnsition-[all.5s] hover:bg-[#781393] hover:text-white font-normal md:text-[2vw] lg:text-[1.1vw] cursor-pointer rounded-sm px-6">
              Travel
            </div>
          </div>
        </div>
        <div className="faq py-8">
          <h3 className="text-[6vw] mb-4 text-black montserrat font-semibold md:text-[3vw] lg:text-[1.5vw]">
            Asked Questions
          </h3>
          <div className="w-full pt-4">
            <div className="">
              <div className="space-y-4 Inter">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className={
                      index === 4
                        ? ` border-t border-b  border-gray-300  py-6`
                        : ` border-t  border-gray-300  py-4`
                    }
                  >
                    <div
                      className="flex justify-between items-center cursor-pointer "
                      onClick={() => toggleFAQ(index)}
                    >
                      <h2 className="text-lg font-medium">{faq.question}</h2>
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
                      <p className="text-gray-600 mt-2 text-[3vw] md:text-[2vw] lg:text-[1.05vw]">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="py-8 border-b border-gray-300">
          <h3 className="text-[6vw] mb-4 py-6 border-b border-gray-300  text-black montserrat font-semibold md:text-[3vw] lg:text-[1.5vw]">
            Customer Review
          </h3>
          <div className="py-4">
            {reviews?.map((review, i) => (
              <div key={i} className="flex items-start py-4 gap-6">
                <div className="image rounded-full">
                  <Image
                    src={review.img}
                    alt="profile"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="info">
                  <h3 className="text-[6vw] leading-none  text-black montserrat font-semibold md:text-[3vw] lg:text-[1.06vw]">
                    {review.name}
                  </h3>
                  <p className="md:text-[1.5vw] lg:text-[.96vw] my-2 font-normal text-gray-600">
                    {review.date}
                  </p>
                  <p className="md:text-[1.5vw] lg:text-[.96vw] my-2 font-normal text-gray-600">
                    {review.desc}
                  </p>
                  <div className="flex py-2 justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 h-10 w-10 flex items-center rounded-full border border-gray-300">
                        {review.rating}
                      </div>
                      {review.stars}
                    </div>
                    <button className="flex gap-2 items-center cursor-pointer">
                      <div>
                        <FaReply />
                      </div>
                      <p>Reply</p>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="py-8">
          <div className="flex justify-between mb-8 ">
            <h3 className="text-[6vw]  text-black montserrat font-semibold md:text-[3vw] lg:text-[1.5vw]">
              Write a Review
            </h3>
            <div className="flex items-center  gap-2">
              <p className="md:text-[1.5vw] lg:text-[.96vw] my-2 font-normal text-gray-600">
                Rate Here:
              </p>
              <div className="flex items-center gap-1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
          </div>
          <div className="form">
            <form action="">
              <textarea
                rows={8}
                placeholder="Write Message"
                className="p-4 w-full text-black border border-gray-300 focus-visible:outline-none focus-visible:border-2 focus-visible:border-gray-400"
              ></textarea>
              <div className="my-4 flex items-center gap-4">
                <input placeholder="Your Name" type="text" className="p-4 text-black border border-gray-300 w-full" name="" id="" />
                <input placeholder="Email here" type="text" className="p-4 text-black border border-gray-300 w-full" name="" id="" />
              </div>
              <div className="flex items-center rounded-[0px] gap-3">
                <input type="checkbox" className="h-4 w-4" name="" id="check" />
                <label htmlFor="check" className="md:text-[1.5vw] lg:text-[.96vw] my-2 font-normal text-gray-600">Save my name, email, and website in this browser for the next time i comment.</label>
              </div>
              <button
              className="py-4 px-10  my-4 montserrat text-white bg-[#781393] font-medium text-[3vw] md:text-[2vw] lg:text-[1.05vw]"
              type="submit"
            >
              Submit  Review  +
            </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessContent;
