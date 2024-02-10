"use client";

import Link from "next/link";
import React from "react";
import { useState } from "react";
const Faq = () => {
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

  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className=" my-20 lg:my-40 lg:flex items-start justify-between p-10 lg:p-20 Transition">
      <div className="lg:w-1/3 w-full flex items-start flex-col gap-6">
        <h1 className="text-[9.5vw] lg:text-[3.1vw] montserrat text-[black] font-bold leading-[12vw] lg:leading-[3vw]">
         Frequently Asked Questions
        </h1>
        <p className="montserrat font-medium text-[4.5vw] lg:text-[1vw]">
        Find answers to common questions about our website and its accessibility features.
        </p>
        <Link href={"#"} className="text-white btn bg-[#FF6004] py-4 px-8  cursor-pointer text-[4.8vw] lg:text-[1.2vw] font-normal  montserrat">
          Contact
        </Link >
      </div>
      <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
        <div className="">
          <div className="space-y-4 montserrat">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={
                  index === 4
                    ? ` border-t-2 border-b-2  border-black  py-6`
                    : ` border-t-2  border-black  py-4`
                }
              >
                <div
                  className="flex justify-between items-center cursor-pointer "
                  onClick={() => toggleFAQ(index)}
                >
                  <h2 className="text-lg font-semibold">{faq.question}</h2>
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
                  <p className="text-gray-600 mt-2 text-[3.5vw] lg:text-[1vw]">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
