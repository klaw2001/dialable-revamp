import React from "react";
import Blog_1 from "../../../public/Images/blogs/blog.png";
import Blog_2 from "../../../public/Images/blogs/blog2.png";
import Blog_3 from "../../../public/Images/blogs/blog3.png";
import Image from "next/image";
import { MdOutlineChevronRight } from "react-icons/md";
const Blogs = () => {
  const blogs = [
    {
      img: Blog_1,
      cat: "Category",
      duration: "5 min read",
      title: "Title will go here",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
    {
      img: Blog_2,
      cat: "Category",
      duration: "5 min read",
      title: "Title will go here",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
    {
      img: Blog_3,
      cat: "Category",
      duration: "5 min read",
      title: "Title will go here",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
  ];
  return (
    <div>
      <h1 className="text-black Sans text-[6vw] md:text-[5vw] lg:text-[3.5vw] font-semibold">
        Latest posts
      </h1>
      <p className="roboto text-[3vw] md:text-[2vw] lg:text-[1vw]">Your Best Practices Guide for all your local services needs</p>
      <div className="my-10 ">
        {blogs.map((blog, index) => (
          <div key={index} className="blog shadow-lg lg:shadow-none my-8  flex flex-col gap-3 md:gap-0 md:flex-row">
            <div className="img relative w-full md:h-[25vw] md:w-[60%] lg:w-[23vw] lg:h-[10vw] ">
              <Image
                src={blog.img}
                alt="blog_img"
                className="object-cover lg:object-contain h-full w-full"
                placeholder="blur"
              />
            </div>
            <div className="info flex flex-col p-4 md:p-2 lg:p-0 gap-1 bg-white">
              <div className="flex items-center  gap-8">
                <div className="tag text-[2.5vw] md:text-[1.9vw] lg:text-[.9vw] text-black montserrat font-semibold ">
                  {blog.cat}
                </div>
                <p className="text-black  montserrat font-bold text-[2.5vw] md:text-[1.9vw] lg:text-[.9vw]">
                  {blog.duration}
                </p>
              </div>
              <h1 className="text-black font-semibold text-[4.8vw] mt-2 md:text-[3.2vw] lg:text-[1.3vw] montserrat">
                {blog.title}
              </h1>
              <p className="text-black font-normal text-[4vw] md:text-[2vw] lg:text-[1vw] roboto">
                {blog.desc}
              </p>
              <button className="text-black font-medium flex items-center montserrat text-[4.2vw] md:text-[2.5vw] lg:text-[1vw]">
                Read More
                <MdOutlineChevronRight />
              </button>
            </div>
          </div>
        ))}
        <button className="text-black mt-3 montserrat shadow-xl font-bold lg:h-[3vw] lg:ml-5  btn text-[3vw] md:text-[2vw] lg:text-[1vw] py-2 px-6 leading-none border-[2px] border-black ">
          View More
        </button>
      </div>
    </div>
  );
};

export default Blogs;
