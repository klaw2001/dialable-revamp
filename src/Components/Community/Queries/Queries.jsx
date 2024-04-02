"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import beds from "../../../../public/Images/rentalProducts/beds.png";
import { RiPencilLine, RiQuestionnaireLine } from "react-icons/ri";
import { PiNotePencil } from "react-icons/pi";
import { MdOutlineThumbDownOffAlt, MdOutlineThumbUp } from "react-icons/md";
import { BiCommentDetail } from "react-icons/bi";
import { HiOutlineShare } from "react-icons/hi2";
const Queries = ({queries, img}) => {
  const [size, setSize] = useState(0);
  const [visible, setVisible] = useState(7);
  useEffect(() => {
    const updateSize = () => {
      let updatedSize;
      let screenWidth = window.innerWidth;
      if (screenWidth >= 768) {
        updatedSize = 50;
      } else if (screenWidth >= 320) {
        updatedSize = 100;
      } else {
        updatedSize = 100;
      }
      setSize(updatedSize);
    };
    updateSize();

    window.addEventListener("resize", updateSize);
    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []);

 
  return (
    <div className="w-full md:w-[70%]">
      <div className="px-4 pt-6 mb-3 pb-3 flex items-center rounded-[4px] gap-4 bg-[#F4EBFF] border border-[#781393]">
        <div className="image rounded-full self-start relative">
          <Image
            src={img}
            alt="img"
            height={size}
            width={size}
            className="object-center"
          />
        </div>
        <div className="grow">
          <form action="">
            <div>
              <input
                placeholder="What do you want to ask or share?"
                className="montserrat font-normal text-[1.067vw] py-2 px-3 bg-[#7813931F] border-black border w-full rounded-full"
                type="text"
              />
            </div>
            <div className="flex items-start py-2 px-10 justify-between">
              <div className="flex items-center gap-1 text-[1vw] montserrat">
                <span className="text-[1.3vw] text-[#781393]">
                  <RiQuestionnaireLine />
                </span>
                <span className="text-[1.1vw] text-black font-medium">Ask</span>
              </div>
              <div className="flex items-center gap-1 text-[1vw] montserrat">
                <span className="text-[1.3vw] text-[#781393]">
                  <PiNotePencil />
                </span>
                <span className="text-[1.1vw] text-black font-medium">
                  Answer
                </span>
              </div>
              <div className="flex items-center gap-1 text-[1vw] montserrat">
                <span className="text-[1.3vw] text-[#781393]">
                  <RiPencilLine />
                </span>
                <span className="text-[1.1vw] text-black font-medium">
                  Post
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="mt-2">
        {queries.slice(0, visible).map((query, i) => (
          <div
            key={i}
            className="bg-white border border-black rounded-md py-4 px-8 my-8"
          >
            <div className="flex items-center gap-4">
              <div className="image rounded-full  relative">
                <Image
                  src={beds}
                  alt="img"
                  height={size}
                  width={size}
                  className="object-center"
                />
              </div>
              <div className="info">
                <h1 className="text-black font-bold montserrat text-[1.1vw]">
                  {query.name}
                </h1>
                <p className="career-info text-black montserrat text-[.8vw] font-medium">
                  {query.qualification}
                </p>
              </div>
            </div>
            <div className="mt-3">
              <h1 className="text-black font-bold montserrat text-[1.4vw]">
                {query.question}
              </h1>
              <p className="montserrat mt-2 font-medium text-[1.2vw]">
                {query.answer}
                more...{" "}
              </p>
              <div className="flex items-center mt-3 gap-14">
                <div className="flex items-center bg-[#7813934D] rounded-full p-2 gap-2">
                  <button className="text-[1.5vw] text-[#781393]">
                    <MdOutlineThumbUp />
                  </button>
                  <span className="text-[1vw] montserrat font-medium text-black">
                    Upvote · 418
                  </span>
                  <button className="text-[1.5vw] text-[#781393]">
                    <MdOutlineThumbDownOffAlt />
                  </button>
                </div>
                <button className="flex items-center gap-1">
                  <span className="text-[1.5vw] text-[#781393]">
                    <BiCommentDetail />
                  </span>
                  <span className="text-[1vw] montserrat font-medium text-black">
                    Comment
                  </span>
                </button>
                <button className="flex items-center gap-1">
                  <span className="text-[1.5vw] text-[#781393]">
                    <HiOutlineShare />
                  </span>
                  <span className="text-[1vw] montserrat font-medium text-black">
                    Share
                  </span>
                </button>
              </div>
            </div>
          </div>
        ))}

        <button
          onClick={() => setVisible(14)}
          className="btn p-4 bg-[#781393] text-white montserrat w-full rounded-md text-center font-bold text-[1.5vw]"
        >
          Load More Questions
        </button>
      </div>
    </div>
  );
};

export default Queries;
