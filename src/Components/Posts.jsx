import React from "react";
import Treatment from "./Treatment/Treatment";
import Blogs from "./Blogs/Blogs";

const Posts = () => {
  return (
    <div className="flex  justify-between p-16">
      <div className="w-[50%]">
        <Treatment />
      </div>
      <div className="w-[50%]">
        <Blogs />
      </div>
    </div>
  );
};

export default Posts;
