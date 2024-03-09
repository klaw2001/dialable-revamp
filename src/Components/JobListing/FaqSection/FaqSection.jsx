"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import FaqImg from "../../../../public/Images/faq.png"
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
    <div className="px-10 lg:px-16 flex mt-16 flex-col">
      <div className="">
        <h1 className="text-black text-[6vw] lg:text-[1.8vw] font-bold montserrat">
          Frequently Asked Questions
        </h1>
        <p className="text-[2vw]lg:text-[.9vw] text-black font-normal montserrat">
          Your faq catalogue - simplifying complex queries.
        </p>
      </div>
      <div className="mt-12">
        {faqs.map((faq, index) => (
          <div
            onClick={() => handleClick(index)}
            key={index}
            className="questions cursor-pointer transition-all text-[3vw] lg:text-[1.2vw]  font-semibold montserrat border my-4 border-black p-4"
          >
            <div className="flex items-center justify-between ">
              <p className="text-[2.4vw] lg:text-[1.2vw] font-bold montserrat">
                {faq.question}
              </p>
              {activeIndex === index ? <FiMinus /> : <FiPlus />}
            </div>
            {activeIndex === index && (
              <p className="text-[2vw] lg:text-[1vw] my-2 font-medium">{faq.ans}</p>
            )}
          </div>
        ))}
      </div>
      <div className="lg:flex justify-center items-center gap-10 py-12">
        <div className="mt-10  lg:mt-32">
          <h1 className="text-[4.3vw] lg:text-[1.5vw] montserrat font-medium">Still have a question?</h1>
          <button className="btn border mt-4 montserrat text-[#FF6004] font-medium text-[4.5vw] lg:text-[1.2vw] border-[#FF6004] px-6 py-3">
            Contact
          </button>
        </div>
        <div className="relative mt-4 lg:mt-0 ">
            <Image src={FaqImg} alt="faq-img" className="object-cover" width={500} height={500}/>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
