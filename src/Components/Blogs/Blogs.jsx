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
      cat: "Travel",
      duration: "5 min read",
      title: "Hidden Gems: Unveiling Offbeat Destinations",
      desc: "Explore off-the-beaten-path destinations worldwide, uncovering hidden gems and unique travel experiences beyond the tourist trail.",
    },
    {
      img: Blog_2,
      cat: "Food & Drink",
      duration: "5 min read",
      title: "Culinary Adventures: Exploring Global Flavors",
      desc: "Embark on a journey of gastronomic delight as we explore the diverse and delicious world of global cuisine. From street food stalls in bustling Asian markets to Michelin-starred restaurants in European capitals, join us as we uncover the flavors, traditions, and stories behind each mouthwatering dish.",
    },
    {
      img: Blog_3,
      cat: "Health & Wellness",
      duration: "5 min read",
      title: "Mindfulness Moments: Nurturing Mental Wellbeing",
      desc: "Delve into the practice of mindfulness and discover its transformative power in cultivating mental wellbeing. Through meditation techniques, self-care practices, and mindful living tips, embark on a journey of self-discovery and inner peace as we explore the art of being present in each moment.",
    },
  ];
  return (
    <div>
      <h1 className="text-black Sans text-[6vw] md:text-[5vw] lg:text-[1.5vw] font-semibold">
        Latest posts
      </h1>
      <p className="roboto text-[3vw] md:text-[2vw] lg:text-[0.8vw]">
        Your Best Practices Guide for all your local services needs
      </p>
      <div className="my-10 ">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="blog shadow-lg lg:shadow-none my-8  flex flex-col gap-3 md:gap-3 md:flex-row items-center"
          >
            <div className="img relative ">
              <Image
                src={blog.img}
                alt="blog_img"
                // width={250}
                // height={250}

                className="object-cover lg:object-contain md:w-[250px]"
                placeholder="blur"
              />
            </div>
            <div className="info flex flex-col p-4 md:p-2 lg:p-0 gap-1 bg-white">
              <div className="flex items-center  gap-8">
                <div className="tag text-[2.5vw] md:text-[1.9vw] lg:text-[.7vw] bg-[#F4F4F4] p-1 rounded-sm text-black montserrat font-semibold ">
                  {blog.cat}
                </div>
                <p className="text-black  montserrat font-bold text-[2.5vw] md:text-[1.9vw] lg:text-[.7vw]">
                  {blog.duration}
                </p>
              </div>
              <h1 className="text-black font-semibold text-[4.8vw] mt-2 md:text-[3.2vw] lg:text-[1.2vw] montserrat">
                {blog.title}
              </h1>
              <p className="text-black font-normal text-[4vw] md:text-[2vw] lg:text-[.8vw] roboto py-3">
                {`${blog.desc.slice(0,110)}...` }
              </p>
              <button className="text-black font-medium flex items-center montserrat text-[4.2vw] md:text-[2.5vw] lg:text-[.8vw]">
                Read More
                <MdOutlineChevronRight />
              </button>
            </div>
          </div>
        ))}
        <button className="text-black mt-3 montserrat shadow-xl font-medium btn text-[3vw] md:text-[2vw] lg:text-[.7vw] py-2 px-4  border-[2px] border-black ">
          View More
        </button>
      </div>
    </div>
  );
};

export default Blogs;
