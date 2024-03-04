import React from "react";
import Treatment from "./Treatment/Treatment";
import Blogs from "./Blogs/Blogs";

const Posts = () => {
  return (
    <div className="block lg:flex  justify-between p-6 lg:p-16">
      <div className="w-full lg:w-[50%]">
        <Treatment />
      </div>
      <div className="w-full mt-8 lg:mt-0 lg:w-[50%]">
        <Blogs />
      </div>
    </div>
  );
};

export default Posts;
