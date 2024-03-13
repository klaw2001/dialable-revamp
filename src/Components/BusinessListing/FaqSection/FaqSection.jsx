"use client";

import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState("0");
  const faqs = [
    {
      question: "How does it work in Dialable?",
      ans: "lorem ipsum valore ti cage",
    },
    {
      question: "How can I list my business on Dialable?",
      ans: "lorem ipsum valore ti cage",
    },
    {
      question: "Can I list my business Free on Dialable?",
      ans: "lorem ipsum valore ti cage",
    },
    {
      question: "What are the benefits of listing a business on Dialable?",
      ans: "lorem ipsum valore ti cage",
    },
  ];
  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className="px-4 lg:px-16 flex mt-16 flex-col">
      <div className="">
        <h1 className="text-black text-[6vw] md:text-[3vw] lg:text-[1.8vw] font-bold montserrat">
          Frequently Asked Questions
        </h1>
        <p className="text-[2vw] md:text-[1.5vw] lg:text-[.9vw] text-black font-normal montserrat">
          Your faq catalogue - simplifying complex queries.
        </p>
      </div>
      <div className="md:mt-6 lg:mt-12">
        {faqs.map((faq, index) => (
          <div
            onClick={() => handleClick(index)}
            key={index}
            className="questions cursor-pointer transition-all text-[3vw] lg:text-[1.2vw]  font-semibold montserrat border my-4 border-black p-4"
          >
            <div className="flex items-center justify-between ">
              <p className="text-[2.4vw] md:text-[1.8vw] lg:text-[1.2vw] font-bold montserrat">
                {faq.question}
              </p>
              {activeIndex === index ? <FiMinus /> : <FiPlus />}
            </div>
            {activeIndex === index && (
              <p className="text-[2vw] md:text-[1.5vw] lg:text-[1vw] my-2 font-medium">{faq.ans}</p>
            )}
          </div>
        ))}
      </div>
      <div className="lg:flex justify-start items-center gap-10 py-4 md:py-12">
        <div className="mt-2 md:mt-4">
          <h1 className="text-[4.3vw] md:text-[2.3vw] lg:text-[1.5vw] montserrat font-medium">Still have a question?</h1>
          <button className="px-4 py-1 md:px-6 md:py-3 border mt-4 montserrat text-[#FF6004] font-medium text-[4.5vw] md:text-[2.5vw] lg:text-[1.2vw] border-[#FF6004]">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
