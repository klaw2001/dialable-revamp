import React from "react";
import Blog_1 from "../Images/blog-1.png";
import Blog_2 from "../Images/blog-2.png";
import Image from "next/image";
import { MdOutlineChevronRight } from "react-icons/md";
const Blogs = () => {
  const blogs = [
    {
      img: Blog_1,
      cat: "Category",
      date: "11 Jan 2024",
      duration: "5 min read",
      title: "Title will go here",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
    {
      img: Blog_2,
      cat: "Category",
      date: "22 Jan 2024",
      duration: "5 min read",
      title: "Title will go here",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
  ];
  return (
    <div className="p-20 my-10 flex items-center flex-col gap-4">
      <div>
        <h1 className="text-[3vw] text-black font-bold text-center montserrat">
          Our Blogs
        </h1>
        <p className="text-[1.2vw] text-black text-center font-semibold montserrat">
          Your Best Practices Guide for all your local service needs
        </p>
      </div>
      <div className="flex items-center justify-center mt-10 gap-[2vw]">
        {blogs.map((blog, index) => (
          <div key={index} className="blog w-[40%] border-2 box-shadow border-black">
            <div className="img relative  ">
              <Image
                src={blog.img}
                alt="blog_img"
                objectFit="cover"
                className="h-full w-full"
                placeholder="blur"
              />
            </div>
            <div className="info p-4 flex flex-col gap-4 bg-white">
              <div className="flex items-center  gap-6">
                <div className="tag text-[.9vw] text-black bg-[#F4F4F4] montserrat font-semibold p-2">
                  {blog.cat}
                </div>
                <p className="text-black  montserrat font-bold text-[.9vw]">
                  {blog.date}
                </p>
                <p className="text-black  montserrat font-bold text-[.9vw]">
                  {blog.duration}
                </p>
              </div>
              <h1 className="text-black font-bold text-[1.8vw] montserrat">
                {blog.title}
              </h1>
              <p className="text-black font-medium text-[1vw] roboto">
                {blog.desc}
              </p>
              <button className="text-black font-normal flex items-center montserrat text-[1.2vw]">
                Read More
                <MdOutlineChevronRight />
              </button>
            </div>
          </div>
        ))}
      </div>
      <button className="btn mt-10 bg-[#781393] text-white py-2 px-4 text-[1vw] montserrat text-center">
        View all
      </button>
    </div>
  );
};

export default Blogs;
